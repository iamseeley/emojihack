import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const emoji = searchParams.get('emoji');
  const userAgent = req.headers.get('User-Agent') || '';

  if (!emoji) {
    return new Response('Invalid request', { status: 400 });
  }

  const isMobile = Boolean(
    userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );

 return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: isMobile ? 'Apple Color Emoji' : 'sans-serif', // <-- Add this line
        }}
      >
        <div
          style={{
            fontSize: isMobile ? '96px' : '48px',
          }}
        >
          {emoji}
        </div>
      </div>
    ),
    {
      width: isMobile ? 128 : 64,
      height: isMobile ? 128 : 64,
      emoji: 'twemoji', // <-- Update this line
    }
  );
}