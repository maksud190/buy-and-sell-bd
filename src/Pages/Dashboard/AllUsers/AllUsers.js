import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <h3 className="text-3xl">All Users</h3>
        </div>
    );
};

export default AllUsers;