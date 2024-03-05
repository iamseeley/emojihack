import React from 'react';
import { EmojiProps } from '@/emojis/emojis';
import Emoji from './Emoji';


interface ProjectGraphProps {
  associatedEmojis: string[];
  emojis: EmojiProps[];
}

const ProjectGraph: React.FC<ProjectGraphProps> = ({ associatedEmojis, emojis }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {emojis.map((emojiObj, index) => {
        const isAssociated = associatedEmojis.includes(emojiObj.emoji);
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {emojis.map((emojiObj, index) => {
              // Determine if the current emoji is associated with a project
              const isAssociated = associatedEmojis.includes(emojiObj.emoji);
      
              // Render the Emoji component for each emoji
              return (
                <Emoji
                  key={emojiObj.emoji} // Use emoji itself as key if unique; otherwise, consider another unique property
                  emoji={emojiObj.emoji}
                  isAssociated={isAssociated}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGraph;
