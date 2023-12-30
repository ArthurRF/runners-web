import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

const GlobalContextProvider: React.FC<any> = ({ children, session }) => {
  return <ClerkProvider localization={ptBR}>{children}</ClerkProvider>
}

export default GlobalContextProvider
