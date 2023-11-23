'use client'

import Link from "next/link";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <nav className="flex flex-col fixed w-full z-10">
            <div className="flex items-center justify-between pastel-background h-[5rem] white-color border-b border-[#2e2e38] shadow-xl">
                <Link href={'/'} className="flex gap-1 ml-5">
                    <FaFire  className="text-2xl text-[#9668c7]"/>
                    <span className="text-xl">CryptoRateInsight</span>
                </Link>
                <ul className="md:flex gap-10 hidden">
                <Link href={'/'}>Home</Link>
                    <Link href={'/cryptocurrency'}>Cryptocurrency</Link>
                    <Link href={'/learn'}>Learn</Link>
                </ul>
                <button className="md:flex hidden mr-8 border-2 border-[#9668c7] p-2 rounded-full transition ease-in-out hover:bg-[#9668c7]">
                    <Link href={'/learn'}>Discover</Link>
                </button>
                <button className="p-3 text-3xl md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <CgClose /> : <HiMenuAlt3 />}
                </button>
            </div>
                {openMenu && 
                    <div className="w-full flex flex-col items-center justify-around text-center white-color p-10 menuNavbar">
                    <ul className="flex flex-col gap-10 mb-5">
                        <Link onClick={() => setOpenMenu(false)} href={'/'}>Home</Link>
                            <Link onClick={() => setOpenMenu(false)} href={'/cryptocurrency'}>Cryptocurrency</Link>
                            <Link onClick={() => setOpenMenu(false)} href={'/learn'}>Learn</Link>
                        </ul>
                        <button className="border-2 border-[#9668c7] p-2 rounded-full transition ease-in-out hover:bg-[#9668c7]">
                            <Link onClick={() => setOpenMenu(false)} href={'/learn'}>Discover</Link>
                        </button>
                    </div> }
        </nav>
    )
}
