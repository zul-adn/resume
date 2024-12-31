import React from 'react'
import usePersonal from '../hooks/usePersonal';

const Profile = () => {
   
const {personal} = usePersonal()

  return (
    <>
      {personal?.description.map((desc: string, index: number) => (
            <p key={index} className="mt-2">{desc}</p>
        ))}
    </>
  );
}

export default Profile