import './Navbar.css';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HireFreelancer from '../HireFreelancer/HireFreelancer';
import FindWork from '../FindWork/FindWork';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isFindWorkModalOpen, setIsFindWorkModalOpen] = useState(false);
  const hireButtonRef = useRef(null);
  const findWorkButtonRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to get button position
  const getButtonPosition = (ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      };
    }
    return null;
  };

  // Simplified hover handlers for Hire Freelancers
  const handleHireMouseEnter = () => setIsHireModalOpen(true);
  const handleHireMouseLeave = () => setIsHireModalOpen(false);

  // Simplified hover handlers for Find Work
  const handleFindWorkMouseEnter = () => setIsFindWorkModalOpen(true);
  const handleFindWorkMouseLeave = () => setIsFindWorkModalOpen(false);

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 w-full text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold flex items-center">
                <Link to="/" className="text-xl sm:text-2xl font-bold flex items-center">
                  <span className="text-primary">Thrive</span>
                  <span className="text-secondary ml-2">Jobs</span>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <div 
                ref={hireButtonRef}
                className="relative"
              >
                <button 
                  onMouseEnter={handleHireMouseEnter}
                  onMouseLeave={handleHireMouseLeave}
                  className="text-white hover:text-secondary transition-colors flex items-center group"
                >
                  Hire freelancers
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isHireModalOpen ? 'rotate-180' : 'group-hover:rotate-180'
                  }`} />
                </button>
              </div>

              <div
                ref={findWorkButtonRef}
                className="relative"
              >
                <button 
                  onMouseEnter={handleFindWorkMouseEnter}
                  onMouseLeave={handleFindWorkMouseLeave}
                  className="text-white hover:text-secondary transition-colors flex items-center group"
                >
                  Find work
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isFindWorkModalOpen ? 'rotate-180' : 'group-hover:rotate-180'
                  }`} />
                </button>
              </div>

              <button className="text-white hover:text-secondary transition-colors flex items-center group">
                Solutions
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                className="text-white hover:text-secondary transition-colors" 
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
              <button className="text-white hover:text-secondary transition-colors">
                Sign Up
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition-all duration-300 hover:scale-105">
                Post a Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-4 bg-black/95 border-t border-white/10 space-y-3">
            <div className="space-y-2">
              <button 
                onClick={() => {
                  setIsHireModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-white hover:text-secondary transition-colors flex items-center justify-between p-2 rounded-lg hover:bg-white/5"
              >
                Hire freelancers
                <ChevronDown className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  setIsFindWorkModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-white hover:text-secondary transition-colors flex items-center justify-between p-2 rounded-lg hover:bg-white/5"
              >
                Find work
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="w-full text-left text-white hover:text-secondary transition-colors flex items-center justify-between p-2 rounded-lg hover:bg-white/5">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <button className="w-full text-white hover:text-secondary transition-colors p-2 rounded-lg hover:bg-white/5 text-left">
                Log In
              </button>
              <button className="w-full text-white hover:text-secondary transition-colors p-2 rounded-lg hover:bg-white/5 text-left">
                Sign Up
              </button>
              <button className="w-full bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors text-center">
                Post a Project
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <HireFreelancer 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
        buttonRef={hireButtonRef}
      />

      <FindWork 
        isOpen={isFindWorkModalOpen} 
        onClose={() => setIsFindWorkModalOpen(false)}
        buttonRef={findWorkButtonRef}
      />
    </>
  );
};

export default Navbar;
