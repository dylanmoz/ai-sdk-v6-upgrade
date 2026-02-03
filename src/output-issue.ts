import { generateText, type ModelMessage } from "ai";

export const makeLLMRequest = async ({
  messages,
}: {
  messages: Array<ModelMessage>;
}) => {
  const result = await generateText({
    model: "anthropic/claude-sonnet-4.5",
    messages,
  });

  return result;
};
