import { AntonSDK } from '@anton-suite/anton-sdk';

const apiKey = process.env.ANTHROPIC_API_KEY as string

export async function GET(request: Request) {
  const anton = new AntonSDK({apiKey: apiKey, type: 'anthropic'});

  const response = await anton.chat([{role: 'user', content: 'Hello, from API!'}]);

  return Response.json({
    data: response
  })
}
