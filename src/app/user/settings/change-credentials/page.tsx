'use client';

import ChangeCredentialsform from "@/components/User/ChangeCredentialsform";
import { Suspense } from 'react';


export default function ChangeCredentials() {
    return(

        <>
        <Suspense fallback={<div>Loading...</div>}>
      <ChangeCredentialsform />
    </Suspense>
    
    </>

    );
}