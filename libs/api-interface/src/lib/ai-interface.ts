export interface AIModel {
  chat(messages: Message[]): Promise<any>;
}
export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}
