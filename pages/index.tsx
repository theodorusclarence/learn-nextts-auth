import { useState } from 'react';

import { useAuthDispatch, useAuthState } from '@/context/AuthContext';
import { sleep } from '@/lib/helper';

import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Button from '@/components/Button';

export default function Home() {
  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await sleep(500);
    dispatch({
      type: 'LOGIN',
      payload: {
        email: 'bambang@gmail.com',
        name: 'bambang',
      },
    });
    localStorage.setItem('token', 'nice');
    setIsLoading(false);
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
  };

  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1 className='text-center'>
              <CustomLink href='https://github.com/theodorusclarence/learn-nextts-auth'>
                Auth Context TS Example
              </CustomLink>
            </h1>
            <div className='flex gap-4 mt-8'>
              <CustomLink href='/protect'>Go to /protect</CustomLink>
              <CustomLink openNewTab={true} href='/protect'>
                Go to /protect (new tab)
              </CustomLink>
            </div>

            <div className='mt-8'>
              {loading ? (
                <div className='p-1 bg-gray-500 animate-pulse'>loading...</div>
              ) : authenticated ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <Button
                  disabled={isLoading}
                  className='disabled:brightness-75 disabled:cursor-wait'
                  variant='secondary'
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}
            </div>
            <p className='mt-2'>
              Auth Status:{' '}
              {loading
                ? 'loading..'
                : authenticated
                ? 'logged in'
                : 'not logged in'}
            </p>
            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
