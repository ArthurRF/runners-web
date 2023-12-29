// pages/login.js
import React from 'react'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  return (
    <div className='login-container'>
      {/* Your custom background and other styling */}
      <h1>Login</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  )
}

export default LoginPage
