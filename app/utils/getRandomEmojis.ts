import emojis from '../../emojis/emojis.json';




function getRandomEmojis(emojiList, count) {
    const shuffled = [...emojiList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(e => e.emoji).join('');
  }
  

// Get 1000 random emojis
export const randomEmojiBackground = getRandomEmojis(emojis, 1000);