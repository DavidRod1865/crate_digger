import React from 'react'
import { playlistState } from '@/atoms/playlistAtom'
import { useRecoilValue } from 'recoil'
import Song from './Song'

const Songs = () => {
    const playlist = useRecoilValue(playlistState)

    // console.log(playlist)

  return (
    <div className='md:px-8 flex flex-col space-y-1 pb-28 text-white'>
        {playlist?.tracks.items.map((track, i) => (
            <Song key={track.track.id} order={i} track={track.track} />
        ))}
    </div>
  )
}

export default Songs