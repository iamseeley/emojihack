import emojis from '../emojis/emojis.json'
import { emojiArray } from '../emojis/emojis'
import { getProjects } from "./utils/project";
import ProjectStatus from "./components/ProjectsStatus";
import Hero from "./components/Hero";
import { ProjectSpeed } from "./components/ProjectSpeed";
import { parseISO, differenceInCalendarWeeks, startOfWeek, isWithinInterval } from 'date-fns';
import ProjectsDisplay from "./components/ProjectsDisplay";
import { headers } from 'next/headers';
import { userAgent } from "next/server";
import emojisOG from '../emojis/emojisOg.json';
import type { Metadata } from 'next';




export async function generateMetadata(): Promise<Metadata> {
  function getIconUrl(emoji: string) {
    const headersObj = typeof headers === 'function' ? headers() : undefined;
    const { device } = headersObj
      ? userAgent({ headers: headersObj })
      : { device: { type: undefined } };
    const isIOSOrSafari =
      device.type === 'mobile' || (headersObj && headersObj.get('user-agent')?.includes('Safari'));
  
    const faviconPngData = emojisOG[emoji];
    const faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
    )}`;
  
    return isIOSOrSafari ? faviconPngData : faviconSvgUrl;
  }


  const faviconUrl = getIconUrl('🛠️');
  const faviconPngData = emojisOG['🛠️'];


  return {
  icons: { icon: faviconUrl,
    shortcut: faviconPngData,
    apple: faviconPngData,
  },
}
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
