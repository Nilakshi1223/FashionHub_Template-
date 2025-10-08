import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    fullName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error on input change
    setSuccess("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await api.post("/signup.php", form);

      if (res.data.success) {
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => navigate("/admin/login"), 1500); // redirect after 1.5s
      } else {
        setError(res.data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      setError("Server error: Could not connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-pink-200">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          Create an Account
        </h2>

        {/* Show error or success */}
        {error && (
          <div className="mb-3 text-red-600 text-sm font-medium bg-red-100 p-2 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-3 text-green-600 text-sm font-medium bg-green-100 p-2 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white p-2 rounded-lg font-semibold transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p
          onClick={() => navigate("/admin/login")}
          className="text-center text-sm text-pink-600 mt-4 cursor-pointer hover:underline"
        >
          Already have an account? Login here
        </p>
      </div>
    </div>
  );
}
