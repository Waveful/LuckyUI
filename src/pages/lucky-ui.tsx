import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LuckyUIRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router]);
  return null;
}


