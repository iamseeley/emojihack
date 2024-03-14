import { EmojiProps } from '@/emojis/emojis'; 
import Emoji from './Emoji'; 



const ProjectGraph = ({ associatedEmojis, emojis, allProjects }) => {
  
  const enhancedEmojis = emojis.map(emoji => {
    const projectSlug = associatedEmojis[emoji.emoji];
    const project = allProjects.find(p => p.slug === projectSlug);
    return {
      ...emoji,
      isAssociated: !!project,
      publishedAt: project ? new Date(project.metadata.publishedAt) : new Date(0) 
    };
  });

  const sortedEmojis = enhancedEmojis.sort((a, b) => {
    if (a.isAssociated && b.isAssociated) {

      return b.publishedAt - a.publishedAt;
    } else if (!a.isAssociated && !b.isAssociated) {
 
      return 0;
    }
   
    return a.isAssociated ? -1 : 1;
  });
  
  
  // const sortedEmojis = [...emojis].sort((a, b) => {
  //   const aIsAssociated = associatedEmojis[a.emoji] ? 1 : 0;
  //   const bIsAssociated = associatedEmojis[b.emoji] ? 1 : 0;
  //   return bIsAssociated - aIsAssociated;
  // });

  return (
    <div className='grid grid-cols-8 sm:grid-cols-16 md:grid-cols-16  gap-4 mx-[10px]'>
      {sortedEmojis.map((emojiObj) => {
        const projectSlug = associatedEmojis[emojiObj.emoji];
        const isAssociated = !!projectSlug;
        return (
          <Emoji
            key={emojiObj.number}
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
