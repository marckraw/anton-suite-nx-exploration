import { Injectable } from '@nestjs/common';
import { createLogger } from '@anton-suite/utils-logger';
import { AntonSDK } from '@anton-suite/anton-sdk';


const logger = createLogger('anton-api:AppService');

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getHello(): { message: string } {
    logger.info("logging from AppService.getHello()");

    return { message: 'greetings' };
  }

  async getCompletion(): Promise<any> {
    const apiKey = process.env.ANTHROPIC_API_KEY

    logger.info("logging from AppService.getCompletion()");

    const anton = new AntonSDK({type: 'anthropic', apiKey: apiKey})

    const response = await anton.chat([
      {
        content: 'Hey there, how are you ? :)',
        role: 'user'
      }
    ])

    return response;
  }
}
