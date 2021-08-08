import { useEffect } from 'react';
import { useRouter } from 'next/router';

import FullPageLoader from './FullPageLoader';
import { useAuthState } from '@/context/AuthContext';

type PrivateRouteProps = {
  protectedRoutes: Array<string>;
  children: React.ReactNode;
};

export default function PrivateRoute({
  protectedRoutes,
  children,
}: PrivateRouteProps) {
  const router = useRouter();
  const { authenticated, loading } = useAuthState();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!loading && !authenticated && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/');
    }
  }, [loading, authenticated, pathIsProtected, router]);

  if ((loading || !authenticated) && pathIsProtected) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
}
