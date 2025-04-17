
// app/faq/page.tsx (or .js)
'use client';

import Loading from '@/components/Loading';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FAQRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services#faq');
  }, [router]);

  return <Loading/>; 
}
