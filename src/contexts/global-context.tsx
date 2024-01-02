import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

const GlobalContextProvider: React.FC<any> = ({ children, session }) => {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          profileSection__emailAddresses: 'hidden',
          profileSection__danger: 'hidden',
          // userButtonOuterIdentifier: 'hidden'
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}

export default GlobalContextProvider
