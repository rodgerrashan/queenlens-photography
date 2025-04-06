

import ResetPasswordForm from '@/components/User/Resetpasswordform';
import { Suspense } from 'react';


export default function ResetPassword() {


    return (
        
        <>
        <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
        
        </>
    );
}