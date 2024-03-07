import { EmojiProps } from '@/emojis/emojis'; // Ensure this path is correct
import Emoji from './Emoji'; // Ensure this path is correct

interface ProjectGraphProps {
  associatedEmojis: { [key: string]: string }; // This might need adjustment if associatedEmojis should also use the number property
  emojis: EmojiProps[];
}

const ProjectGraph: React.FC<ProjectGraphProps> = ({ associatedEmojis, emojis }) => {
  
  const sortedEmojis = [...emojis].sort((a, b) => {
    const aIsAssociated = associatedEmojis[a.emoji] ? 1 : 0;
    const bIsAssociated = associatedEmojis[b.emoji] ? 1 : 0;
    return bIsAssociated - aIsAssociated;
  });

  return (
    <div className='flex gap-4 flex-wrap justify-center mx-[10px]'>
      {sortedEmojis.map((emojiObj) => {
        const projectSlug = associatedEmojis[emojiObj.emoji];
        const isAssociated = !!projectSlug;
        return (
          <Emoji
            key={emojiObj.number} // Assuming 'number' is unique across all emojis
            emoji={emojiObj.emoji}
            isAssociated={isAssociated}
            projectUrl={isAssociated ? `/project/${projectSlug}` : undefined}
          />
        );
      })}
    </div>
  );
};


export default ProjectGraph;
