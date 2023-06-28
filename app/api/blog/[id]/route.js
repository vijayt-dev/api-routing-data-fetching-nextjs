import { getById, getPosts, setPosts } from "@/utils/data";
import { NextResponse } from "next/server";

export const GET = async (req, resp) => {
  try {
    const id = req.url.split("blog/")[1];
    console.log(params, "post");
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

// export const POST = async (req, resp) => {
//   try {
//     const posts = await req.json();
//     console.log("posts ", posts);
//     setPosts(posts);
//     return NextResponse.json({ message: "OK", posts }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "ERROR" }, { status: 500 });
//   }
// };
