import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { User, UserPlus } from "react-feather"

const NavBar: React.FC = () => {
  const { pathname } = useRouter()
  const isLogin = pathname === '/login'

  if (isLogin) {
    return <></>
  }
  return (
    <div className="navbar bg-base-100 p-6 w-full">
      <div className="max-w-screen-xl mx-auto my-0 w-full">
        <div className="flex-1">
          <Link href={''}>
            <Image src={'/logo.jpg'} alt='logo' width={150} height={150}></Image>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href={''}>Eventos concluídos</Link></li>
            <li><Link href={''}>Próximos eventos</Link></li>
            <li>
              <Link href={''}><UserPlus fill='true' />Cadastre-se</Link>
            </li>
            <li>
              <Link href={''}><User fill='true' />Entre</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar