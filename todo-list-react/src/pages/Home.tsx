import React from "react";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Todo List</h1>
        <p className="text-gray-600">Stay organized and get things done</p>
      </div>
      {/* add todo form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 ">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          />
          <button className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium duration-200"><Plus />Add</button>
        </div>
      </div>
    </div>
  );
}
