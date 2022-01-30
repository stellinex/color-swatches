import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
