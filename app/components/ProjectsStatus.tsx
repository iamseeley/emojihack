import Link from "next/link";

interface ProjectStatusProps {
    totalEmojisCount: number;
    associatedEmojisCount: number;
  }
  


const ProjectStatus: React.FC<ProjectStatusProps> = ({ totalEmojisCount, associatedEmojisCount }) => {
  return (
    <div className="bg-gray-50 p-6 mx-4 rounded-lg border">
      <p className="font-semibold">So far, <Link className="underline" href={'https://tseeley.com'} target="_blank">Thomas</Link> has launched {associatedEmojisCount} emoji projects out of {totalEmojisCount} emojis.</p>
    </div>
  );
};

export default ProjectStatus;
