import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("popxUser", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <ArrowLeft
            onClick={() => navigate("/")}
            className="cursor-pointer text-purple-700 hover:text-purple-800 transition-colors"
          />
          <h2 className="text-2xl font-bold text-purple-700">Create Account</h2>
        </div>

        {["name", "phone", "email", "password", "company"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
              {field === "company" ? "Company Name" : field}*
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required={field !== "company"}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>
        ))}
        <p className="text-sm mb-2">Are you an agency?*</p>
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === "yes"}
              onChange={handleChange}
              className="accent-purple-600"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === "no"}
              onChange={handleChange}
              className="accent-purple-600"
            />
            No
          </label>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-lg font-semibold shadow-md transition-all"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
