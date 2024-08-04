import { resolve, join } from "node:path";
import { writeFile } from "fs/promises";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  sampleAssistants,
  sampleConversation,
  sampleMessages
} from '../../../../../apps/anton-api/src/database/seed-data';

export const writeJSON = async (filePath: string, data: any) => {
  try {
    const fullPath = resolve(filePath);
    console.log("Full path resolverd: ")
    console.log(fullPath)
    await writeFile(fullPath, JSON.stringify(data, null, 2), {
      encoding: "utf8",
    });
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

const seedDB = {
  messages: sampleMessages,
  assistants: sampleAssistants,
  conversations: sampleConversation
};

const main = async () => {
  console.log("Seeding database...");
  console.log(__dirname);
  const pathToDB = join(__dirname, "..", "..", "..", "..", "..", "apps", "anton-api", "src", "database", "db.json");

  console.log("This is the path: ")
  console.log(pathToDB)

  await writeJSON(pathToDB, seedDB);
};

export const seed = async () => await main()
  .then((res) => {
    console.log("Seed run successfully!");
    console.log(res);
  })
