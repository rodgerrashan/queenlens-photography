'use client';

import { useState } from 'react';

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate firstName (required)
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    
    // Validate lastName (if provided)
    if (formData.lastName && formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    
    // Validate email (required)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone (if provided)
    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Validate service (required)
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    // Validate message (required)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setSuccess(null);

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
        const data = await response.json();
        setSuccess(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess('Something went wrong! Please try again later.');
    }
    
    setLoading(false);
  };

  return (
    <div className="mx-auto sm:max-w-lg bg-gray-200 p-6 sm:rounded-2xl mt-5 mb-5">
      <h2 className="text-xl font-semibold text-center">Contact Form</h2>
      <p className='text-sm font-medium text-left pt-4'>Fill out the form below, and we'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-2">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange}
            className={`w-full p-2 border rounded-full pl-5 ${errors.firstName ? 'border-red-500' : ''}`} 
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-2">{errors.firstName}</p>}
        </div>
        
        <div className="mb-2">
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange}
            className={`w-full p-2 border rounded-full pl-5 ${errors.lastName ? 'border-red-500' : ''}`} 
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1 ml-2">{errors.lastName}</p>}
        </div>
        
        <div className="mb-2">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange}
            className={`w-full p-2 border rounded-full pl-5 ${errors.email ? 'border-red-500' : ''}`} 
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
        </div>
        
        <div className="mb-2">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange}
            className={`w-full p-2 border rounded-full pl-5 ${errors.phone ? 'border-red-500' : ''}`} 
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
        </div>
        
        <div className="mb-2">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full py-2 px-3 border rounded-full mb-2 pr-10 bg-white appearance-none ${errors.service ? 'border-red-500' : ''}`}
          >
            <option value="">Choose service</option>
            <option value="Photography">Photography</option>
            <option value="Event Coverage">Event Coverage</option>
            <option value="Editing">Editing</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1 ml-2">{errors.service}</p>}
        </div>
        
        <div className="mb-4">
          <textarea 
            name="message" 
            placeholder="Your message" 
            value={formData.message} 
            onChange={handleChange}
            className={`w-full min-h-24 p-2 pl-5 border rounded-xl ${errors.message ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>}
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out disabled:opacity-70"
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
        
        {success && (
          <p className={`mt-2 text-center text-sm ${success.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {success}
          </p>
        )}
      </form>
    </div>
  );
}