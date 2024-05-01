import Link from "next/link";

const PlaylistItem = ({ playlist, color, isActive, onClick }) => {
  const activeHoverClass = isActive ? `opacity-100` : '';
  const activeClass = isActive ? `scale-110 duration-300 ease-in-out` : '';

  return (
          <div
            key={playlist.id}
            className={`carousel-item flex flex-col w-48 cursor-pointer ${activeClass}`}
            onClick={onClick}
          >
            <Link 
            href={``}
            >
              <div className="relative group">
                <img
                  src={playlist.images[0].url}
                  alt="album art"
                  className="object-cover rounded-box h-full w-full"
                />
                <div className={`${activeHoverClass} absolute inset-0 ${color} bg-opacity-50 flex items-center justify-center rounded-box opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}>
                  <p className="text-white text-xl font-bold text-center">{playlist.name}</p>
                </div>
              </div>
            </Link>
          </div>
  )
}

export default PlaylistItem