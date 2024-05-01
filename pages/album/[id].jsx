import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { playlistState } from "../../atoms/playlistAtom";
import { shuffle } from "lodash";
import useSpotify from "../../hooks/useSpotify";
import Header from "../../components/ui/header/Header";
import Songs from "../../components/song/Songs";

const colors = [
  "from-red-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-indigo-500",
  "from-purple-500",
  "from-pink-500",
  "from-orange-500",
  "from-teal-500",
  "from-cyan-500",
];

const AlbumPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const defaultImage = "/recordImage.png";

  // get spotify api
  const spotifyAPI = useSpotify();
  // get playlist from recoil
  const [currentPlaylist, setCurrentPlaylist] = useRecoilState(playlistState);

  // get playlist on load
  useEffect(() => {
    if (spotifyAPI.getAccessToken() && id) {
      spotifyAPI
        .getPlaylist(id)
        .then((data) => setCurrentPlaylist(data.body))
        .catch((err) => console.log("Playlist failed to load.", err));
    }
  }, [spotifyAPI, id]);

  // change color on playlist change
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(shuffle(colors)[0]);
  }, [id]);

  return (
    <div className="flex">
      <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
        <section
          className={`flex flex-col space-x-7 h-fit p-8 bg-gradient-to-b to-black ${color}`}
        >
          <Header />
          <div className="mt-1">
            <img
              className="h-48 w-48 shadow-xl"
              src={currentPlaylist?.images?.[0]?.url || defaultImage}
              alt=""
            />
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                {currentPlaylist?.name}
              </h1>
            </div>
          </div>
        </section>

        <Songs />
      </div>
    </div>
  );
};

export default AlbumPage;
