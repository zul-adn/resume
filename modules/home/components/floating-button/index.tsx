import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { LiaReadme } from "react-icons/lia";
import { RiDownloadCloud2Line } from "react-icons/ri";

type Props = {}

function FloatingButton({}: Props) {
  return (
    <div className='absolute bottom-5 right-5 flex flex-col gap-2'>
         <button className='bg-red-500 p-2 rounded-full shadow cursor-pointer' title='Read my blog'>
           <RiDownloadCloud2Line color='white' size={24}/>
        </button>
        <button className='bg-black p-2 rounded-full shadow cursor-pointer' title='Read my blog'>
           <LiaReadme color='white' size={24}/>
        </button>
        <button className='bg-green-500 p-2 rounded-full shadow cursor-pointer' title='Connect with me'>
           <FaWhatsapp color='white' size={24}/>
        </button>
    </div>
  )
}

export default FloatingButton