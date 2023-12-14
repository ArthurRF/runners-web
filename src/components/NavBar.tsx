import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { User, UserPlus } from "react-feather"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"

const RegisterLink = (
  <Link href={"/"}>
    <UserPlus fill="true" />
    Cadastre-se
  </Link>
)
const LoginLink = (
  <Link href={"/api/auth/signin"}>
    <User fill="true" />
    Entre
  </Link>
)

const NavBar: React.FC = () => {
  const [user, setUser] = useState()

  const { pathname } = useRouter()
  const isLogin = pathname === "/login"
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
    <div className="drawer drawer-end z-10">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar max-w-screen-xl mx-auto">
          <div className="flex-1">
            <Link href={"/"}>
              <Image
                src={"/logo.jpg"}
                alt="logo"
                width={150}
                height={150}
              ></Image>
            </Link>
          </div>
          <div className="flex-none md:hidden">
            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal p-0">
              {/* Navbar menu content here */}
              <li>{RegisterLink}</li>
              <li>{user ? user.name : LoginLink}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>{RegisterLink}</li>
          {user && (
            <li>
              <img src={`${user.image}`} className="round" />
            </li>
          )}
          <li>{user ? user.name : LoginLink}</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
