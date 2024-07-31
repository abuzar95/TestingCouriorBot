import React, { useEffect, useState } from 'react'
import { getAllOrders } from '../api/getAllOrders';

export default function TaskHistory() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        // Fetch orders data when the component mounts
        getAllOrders()
            .then((data) => {
                setOrders(data);
            })
            .catch((err) => console.error("Error fetching orders:", err));
    }, []);
    console.log(orders)
    return (
        <div className="h-[685px] bg-background p-4 text-white">
            <div>
                {orders.map(order => (
                    <div key={order.order_id} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                        <h2>Order ID: {order.order_id}</h2>
                        <p><strong>Name:</strong> {order.name}</p>
                        <p><strong>Phone Number:</strong> {order.phone_number}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                        <p><strong>Parcel Delivery Time:</strong> {order.parcel_delivery_time}</p>
                        <p><strong>Parcel Delivery Date:</strong> {order.parcel_delivery_date}</p>
                        <p><strong>Extra Notes:</strong> {order.extra_notes}</p>
                        <p><strong>Status:</strong> {order.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
