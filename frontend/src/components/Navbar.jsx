import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth token if stored
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">📝 Notes App</h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-200">Dashboard</Link>

        {!user && <Link to="/login" className="hover:text-gray-200">Login</Link>}
        {!user && <Link to="/register" className="hover:text-gray-200">Register</Link>}

        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
