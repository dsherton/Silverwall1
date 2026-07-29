import express, { type Express } from "express";
import cors from "cors";
// FIX 1: Change the named import to a default import for pino-http
import pinoHttp from 'pino-http';
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      // FIX 2: Explicitly type the req parameter as 'any' to bypass strict checks
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      // FIX 3: Explicitly type the res parameter as 'any' to bypass strict checks
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
