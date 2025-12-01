'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchUserSession } from '@/redux/features/authSlice';

export function useAuthGuard(redirectTo: string = '/log-in') {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      // Try to fetch session first
      dispatch(fetchUserSession())
        .unwrap()
        .catch(() => {
          router.push(redirectTo);
        });
    }
  }, [isAuthenticated, isLoading, dispatch, router, redirectTo]);

  return {
    isAuthenticated,
    isLoading,
    user,
  };
}

export default useAuthGuard;



