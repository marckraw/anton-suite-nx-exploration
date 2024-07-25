import consola from 'consola';

export const createLogger = (context: string) => {
  console.log("Just console log in logger.")
  return consola.create({ level: 5, defaults: { tag: context } });
};
