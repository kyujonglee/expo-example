import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function AppInitializer() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn) {
      router.push('(tabs)');
    }
  }, [isSignedIn]);
  return null;
}
