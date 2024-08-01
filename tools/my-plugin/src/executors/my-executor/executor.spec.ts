import { ExecutorContext } from '@nx/devkit';

import { MyExecutorExecutorSchema } from './schema';
import executor from './executor';

const options: MyExecutorExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('MyExecutor Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
