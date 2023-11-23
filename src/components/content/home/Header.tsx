import Image from "next/image";
import Link from "next/link";
import { FaBitcoinSign, FaCoins, FaDollarSign } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function Header() {
    return(
        <section className="flex flex-col items-center justify-center xl:h-[100vh] h-full white-color">
            <div className="flex xl:flex-row flex-col justify-around items-center w-full">
                <Image src='/home/hand-coins.webp' alt='coins' width={300} height={300}/>
                <div className="flex gap-2 xl:items-end xl:justify-end items-center justify-center flex-col xl:text-left text-center">
                    <h1 className="sm:text-6xl text-5xl">Discover, Find</h1>
                    <h2 className="sm:text-5xl gradient-text pb-5 text-4xl">Cryptocurrency Data</h2>
                    <p>Access the worlds most comprehensive cryptocurrency dataset</p>
                    <div className="flex gap-5 mt-5">
                        <Link href={'/cryptocurrency'} className="border-2 border-[#9668c7] p-3 rounded-full transition ease-in-out hover:bg-[#9668c7]">Explore</Link>
                        <Link href={'/learn'} className="border-2 border-[#9668c7] p-3 rounded-full transition ease-in-out hover:bg-[#9668c7]">Learn</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-around mt-28 w-full gap-20 mb-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="pastel-blue p-3 rounded-md white-color mb-5">
                        <FaBitcoinSign/>
                    </div>
                    <span className="font-[600]">Cryptocurrency Data</span>
                    <p>Check all cryptocurrency data</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="pastel-green p-3 rounded-md white-color mb-5">
                        <FaDollarSign/>
                    </div>
                    <span className="font-[600]">Price</span>
                    <p>Check all cryptocurrency Prices</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="pastel-purple p-3 rounded-md white-color mb-5">
                        <FaCoins />
                    </div>
                    <span className="font-[600]">Carket Cap</span>
                    <p>See what the market prices are</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="pastel-red p-3 rounded-md white-color mb-5">
                        <IoAnalyticsSharp />
                    </div>
                    <span className="font-[600]">Developer stats</span>
                    <p>See all market statistics</p>
                </div>
            </div>
        </section>
    )
}