import Link from "next/link";

interface ProjectStatusProps {
    totalEmojisCount: number;
    associatedEmojisCount: number;
  }
  

  const ProjectStatus: React.FC<ProjectStatusProps> = ({ totalEmojisCount, associatedEmojisCount }) => {
    
    let progressPercentage = (associatedEmojisCount / totalEmojisCount) * 100;
    const MIN_PROGRESS_PERCENTAGE = 5; 
    progressPercentage = Math.max(progressPercentage, MIN_PROGRESS_PERCENTAGE);
  
    return (
      <div className="bg-blue-400 p-6 rounded-3xl shadow-md w-1/2 flex flex-col justify-between">
        <p className="font-semibold text-sm text-white">
          <Link href={'https://tseeley.com'} className="underline" target="_blank">Thomas</Link> has launched {associatedEmojisCount} emoji projects out of {totalEmojisCount} emojis.
        </p>
        <div className="bg-gray-200  rounded-full h-2.5">
          <div 
            className="bg-green-400 rounded-l-full h-2.5" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

export default ProjectStatus;
