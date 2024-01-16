import { GooglePaLM } from "@langchain/community/llms/googlepalm";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

import {z} from 'zod';

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe('the mood of the person who wrote the journal entry.It should be an emotion for example happy, sad, reflective.'),
    subject: z.string().describe('the subject of the journal entry.'),
    negative: z
      .boolean()
      .describe(
        'is the journal entry negative? (i.e. does it contain negative emotions?).'
      ),
    summary: z.string().describe('Provide a short summary of the entire journal entry.'),
    color: z
      .string()
      .describe(
        'a hexidecimal color code that represents the mood of the entry. Example #0101fe for blue representing happiness.Strictly provide light or pastel colors colors as my background consist of black and white theme.'
      ),
    // sentimentScore: z
    //   .number()
    //   .describe(
    //     'sentiment of the text and rated on a scale from -10 to 10, where -10 is extremely negative, 0 is neutral, and 10 is extremely positive.'
    //   ),
  })
)


const getPrompt = async (content) => {
  
  const format_instructions = parser.getFormatInstructions()
  const prompt = new PromptTemplate({
    template:
      "Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}",

    inputVariables: ['entry'],
    partialVariables: { format_instructions },
  })

  const input = await prompt.format({
    entry: content,
  })

  return input
}


export const analyze = async (prompt) => {

  const input = await getPrompt(prompt)


  const model = new GooglePaLM({
    
    temperature: 1, // OPTIONAL
    modelName: "models/text-bison-001", // OPTIONAL
    
  });

  const res = await model.call(
    input
  );
  
  try {
    return parser.parse(res);
  } catch (e) {
    console.log(e);
  }
};