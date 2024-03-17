interface ProjectSpeedProps {
    projectsPerWeek: number;
  }

  
  
  export const ProjectSpeed: React.FC<ProjectSpeedProps> = ({ projectsPerWeek }) => {
    // 25 MPH represents 1 project per week, and the max speed is 200 MPH.
    const mph = projectsPerWeek * 25;
    // Convert the mph to a degree value that can range from -90 (full left) to +90 (full right)
    const rotationDegree = Math.min(mph, 200) / 200 * 180 - 90;
  
    return (
      <div className="bg-black p-5 w-1/2 rounded-3xl shadow-md flex flex-col  gap-4 items-center">
        <div className="relative w-28 h-14 ">
          {/* Speedometer ring */}
          
            {/* Speedometer arc */}
            
            <div className="absolute rounded-t-full inset-0 bg-gradient-to-r from-green-400 via-yellow-300 to-red-600" />
            <div className="absolute top-6 left-6 bg-black w-16 h-8 rounded-t-full"></div>
            {/* Needle */}
            <div 
              className="w-0.5 h-14 bg-white absolute bottom-0 ml-1 left-1/2 z-10 "
              style={{ transform: `rotate(${rotationDegree}deg)`, transformOrigin: 'bottom center'  }}
            > 
              {/* Dot at the bottom of the needle */}
              <div className="w-2.5 h-2.5 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
              {/* Point at the top of the needle */}
              {/* <div className="w-2 h-2 bg-black rotate-45 absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1"></div> */}
            </div>
          </div>
          {/* Center Text */}
          <div className=" text-white">
            <div className="text-2xl font-bold text-center">{mph} MPH</div>
            <div className="text-sm font-medium text-gray-400 text-center">
              {projectsPerWeek} {projectsPerWeek === 1 ? "project" : "projects"}/week
            </div>
          </div>
        
      </div>
    );
  };
  
  