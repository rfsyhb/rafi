/* eslint-disable no-alert */
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      alert(
        `Form submitted! 
        name: ${name} 
        email: ${email} 
        message: ${message}`
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container mx-auto pt-4 h-full px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow w-full md:w-[40rem] mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
            <input
              id="name"
              type="text"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
            <textarea
              id="message"
              className="w-full p-2 border rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="w-full h-64 md:h-96 pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.5956586809364!2d113.8752752253405!3d-2.177021202686069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb158c4a130cb%3A0xab9467ad7eac9335!2sJl.%20Bandeng%20V%2C%20Bukit%20Tunggal%2C%20Kec.%20Jekan%20Raya%2C%20Kota%20Palangka%20Raya%2C%20Kalimantan%20Tengah%2074874!5e0!3m2!1sen!2sid!4v1719808665096!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
