'use client'

import React, { useState } from 'react';
import ProjectGraph from './ProjectsGraph';
import { ProjectList } from './ProjectsList';
import ProjectsNav from './ProjectsNav';


const ProjectsDisplay = ({ emojiToProjectSlug, emojis, allProjects, projectUrl}) => {
  const [currentView, setCurrentView] = useState('graph'); // 'graph' or 'list'

  return (
    <div>
      <ProjectsNav currentView={currentView} onNavChange={setCurrentView} />
      {currentView === 'graph' && <ProjectGraph associatedEmojis={emojiToProjectSlug} emojis={emojis} />}
      {currentView === 'list' && <ProjectList allProjects={allProjects} />}
    </div>
  );
};

export default ProjectsDisplay;
