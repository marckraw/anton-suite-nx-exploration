import type { ExecutorContext } from '@nx/devkit';
import { seed } from './seed';

export interface EchoExecutorOptions {
  textToEcho: string;
}

export default async function echoExecutor(
  options: EchoExecutorOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  console.info(`Executing "seeder"...`);


  await seed()

  const success = true;
  return { success };
}
