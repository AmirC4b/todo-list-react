import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All Tasks");

  const tabs = ["All Tasks", "Active", "Completed"];

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
          <button className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium duration-200">
            <Plus />
            Add
          </button>
        </div>
      </div>
      {/* todo filter tabs */}
      <div className="bg-white rounded-2xl shadow-lg p-2 mb-6">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-xl font-medium cursor-pointer transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* todo list */}
      <div className="bg-white rounded-2xl shadow-lg">
        {/* empty tasks*/}
        <div className="p-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-500">
            Add your first todo above to get started!
          </p>
        </div>
      </div>
      {/* stats */}
      <div className="bg-white rounded-2xl shadow-lg my-6 p-6">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>0 total tasks</span>
          <span>0 completed</span>
          <button className="text-red-500 cursor-pointer hover:text-red-700 font-medium duration-200">Clear completed</button>
        </div>
      </div>
    </div>
  );
}
