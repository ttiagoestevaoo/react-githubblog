import { RouterProvider } from "react-router-dom";
import { router } from "../../providers/router";
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()


export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>

    )
}