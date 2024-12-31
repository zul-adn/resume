import React, { useEffect } from 'react'
import useHome from '../../hooks/useHome'
import Link from 'next/link';

type Props = {}

function Portofolio({}: Props) {
    const {fetchPortofolio, portofolio} = useHome();

    const randomColor = ['bg-emerald-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500', 'bg-orange-500'];

    useEffect(() => {
        fetchPortofolio()
    }, [])

  return (
    <div>{portofolio && portofolio.map((porto: any, index: number) => <div key={index} className='mb-2'>
        <h3 className='text-lg font-black'>{porto.type}</h3>
        <div>{porto.portofolio.map((val:any, i: number) => 
          <div key={i} className='mb-2'>
            <span className='font-bold'>{val.name}</span> -
            <Link href={val.url} target='__blank' className='text-sm text-blue-700 italic'> github</Link> |
            <Link href={val.url} target='__blank' className='text-sm text-blue-700 italic'> open link </Link> 
             
            <div className='flex mb-2'>
              {val.tags.map((tag: string, i: number) => 
                <div key={i} className={`text-xs ${randomColor[Math.floor(Math.random() * 5) + 1]} rounded-full mr-1 px-1 text-white`}>{tag}</div>
              )}
            </div>
            <div>{val.description}</div>
          </div>
        )}</div>
    </div>)}</div>
  )
}

export default Portofolio