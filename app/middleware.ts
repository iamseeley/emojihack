import { NextResponse } from 'next/server';

export function middleware(req) {
  const { userAgent } = req.headers.get('user-agent') || {};
  const isSafariOnIOS = /Safari/.test(userAgent) && /iPhone|iPad|iPod/.test(userAgent);
  
  const res = NextResponse.next();
  
  // Set a custom header or cookie to indicate Safari on iOS
  // Here, we're setting a header, but you could set a cookie similarly
  res.headers.set('X-Custom-Favicon', isSafariOnIOS ? 'ios' : 'default');

  return res;
}
