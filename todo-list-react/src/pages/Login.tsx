import React, { useState } from "react";
import { ClipboardList, LogOut } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    console.log("users:", users);
    console.log("data:", data);
    const user = users.find(
      (user: any) =>
        user.fullName === data.fullName && user.password === data.password,
    );
    console.log("found user:", user);
    if (user) {
      localStorage.setItem("currentUser", user.fullName);

      toast.success("Login was successful");
      navigate("/");
    } else {
      toast.error("Invalid username or password");
    }

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* title */}
        <div className="text-center">
          {/* logo */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-blue-700 items-center p-3 rounded-2xl">
              <ClipboardList className="text-white size-10" />
            </div>
          </div>
          {/* text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your TodoApp account</p>
          </div>
        </div>
        {/* form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                placeholder="Enter your full name"
                id="fullName"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <p className="text-red-600 mt-4">Full Name is required.</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                placeholder="Enter your password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 mt-2">Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 mt-2">
                  Password must be at least 8 characters.
                </p>
              )}
            </div>
            <button
              className="w-full cursor-pointer mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl duration-200 flex items-center justify-center gap-2"
              type="submit"
            >
              <LogOut />
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-700">Don't have an account? </span>
            <span>
              <Link
                className="text-blue-600 hover:text-blue-700 font-medium duration-200"
                to={"/sign-up"}
              >
                Sign up here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
``;
