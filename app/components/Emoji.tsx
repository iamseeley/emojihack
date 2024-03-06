import { EmojiProps } from "@/emojis/emojis";


const Emoji: React.FC<EmojiProps> = ({ emoji, isAssociated, projectUrl }) => {
  const content = isAssociated && projectUrl ? (
    <a href={projectUrl} style={{ opacity: 1 }}>{emoji}</a>
  ) : (
    <span style={{ opacity: 0.3 }}>{emoji}</span>
  );

  return (
    <div style={{ fontSize: '24px', margin: '10px' }}>
      {content}
    </div>
  );
};


export default Emoji;
