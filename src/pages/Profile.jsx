import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("popxUser"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("popxUser");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer text-purple-700 hover:text-purple-800 transition-colors"
            size={24}
          />
          <h2 className="text-2xl font-bold text-purple-700">Profile</h2>
        </div>

        <div className="flex justify-center mb-5">
          <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
            <User size={48} className="text-purple-700" />
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-purple-800 mb-1">
          {user?.name || "User"}
        </h2>
        <p className="text-gray-500 text-sm mb-5">Welcome to PopX 👋</p>
        <div className="border-t border-gray-200 my-4"></div>
        <div className="space-y-3 text-gray-700">
          {[
            { label: "Email", value: user?.email },
            { label: "Phone", value: user?.phone },
            { label: "Company", value: user?.company || "N/A" },
            { label: "Agency", value: user?.agency?.toUpperCase() },
          ].map((item) => (
            <div
              key={item.label}
              className="flex justify-between border-b pb-2"
            >
              <span className="font-medium text-gray-600">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 my-5"></div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
          >
            Go Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
