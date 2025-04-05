import React from 'react';
import { FaUser } from 'react-icons/fa6';

interface UserCardProps {
    email: string;
    role: string;
}

const UserCard: React.FC<UserCardProps> = ({email= "noreply@ql.com", role = "dev" }) => {
    const icon = FaUser
    return (
        <div className="flex items-center p-4 max-w-sm w-full">
            <div className="flex-shrink-0 text-4xl text-gray-900">{typeof icon === 'function' ? React.createElement(icon) : icon}</div>
            <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-600 ">{email}</h1>
                <p className="text-sm text-blue-600">{role}</p>
            </div>
        </div>
    );
};

export default UserCard;