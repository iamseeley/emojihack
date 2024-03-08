

const ProjectsNav = ({ onNavChange, currentView }) => {
  return (
    <div className="flex  mb-4 mx-2">
      <button
        onClick={() => onNavChange('graph')}
        className={`text-sm font-medium px-4 py-1 ${
          currentView === 'graph'
            ? 'bg-gray-100 text-black font-semibold rounded-full'
            : 'text-black hover:opacity-100 opacity-60'
        }`}
      >
        emoji
      </button>
      <button
        onClick={() => onNavChange('list')}
        className={`text-sm font-medium px-4 py-1 ${
          currentView === 'list'
            ? 'bg-gray-100 text-black font-semibold rounded-full'
            : 'text-black hover:opacity-100 opacity-60'
        }`}
      >
        title
      </button>
    </div>
  );
};

export default ProjectsNav;
