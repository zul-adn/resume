"use client"
import React from 'react'
import useHome from '../../hooks/useHome'



function WorkExperience() {
    const {experinces} = useHome()

  return (
    <div >
        {experinces && experinces.map((experince: any, index: any) => 
            <div key={index} className='mt-10'>
                <h1 className='text-lg font-bold'>{experince.company_name}</h1>
                <h1>{experince.work_setup} {experince.from} to {experince.to}</h1>
                <div className='mt-2'>
                    <span className='font-semibold'>Tasks</span>
                    {
                        experince.tasks.map((task: string, index: number) => 
                            <p key={index}>&#x27A3;  {task}</p>
                        )
                    }
                </div>
                <div className='mt-2'>
                    <span className='font-semibold'>Tech Stack</span>
                    <p>{experince.tech_stack.join(", ")}</p>
                  
                </div>
            </div>
        )}  
    </div>
  )
}

export default WorkExperience