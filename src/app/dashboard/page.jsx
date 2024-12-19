// import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

// // Define your data fetching function
// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   // Prefetch the data on the server
//   await queryClient.prefetchQuery(["posts"], fetchPosts);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

// export default function PostsPage() {
//   // Use the cached data
//   const { data: posts } = useQuery(["posts"], fetchPosts);

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
