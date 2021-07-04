import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LoginLogoutButton from '../components/LoginLogoutButton';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const onChange = (event) => {
    setUsername(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUsername(username);
    router.push(`/user/${username}`);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen pt-2'>
      <Head>
        <title>Repo Explorer</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-10 sm:px-20 text-center'>
        <h1 className='text-2xl sm:text-4xl font-bold'>
          Explore any GitHub profile with{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-400'>
            search functionality!
          </span>
        </h1>
        <p className='mt-6 text-lg sm:text-2xl font-semibold'>
          Start by typing your favorite developer's username!
        </p>

        <form
          className='bg-gray-100 hover:bg-gray-200 hover:shadow-md transition duration-200 shadow-sm rounded-md px-8 pt-6 pb-8 mt-12 w-6/12'
          onSubmit={onSubmit}>
          <div className='mx-4'>
            <label>
              <input
                type='text'
                name='username'
                placeholder='i.e. leerob'
                className='mx-auto p-2 h-full text-lg selection:bg-purple-400 selection:text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                autoComplete='off'
                value={username}
                onChange={onChange}
              />
            </label>
            <input
              type='submit'
              value={
                username.length > 3 ? 'Start exploring' : 'Search username'
              }
              className='mt-2 sm:mt-4 px-4 py-3 text-white font-semibold w-full bg-purple-600 hover:bg-purple-800 transition duration-150 rounded-md shadow-sm'
            />
          </div>
        </form>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t bg-purple-400'>
        <h1 className='text-white text-sm'>
          MVST Coding Challenge. Arda | 2021
        </h1>
      </footer>
    </div>
  );
}
