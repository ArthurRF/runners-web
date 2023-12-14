import { SessionProvider } from "next-auth/react"

const GlobalContextProvider: React.FC<any> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default GlobalContextProvider
