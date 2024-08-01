import { PromiseExecutor } from '@nx/devkit';
import { MyExecutorExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<MyExecutorExecutorSchema> = async (
  options
) => {
  console.log('Executor ran for MyExecutor', options);
  return {
    success: true,
  };
};

export default runExecutor;
