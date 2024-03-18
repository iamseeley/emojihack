import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import emojis from '../../emojis/emojis.json';
import { unstable_noStore as noStore } from 'next/cache';

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} `;
}

export const runtime = 'edge';


export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const projectTitle = searchParams.get('title');
  const emojiPngData = searchParams.get('emojiPng');
  const name = searchParams.get('name');
  const date = searchParams.get('date');
  const formattedDate = formatDate(date);
 
 

  return new ImageResponse(
    (
      <div
          style={{
            backgroundColor: 'white',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            gap: '20px',
          }} 
          >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              gap: '20px',
            }}
          >

          <div
            style={{
              display: 'flex',
            }}
          >
          {emojiPngData && (
          <img
            src={decodeURIComponent(emojiPngData)}
            alt="Emoji"
            style={{ margin: '0' }}
            width={104}
            height={104}
          />
          )}
          </div>
        
        
        <div style={{
          fontSize: '114px',
          fontWeight: 'bold',
        }}>
          {projectTitle}
        </div>
        
        </div>
        <div style={{
          fontSize: '74px',
        }}>
          {formattedDate}
        </div>
        <div
        style={{
          marginTop: '60px',
          fontSize: '64px',
          backgroundColor: '#2563eb',
          paddingTop: '10px',
          paddingBottom: '10px',
          paddingLeft: '30px',
          paddingRight: '30px',
          borderRadius: '20px',
          color: 'white',
        }}
        >
          {name}
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
