const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();


if (process.env.IS_TEMPLATE === 'false') {
  console.log("Aborting setup: IS_TEMPLATE environment variable is set to 'false'.");
  process.exit(0);
}

const baseMDXContent = `---
title: Your Project Title
emoji: 😀
publishedAt: YYYY-MM-DD
description: A short description of your project.
origin: idea or emoji
tech: Next.js, Tailwind CSS, TypeScript
source: https://github.com/iamseeley/emojihack
---

Your project content starts here...`;



const homeContent = `import emojis from '../emojis/emojis.json'
import { getProjects } from "./utils/project";
import ProjectStatus from "./components/ProjectsStatus";
import { ProjectSpeed } from "./components/ProjectSpeed";
import { parseISO, differenceInCalendarWeeks, startOfWeek } from 'date-fns';
import ProjectsDisplay from "./components/ProjectsDisplay";





export default function Home() {
  const allProjects = getProjects();
  // const associatedEmojisSet = new Set(allProjects.map(project => project.metadata.emoji));
  const emojiToProjectSlug = allProjects.reduce((acc, project) => {
    acc[project.metadata.emoji] = project.slug;
    return acc;
  }, {});
  // const associatedEmojis = Array.from(associatedEmojisSet);
  const totalEmojisCount = emojis.length;
  const associatedEmojisCount = Object.keys(emojiToProjectSlug).length;
  const startDate = startOfWeek(parseISO('2024-03-04'), { weekStartsOn: 1 }); // weekStartsOn: 1 for Monday
  const currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const totalWeeks = differenceInCalendarWeeks(currentWeekStart, startDate) + 1; // +1 to include the current week
  const projectsPerWeek = associatedEmojisCount / totalWeeks;

  return (
    <>
      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-10">
          <div className="flex flex-row gap-4 mx-2">
            <ProjectStatus totalEmojisCount={totalEmojisCount} associatedEmojisCount={associatedEmojisCount} />
            <ProjectSpeed projectsPerWeek={projectsPerWeek} />  
          </div>
          <ProjectsDisplay projectUrl={emojiToProjectSlug} emojiToProjectSlug={emojiToProjectSlug} emojis={emojis} allProjects={allProjects} />
        </section>
      </div>
    </>
  );
}
`;

const homePagePath = path.join(__dirname, 'app', 'page.tsx');
const heroComponentPath = path.join(__dirname, 'app', 'components', 'Hero.tsx');
const contentDir = path.join(__dirname, 'content');
const infoDir = path.join(__dirname, 'app', 'info');
const baseMDXPath = path.join(contentDir, 'your-first-project.mdx');

async function deleteFolderRecursive(directory) {
    try {
      const files = await fs.readdir(directory);
      for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = await fs.lstat(filePath);
        if (stat.isDirectory()) {
          await deleteFolderRecursive(filePath);
        } 
        await fs.unlink(filePath);
      }
      await fs.rmdir(directory);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`The directory ${directory} does not exist.`);
      } else {
        throw error;
      }
    }
  }


async function setup() {
  try {
    
    await deleteFolderRecursive(contentDir);
    await deleteFolderRecursive(infoDir);

    await fs.unlink(heroComponentPath).catch(error => console.log(`Failed to delete Hero component: ${error.message}`));

    await fs.mkdir(contentDir, { recursive: true });

    await fs.writeFile(baseMDXPath, baseMDXContent, 'utf8');

    await fs.writeFile(homePagePath, homeContent, 'utf8');

    console.log("Setup completed successfully.");
  } catch (error) {
    console.error("Setup failed:", error);
  }
}

setup();
