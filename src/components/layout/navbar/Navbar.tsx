import Link from "next/link";
import { FaFire } from "react-icons/fa";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between pastel-background h-[5rem] white-color border-b border-[#2e2e38] shadow-xl">
            <Link href={'/'} className="flex gap-1 ml-5">
                <FaFire  className="text-2xl text-[#9668c7]"/>
                <span className="text-xl">CryptoRateInsight</span>
            </Link>
            <ul className="flex gap-10">
                <Link href={'/cryptocurrency'}>Cryptocurrency</Link>
                <Link href={'/all-coins'}>All Coins</Link>
                <Link href={'/nft'}>NFT</Link>
            </ul>
            <button className="mr-8 border-2 border-[#9668c7] p-2 rounded-full">
                <Link href={'/'}>Discover</Link>
            </button>
        </nav>
    )
}