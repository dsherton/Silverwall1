import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from 'pino-http';
// FIX: Added the explicit .js extension for native ES Modules support in Vercel
import router from "./routes/index.js";
import { logger } from "./lib/logger";

const pinoHttp = (pinoHttpModule.default || pinoHttpModule) as any;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?"),
        };
      },
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
