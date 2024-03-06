import Link from "next/link";


interface Project {
  metadata: {
    publishedAt: string;
    emoji: string; // Assuming there's an emoji field within metadata
    title: string;
  };
  slug: string
}

interface ProjectListProps {
  allProjects: Project[];
}


  export const ProjectList: React.FC<ProjectListProps> = ({ allProjects }) => {
    
    return (
      <ul className="flex flex-col gap-2 mx-4">
        {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project, index) => (
          
          <li key={index} className="border-b pb-2">
            <Link className="flex items-center" href={`/project/${project.slug}`}>
              <span className="text-2xl mr-4">{project.metadata.emoji}</span>
              <span className="flex-1 font-semibold">{project.metadata.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  