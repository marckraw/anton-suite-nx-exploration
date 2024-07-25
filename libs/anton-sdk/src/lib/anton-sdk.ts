import { ModelFactory, ModelType } from "./models/factory";
import { AIModel, Message } from "./models/base";
// import { setupAxios } from "./helpers/browser";
import { createLogger } from '@anton-suite/utils-logger';

const logger = createLogger('AntonSDK');

// Run setup if in browser environment
// if (typeof window !== "undefined") {
//   setupAxios();
// }
export class AntonSDK {
  private model: AIModel;
  constructor(config: { type: ModelType; apiKey: string }) {
    this.model = ModelFactory.create(config.type, config.apiKey);
    logger.info('AntonSDK created');
  }
  async chat(messages: Message[]): Promise<string> {
    return this.model.chat(messages);
  }
}
