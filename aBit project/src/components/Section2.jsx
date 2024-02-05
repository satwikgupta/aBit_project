import React from 'react'
import { AddPost, PostCard } from './'

function Section2() {
  return (
    <div className='h-[80vh]'>
        <div className='flex justify-between pl-20 py-6'>
            <div className='font-serif'>
                <div className='text-3xl mb-2'>Releases</div>
                <div className='italic font-thin tracking-wide'>Videos that you upload in collaboration with aBit appear here.</div>
            </div>
            <div>
                <ul className='flex text-sm font-inter w-[600px] '>
                    <li><div className="border-l-2 h-14 mt-4"></div>
                    </li>
                    <li className='basis-1/4 p-2 pl-4'>
                        <div className='font-bold text-lg pb-2'>1</div>
                        <div className='text-gray-500'>Shared <br /> Videos</div>
                    </li>
                    <li><div className="border-l-2 h-14 mt-4"></div>
                    </li>
                    <li className='basis-1/4 p-2 pl-4'>
                        <div className='font-bold text-lg pb-2'>$9510</div>
                        <div className='text-gray-500'>Funds <br /> Raised</div>
                    </li>
                    <li><div className="border-l-2 h-14 mt-4"></div>
                    </li>
                    <li className='basis-1/4 p-2 pl-4'>
                        <div className='font-bold text-lg pb-2'>317</div>
                        <div className='text-gray-500'>Co-owner <br /> community</div>
                    </li>
                    <li><div className="border-l-2 h-14 mt-4"></div>
                    </li>
                    <li className='basis-1/4 p-2 pl-4'>
                        <div className='font-bold text-lg pb-2'>$3804</div>
                        <div className='text-gray-500'>Co-owner <br /> Earnings</div>
                    </li>
                </ul>
            </div>
        </div>

        <div className='flex gap-10 ml-20 mt-10'>
            <AddPost />
            <PostCard /> 

        </div>

    </div>
  )
}

export default Section2