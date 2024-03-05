import { EmojiProps } from "@/emojis/emojis";


const Emoji: React.FC<EmojiProps> = ({ emoji, isAssociated }) => {
  return (
    <div
      style={{
        opacity: isAssociated ? 1 : 0.3,
        fontSize: '24px',
        margin: '10px',
      }}
    >
      {emoji}
    </div>
  );
};

export default Emoji;
