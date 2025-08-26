import React, { useEffect, useState } from "react";
import { ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const userFullName = localStorage.getItem("userFullName");
    const userPassword = localStorage.getItem("userPassword");

    if (userFullName && userPassword) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 mb-8">
      <div className="max-w-6xl px-4 py-4 mx-auto">
        <div className="flex justify-between items-center">
          {/* the left side of header */}
          <div className="flex items-center gap-3">
            <div className="bg-[#2563eb] py-1 px-1 rounded-sm">
              <ClipboardList className="text-white" />
            </div>
            <div className="font-bold text-xl">TodoApp</div>
          </div>
          {/* the ride side of header */}
          {logged ? (
            <div className="flex gap-3">
              <button  className="text-gray-600 hover:text-gray-800 cursor-pointer duration-200 font-medium">
                <Link to={"/"}>Logut</Link>
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button className="text-gray-600 hover:text-gray-800 cursor-pointer duration-200 font-medium">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer duration-200">
                <Link to={"/sign-up"}>Sign Up</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
