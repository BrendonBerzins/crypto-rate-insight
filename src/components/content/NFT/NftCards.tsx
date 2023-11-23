import { dataNft } from "@/data/NFT/Cards"
import Image from "next/image"
import Link from "next/link"
import { FaCoins } from "react-icons/fa6"

export default function NftCards(){
    return(
        <section className="flex flex-col items-center justify-center white-color">
            <div className="flex items-center justify-between w-[85%]">
                <h2 className="text-2xl font-[600]">Top NFTs</h2>
                <Link href={'/learn'} className="font underline hover:text-sky-500 transition ease-linear">Read More</Link>
            </div>
        <section className="w-full flex flex-wrap items-center justify-center mb-[5rem]">
            {dataNft.map((data, index) => (
                <div key={index} className={`bg-[#353444] rounded-xl p-5 flex flex-col items-center justify-center 
                white-color scale-[0.9] transition ease-in-out border-[#353444] border-2 cursor-pointer
                hover:scale-[1] hover:border-2 hover:border-sky-500`}>
                    <div>
                        <Image src={data.image} alt={data.name} width={250} height={250} 
                        className="rounded-md"/>
                        <span className="bg-[#0f1019] p-2 rounded-md relative bottom-60 left-36 text-[10px] flex w-24 gap-2 items-center"> <FaCoins /> {data.floor}</span>
                    </div>
                    <div className=" w-full">
                        <p className="mb-2 font-[600]">{data.name}</p>
                        <div className="flex justify-between">
                            <span className="p-2 bg-[#9636f8] font-[400] rounded-md">{data.price}</span>
                            <Link href={'/learn'} className="border-2 border-[#9668c7] p-2 rounded-full transition ease-in-out hover:bg-[#9668c7]">Read More</Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        </section>
    )
}