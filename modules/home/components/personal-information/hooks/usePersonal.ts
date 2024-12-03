'use client'
import { useEffect, useState } from 'react'

function usePersonal() {
    const [personal, setPersonal] = useState<any>(null)

    useEffect(() => {
        fetchMyPersonal()
    },[])

    const fetchMyPersonal = () => {
        fetch('personal.json')
        .then(res => res.json())
        .then(response => setPersonal(response.data))
    }
    return {
        personal
    }
}

export default usePersonal