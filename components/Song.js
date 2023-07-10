import useSpotify from '@/hooks/useSpotify'
import { millisToMinutesAndSecs } from '@/lib/time'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'

const Song = ({order, track}) => {
    const spotifyAPI = useSpotify()

    function isSongInLP(track){
        return track
    }
    // console.log(track)
  return (
    <div className='grid grid-cols-2 text-gray-500 hover:bg-gray-900 py-3 px-4 rounded-lg'>
        <div className='flex items-center space-x-4 '>
            <p>{ order+1 }</p>
            <a href={track.album.external_urls.spotify} target="_blank">
                <img className='h-12 w-12' src={track.album.images[0].url} alt={track.name} />
            </a>
            <div>
                    <p className='w-36 lg:w-64 truncate text-white'>{track.name}</p>
                    <p className='w-40'>{track.artists[0].name}</p>
            </div>
        </div>

        <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40'>
                    {track.album.name}
            </p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target="_blank">
                <img className="w-10 p-1" src="https://links.papareact.com/9xl" alt="spotify_logo" />
            </a>
            {isSongInLP ? (
                <ThumbUpIcon className='w-10 p-1 text-[#18D860]' />
                ) : (
                <ThumbDownIcon className='w-10 p-1 text-red-500' />
            )}
        </div>
    </div>
  )
}

export default Song