"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Don't refetch on window focus for SSR data
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000, // Consider data fresh for 60 seconds
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// "use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";

// export default function ReactQueryProvider({ children }) {
//   const [queryClient] = useState(() => new QueryClient());
//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// }
