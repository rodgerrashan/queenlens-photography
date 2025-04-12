'use client';

import ChangeCredentialsform from "@/components/User/ChangeCredentialsform";
import { Suspense } from 'react';
import Loading from "@/components/Loading";


export default function ChangeCredentials() {
    return(

        <>
        <Suspense fallback={<Loading/>}>
      <ChangeCredentialsform />
    </Suspense>
    
    </>

    );
}