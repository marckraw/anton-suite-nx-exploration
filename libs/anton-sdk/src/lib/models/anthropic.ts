import axios from "axios";
import type { AxiosInstance } from "axios";
import { AIModel, Message } from "./base";
import { isBrowser, throwErrorIfBrowser } from "../helpers/env-detection";

export class AnthropicModel implements AIModel {
  private api: AxiosInstance;
  private baseUrl = "https://api.anthropic.com/v1";

  constructor(private apiKey: string) {
    if (isBrowser) {
      throwErrorIfBrowser("AnthropicModel");
    }
    console.log("Headers from AnthropicModel:");
    console.log({
      "Content-Type": "application/json",
      "x-api-key": this.apiKey,
      "anthropic-version": "2023-06-01",
    });

    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
      },
    });
  }

  async chat(messages: Message[]): Promise<any> {
    try {
      const response = await this.api.post("/messages", {
        system: "Your name is Anton. Be respectful.",
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1024,
        messages,
      });

      const role = response.data.role;
      const content = response.data.content;

      return [{ role, content }];
    } catch (error) {
      console.error("Anthropic API error:", error);
      throw error;
    }
  }
}
