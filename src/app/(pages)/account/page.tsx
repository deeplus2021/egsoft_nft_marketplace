"use client"
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { shortenWalletAddress } from '@/app/utils/Web3Modal';
import { redirect } from 'next/navigation';

//icons
import { FaEthereum } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import AccountsTabs from '@/app/component/tabs/profile.tabs';
import { useEffect } from 'react';

const AccountPage = () => {

    const { address, chainId, isConnected } = useWeb3ModalAccount()

    useEffect(()=>{
        if(!isConnected){
            redirect("/")
        }
    },[isConnected])

    return (
        <div className="flex flex-col h-full flex-1">
            <div className="flex w-full flex-col">

                <div className="relative max-h-320 overflow-hidden">
                    <div className="relative h-0" style={{
                        backgroundColor: "rgb(39, 42, 46)",
                        paddingBottom: "25%"
                    }}>
                    </div>
                </div>
                
                <div className="mx-auto w-full max-w-[2560px] px-4 sm:px-8 xl:px-16">
                    <div className="flex items-center">
                        <div style={{
                            marginTop: "-156px",
                            zIndex: 1
                        }}>
                            <div className="rounded-full h-[180px] w-[180px]" style={{
                                border: "6px solid rgb(18, 18, 18)",
                            }}>
                                <div className='relative w-full h-full'>
                                    <span className='box-border inline-block overflow-hidden '>
                                        <img className='absolute inset-0 box-border p-0 m-0 block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover rounded-full' src='https://storage.googleapis.com/opensea-static/opensea-profile/23.png'>
                                        </img>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full bg-transparent">
                    <div className="mx-auto w-full max-w-[2560px] px-4 sm:px-8 xl:px-16">
                        <div className="flex w-full items-start">
                            <div style={{
                                maxWidth: "%60"
                            }}>
                                <div className="flex items-center gap-1 break-words">
                                    <h1 className="font-semibold leading-loose text-3xl">
                                        Unnamed
                                    </h1>
                                </div>
                            </div>

                            <div className="ml-auto">
                                <div className="flex items-center">
                                    <div className="flex relative mt-4 sm:mt-0 z-10">
                                        <div className="flex items-center">
                                            <LuShare />
                                        </div>
                                        <div className="flex items-center ml-4">
                                            <HiOutlineDotsHorizontal />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full bg-transparent">
                    <div className="mx-auto w-full max-w-[2560px] px-4 sm:px-8 xl:px-16 sm:-mt-1.5">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <div className="flex mr-1.5 items-center text-lg">
                                    <FaEthereum />
                                    {shortenWalletAddress(address)}
                                </div>
                                <div className="text-sm">
                                    Joined January 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative mx-auto w-full max-w-[2560px] px-4 sm:px-8 xl:px-16 pt-0'>
                    <AccountsTabs />
                </div>
            </div>
        </div>
    )
}

export default AccountPage