const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();


if (process.env.IS_TEMPLATE === 'false') {
  console.log("Aborting setup: IS_TEMPLATE environment variable is set to 'false'.");
  process.exit(0);
}

const defaultEmojiHackJson = {
    "preferredName": "Thomas",
    "githubProfile": "https://github.com/iamseeley",
    "twitterProfile": "https://twitter.com/iamseeley",
    "personalWebsite": "https://tseeley.com"
};

const baseMDXContent = `---
title: 'Your Project Title'
emoji: '😀'
publishedAt: YYYY-MM-DD
description: A short description of your project.
origin: idea or emoji
tech: Next.js, Tailwind CSS, TypeScript
source: https://github.com/iamseeley/emojihack
---

Your project content starts here...`;

const heroComponentPath = path.join(__dirname, 'app', 'components', 'Hero.tsx');
const baseHeroContent = `export default function Hero() {
  return (
      <>
          <div className="flex flex-col text-center items-center">
              <div className="flex flex-col gap-2 max-w-lg"> 
                  <h2 className='text-4xl md:text-5xl font-bold'>Build a project for every emoji</h2>
              </div>
          </div>
      </>
  ) 
}`;

const contentDir = path.join(__dirname, 'content');
const infoDir = path.join(__dirname, 'app', 'info');
const emojihackJsonPath = path.join(__dirname, 'emojihack.json');
const baseMDXPath = path.join(contentDir, 'your-first-project.mdx');

async function deleteFolderRecursive(directory) {
  try {
    const files = await fs.readdir(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.lstat(filePath);
      if (stat.isDirectory()) {
        await deleteFolderRecursive(filePath);
        await fs.rmdir(filePath);
      } else {
        await fs.unlink(filePath);
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`The directory ${directory} does not exist.`);
    } else {
      throw error;
    }
  }
}

async function createEmojiHackJson() {
  await fs.writeFile(emojihackJsonPath, JSON.stringify(defaultEmojiHackJson, null, 2), 'utf8');
}

async function setup() {
  try {
    // Delete existing projects and content
    await deleteFolderRecursive(contentDir);
    await deleteFolderRecursive(infoDir);

    // Create new directories   
    await fs.mkdir(contentDir, { recursive: true });

    // Create a new emojihack.json with default data
    await createEmojiHackJson();

    // Create a base MDX file in the content directory
    await fs.writeFile(baseMDXPath, baseMDXContent, 'utf8');

    await fs.writeFile(heroComponentPath, baseHeroContent, 'utf8');

    console.log("Setup completed successfully.");
  } catch (error) {
    console.error("Setup failed:", error);
  }
}

setup();
