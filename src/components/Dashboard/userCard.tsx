import React from 'react';
import { FaUser } from 'react-icons/fa6';

interface UserCardProps {
    email: string;
    role: string;
}

const UserCard: React.FC<UserCardProps> = ({ email = "noreply@ql.com", role = "dev" }) => {
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
                console.log('Logged out successfully');
                window.location.href = '/login';
            } else {
                console.error('Failed to log out');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className="flex items-center p-4 max-w-sm w-full">
            <div className="flex-shrink-0 text-4xl text-gray-900">
                {typeof icon === 'function' ? React.createElement(icon) : icon}
            </div>
            <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-600">{email}</h1>
                <p className="text-sm text-blue-600">{role}</p>
                <button
                    onClick={handleLogout}
                    className="mt-2 px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserCard;