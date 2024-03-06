import { EmojiProps } from "@/emojis/emojis";


const Emoji: React.FC<EmojiProps> = ({ emoji, isAssociated, projectUrl }) => {
  const content = isAssociated && projectUrl ? (
    <a href={projectUrl} className="opacity-100">{emoji}</a>
  ) : (
    <span className="opacity-30">{emoji}</span>
  );

  return (
    <div className="text-2xl">
      {content}
    </div>
  );
};


export default Emoji;
