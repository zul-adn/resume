'use client'

import React, { useEffect, useState } from 'react'

const useHome = () => {
    const [experinces, setExperiences] = useState<any>(null);
    const [portofolio, setPortofolio] = useState<any>(null);

    useEffect(() => {
        fetchExperince()
    }, [])

    const fetchExperince = () => {
        fetch('experiences.json')
        .then(res => res.json())
        .then(response => setExperiences(response.data))
        .catch(e => console.log(e))
    }

    const fetchPortofolio = () => {
        fetch('portofolio.json')
        .then(res => res.json())
        .then(response => setPortofolio(response.data))
        .catch(e => console.log(e))
    }

  return {
    experinces,
    portofolio,
    fetchPortofolio
  }
}

export default useHome