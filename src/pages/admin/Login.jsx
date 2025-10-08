import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost/fashion_backend/login.php", { username, password });

      if (res.data.success) {
        // Save user to localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // Navigate to dashboard
        navigate("/admin/dashboard");
      } else {
        // Show proper error
        setError(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">Admin Login</h2>

        {error && (
          <div className="mb-4 text-red-600 bg-red-100 p-2 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 text-white font-semibold rounded ${loading ? "bg-gray-400" : "bg-pink-600 hover:bg-pink-700"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          onClick={() => navigate("/admin/signup")}
          className="mt-4 text-center text-pink-600 hover:underline cursor-pointer"
        >
          Don’t have an account? Sign up
        </p>
      </div>
    </div>
  );
}
