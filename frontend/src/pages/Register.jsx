import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    inviteCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full  flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Section with Illustration */}
        <div className="w-full bg-orange-100 lg:min-h-[90vh]  flex flex-col lg:justify-center items-center lg:w-3/5 p-8 lg:p-12">
          <div className="mb-12">
            <h1 className="text-4xl  text-blue-800 family-serif font-thin mb-4">FACE SEARCH AI</h1>
          </div>

          <div className="relative">
            {/* Chat Bubbles */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-blue-100 rounded-full p-3 relative">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-12 h-12 rounded-full bg-blue-200" />
              </div>
              <div className="bg-orange-100 rounded-full p-3">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-12 h-12 rounded-full bg-orange-200" />
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <img src="https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-12 h-12 rounded-full bg-purple-200" />
              </div>
            </div>

            {/* Speech Bubbles */}
            <div className="text-sm text-gray-600 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 mb-3 max-w-xs mx-auto">
                Let use face Search AI...
              </div>
              <div className="bg-orange-50 rounded-lg p-3 mb-3 max-w-xs mx-auto">
                I think we need to register first...
              </div>
              <div className="bg-purple-50 rounded-lg p-3 max-w-xs mx-auto">
                ok lets go...
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-sm px-2 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-100 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm px-2 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-100 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-sm px-2 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-100 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="inviteCode"
                placeholder="Invite Code (Optional)"
                value={formData.inviteCode}
                onChange={handleChange}
                className="w-full text-sm px-2 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-100 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
              />
            </div>

            <button
            onClick={()=>navigate('/search')}
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-medium"
            >
              Register
            </button>

            <p className="text-center text-gray-600">
              Already registered?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;