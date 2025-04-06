import { Suspense } from 'react';
import Dashboardcontent from '@/components/User/Dashboardcontent';



export default function Dashboard() {


  return (

    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboardcontent/>
    </Suspense>
    
    </>
    
  );
}


