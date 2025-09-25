import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login.php", { username, password });
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-50">
      
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        
        <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Login
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
