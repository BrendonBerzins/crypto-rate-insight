'use client'

import FixedNavbar from "@/components/layout/navbar/FixedNavbar"
import Image from "next/image";
import { useEffect, useState } from "react"
import { FaBitcoin } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import Button from '@mui/material/Button';

type Datacoins = {
    id: number;
    market_cap_rank?: string;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    total_volume: number;
    market_cap: number;
}

export default function Cryptocurrency(){
    const [data, setData] = useState([]);
    const [dataReverse, setDataReverse] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [dataRank, setDataRank] = useState([]);
    const [dataLessRank, setDataLessRank] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    async function getData(){
        const url = 'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8fd1ad47c8msh0e48c1c389b3321p10bb57jsn28f2f6c83d46',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            setData(result)
            setOriginalData(result)
            setLoading(false)
            setDataRank(result.slice(0, 3))
            setDataLessRank(result.slice(96, 99))
        } catch (error) {
            console.error(error);
        }
    }
    getData();
},[])
    useEffect(() => {
    async function getReverseData(){
        const url = 'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8fd1ad47c8msh0e48c1c389b3321p10bb57jsn28f2f6c83d46',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const resultReverse = await response.json();
            setDataReverse(resultReverse.reverse())

        } catch (error) {
            console.error(error);
        }
    }
    getReverseData();
},[])

    function dataCoin(price:number){
        return price.toLocaleString('en-US')
    }
    if(loading){
        return(
            <section className="pastel-background h-full">
                <FixedNavbar />
                <section className="white-color h-screen flex items-center justify-center">
                <AiOutlineLoading className="text-5xl animate-spin"/>
                </section>
            </section>
        )
    }
    return(
        <main className="pastel-background h-full">
            <FixedNavbar />
            <section className="pt-28 white-color">
                <h2 className="text-2xl font-[600] p-10">See All Cryptocurrency Prices</h2>
                <div className="flex xl:flex-row flex-col gap-2 xl:h-80 h-full w-full p-10">
                    <div className="w-full h-full flex gap-2 flex-col">
                        <div className="w-full h-full border-2 border-[#2e2e38] rounded-md pl-2">
                            <h3 className="text-xl">$1,480,688,111,923</h3>
                            <div className="flex gap-3">
                                <p className="text-[#42424f]">Market Capitalization</p>
                                <div className="flex gap-2 text-green-500">
                                    <IoMdArrowDropup />
                                    <span>2.7%</span>
                                </div>
                            </div>
                            <p className="text-[#42424f]">The global cryptocurrency market cap today is $1.48 Trillion</p>
                        </div>
                    <div className="w-full h-full flex gap-2 flex-col">
                        <div className="w-full h-full border-2 border-[#2e2e38] rounded-md pl-2">
                            <h3 className="text-xl">$74,331,120,736</h3>
                            <div className="flex gap-3">
                                <p className="text-[#42424f]">24h Trading Volume</p>
                            </div>
                            <p className="text-[#42424f]">The global Trading volume today is $74.333 Billion</p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full h-full border-2 border-[#2e2e38] rounded-md p-5">
                        <h3 className="text-xl">🔥 Trending</h3>
                        <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
                        {dataRank.map((data:Datacoins) => (
                            <div key={data.id} className="flex gap-2 w-full">
                                <Image src={data.image} alt={data.name} height={30} width={30} className="rounded-full"/>
                                <p className="w-full">{data.name}</p>
                                <span className="w-full md:block hidden">{data.symbol.toUpperCase()}</span>
                                <span className="w-full">$ {dataCoin(data.current_price)}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-[#2e2e38] rounded-md p-5">
                    <h3 className="text-xl">💢 Less popular</h3>
                        <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
                        {dataLessRank.map((data:Datacoins) => (
                            <div key={data.market_cap_rank} className="flex gap-2 w-full">
                                <Image src={data.image} alt={data.name} height={30} width={30} className="rounded-full"/>
                                <p className="w-full">{data.name}</p>
                                <span className="w-full md:block hidden">{data.symbol.toUpperCase()}</span>
                                <span className="w-full">$ {dataCoin(data.current_price)}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <h3 className="pl-10 pb-3 text-lg">Order By</h3>
                <div className="flex gap-10  pl-10 pb-10">
                <Button size="small" variant="outlined"
                    onClick={() => setData(originalData)}>Trending</Button>
                <Button size="small" variant="outlined"
                    onClick={() => setData(dataReverse)}>Less</Button>
                </div>
                <div className="flex items-center gap-5 w-full p-5 pastel-background-div">
                    <span className="w-full md:block hidden">Rank</span>
                    <FaBitcoin className="text-3xl w-[150px] text-[#9636f8]"/>
                    <p className="w-full lg:block hidden"></p>
                    <span className="w-full lg:block hidden"></span>
                    <span className="w-full">Price</span>
                    <span className="w-full md:block hidden">Volume</span>
                    <span className="w-full">Market Cap</span>
                </div>
            { data.map((data: Datacoins) => (
                    <div key={data.id} className="flex items-center arou gap-5 w-full border-[#2e2e38] border-t p-5">
                        <span className="w-full md:block hidden">{data.market_cap_rank}</span>
                        <Image src={data.image} alt='' height={30} width={30} />
                        <p className="w-full lg:block hidden">{data.name}</p>
                        <span className="w-full lg:block hidden">{data.symbol.toUpperCase()}</span>
                        <span className="w-full">$ {dataCoin(data.current_price)}</span>
                        <span className="w-full md:block hidden">$ {dataCoin(data.total_volume)}</span>
                        <span className="w-full">$ {dataCoin(data.market_cap)}</span>
                    </div>
                    ))}
            </section>
        </main>
    )
}