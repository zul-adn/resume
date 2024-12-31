import React, { useEffect } from 'react'
import useHome from '../../hooks/useHome'
import Link from 'next/link';

type Props = {}

function Portofolio({}: Props) {
    const {fetchPortofolio, portofolio} = useHome();

    useEffect(() => {
        fetchPortofolio()
    }, [])

  return (
    <div>{portofolio && portofolio.map((porto: any, index: number) => <div key={index} className='mb-2'>
        <h3 className='font-bold text-md'>{porto.type}</h3>
        <div>{porto.portofolio.map((val:any, i: number) => 
          <div key={i} >
            {val.name} - <Link href={val.url} target='__blank' className='text-sm text-blue-700 italic'> open link </Link>
          </div>
        )}</div>
    </div>)}</div>
  )
}

export default Portofolio