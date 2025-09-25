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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await api.post("/signup.php", form);
      if (res.data.success) {
        alert("Signup successful!");
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-pink-200">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          Create an Account
        </h2>
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
            className="w-full bg-pink-500 text-white p-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-200"
          >
            Signup
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
