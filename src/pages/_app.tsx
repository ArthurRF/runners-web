import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "@/components/Layout"
import GlobalContext from "@/contexts/global-context"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <GlobalContext session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext>
    </>
  )
}
