'use client';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    read:false,
    
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

      const notifyData = {
        message: `You have a new message from ${formData.firstName} ${formData.lastName}.`,
        time: new Date().toISOString(),
      };

      const responseNotification = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(notifyData),
      });
      
      if (response.ok && responseNotification.ok) {
        // setSuccess('Message sent successfully!');
        // setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '', read: false });
        router.push('/thank-you');

        
      } else {
        const data = await response.json();
        setSuccess(data.message || 'Failed to send message. Please speak directly.');
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
      <p className='text-sm font-medium text-left pt-4'>Fill out the form below, and we&apos ll get back to you as soon as possible.</p>
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
        
        <div className="mb-4 relative">
  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    className={`w-full py-2 pl-4 pr-10 border rounded-full bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-950 focus:border-gray-950 appearance-none transition-all duration-300 ${
      errors.service ? 'border-red-500' : 'border-gray-300'
    }`}
  >
    <option value="">Choose service</option>
    <option value="Wedding Shoot">Wedding Shoot</option>
    <option value="Couple Shoot">Couple Shoots</option>
    <option value="Birthday Shoot">Birthday Shoots</option>
    <option value="Model Photography">Model Photography</option>
    <option value="Baby Shoot">Baby Shoot</option>
    <option value="Event Coverage">Event Coverage</option>
    <option value="Graduation Shoot">Graduation Shoot</option>
    <option value="Other">Others</option>

  </select>

  {/* Custom dropdown arrow */}
  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
    <svg
      className="w-4 h-4 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {errors.service && (
    <p className="text-red-500 text-xs mt-1 ml-2">{errors.service}</p>
  )}
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