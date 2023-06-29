import { deletePost, getById, updatePost } from "@/utils/data";
import { NextResponse } from "next/server";

export const GET = async (req, resp) => {
  try {
    const id = req.url.split("blog/")[1];
    const post = getById(id.toString());
    if (!post) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    const { title } = await req.json();
    const id = req.url.split("blog/")[1];
    updatePost(id, title);
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const id = req.url.split("blog/")[1];
    deletePost(id, title);
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
