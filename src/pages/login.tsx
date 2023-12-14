import { useState } from "react"
import { signIn } from "next-auth/react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("e: ", e)
    e.preventDefault()
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })
    console.log("result: ", result)

    if (result?.error) {
      // Handle login error
      console.error(result.error)
    } else {
      // Redirect to dashboard or desired page
      window.location.href = "/dashboard"
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login
