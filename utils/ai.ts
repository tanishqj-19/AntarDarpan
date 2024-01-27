import { GooglePaLM } from "@langchain/community/llms/googlepalm";
import { GooglePaLMEmbeddings } from "@langchain/community/embeddings/googlepalm";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { Document } from "@langchain/core/documents";
import { loadQARefineChain } from "langchain/chains";
import {z} from 'zod';
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe('the mood of the person who wrote the journal entry.'),
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
        'a hexidecimal color code that represents the mood of the entry, only provider lighter shades of colors.'
      ),
    sentimentScore: z
      .number()
      .describe(
        'sentiment of the text and rated on a scale from -10 to 10, where -10 is extremely negative, 0 is neutral, and 10 is extremely positive.'
      ),
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

  const res = await model.invoke(
    input
  );
  
  try {
    return parser.parse(res);
  } catch (e) {
    console.log(e);
  }
};

export const questionAnswer = async (question, entries) => {
  const docs = await entries.map(
    (entry) =>
      new Document({
        pageContent: entry.content,
        metadata: { source: entry.id, date: entry.createdAt },
      })
  )

  const model = new GooglePaLM({temperature: 0, 
          modelName: "models/text-bison-001", 
        });

  const chain = loadQARefineChain(model);
  const embeddings = new GooglePaLMEmbeddings();
  const store = await MemoryVectorStore.fromDocuments(docs, embeddings);

  const relevantDocs = await store.similaritySearch(question)

  const res = await chain.invoke({
    input_documents: relevantDocs,
    question,
  })

  return res.output_text
}