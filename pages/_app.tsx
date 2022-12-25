import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import { Header } from '../components';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
