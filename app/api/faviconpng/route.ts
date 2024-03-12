import { NextRequest, NextResponse } from "next/server";
import jimp from "jimp";

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const emoji = searchParams.get("emoji");

    if (!emoji) {
      return new Response("Invalid request", { status: 400 });
    }

    const canvas = new OffscreenCanvas(128, 128);
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Failed to get canvas context");
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "96px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#000000";
    context.fillText(emoji, canvas.width / 2, canvas.height / 2);

    const buffer = await canvas.convertToBlob();
    const response = new Response(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });

    return response;
  } catch (error) {
    console.error("Error generating favicon:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}