'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';



export default function ContactForm() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // If you are using query string ?section=baby-shoot
    const section = searchParams.get('section');

    

    if (section) {
      const formatted = formatSectionName(section);
      setFormData(prev => ({
        ...prev,
        service: formatted
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    const refcode = searchParams.get('refcode');

    

    if (refcode) {
      setFormData(prev => ({
        ...prev,
        code: refcode
      }));
    }
  }, [searchParams]);

  function formatSectionName(section:string) {
    if (!section) return "";
    return section
      .split('-')                      // Split by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' ');                      // Join words with space
  }


  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    code:'',
    read:false,
    
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    code:string;
    message: string;
    
  }
  
  interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    service?: string;
    code?:string;
    message?: string;
    
  }
  
  const validateForm = (formData: FormData, setErrors: (errors: FormErrors) => void): boolean => {
    const newErrors: FormErrors = {};
  
    // Helper function to detect potential SQL injection patterns
    const isSuspiciousInput = (input: string): boolean => {
      const sqlInjectionPatterns = [
        /--/, // SQL comment
        /;[\s]*--/, // Statement terminator with comment
        /[';]\s*(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)/i, // Common SQL keywords
        /\b(OR|AND)\b.*(=|>|<)/i, // Logical operators with comparisons
        /['"]/ // Unescaped quotes
      ];
      return sqlInjectionPatterns.some((pattern) => pattern.test(input));
    };
  
    // Validate firstName (required)
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (isSuspiciousInput(formData.firstName)) {
      newErrors.firstName = 'First name contains invalid characters';
    }
  
    // Validate lastName (if provided)
    if (formData.lastName && formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (formData.lastName && isSuspiciousInput(formData.lastName)) {
      newErrors.lastName = 'Last name contains invalid characters';
    }
  
    // Validate email (required)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (isSuspiciousInput(formData.email)) {
      newErrors.email = 'Email contains invalid characters';
    }
  
    // Validate phone (if provided)
    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (formData.phone && isSuspiciousInput(formData.phone)) {
      newErrors.phone = 'Phone number contains invalid characters';
    }
  
    // Validate service (required)
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    } else if (isSuspiciousInput(formData.service)) {
      newErrors.service = 'Service contains invalid characters';
    }

    // Validate code 
    if (isSuspiciousInput(formData.code)) {
      newErrors.code = 'Code contains invalid characters';
        } else if (formData.code && !['save10'].includes(formData.code)) {
      newErrors.code = 'Referral code is not valid';
    }
  
    // Validate message (required)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (isSuspiciousInput(formData.message)) {
      newErrors.message = 'Message contains invalid characters';
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
    if (!validateForm(formData,setErrors)) {
      return;
    }
    
    setLoading(true);
    setSuccess(null);

    try {
      const notifyData = {
        message: `You have a new message from ${formData.firstName} ${formData.lastName}.`,
        time: new Date().toISOString(),
      };
      
      // Navigate immediately
      router.push('/thank-you');
      
      // Fire-and-forget the background fetches
      setTimeout(() => {
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      
        fetch('/api/notifications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(notifyData),
        });
      }, 1000);
      
      
      
    } catch  {
      // console.error('Error:', error);
      setSuccess('Something went wrong! Please try again later.');
    }
    
    setLoading(false);
  };

  return (
    
    <div className="mx-auto sm:max-w-lg bg-gray-200 p-6 sm:rounded-2xl mt-5 mb-5">
      <h2 className="text-xl font-semibold text-center">Contact Form</h2>
      
      <p className='text-sm font-medium text-center pt-4 '>Fill out the form below, and we&apos;ll get back to you as soon as possible.</p>
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
    <option value="Couple Shoot">Couple Shoot</option>
    <option value="Birthday Shoot">Birthday Shoot</option>
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

<div className="mb-2">
          <input 
            type="text" 
            name="code" 
            placeholder="Referral code" 
            value={formData.code} 
            onChange={handleChange}
            className={`w-full p-2 border rounded-full pl-5 ${errors.code ? 'border-red-500' : ''}`} 
          />
          {errors.code && <p className="text-red-500 text-xs mt-1 ml-2">{errors.code}</p>}
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