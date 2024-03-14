import emojis from '../emojis/emojis.json'
import { emojiArray } from '../emojis/emojis'
import { getProjects } from "./utils/project";
import ProjectStatus from "./components/ProjectsStatus";
import Hero from "./components/Hero";
import { ProjectSpeed } from "./components/ProjectSpeed";
import { parseISO, differenceInCalendarWeeks, startOfWeek, isWithinInterval } from 'date-fns';
import ProjectsDisplay from "./components/ProjectsDisplay";
import emojisOG from '../emojis/emojisOg.json';
import { Metadata } from 'next';


export async function generateMetadata({ params, isSafariOnIOS }): Promise<Metadata | undefined> {
  const faviconPngData = emojisOG['🛠️'];

  let faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>`
  )}`;
  const faviconUrl = isSafariOnIOS ? faviconPngData : faviconSvgUrl;
  return {
      icons: { 
          icon: { url: faviconUrl, type: isSafariOnIOS ? 'image/png' : 'image/svg+xml' },
          shortcut: faviconPngData,
          apple: faviconPngData,
        },
  }
}




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
  const startDate = startOfWeek(parseISO('2024-02-25'), { weekStartsOn: 1 }); // weekStartsOn: 1 for Monday
  const currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const totalWeeks = differenceInCalendarWeeks(currentWeekStart, startDate) + 1; // +1 to include the current week
  const projectsPerWeek = Math.round(associatedEmojisCount / totalWeeks);

  


  return (
    <>
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
