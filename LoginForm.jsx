import { useState } from 'react';
import GoogleButton from './GoogleButton';

const LoginForm = () => {
  const [type, setType] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    terms: true
  });
  const [errors, setErrors] = useState({});

  const validateForm = (values) => {
    const errors = {};
    if (!values.email || !/^\S+@\S+$/.test(values.email)) {
      errors.email = 'Invalid email';
    }
    if (values.password.length <= 6) {
      errors.password = 'Password should include at least 6 characters';
    }
    return errors;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  const toggleType = () => {
    setType(prev => prev === 'login' ? 'register' : 'login');
  };

  return (
    <div className="mt-12 w-full max-w-md p-8 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Welcome, {type} with
      </h2>

      <div className="w-full">
        <GoogleButton onClick={() => handleGoogleSignIn()} />
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white/5 text-white/80">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'register' && (
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white pr-72 mr-20">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="hello@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              errors.email 
                ? 'border-red-500' 
                : 'border-white/30'
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-white pr-72 mr-20">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Your password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              errors.password 
                ? 'border-red-500' 
                : 'border-white/30'
            }`}
          />
          {errors.password && (
            <p className="text-sm text-red-400">{errors.password}</p>
          )}
        </div>

        {type === 'register' && (
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={(e) => handleInputChange('terms', e.target.checked)}
              className="w-4 h-4 bg-white/10 border-white/30 rounded focus:ring-blue-500 text-blue-600"
            />
            <label htmlFor="terms" className="text-sm text-white/80">
              I accept terms and conditions
            </label>
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={toggleType}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </button>

          <button 
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300"
          >
            {type === 'register' ? 'Register' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
