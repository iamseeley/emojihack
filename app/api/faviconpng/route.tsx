import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const emoji = searchParams.get('emoji');

  if (!emoji) {
    return new Response('Invalid request', { status: 400 });
  }

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
        }}
      >
        <div
          style={{
            fontSize: '96px',
          }}
        >
          {emoji}
        </div>
      </div>
    ),
    {
      width: 128,
      height: 128,
      emoji: 'twemoji',
    }
  );

}