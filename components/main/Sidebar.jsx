import { HomeIcon, LibraryIcon, HeartIcon } from "@heroicons/react/outline";
import UserInfo from "./UserInfo";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { playlistState, userState } from "../../atoms/playlistAtom";
import { useSession } from "next-auth/react";
import useSpotify from "../../hooks/useSpotify";

function Sidebar() {

const spotifyAPI = useSpotify();
const { data: session } = useSession();
const [localPlaylists, setLocalPlaylists] = useRecoilState(playlistState);
const [localUser, setLocalUser] = useRecoilState(userState);

useEffect(() => {
  if (!session) return;
  const fetchUserData = async () => {
    const userFromStorage = localStorage.getItem("user");
    const user = userFromStorage
      ? JSON.parse(userFromStorage)
      : await spotifyAPI.getMe().then((data) => data.body);
    setLocalUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    const playlistsFromStorage = localStorage.getItem("playlists");
    const playlists = playlistsFromStorage
      ? JSON.parse(playlistsFromStorage)
      : await spotifyAPI.getUserPlaylists().then((data) => data.body.items);
    setLocalPlaylists(playlists);
    localStorage.setItem("playlists", JSON.stringify(playlists));
  };

  fetchUserData();
}, [session, spotifyAPI, setLocalPlaylists, setLocalUser]);


  return (
    <div
      className="text-gray-500 p-2 text-sm md:text-base border-r max-w-[16rem] border-blue-500 h-full scroll-bar-hide hidden md:block md:min-w-[12rem]"
    >
      <UserInfo user={localUser} />
      <hr className="border-b-[0.1px] border-blue-500" />

      <div className="overflow-y-scroll h-screen">
        <Link href="/" className="hover:text-white">
          <div
            tabIndex={0}
            className="collapse hover:bg-green-500 hover:text-black transition-all ease-in-out duration-700 mt-3"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex gap-2 hover:text-white peer-checked:bg-green-500 peer-checked:text-black">
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
            </div>
          </div>
        </Link>

        <div
          tabIndex={0}
          className="collapse hover:bg-green-500 hover:text-black transition-all ease-in-out duration-700"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex gap-2 hover:text-white peer-checked:bg-green-500 peer-checked:text-black">
            <LibraryIcon className="h-5 w-5" />
            <p>Your Playlists</p>
          </div>
          <div className="collapse-content text-sm peer-checked:bg-green-500 peer-checked:text-black">
            {localPlaylists && localPlaylists.length > 0 ? (
              localPlaylists.map((playlist) => (
                <div key={playlist.id} className="flex flex-col">
                  <Link
                    href={`/album/${playlist.id}`}
                    className="cursor-pointer hover:text-white m-2 w-full"
                  >
                    {playlist.name}
                  </Link>
                  <hr className="border-b-[0.1px] border-black w-full" />
                </div>
              ))
            ) : (
              <p>No playlists found.</p> // Placeholder when no playlists are available
            )}
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse hover:bg-green-500 hover:text-black transition-all ease-in-out duration-700"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex gap-2 hover:text-white peer-checked:bg-green-500 peer-checked:text-black">
            <HeartIcon className="h-5 w-5" />
            <p>Saved Vinyls</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
