import { Anton } from '@anton-suite/anton-sdk';

const anton = new Anton();

export async function GET(request: Request) {
  anton.greet()
  return new Response('Hello, from API!');
}
