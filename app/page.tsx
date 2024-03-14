import emojis from '../emojis/emojis.json'
import { emojiArray } from '../emojis/emojis'
import { getProjects } from "./utils/project";
import ProjectStatus from "./components/ProjectsStatus";
import Hero from "./components/Hero";
import { ProjectSpeed } from "./components/ProjectSpeed";
import { parseISO, differenceInCalendarWeeks, startOfWeek, isWithinInterval } from 'date-fns';
import ProjectsDisplay from "./components/ProjectsDisplay";





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
