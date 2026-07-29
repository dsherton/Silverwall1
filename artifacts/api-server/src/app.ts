import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from 'pino-http';
// FIX: Explicitly target /index to satisfy ES Module structural path lookups
import router from "./routes/index";
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
