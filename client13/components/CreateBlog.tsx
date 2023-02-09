"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const BACKEND_URL =
  process.env.BACKEND_URL || "https://round-refrigerator.pockethost.io";
function CreateBlog() {
  const [content, setContent] = useState("**Hello world!!!**");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [tags, setTags] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch(BACKEND_URL + "/api/collections/blogs/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        thumbnail,
        tags,
        title,
      }),
    });

    router.refresh();
  };
  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="Thumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      ></input>
      <MDEditor value={content} onChange={setContent} />
      <button onClick={create}>Submit</button>
    </div>
  );
}

export default CreateBlog;
