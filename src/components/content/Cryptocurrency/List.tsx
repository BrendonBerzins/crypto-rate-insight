'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";

export default function List(){

    const [data, setData] = useState([]);
    const url = 'https://coingecko.p.rapidapi.com/coins/list';
    useEffect(() => {
    async function getData(){
        const url = 'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': YOUR-KEY,
                'X-RapidAPI-Host': HOST
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            setData(result)
        } catch (error) {
            console.error(error);
        }
    }
    getData();
},[])
return(
        <section className="white-color text-center">
            <div className="flex items-center gap-5 w-full p-5 pastel-background-div">
                    <span className="w-full">Rank</span>
                    <FaBitcoin className="text-3xl w-[150px] text-[#9636f8]"/>
                    <p className="w-full"></p>
                    <span className="w-full"></span>
                    <span className="w-full">Price</span>
                    <span className="w-full">Volume</span>
                    <span className="w-full">Market Cap</span>
                </div>
            { data.map((data) => (
                <div key={data.id} className="flex items-center arou gap-5 w-full border-[#2e2e38] border-t p-5">
                    <span className="w-full">{data.market_cap_rank}</span>
                    <Image src={data.image} alt='' height={30} width={30} />
                    <p className="w-full">{data.name}</p>
                    <span className="w-full">{data.symbol}</span>
                    <span className="w-full">R$ {data.current_price}</span>
                    <span className="w-full">R$ {data.total_volume}</span>
                    <span className="w-full">R$ {data.market_cap}</span>
                </div>
            ))}
        </section>
    )
}