import path from "node:path";
import fs from "node:fs/promises";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rootPath = path.join(import.meta.dirname, "..");
const challengesPath = path.join(rootPath, "challenges");

const camelCaseToKebabCase = (string) =>
  string.replaceAll(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

const promptChallengeData = async () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  console.log("Enter the following information to create a new challenge:");

  const title = await rl.question("Challenge Title: ");
  const url = await rl.question("Challenge URL: ");
  const difficulty = await rl.question("Challenge Difficulty: ");
  const name = await rl.question("Function Name (in kebabCase): ");

  rl.close();

  return { title, url, difficulty, name };
};

const generateModuleContent = (data) => `/*
 * Title: ${data.title}
 * URL: ${data.url}
 * Difficulty: ${data.difficulty}
 */

export function ${data.name}() {
  // Insert code
}
`;

const data = await promptChallengeData();
const moduleContent = generateModuleContent(data);
const filename = `${camelCaseToKebabCase(data.name)}.js`;
const filePath = path.join(challengesPath, filename);

await fs.writeFile(filePath, moduleContent, "utf8");

console.log(`New challenge created successfully! File saved as: ${filename}`);
