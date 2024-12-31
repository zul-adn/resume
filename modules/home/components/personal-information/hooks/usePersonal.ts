'use client'
import { useEffect, useState } from 'react'

function usePersonal() {
    const [personal, setPersonal] = useState<any>(null)
    const [activeTab, setActiveTab] = useState<number>(0)

    useEffect(() => {
        fetchMyPersonal()
    },[])

    const fetchMyPersonal = () => {
        fetch('personal.json')
        .then(res => res.json())
        .then(response => setPersonal(response.data))
    }
    return {
        personal,
        activeTab,
        setActiveTab
    }
}

export default usePersonal