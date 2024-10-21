import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import HeirloomNav from '../assets/HeirloomNav.svg';
import HeirloomNavTitle from '../assets/HeirloomNavTitle.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', checkLoginStatus);
    checkLoginStatus();

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <header
      className="bg-cover bg-left bg-no-repeat p-4 relative flex flex-col md:flex-row md:justify-between md:items-center"
      style={{ backgroundImage: `url(${HeirloomNav})` }}
    >
      {/* Heirloom Title */}
      <img
        src={HeirloomNavTitle}
        alt="Heirloom"
        className="h-16 md:h-20 w-auto md:self-start md:pl-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 mt-4 md:mt-0"
      />

      {/* Navigation */}
      <div className="w-full flex justify-center md:justify-end mt-4 md:mt-0 space-x-2 md:space-x-4">
        <nav className="flex space-x-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Register
              </Link>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg duration-300 flex items-center justify-center"
              >
                <FaTwitter />
              </a>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  setIsLoggedIn(false);
                }}
                className="custom-font text-sm md:text-lg text-eggshell border border-eggshell px-2 md:px-4 py-1 md:py-2 rounded-full hover:bg-eggshell hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;


