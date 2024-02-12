import logo from "/logo.svg"
import imgUrl from '../assets/company-logo.png'

import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export function Nav() {

  const links = [
    { name: "Quem somos", url: "/"},
    { name: "Área de atuação", url: "/"},
    { name: "Localização", url: "/"},
    { name: "Contato", url: "/"},
  ];

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="min-h-40 bg-slate-950 flex items-center justify-between px-8 text-slate-100 ">

        <a href="/">
          <div className="flex gap-2 mr-auto lg:mr-20">
            <img src={logo} alt="logo" className="h-16"/>
            <img src={imgUrl} alt="logo" className="h-16"/>
          </div>
        </a>

        <div className="cursor-pointer text-5xl visibles lg:hidden" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <IoMenu /> }          
        </div>

        <ul className={`px-8 lg:px-0 lg:flex lg:items-center lg:flex-1 lg:max-w-[1000px] justify-around absolute lg:static bg-slate-900 lg:bg-transparent left-0 w-full -z-10 lg:z-auto transition-all ease-in duration-500 ${isOpen ? 'top-40' : '-top-52' }`}>
          {
            links.map((link) => (
              <li className="hover:text-slate-400 duration-500 my-7 lg:my-0 px-2 lg:px-0">
                <a href={link.url}>{link.name}</a>
              </li>
            ))
          }
          <button className="bg-blue-900/70 p-2 duration-300 hover:bg-blue-900 hover:text-slate-50 block lg:inline my-7 lg:my-0">Decisões judiciais</button>
          <button className="my-7 lg:my-0 block lg:inline px-2 lg:px-0 text-2xl">🇧🇷</button>
        </ul>

      </nav>
    </>
  );
}