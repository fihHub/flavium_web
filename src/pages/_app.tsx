import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import session provider as "named import"
import { SessionProvider } from 'next-auth/react'

// destructure pageProps, to get the session, and the rest of the pageProps.
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
