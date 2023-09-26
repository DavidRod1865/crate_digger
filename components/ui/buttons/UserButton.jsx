import React from 'react'
import defaultImage from "../../../public/recordImage.png"

const UserButton = ({ user, onClick }) => {
  return (
    <div
        className='flex items-center bg-black space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded-full p-2 pr-2' 
        onClick={onClick}
    >
        <img
          className='rounded-full h-6 w-6'
          src={user?.images?.[0]?.url || defaultImage}
          alt='profile-image'
        />
        <h2>{user?.display_name}</h2>
    </div>
  )
}

export default UserButton