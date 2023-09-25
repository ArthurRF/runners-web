import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { User, UserPlus } from "react-feather";
import HamburguerButton from "./HamburguerButton";

const NavBar: React.FC = () => {
  const { pathname } = useRouter();
  const isLogin = pathname === "/login";

  if (isLogin) {
    return <></>;
  }
  return (
    <div className="drawer z-10">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    // <div className="navbar p-6 md:w-screen mb-4">
    //   <div className="max-w-screen-xl mx-auto my-0 w-full">
    //     <div className="flex-1">
    //       <Link href={""}>
    //         <Image
    //           src={"/logo.jpg"}
    //           alt="logo"
    //           width={150}
    //           height={150}
    //         ></Image>
    //       </Link>
    //     </div>

    //     <div className="md:hidden">
    //       <HamburguerButton />
    //     </div>

    //     <div className="hidden md:block">
    //       <ul className="menu menu-horizontal px-1 text-lg font-medium">
    //         <li>
    //           <Link href={""}>Eventos concluídos</Link>
    //         </li>
    //         <li>
    //           <Link href={""}>Próximos eventos</Link>
    //         </li>
    //         <li>
    //           <Link href={""}>
    //             <UserPlus fill="true" />
    //             Cadastre-se
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href={""}>
    //             <User fill="true" />
    //             Entre
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
