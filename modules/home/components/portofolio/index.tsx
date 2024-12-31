import React, { useEffect } from 'react'
import useHome from '../../hooks/useHome'

type Props = {}

function Portofolio({}: Props) {
    const {fetchPortofolio, portofolio} = useHome();

    useEffect(() => {
        fetchPortofolio()
    }, [])

  return (
    <div>{portofolio && portofolio.map((porto: any, index: number) => <div key={index}>
        {porto.type}
    </div>)}</div>
  )
}

export default Portofolio