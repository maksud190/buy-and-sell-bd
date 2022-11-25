import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h1 className="text-3xl">My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;