const GoogleIcon = (props) => {
    return (
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 18 18" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path 
          d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" 
          fill="#4285F4"
        />
        <path 
          d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" 
          fill="#34A853"
        />
        <path 
          d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706s.102-1.166.282-1.706V4.962H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.038l3.007-2.332z" 
          fill="#FBBC05"
        />
        <path 
          d="M9 3.583c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.962L3.964 7.29C4.672 5.163 6.656 3.583 9 3.583z" 
          fill="#EA4335"
        />
      </svg>
    );
  };
  
  const GoogleButton = (props) => {
    return (
      <button
        {...props}
        className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 shadow-sm"
      >
        <GoogleIcon className="w-5 h-5" />
        Continue with Google
      </button>
    );
  };
  
  export default GoogleButton;
