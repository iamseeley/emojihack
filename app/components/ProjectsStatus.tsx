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
      <div className=" p-5 rounded-3xl border border-[#F2F3F4] w-3/4 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
        <div><Image className="rounded-full bg-blue-300" src={emojihack.profilepicPath} alt="avatar" height={44} width={44} /></div>
        <p className="font-semibold text-sm md:text-lg text-[#989999]">
          <Link href={emojihack.aboutPath} className="text-black" target="_blank">{emojihack.preferredName}</Link> has launched <br/><span className="text-black">{associatedEmojisCount} emoji projects</span> out of {totalEmojisCount}.
        </p>
        
        <div className="bg-[#F2F3F4]  rounded-full h-3">
          <div 
            className="bg-[#96E9A7] rounded-l-full h-3" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        </div>
      </div>
    );
  };

export default ProjectStatus;
