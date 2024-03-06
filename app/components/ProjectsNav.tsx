

const ProjectsNav = ({ onNavChange }) => {
  return (
    <div className="flex gap-2 mb-4 mx-4">
      <button onClick={() => onNavChange('graph')} className="text-sm rounded-full font-semibold  px-4 py-1 bg-gray-200 text-black ">
        by emoji
      </button>
      <button onClick={() => onNavChange('list')} className="text-sm rounded-full font-semibold  px-4 py-1 bg-gray-200 text-black">
        by title
      </button>
    </div>
  );
};

export default ProjectsNav;
