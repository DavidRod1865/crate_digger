import {useSession, getProviders, getSession} from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';
import Center from '@/components/Center';

export default function Home() {
    return (
      <div className='bg-black h-screen overflow-hidden'>
        <main className='flex'>
            <Sidebar />
            <Center />
        </main>
      </div>
    );
  }

export async function getServerSideProps(context){
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}