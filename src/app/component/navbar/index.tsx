
"use client"
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { useEffect } from 'react';
import { MdOutlineWallet } from "react-icons/md";
import { shortenWalletAddress } from '@/app/utils/Web3Modal';

const Navbar = () => {
    const { open } = useWeb3Modal()
    const { address, chainId, isConnected } = useWeb3ModalAccount()

    useEffect(() => {
        console.log(isConnected, address)
    })

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NFTMarketplace</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            {
                                isConnected ? 
                                <button onClick={() => open()} className="flex items-center transition duration-200 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative" style={{ borderRadius: '12px', padding: '0px 12px', height: '48px', minWidth: '48px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent', backgroundColor: 'rgba(255, 255, 255, 0.12)', color: 'rgb(255, 255, 255)', backdropFilter: 'blur(20px)' }}>
                                    <MdOutlineWallet size={20} className="mr-2" />
                                    <span>{shortenWalletAddress(address)}</span>
                                </button> : 
                                <button onClick={() => open()} className="flex items-center transition duration-200 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative" style={{ borderRadius: '12px', padding: '0px 12px', height: '48px', minWidth: '48px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent', backgroundColor: 'rgba(255, 255, 255, 0.12)', color: 'rgb(255, 255, 255)', backdropFilter: 'blur(20px)' }}>
                                    <MdOutlineWallet size={20} className="mr-2" />
                                    <span>Connect</span>
                                </button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar