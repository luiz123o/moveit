import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AppThemeProvider } from '../contexts/theme/index'

import { ChallengeProvider } from 'contexts/ChallengesContext'
import { ToastProvider } from 'hooks/Toast'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppThemeProvider>
        <ToastProvider>
          <ChallengeProvider>
            <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;500;600;700&family=Rajdhani:wght@400;500;600&display=swap"
                rel="stylesheet"
              />
              <link rel="shortcut icon" href="/favicon.png" />
              <link rel="apple-touch-icon" href="/favicon.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="description" content="MoveIt" />
            </Head>
            <Component {...pageProps} />;
          </ChallengeProvider>
        </ToastProvider>
      </AppThemeProvider>
    </>
  )
}

export default App
