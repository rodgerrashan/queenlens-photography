'use client';

import HelloworldCopyrights from '@/components/HelloWorld/HelloworldCopyrights';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function ChangeCredentials() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(newPassword,confirmPassword);

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const res = await fetch('/api/user/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage(data.message);
                window.location.href = '/login';
                setError('');
            } else {
                setError(data.error || 'Failed to reset password');
            }
        } catch (err) {
            setError('An unexpected error occurred');
        }
    };

    return (
        <>
            <div
                className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6"
                style={{
                    backgroundImage: "url('/images/backgrounds/loginbg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold mb-4">
                        <Link href="/home">
                            <Image
                                src={'/images/logo/brand.png'}
                                alt="QueenLens Photography"
                                width={200}
                                height={100}
                            />
                        </Link>
                    </div>
                    <h2 className="text-xl font-semibold mb-1">Reset Password</h2>
                    <p className="text-gray-600 mb-4">
                        Enter your new password below to reset your password
                    </p>
                    <form onSubmit={handleSubmit} className="w-full px-5">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 pl-5 border rounded-full focus:outline-0 focus:ring focus:ring-gray-900"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-2 pl-5 border rounded-full focus:outline-0 focus:ring focus:ring-gray-900"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="font-semibold w-full bg-gray-950 text-white py-2 rounded-full hover:bg-blue-950 transition duration-200"
                        >
                            Reset Password
                        </button>
                    </form>

                    {message && (
                        <div className="mt-4 text-center flex items-center justify-center space-x-2">
                            <FaCheck className="text-green-700" />
                            <p className="text-sm text-green-700 font-medium">{message}</p>
                        </div>
                    )}

                    {error && (
                        <div className="mt-4 text-center text-red-600 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">By resetting, you agree to our</p>
                        <a href="/terms-&-conditions" className="text-blue-600 hover:underline">
                            Terms of Service
                        </a>{' '}
                        <span className="text-sm text-gray-600"> and </span>
                        <a href="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>
                    </div>

                    <div className="mt-2 text-center">
                        <p className="text-sm text-gray-600">Need help? Contact us</p>
                    </div>
                </div>
            </div>
            <HelloworldCopyrights />
        </>
    );
}