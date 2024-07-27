import { Injectable } from '@nestjs/common';
import { createLogger } from '@anton-suite/utils-logger';
import { AntonSDK } from '@anton-suite/anton-sdk';


const logger = createLogger('anton-api:SmokeTestService');

@Injectable()
export class SmokeTestService {
  async smokeTest(){
    logger.info("logging from SmokeTestService.smokeTest()");
    const apiKey = process.env.ANTHROPIC_API_KEY
    const anton = new AntonSDK({apiKey: apiKey, type: 'anthropic'});

    const response = await anton.chat([{role: 'user', content: 'Hello, from API!'}])

    return response
  }
}
