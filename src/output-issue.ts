import { generateText, tool, type ModelMessage } from "ai";
import z from "zod";

export const makeLLMRequest = async ({
  messages,
}: {
  messages: Array<ModelMessage>;
}) => {
  const getWeather = tool({
    inputSchema: z.object({
      location: z.string(),
    }),
    execute: () => "Sunny",
  });

  const result = await generateText({
    model: "anthropic/claude-sonnet-4.5",
    tools: {
      getWeather,
    },
    messages,
  });

  return result;
};

/**
 * In v5, `result` has the type:
 *
 * GenerateTextResult<{
 *   getWeather: Tool<{
 *       location: string;
 *   }, string>;
 * }, never>
 */
const result = await makeLLMRequest({
  messages: [
    {
      role: "user",
      content: "What's the weather like in San Francisco?",
    },
  ],
});
