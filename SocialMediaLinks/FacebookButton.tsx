import { FaFacebook } from 'react-icons/fa';

const FacebookButton = (props) => {
  return (
    <button
      {...props}
      className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 shadow-sm"
    >
      <FaFacebook className="text-blue-600" size={20} />
      {/* Continue with Facebook */}
    </button>
  );
};

export default FacebookButton;
