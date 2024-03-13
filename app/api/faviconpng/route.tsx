import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const emoji = searchParams.get('emoji');
  // const userAgent = req.headers.get('User-Agent') || '';
  
  if (!emoji) {
    return new Response('Invalid request', { status: 400 });
  }

 
 return new ImageResponse(
    (
      <div
        style={{
            fontSize: 24,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
        }}
      >
          {emoji}
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}

 