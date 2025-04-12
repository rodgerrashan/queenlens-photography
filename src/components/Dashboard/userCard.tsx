import React from 'react';
import { FaUser } from 'react-icons/fa6';

interface UserCardProps {
    email?: string;
    role?: string;
    userId?: string;
}

const UserCard: React.FC<UserCardProps> = ({ email = "user@queenlens.com", role = "dev" , userId = "none"}) => {
    const icon = FaUser;

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // console.log('Logged out successfully');
                window.history.replaceState(null, '', '/login');
                window.location.href = '/login';
            } else {
                // console.error('Failed to log out');
            }
        } catch {
            // console.error('Error during logout:', error);
        }
    };

    const handleChangePassword = () => {
        // console.log('Redirecting to change password page with user ID:', userId);
        window.location.href = `/user/settings/change-credentials/?userId=${userId}`;
    };

    return (
        <>
            <div className="bg-gray-100 mx-4 mr-8">
                <h1 className="text-2xl font-bold mb-4 md:mb-6">Account</h1>
                <div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between items-center w-full bg-white rounded-2xl p-4">
                        <div className = "flex flex-col md:flex-row items-center">
                        <div className="flex-shrink-0 text-4xl text-gray-900 p-4">
                            {typeof icon === 'function' ? React.createElement(icon, { size: '2em' }) : icon}
                        </div>
                        <div>
                        <h1 className="text-2xl font-bold text-gray-900 text-center md:text-left">
                            {email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)}
                        </h1>
                        <p className="text-sm text-blue-600 text-center md:text-left">{role}</p>

                        </div>

                        </div>
                        
                        <div className="flex flex-col md:flex-row md:ml-4 p-2 pt-5 ">
                           
                            <button
                                onClick={handleChangePassword}
                                className="mt-2 px-4 py-1 bg-gray-950 text-white rounded-full hover:bg-blue-900 md:mx-2"
                            >
                                Change Password
                            </button>
                            <button
                                onClick={handleLogout}
                                className="mt-2 px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 md:mx-2"
                            >
                                Logout
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;
