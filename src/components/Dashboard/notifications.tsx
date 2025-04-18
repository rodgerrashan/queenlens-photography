"use client";
import React, { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';

interface Notification {
    message: string;
    time: string;
}

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [viewAll, setViewAll] = useState<boolean>(false);



    async function fetchNotifications() {
        try {
            const response = await fetch('/api/notifications', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch notifications');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            // console.error('Error fetching notifications:', error);
            throw error;
        }
    }

    useEffect(() => {
        const loadNotifications = async () => {
            try {
                setLoading(true);
                const data = await fetchNotifications();
                setNotifications(data);
            } catch{
                setError('Failed to load notifications.');
            } finally {
                setLoading(false);
            }
        };

        loadNotifications();
    }, []);

    const handleViewAll = () => {

        setViewAll(!viewAll);
    };

    if (loading) {
        return (
            <div className="bg-gray-100 px-10 mb-10">
      <h1 className="text-2xl  font-bold mb-4 md:mb-6">Notifications</h1>
      <div className="w-12 h-12 relative mx-auto">
        <div className="w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="w-full h-full border-4 border-gray-900 rounded-full absolute top-0 left-0 animate-[spin_1s_linear_infinite] border-t-transparent"></div>
      </div>

      </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    const displayedNotifications = viewAll ? notifications : notifications.slice(0, 5);

    return (

        <div className="bg-gray-100 px-10 mb-10">
      <h1 className="text-2xl  font-bold mb-4 md:mb-6">Notifications</h1>

        <div className="p-5 bg-white  rounded-2xl">

            {displayedNotifications.length === 0 ? (
                <div className="text-center text-gray-500">No notifications available.</div>
            ) : (
                displayedNotifications.map((notification, index) => (
                    <div
                        key={index}
                        className="border-b last:border-none py-1 mb-2 flex items-center gap-4 justify-start"
                    >
                        <div className="text-gray-950">
                            <FaBell size={25} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">{notification.message}</h4>
                            <span className="text-sm text-gray-400">{notification.time}</span>
                        </div>
                    </div>
                ))
            )}
            { notifications.length > 5 && (
                <button
                    className="mt-4 px-6 py-2 bg-gray-950 text-white rounded-full hover:bg-blue-900 "
                    onClick={handleViewAll}
                >
                    {viewAll? "Hide": "View All"}
                </button>
            )}
        </div>

        </div>
    );
};

export default Notifications;