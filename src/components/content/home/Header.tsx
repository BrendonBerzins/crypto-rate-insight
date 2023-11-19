import Image from "next/image";
import { FaBitcoinSign, FaCoins, FaDollarSign } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function Header() {
    return(
        <section className="flex flex-col items-center justify-center h-[100vh] white-color">
            <div className="flex justify-around items-center w-full">
                <Image src='/home/hand-coins.webp' alt='' width={300} height={300}/>
                <div className="flex gap-2 items-end justify-end flex-col text-left">
                    <h1 className="text-6xl">Discover, Find</h1>
                    <h2 className="text-5xl gradient-text pb-5">Cryptocurrency Data</h2>
                    <p>Access the worlds most comprehensive cryptocurrency dataset</p>
                    <div className="flex gap-5 mt-5">
                        <button className="border-2 border-[#9668c7] p-3 rounded-full">Explore</button>
                        <button className="border-2 border-[#9668c7] p-3 rounded-full">View More</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-around mt-28 w-full">
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