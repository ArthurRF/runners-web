import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'

export const LoginButton: React.FC = () => {
  const { user: clerkUser } = useUser()

  return (
    <>
      <SignedIn>
        <UserButton showName />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  )
}
