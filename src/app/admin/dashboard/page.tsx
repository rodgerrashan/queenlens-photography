
import { Suspense } from 'react';
import AdminDashboardContent from '@/components/Admin/AdminDashboardContent';

export default function Dashboard() {


  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <AdminDashboardContent/>
    </Suspense>
      
    </>
  );
}


