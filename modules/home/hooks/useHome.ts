'use client'

import React, { useEffect, useState } from 'react'

const useHome = () => {
    const [experinces, setExperiences] = useState<any>(null);

    useEffect(() => {
        console.log("custom hook")
        fetchExperince()
    }, [])

    const fetchExperince = () => {
        fetch('experiences.json')
        .then(res => res.json())
        .then(response => setExperiences(response.data))
        .catch(e => console.log(e))
    }

  return {
    experinces
  }
}

export default useHome