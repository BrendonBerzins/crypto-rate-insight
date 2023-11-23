'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";

type Datacoins = {
    id: number;
    market_cap_rank: string;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    total_volume: number;
    market_cap: number;
}


export default function List(){

    const [data, setData] = useState([]);
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
            setData(result.slice(0, 15))
        } catch (error) {
            console.error(error);
        }
    }
    getData();
    },[])

    function dataCoin(price:number){
        return price.toLocaleString('en-US')
    }
return(
        <section className="white-color text-center pb-10">
            <div className="w-full p-5">
                <h2 className="text-2xl font-[600] text-left">Cryptocurrency Prices by Market Cap</h2>
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
                    <Link href={'/cryptocurrency'} 
                    className="border-2 border-[#9668c7] p-2 rounded-full transition ease-in-out hover:bg-[#9668c7]">See All</Link>
        </section>
                    )
}