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
import { emojiArray } from '../emojis/emojis'
import { getProjects } from "./utils/project";
import ProjectStatus from "./components/ProjectsStatus";
import Hero from "./components/Hero";
import { ProjectSpeed } from "./components/ProjectSpeed";
import { parseISO, isWithinInterval } from 'date-fns';
import ProjectsDisplay from "./components/ProjectsDisplay";

import emojisOG from '../emojis/emojisOg.json';
import type { Metadata } from 'next';


const faviconUrl = \`data:image/svg+xml,\${encodeURIComponent(
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>\`
)}\`;

const faviconPngData = emojisOG['🛠️'];



export const metadata: Metadata = {
  icons: { 
    icon: faviconUrl,
    shortcut: faviconPngData,
    apple: faviconPngData,
  },
};



export default function Home() {
  const allProjects = getProjects();
  // const associatedEmojisSet = new Set(allProjects.map(project => project.metadata.emoji));
  const emojiToProjectSlug = allProjects.reduce((acc, project) => {
    acc[project.metadata.emoji] = project.slug;
    return acc;
  }, {});
  // const associatedEmojis = Array.from(associatedEmojisSet);
  const totalEmojisCount = emojiArray.length;
  const associatedEmojisCount = Object.keys(emojiToProjectSlug).length;

  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(currentDate.getDate() - 7);
  const projectsInLastWeek = allProjects.filter(project =>
    isWithinInterval(parseISO(project.metadata.publishedAt), {
      start: oneWeekAgo,
      end: currentDate,
    })
  );
  const projectsPerWeek = projectsInLastWeek.length;

  


  return (
    <>
    <script
        dangerouslySetInnerHTML={{
          __html: \`
            (function() {
              var isMobileOrSafari = /Mobile|Safari/.test(navigator.userAgent);
              var faviconElement = document.querySelector('link[rel="icon"]');
              
              if (isMobileOrSafari) {
                faviconElement.href = '\${faviconPngData}';
              }
            })();
          \`,
        }}
      />
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
}`;

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
