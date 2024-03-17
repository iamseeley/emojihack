import Link from "next/link";
import emojihack from '../../emojihack.json'
import Image from "next/image";


interface ProjectStatusProps {
    totalEmojisCount: number;
    associatedEmojisCount: number;
  }
  

  const ProjectStatus: React.FC<ProjectStatusProps> = ({ totalEmojisCount, associatedEmojisCount }) => {
    
    let progressPercentage = (associatedEmojisCount / totalEmojisCount) * 100;
    const MIN_PROGRESS_PERCENTAGE = 5; 
    progressPercentage = Math.max(progressPercentage, MIN_PROGRESS_PERCENTAGE);
  
    return (
      <div className="bg-blue-400 p-5 rounded-3xl shadow-md w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
        <div><Image className="rounded-full" src={emojihack.profilepicPath} alt="avatar" height={44} width={44} /></div>
        <p className="font-semibold text-sm md:text-lg text-white">
          <Link href={'https://tseeley.com/about'} className="underline" target="_blank">{emojihack.preferredName}</Link> has launched {associatedEmojisCount} emoji projects out of {totalEmojisCount} emojis.
        </p>
        
        <div className="bg-white  rounded-full h-3">
          <div 
            className="bg-green-400 rounded-l-full h-3" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        </div>
      </div>
    );
  };

export default ProjectStatus;
