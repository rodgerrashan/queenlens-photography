
import { Suspense } from 'react';
import AdminDashboardContent from '@/components/Admin/AdminDashboardContent';
import Loading from '@/components/Loading';
export default function Dashboard() {


  return (
    <>
    <Suspense fallback={<Loading/>}>
    
    <AdminDashboardContent/>
    </Suspense>
      
    </>
  );
}


