
import { Suspense } from 'react';
import AdminDashboardContent from '@/components/Admin/AdminDashboardContent';
import AdminDashboardSubmissions from '@/components/Admin/AdminDashboardSubmissions';
import Loading from '@/components/Loading';
import SoftwareVersion from '@/components/Dashboard/software-version';
import HelloworldCopyrights from '@/components/HelloWorld/HelloworldCopyrights';

export default function Dashboard() {


  return (
    <>
    <Suspense fallback={<Loading/>}>
    <div className='min-h-screen'>
    <AdminDashboardContent/>
    <AdminDashboardSubmissions/>
    </div>
      <SoftwareVersion/>
      <HelloworldCopyrights />
    </Suspense>
      
    </>
  );
}


