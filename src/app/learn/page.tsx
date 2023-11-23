import FixedNavbar from "@/components/layout/navbar/FixedNavbar"
import Image from "next/image"
import Link from "next/link";
import { BiSolidLock, BiTransferAlt } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Learn(){
    return(
        <main className="pastel-background h-full white-color">
            <FixedNavbar />
            <section className="pt-28 pl-10">
                <div className="flex md:flex-row flex-col items-center">
                    <div className="md:w-[50%] w-full">
                        <h1 className="text-5xl">How <span className="gradient-text-purple-yellow">Bitcoin Works</span></h1>
                        <p className="text-[#40404a] w-full">Bitcoin is a decentralized digital currency that operates on a peer-to-peer 
                        network, allowing
                        users to send and receive payments without the need for a central authority like a bank. The underlying 
                        technology that enables the functioning of Bitcoin is blockchain.</p>
                        <div className="flex gap-5 items-center mt-10">
                            <Link href={'#about'} className="border-2 border-[#efb919] p-2 rounded-full transition ease-in-out hover:bg-[#efb919]">Learn</Link>
                            <Link href={'#bitcoins'} className="border-2 border-[#9668c7] p-2 rounded-full transition ease-in-out hover:bg-[#9668c7]">Bitcoins</Link>
                        </div>
                    </div>
                    <Image src='/learn/bitcoin-header.png' alt='' width={450} height={450}/>
                </div>
            </section>
            <section id='about' className="flex flex-col items-center justify-center mt-24">
                <h2 className="text-4xl">About Cryptocurrency</h2>
                <p className="text-[#40404a]">Heres a detailed explanation of how Bitcoin works</p>
                <div className="flex xl:flex-row flex-col items-center mt-20 justify-around">
                    <Image className="hidden xl:block" src='/learn/bitcoin-works.png' alt='bitcoin' width={450} height={450}/>
                    <div className="xl:w-[50%] w-full xl:p-0 p-10 flex gap-10 flex-col">
                        <div className="flex gap-10 items-center">
                            <div  className="p-2 rounded-md pastel-yellow">
                                <BiSolidLock className="text-2xl"/>
                            </div>
                            <div>
                                <span className="text-2xl">Blockchain</span>
                                <p className="text-[#40404a]">The blockchain is a chain of blocks, where each block 
                                contains a list of transactions. </p>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <div  className="p-2 rounded-md pastel-blue">
                            <BiTransferAlt className="text-2xl"/>
                            </div>
                            <div>
                                <span className="text-2xl">Transactions</span>
                                <p className="text-[#40404a]">When someone wants to send Bitcoin 
                                to another user, they create a transaction. The sender signs the transaction
                                with their private key, providing mathematical proof that they own the bitcoins being transferred. </p>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <div  className="p-2 rounded-md pastel-red">
                                <FaHandHoldingHeart className="text-2xl"/>
                            </div>
                            <div>
                                <span className="text-2xl">Transparency</span>
                                <p className="text-[#40404a]">All transactions are publicly accessible on the 
                                blockchain, promoting transparency and accountability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='bitcoins' className="flex flex-col items-center justify-center">
                <h3 className="text-2xl w-full pl-10 pt-28">Using Bitcoin</h3>
                <div className="flex md:flex-row flex-col gap-5 p-10">
                    <div className="md:w-[50%] w-full">
                        <Image src="/learn/ether.webp" alt="ethereum" width={650} height={300} className="rounded-xl"/>
                        <p className="text-[#40404a] pt-10">Using Bitcoin involves a few key steps, including obtaining a Bitcoin 
                        wallet, acquiring Bitcoin through various methods, and then using the cryptocurrency for transactions. </p>
                    </div>
                    <div className="md:w-[50%] w-full">
                    <h4 className="text-xl w-full pb-10">Step by Step</h4>
                        <div>
                            <span className="text-lg">Get a Bitcoin Wallet and Choose a Wallet Type:</span>
                            <p className="text-[#40404a] pt-5"><span className="white-color">Software Wallets:</span> These can be online (web-based), desktop, or mobile applications.</p>
                            <p className="text-[#40404a]"><span className="white-color">Hardware Wallets:</span> Physical devices that store Bitcoin offline for enhanced security.</p>
                            <p className="text-[#40404a] pb-5"><span className="white-color">Paper Wallets:</span> Physical documents with your public and private keys printed on them.</p>
                            <span className="text-lg">Set Up Your Wallet:</span>
                            <p className="text-[#40404a]">Follow the instructions provided by the wallet provider 
                            to create and secure your wallet.
                            Generate a backup (usually in the form of a recovery phrase) to restore your wallet if needed.</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl w-full pl-10 pt-5">Acquire Bitcoin</h3>
                <div className="flex xl:flex-row flex-col gap-5 p-10">
                    <div className="xl:w-[50%] w-full">
                        <p className="text-[#40404a]"><span className="white-color">Buy Bitcoin: </span>Use a cryptocurrency 
                        exchange or platform to buy Bitcoin using fiat currency (such as USD, EUR, etc.).
                        Popular exchanges include Coinbase, Binance, Kraken, and others.</p>
                        <p className="text-[#40404a]"><span className="white-color">Bitcoin ATMs: </span>Some locations have 
                        Bitcoin ATMs where you can exchange cash for Bitcoin.</p>
                        <p className="text-[#40404a]"><span className="white-color">Peer-to-Peer (P2P) Trading: </span>Platforms like 
                        LocalBitcoins and Paxful allow you to buy Bitcoin directly from other users.</p>
                        <p className="text-[#40404a] pb-5"><span className="white-color">Mining: </span>While not practical for everyone, some 
                        individuals mine Bitcoin by contributing computing power to the network.</p>
                        <span className="text-lg">Secure Your Bitcoin</span>
                        <p className="text-[#40404a]"><span className="white-color">Private Keys: </span>Keep your private keys 
                        secure. If using a hardware wallet, store it in a safe place.
                        Do not share your private keys with anyone.</p>
                        <p className="text-[#40404a]"><span className="white-color">Two-Factor Authentication (2FA): </span>Enable 2FA on 
                        your wallet and exchange accounts for an added layer of security.</p>
                    </div>
                        <Image src="/learn/bitcoin.webp" alt="bitcoin" width={650} height={300} className="rounded-xl"/>
                </div>
            </section>
        </main>
    )
}