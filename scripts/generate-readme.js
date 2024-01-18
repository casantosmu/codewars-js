import path from "node:path";
import fs from "node:fs/promises";

const rootPath = path.join(import.meta.dirname, "..");
const challengesPath = path.join(rootPath, "challenges");

const getChallengeData = async (filename) => {
  const filePath = path.join(challengesPath, filename);
  const content = await fs.readFile(filePath, "utf8");
  const description = content.match(/\/\*(.*)\*\//s)[1];
  const title = description.match(/Title: (.*)/)[1];
  const url = description.match(/URL: (.*)/)[1];
  const difficulty = description.match(/Difficulty: (.*)/)[1];

  return { title, url, difficulty, filename };
};

const getChallengesData = async () => {
  const filenames = await fs.readdir(challengesPath);
  const unsortedData = await Promise.all(
    filenames.map((filename) => getChallengeData(filename)),
  );
  return unsortedData.sort((a, b) => (a.difficulty < b.difficulty ? -1 : 1));
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

const generateReadmeContent = (table) => `
# Codewars

Codewars challenges solved in JavaScript.

${table}
`;

const data = await getChallengesData();
const markdownTable = generateMarkdownTable(data);
const readmeContent = generateReadmeContent(markdownTable);
const readmePath = path.join(rootPath, "README.md");

await fs.writeFile(readmePath, readmeContent, "utf8");

console.log("README generated successfully");
