// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="p-4"  >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-auto bg-gray-800 text-white p-2 rounded"
          >
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </nav>
      );
}

export default Navbar