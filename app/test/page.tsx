import { randomEmojiBackground } from "../utils/getRandomEmojis"





export default function Emojis() {
    return (
        <>
      
            <div className="overflow-hidden w-full h-full flex flex-wrap">{randomEmojiBackground}</div>
        
        </>
    )
}