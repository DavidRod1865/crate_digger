import React from 'react'

const Playlist = ({ id, imageUrl, name, playlistUrl}) => {
  return (
    <div key={id} className='bg-white w-60 h-60 flex flex-col justify-between p-4'>
      <a href={playlistUrl}>
        <img
          src={imageUrl} 
          width="200" 
          height="200" 
          alt={name} 
        />
      </a>
      <h3 className='text-black'>{name}</h3>
    </div>
  )
}

export default Playlist;