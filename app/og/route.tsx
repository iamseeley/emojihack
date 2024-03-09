import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import emojis from '../../emojis/emojis.json';

export const runtime = 'edge';

// Function to get 100 random emojis from the list
function getRandomEmojis(emojiList, count) {
  const shuffled = [...emojiList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(e => e.emoji).join('');
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const projectTitle = searchParams.get('title');

  // Get 100 random emojis
  const randomEmojiBackground = getRandomEmojis(emojis, 1000);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '42px',
            color: 'rgba(255, 255, 255, 0.5)',
            lineHeight: '1',
            whiteSpace: 'wrap',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            // zIndex: -1,
          }}
        >
          {/* {randomEmojiBackground} */}
        </div>
        <div
          style={{
            // zIndex: 1,
            maxWidth: '80%',
            textAlign: 'center',
            fontSize: '100px',
            color: 'black',
          }}
        >
          {projectTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
