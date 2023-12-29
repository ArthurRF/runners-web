import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginPage = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/')
  }, [])
  return <p></p>
}

export default LoginPage
