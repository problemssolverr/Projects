import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    bug: 'Spiders',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, bug } = form;

    if (!name || !phone || !bug) {
      toast.error('Please fill all fields.');
      return;
    }

    const message = `Hello, my name is ${name}. I need help with ${bug}. My phone number is ${phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '2347066563261'; // WhatsApp number WITHOUT '+'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-black text-white py-10 px-4">
      <ToastContainer />
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        GET A QUICK TREATMENT QUOTE
      </h2>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* Name */}
          <div className="flex-1">
            <label className="block mb-1 font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 rounded text-black"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex-1">
            <label className="block mb-1 font-semibold">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 rounded text-black"
              required
            />
          </div>

          {/* Bug Dropdown */}
          <div className="flex-1">
            <label className="block mb-1 font-semibold">
              What's bugging you? <span className="text-red-500">*</span>
            </label>
            <select
              name="bug"
              value={form.bug}
              onChange={handleChange}
              className="w-full p-3 rounded text-black"
              required
            >
              <option value="Spiders">Spiders</option>
              <option value="Ants">Ants</option>
              <option value="Roaches">Roaches</option>
              <option value="Rodents">Rodents</option>
              <option value="Wasps">Wasps</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
