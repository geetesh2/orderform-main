import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderForm.css';
import Navbar from './Navbar';

function OrderForm() {
  const [orderId, setOrderId] = useState('');
  const [orderName, setOrderName] = useState('');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/orders', { orderId, orderName });
      alert('Order saved successfully!');
    } catch (error) {
      console.log(error);
      alert('Error saving order.');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome to APML</h1>
      <p>We offer the best services and products.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="orderId">Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={(event) => setOrderId(event.target.value)}
        />
        <br />
        <label htmlFor="orderName">Order Name:</label>
        <input
          type="text"
          id="orderName"
          value={orderName}
          onChange={(event) => setOrderName(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default OrderForm;
