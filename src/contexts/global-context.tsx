import { ClerkProvider } from '@clerk/nextjs'

const GlobalContextProvider: React.FC<any> = ({ children, session }) => {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default GlobalContextProvider
