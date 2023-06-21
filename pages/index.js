import {useSession, signIn} from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    if (session) {
      router.push('/dashboard'); // Redirect to the dashboard page
    }
  }, [session]);

  return (
    <main className='flex justify-center items-center w-screen h-screen'>
      <div className='bg-white rounded-lg w-80 h-96 flex flex-col items-center justify-between p-4'>
        <h1 className='text-black mt-6'>Crate Digger</h1>
        <button onClick={() => signIn()} className='rounded-full bg-green-500 min-w-min p-2 text-black mb-6'>Log in with Spotify</button>
      </div>
    </main>
  );
}