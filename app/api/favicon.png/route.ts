import { NextRequest, NextResponse } from "next/server";
import jimp from "jimp";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const emoji = searchParams.get("emoji");

  if (!emoji) {
    return new Response("Invalid request", { status: 400 });
  }

  const font = await jimp.loadFont(jimp.FONT_SANS_128_BLACK);
  const image = new jimp(128, 128, 0xffffffff);
  image.print(font, 0, 0, emoji, 128);

  const buffer = await image.getBufferAsync(jimp.MIME_PNG);
  const response = new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });

  return response;
}