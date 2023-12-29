import Image from 'next/image'
import Link from 'next/link'
import { LoginButton } from './LoginButton'

const NavBar: React.FC = () => {
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
                <LoginButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
