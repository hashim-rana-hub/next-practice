import { Suspense } from "react";
import PostsList from "./PostsList";

// This is a Server Component
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function PostsPage() {
  // Fetch data on the server
  const initialData = await getPosts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostsList initialData={initialData} />
    </Suspense>
  );
}

// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { Suspense } from "react";

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }
//   return res.json();
// };

// function Posts() {
//   const {
//     data: posts,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["posts"],
//     queryFn: fetchPosts,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function PostsPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Posts />
//     </Suspense>
//   );
// }
