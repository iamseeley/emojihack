import Link from "next/link";

interface ProjectStatusProps {
    totalEmojisCount: number;
    associatedEmojisCount: number;
  }
  


const ProjectStatus: React.FC<ProjectStatusProps> = ({ totalEmojisCount, associatedEmojisCount }) => {
  const progressPercentage = (associatedEmojisCount / totalEmojisCount ) * 100;
  return (
    <div className="bg-gray-50 p-6 rounded-lg border shadow-md w-1/2">
      <div className="bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-2.5" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="font-semibold"><Link className="underline" href={'https://tseeley.com'} target="_blank">Thomas</Link> has launched {associatedEmojisCount} emoji projects out of {totalEmojisCount} emojis.</p>
    </div>
  );
};

export default ProjectStatus;
