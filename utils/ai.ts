import { GooglePaLM } from "@langchain/community/llms/googlepalm";

export const analyze = async (prompt) => {
  const model = new GooglePaLM({
    
    temperature: 1, // OPTIONAL
    modelName: "models/text-bison-001", // OPTIONAL
    maxOutputTokens: 1024, // OPTIONAL
  });
  const res = await model.call(
    prompt
  );
  console.log({ res });
};