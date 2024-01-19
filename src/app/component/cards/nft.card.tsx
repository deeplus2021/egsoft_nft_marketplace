import React from 'react';
import { FaEthereum } from "react-icons/fa";

const NftCard: React.FC = () => {
  return (
    <div className='rounded-2xl	bg-slate-800'>
        <div className='rounded-lg mb-4 overflow-hidden'>
            <a>
                <img className='w-full h-auto object-cover' src='https://opne9reactnext.vercel.app/assets/images/box-item/card-item-05.jpg'/>
            </a>
        </div>
        <h5 className='mb-4 leading-5 font-bold pl-2 pr-2'>
            <a className='none'>
                Nft Name 001
            </a>
        </h5>
        <div className='flex items-center pl-2 pr-2'>
            <div className='w-9 h-9 rounded-full overflow-hidden mr-4 flex-shrink-0'>
                <img className='h-auto w-full align-middle' src='https://opne9reactnext.vercel.app/assets/images/avatar/avatar-box-01.jpg'/>
            </div>
            <div>
                <span className='text-xs leading-1'>Posted by:</span>
                <h6 className='text-xs leading-2'>Cody</h6>
            </div>
        </div>
        <div className='divide-y'></div>
        <div className='flex pl-2 pr-2 items-center justify-between'>
            <span className='text-sm font-normal leading-3'>Current Bid</span>
            <h6 className='flex text-lg font-bold leading-10 items-center'>
                <i className='mr-1'>
                    <FaEthereum/>
                </i>
                0,34
            </h6>
        </div>
    </div>
  );
};

export default NftCard;
