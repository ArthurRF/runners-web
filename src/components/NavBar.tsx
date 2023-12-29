import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { User, LogOut } from 'react-feather'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const LoginLink = (
  <Link href={'/api/auth/signin'}>
    <User fill='true' />
    Entre
  </Link>
)

const NavBar: React.FC = () => {
  const [user, setUser] = useState<{
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
  }>()

  const { pathname } = useRouter()
  const isLogin = pathname === '/login'
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])

  if (isLogin) {
    return <></>
  }

  return (
    <div className='drawer drawer-end z-10 bg-neutral-300'>
      <input id='nav-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='w-full navbar max-w-screen-xl mx-auto'>
          <div className='flex-1'>
            <Link href={'/'}>
              <Image
                src={'/logo.svg'}
                alt='logo'
                width={80}
                height={80}
              ></Image>
            </Link>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal p-0'>
              <li>
                {user ? (
                  <details>
                    <summary>
                      <div className='flex items-center gap-2'>
                        <Image
                          className='rounded-full p-0'
                          src={user.image ?? '/default-profile.svg'}
                          alt='profile-avatar'
                          width={45}
                          height={45}
                        ></Image>
                        <p className='hidden md:block'>{user.name}</p>
                      </div>
                    </summary>
                    <ul className='!m-0 w-full'>
                      <li>
                        <Link
                          href={'/api/auth/signout'}
                          className='flex justify-between'
                        >
                          <p>Sair</p>
                          <LogOut />
                        </Link>
                      </li>
                    </ul>
                  </details>
                ) : (
                  LoginLink
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
