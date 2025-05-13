import { NextRequest, NextResponse } from "next/server";

const blogs = [
  {
    title: "Why Every African Business Needs a Website in 2025",
    resume:
      "In an age where 70% of customers look online before making a purchase...",
  },
];

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json(blogs);
}
