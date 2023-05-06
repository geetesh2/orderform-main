import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderForm.css';


function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/orders/${id}`);
      setOrders(orders.filter((order) => order._id !== id));
      alert('Order deleted successfully!');
    } catch (error) {
      console.log(error);
      alert('Error deleting order.');
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.orderId}</td>
              <td>{order.orderName}</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
