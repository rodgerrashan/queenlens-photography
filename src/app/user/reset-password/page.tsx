

import ResetPasswordForm from '@/components/User/Resetpasswordform';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default function ResetPassword() {


    return (
        
        <>
        <Suspense fallback={<Loading/>}>
      <ResetPasswordForm />
    </Suspense>
        
        </>
    );
}