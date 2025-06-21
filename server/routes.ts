import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const ChecklistStateSchema = z.record(z.boolean());
const ExclusionStateSchema = z.object({
  excludedSections: z.array(z.string()),
  excludedItems: z.array(z.string())
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate or get session ID
  app.get("/api/session", async (req, res) => {
    try {
      const sessionId = req.headers['x-session-id'] as string || `session-${Date.now()}-${Math.random()}`;
      
      let session = await storage.getUserSession(sessionId);
      if (!session) {
        session = await storage.createUserSession({
          sessionId,
          userId: null,
          checklistState: {},
          exclusionState: { excludedSections: [], excludedItems: [] }
        });
      }
      
      res.json({ sessionId, session });
    } catch (error) {
      console.error("Session error:", error);
      res.status(500).json({ error: "Failed to manage session" });
    }
  });

  // Save checklist state
  app.post("/api/checklist-state", async (req, res) => {
    try {
      const sessionId = req.headers['x-session-id'] as string;
      if (!sessionId) {
        return res.status(400).json({ error: "Session ID required" });
      }

      const checklistState = ChecklistStateSchema.parse(req.body);
      
      const session = await storage.updateUserSession(sessionId, {
        checklistState
      });
      
      res.json({ success: true, session });
    } catch (error) {
      console.error("Checklist state save error:", error);
      res.status(500).json({ error: "Failed to save checklist state" });
    }
  });

  // Save exclusion state
  app.post("/api/exclusion-state", async (req, res) => {
    try {
      const sessionId = req.headers['x-session-id'] as string;
      if (!sessionId) {
        return res.status(400).json({ error: "Session ID required" });
      }

      const exclusionState = ExclusionStateSchema.parse(req.body);
      
      const session = await storage.updateUserSession(sessionId, {
        exclusionState
      });
      
      res.json({ success: true, session });
    } catch (error) {
      console.error("Exclusion state save error:", error);
      res.status(500).json({ error: "Failed to save exclusion state" });
    }
  });

  // Get user session data
  app.get("/api/user-data", async (req, res) => {
    try {
      const sessionId = req.headers['x-session-id'] as string;
      if (!sessionId) {
        return res.status(400).json({ error: "Session ID required" });
      }

      const session = await storage.getUserSession(sessionId);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      
      res.json({
        checklistState: session.checklistState || {},
        exclusionState: session.exclusionState || { excludedSections: [], excludedItems: [] }
      });
    } catch (error) {
      console.error("User data fetch error:", error);
      res.status(500).json({ error: "Failed to fetch user data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
