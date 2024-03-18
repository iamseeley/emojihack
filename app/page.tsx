import emojis from '../emojis/emojis.json'
import { emojiArray } from '../emojis/emojis'
import { getProjects } from "./utils/project";
import ProjectStatus from "./components/ProjectsStatus";
import Hero from "./components/Hero";
import { ProjectSpeed } from "./components/ProjectSpeed";
import { parseISO, isWithinInterval } from 'date-fns';
import ProjectsDisplay from "./components/ProjectsDisplay";

import emojisOG from '../emojis/emojisOg.json';
import type { Metadata } from 'next';


const faviconUrl = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>`
)}`;

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
          __html: `
            (function() {
              var isMobileOrSafari = /Mobile|Safari/.test(navigator.userAgent);
              var faviconElement = document.querySelector('link[rel="icon"]');
              
              if (isMobileOrSafari) {
                faviconElement.href = '${faviconPngData}';
              }
            })();
          `,
        }}
      />
      <div className="flex flex-col gap-20">
        <section>
          <Hero />
        </section>
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
