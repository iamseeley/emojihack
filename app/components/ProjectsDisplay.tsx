'use client'

import React, { useState } from 'react';
import ProjectGraph from './ProjectsGraph';
import { ProjectList } from './ProjectsList';
import ProjectsNav from './ProjectsNav';


const ProjectsDisplay = ({ associatedEmojis, emojiToProjectSlug, emojis, allProjects}) => {
  const [currentView, setCurrentView] = useState('graph'); // 'graph' or 'list'

  return (
    <div>
      <ProjectsNav onNavChange={setCurrentView} />
      {currentView === 'graph' && <ProjectGraph associatedEmojis={emojiToProjectSlug} emojis={emojis} />}
      {currentView === 'list' && <ProjectList allProjects={allProjects} />}
    </div>
  );
};

export default ProjectsDisplay;
