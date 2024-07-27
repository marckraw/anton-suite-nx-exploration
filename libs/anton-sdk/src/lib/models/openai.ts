import axios from "axios";
import type { AxiosInstance } from "axios";
import { AIModel, Message } from "./base";
import { isBrowser, throwErrorIfBrowser } from "../helpers/env-detection";

export class OpenAIModel implements AIModel {
  private api: AxiosInstance;
  private baseUrl = "https://openai.com/whatever/v1";

  constructor(private apiKey: string) {
    if (isBrowser) {
      throwErrorIfBrowser("OpenAIModel");
    }
    console.log("This is provided apikey: ")
    console.log(apiKey)

    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async chat(messages: Message[]): Promise<any> {
    try {
      return 'not implemented';
    } catch (error) {
      console.error("OpenAI API error:", error);
      throw error;
    }
  }
}
