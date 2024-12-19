"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default function PostsList({ initialData }) {
  const {
    data: posts,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialData,
    suspense: true,
  });

  if (isError) {
    throw error;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
