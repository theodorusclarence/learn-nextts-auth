import { ImSpinner5 } from 'react-icons/im';

export default function FullPageLoader() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-yellow-400 bg-dark'>
      <ImSpinner5 className='text-4xl animate-spin' />
      <p className='mt-2'>Loading for about 2s...</p>
    </div>
  );
}
