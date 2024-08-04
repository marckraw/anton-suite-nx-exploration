export interface AIModel {
  chat(messages: Message[]): Promise<any>;
}
export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

/**
 * claude-3-5-sonnet -> claude-3-5-sonnet-20240620
 *
 * */
export const antonAPIModels = ['claude-3-5-sonnet', 'gpt4o'] as const
export type AntonAPIModels = typeof antonAPIModels[number]



export const anthropicModels = ['claude-3-5-sonnet']
export const openAIModels = ['gpt4o']

