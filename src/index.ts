import { type ToolSet, tool } from "ai";
import { z } from "zod";

const tools = {
  getWeather: tool({
    name: "getWeather",
    inputSchema: z.object({}),
    outputSchema: z.any(),
  }),
} satisfies ToolSet;
