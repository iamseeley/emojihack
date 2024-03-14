
export interface EmojiProps {
    number?: string;
    emoji:  string;
    unicode?: string;
    name?: string;
    apple?: string;
    isAssociated?: boolean;
    projectUrl?: string,
}

import emojis from './emojis.json';

export const emojiArray: EmojiProps[] = emojis as EmojiProps[];