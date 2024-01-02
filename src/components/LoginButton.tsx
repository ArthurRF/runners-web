import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export const LoginButton: React.FC = () => {
  return (
    <>
      <SignedIn>
          <UserButton showName />
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <div className='bg-midGreen text-white'>Entrar</div>
        </SignInButton>
      </SignedOut>
    </>
  )
}
