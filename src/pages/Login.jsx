import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("popxUser"));

    if (!savedUser) {
      alert("No user found! Please sign up first.");
      navigate("/signup");
      return;
    }

    if (
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200"
      >
    
        <div className="flex items-center gap-3 mb-6">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer text-purple-700 hover:text-purple-800 transition-colors"
            size={24}
          />
          <h2 className="text-3xl font-bold text-purple-700">Login</h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-lg font-semibold shadow-md transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
