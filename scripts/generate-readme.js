/* eslint-disable no-console */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile } from "node:fs/promises";
import { readdirSync, writeFileSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDirectory = join(__dirname, "..");
const challengesDirectory = join(rootDirectory, "challenges");
const readmeFile = join(rootDirectory, "README.md");

const getDataFromFilename = async (filename) => {
  const filePath = join(challengesDirectory, filename);
  const content = await readFile(filePath, "utf8");
  const description = content.match(/\/\*(.*)\*\//s)[1];
  const title = description.match(/Title: (.*)/)[1];
  const url = description.match(/URL: (.*)/)[1];
  const difficulty = description.match(/Difficulty: (.*)/)[1];

  return { title, url, difficulty, filename };
};

const generateMarkdownTable = (data) => {
  let table =
    "| # | Title | Solution | Difficulty |\n|---| ----- | -------- | ---------- |";

  for (const [index, { title, url, difficulty, filename }] of data.entries()) {
    const id = index + 1;
    table += `\n| ${id} | [${title}](${url}) | [JavaScript](./challenges/${filename}) | ${difficulty} |`;
  }

  return table;
};

const generateReadmeContent = (data) => {
  const table = generateMarkdownTable(data);

  return `
# Codewars

Codewars challenges solved in JavaScript.

${table}
`;
};

const data = await Promise.all(
  readdirSync(challengesDirectory).map((filename) =>
    getDataFromFilename(filename),
  ),
);

const readmeContent = generateReadmeContent(data);

writeFileSync(readmeFile, readmeContent, "utf8");

console.log("README generated successfully");
