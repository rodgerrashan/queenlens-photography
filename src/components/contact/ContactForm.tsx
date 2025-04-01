'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSuccess('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess('Something went wrong!');
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-xl  mt-5 mb-5">
      <h2 className="text-xl font-semibold text-center">Contact Form</h2>
      <p className='text-sm font-medium text-left pt-4'>Fill out the form below, and we’ll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border rounded-full mb-2 pl-5 " />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded-full mb-2 pl-5" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-full mb-2 pl-5" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-full mb-2 pl-5" />
                <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full py-2 px-3 border rounded-full mb-2 pr-10 bg-white appearance-none"
        >
        <option value="">Choose service</option>
        <option value="Photography">Photography</option>
        <option value="Event Coverage">Event Coverage</option>
        <option value="Editing">Editing</option>
        </select>
        <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required className="w-full min-h-24 p-2 pl-5 border rounded-xl mb-2"></textarea>
        <button type="submit" disabled={loading} className="w-full bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
          {loading ? 'Sending...' : 'Submit'}
        </button>
        {success && <p className="mt-2 text-center text-sm text-gray-600">{success}</p>}
      </form>
    </div>
  );
}
