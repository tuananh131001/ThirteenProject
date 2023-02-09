import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";
const BACKEND_URL = process.env.BACKEND_URL;

async function getBlogs() {
  const res = await fetch(BACKEND_URL + "/api/collections/blogs/records");
  const data = await res.json();
  return data?.items as any[];
}
const getPostMetadata = async () => {
  const blogs = await getBlogs();
  const newBlogs = blogs.map((blogs: any) => {
    return {
      title: blogs.title,
      created: blogs.created,
      id: blogs.id,
      tags: blogs.tags,
    };
  });

  return newBlogs;
};

export default getPostMetadata;
