import { AIModel } from "./base";
import { AnthropicModel } from "./anthropic";

export type ModelType = "anthropic"; // Add other types as needed
export class ModelFactory {
  static create(type: ModelType, apiKey: string): AIModel {
    console.log("Creating model with: ");
    console.log({ type, apiKey });
    switch (type) {
      case "anthropic":
        return new AnthropicModel(apiKey);
      default:
        throw new Error(`Unsupported model type: ${type}`);
    }
  }
}
