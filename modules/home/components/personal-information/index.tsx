'use client'
import React from 'react'
import usePersonal from './hooks/usePersonal'

type Props = {}

function PersonalInformation({}: Props) {
    const {personal} = usePersonal()
    return (
        <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <img
                    className="w-full h-40 object-cover"
                    src="https://via.placeholder.com/800x300" 
                    alt="Background"
                />
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
                    <img
                    className="w-24 h-24 object-cover rounded-full border-4 border-white"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    />
                </div>
            </div>
            <div >
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                    {personal?.name} <span className="text-sm text-gray-500">({personal?.pronounce})</span>
                    </h2>
                    <p className="text-sm text-gray-500">{personal?.role}</p>
                
                </div>
                
                <div className="mt-4 flex justify-between">
                    <button className="text-blue-600 text-sm font-medium">Open to</button>
                    <button className="text-blue-600 text-sm font-medium">Add Profile Section</button>
                    <button className="text-blue-600 text-sm font-medium">Enhance Profile</button>
                    <button className="text-blue-600 text-sm font-medium">Resources</button>
                </div>
                
                <div className='flex justify-between bordered border-y border-indigo-600 '>
                    <div className='grow text-center p-2'>About Me</div>
                    <div className='grow text-center p-2'>Certification</div>
                    <div className='grow text-center p-2'>Tech Stack</div>
                </div>

                <div className='overflow-x-scroll mt-4 p-6'>
                    {personal?.description.map((desc: any, index: any) => 
                        <p className='mt-2'>{desc}</p>
                    )}
                  
                </div>
            </div>
        </div>
  )
}

export default PersonalInformation