import { Suspense } from 'react';
import Dashboardcontent from '@/components/User/Dashboardcontent';
import Loading from '@/components/Loading';



export default function Dashboard() {


  return (

    <>
    <Suspense fallback={<Loading/>} >
      <Dashboardcontent/>
    </Suspense>
    
    </>
    
  );
}


