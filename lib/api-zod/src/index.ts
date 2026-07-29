import { z } from "zod";

export const HealthCheckResponse = z.object({ status: z.literal("ok") });
export type HealthCheckResponse = z.infer<typeof HealthCheckResponse>;

// Re-export under the same name if code expects a named export
export default HealthCheckResponse;
