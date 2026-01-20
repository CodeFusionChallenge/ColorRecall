import express, { type Request, type Response, type NextFunction } from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Body parser
app.use(express.json({ limit: "25kb" }));

// --- Routes ---

// Healthcheck: rychlé ověření, že server běží
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    ok: true,
    service: "color-recall-api",
    time: new Date().toISOString(),
  });
});

// Typy pro ukázku práce s body
type EchoBody = {
  message: string;
};

// Echo endpoint: ověříš POST + JSON body + typy
app.post("/api/echo", (req: Request<unknown, unknown, EchoBody>, res: Response) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      ok: false,
      error: "Missing or invalid 'message' (string).",
    });
  }

  res.json({
    ok: true,
    received: message,
    length: message.length,
  });
});

// --- 404 fallback ---
app.use((req: Request, res: Response) => {
  res.status(404).json({
    ok: false,
    error: "Not Found",
    path: req.path,
  });
});

// --- Error handler ---
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    ok: false,
    error: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
