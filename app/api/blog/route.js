import { getPosts, setPosts } from "@/utils/data"
import { NextResponse } from "next/server"

export const GET = async (req, resp) => {
  try{
    const posts = getPosts();
    return NextResponse.json({message: "OK", posts}, {status: 200})
  }catch(error) {
    return NextResponse.json({message: "ERROR"}, {status: 500})
  }
}

export const POST = async (req, resp) => {
    try{
      const posts = await req.json();
      console.log("posts ", posts);
      setPosts(posts);
      return NextResponse.json({message: "OK", posts}, {status: 200})
    }catch(error) {
      return NextResponse.json({message: "ERROR"}, {status: 500})
    }
  }