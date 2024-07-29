import { ModelFactory, ModelType } from "./models/factory";
import { setupAxios } from "./helpers/browser";
import { createLogger } from '@anton-suite/utils-logger';
import type { Message, AIModel } from "./models/base";

const logger = createLogger('AntonSDK');

// Run setup if in browser environment
if (typeof window !== "undefined") {
  setupAxios();
}
export class AntonSDK {
  private model: AIModel;
  constructor(config: { type: ModelType; apiKey: string }) {
    this.model = ModelFactory.create(config.type, config.apiKey);
    console.log("Some beta changes!")
    logger.info('AntonSDK created');
  }
  async chat(messages: Message[]): Promise<string> {
    return this.model.chat(messages);
  }
}
