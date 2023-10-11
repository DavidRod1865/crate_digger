import React, { useEffect } from "react";
import { getProviders, signIn } from 'next-auth/react';
import Dot from "../components/ui/Dot";
import Link from "next/link";

const Login = ({ providers }) => {

  // Mouse Position
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  // Update mouse position on mousemove
   useEffect(() => {
    const handler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    }
  }
  , []);

  return (
    <main className="overflow-hidden h-screen">

      <div className="flex flex-wrap w-[2000px] gap-24 mx-auto p-12">
      {Array.from({ length: 200 }).map((_, i) => (
        <Dot key={i} mousePos={mousePos}></Dot>
      ))}
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col bg-black items-center bg-opacity-90 p-5 rounded-2xl w-96 text-center">
          <img src="web-logo.png" alt="Crate Digger Logo" className="mx-auto h-24 w-auto mb-4 mt-2" />

          <h1 className="text-4xl font-extrabold text-white hover:text-orange-600 transition duration-300 p-2">Crate Digger</h1>
          <h2 className="text-2xl font-semibold text-white break-normal mb-2">Discover Vinyls for Your Playlists</h2>


          {Object.values(providers).map(({ name, id }) => (
            <div key={name}>
              <button className="bg-purple-800 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 m-2" onClick={() => signIn(id, { callbackUrl: "/" })}>
                Log In with {name} Premium
              </button>
            </div>
          ))}
            <p className="text-sm text-gray-500 mt-2">
              A Spotify Premium account ensures uninterrupted crate digging.
            </p>
        </div>
      </div>

      <footer className="fixed bottom-0 right-0 left-0 text-center text-xs text-gray-400">
        <p><Link href="https://www.DaveCodes.tech">DaveCodes.Tech</Link> ©2021 Crate Digger</p>
      </footer>
      
      </main>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}