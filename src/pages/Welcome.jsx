import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center border border-gray-200">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 mb-8">
          Let’s get started by creating your account or logging in.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-600 hover:bg-purple-700 transition-colors text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-purple-100 hover:bg-purple-200 transition-colors text-purple-800 py-3 rounded-lg font-semibold shadow-inner"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
