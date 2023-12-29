import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import GlobalContext from '@/contexts/global-context'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      <GlobalContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext>
    </>
  )
}
