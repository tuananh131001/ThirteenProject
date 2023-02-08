const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
async function getBlog(id: string) {
  const res = await fetch(
    BACKEND_URL + `/api/collections/blogs/records/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  const matterResult = matter(data.content);
  return matterResult;
}

export default async function BlogPage({ params }: any) {
  const blog = await getBlog(params.id);
  return (
    <div>
      
      <article className="prose dark:prose-p:text-white dark:prose-invert">
      <h1 className="text-orange-700 dark:text-yellow-300">{blog.data.title}</h1>
      <Markdown>{blog.content}</Markdown>
      </article>
    </div>
  );
}
