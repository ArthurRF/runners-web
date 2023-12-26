import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
			if (account?.provider === 'google') {
				const body = {
					name: user.name,
					email: user.email,
					avatarUrl: user.image,
					googleId: user.id
				}

				const res = await fetch(`${process.env.CORE_API_URL}/users/auth`, {
					method: 'POST',
					headers: {
							'Content-Type': 'application/json',
					},
					body: JSON.stringify(body)
				})
			}
			return true
    },
  },
}

export default NextAuth(authOptions)