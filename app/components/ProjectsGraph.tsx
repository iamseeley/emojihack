import React from 'react';
import { EmojiProps } from '@/emojis/emojis'; // Ensure this path is correct
import Emoji from './Emoji'; // Ensure this path is correct

interface ProjectGraphProps {
  associatedEmojis: string[]; // This might need adjustment if associatedEmojis should also use the number property
  emojis: EmojiProps[];
}

const ProjectGraph: React.FC<ProjectGraphProps> = ({ associatedEmojis, emojis }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {emojis.map((emojiObj) => {
        // Check if the current emoji's identifier is in the list of associated emoji identifiers
        const isAssociated = associatedEmojis.includes(emojiObj.emoji);

        return (
          <Emoji
            key={emojiObj.number} // Assuming 'number' is unique across all emojis
            emoji={emojiObj.emoji}
            isAssociated={isAssociated}
          />
        );
      })}
    </div>
  );
};

export default ProjectGraph;
