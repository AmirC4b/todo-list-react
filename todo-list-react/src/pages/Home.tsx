import { useEffect, useState } from "react";
import { Plus, SquarePen, Trash, Check } from "lucide-react";
import { toast } from "react-toastify";
import { formatDistanceToNow } from "date-fns";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All Tasks");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const tabs = ["All Tasks", "Active", "Completed"];

  const userFullName = localStorage.getItem("userFullName");
  const userPassword = localStorage.getItem("userPassword");

  // for add todo to todo list
  const handleAddTodo = () => {
    if (userFullName && userPassword) {
      if (todo.trim() === "") {
        toast.error("Todo cannot be empty!");
        return;
      }
      const newTodo = {
        id: todos.length + 1,
        text: todo,
        completed: false,
        createdAt: Date.now(),
      };

      setTodos([...todos, newTodo]);
      setTodo("");
    } else {
      toast.info("first make sure you login or have account");
    }
  };
  // for deletting the todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // for check the todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // for filter the todo list
  const filteredTodos =
    activeTab === "Active"
      ? todos.filter((t) => !t.completed)
      : activeTab === "Completed"
      ? todos.filter((t) => t.completed)
      : todos; // All Tasks

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
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          />
          <button
            onClick={handleAddTodo}
            className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium duration-200"
          >
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
        {todos.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tasks yet
            </h3>
            <p className="text-gray-500">
              Add your first todo above to get started!
            </p>
          </div>
        ) : (
          // todo list
          <div>
            {filteredTodos.map((t) => (
              <div className="p-4 flex items-center gap-4 hover:shad ">
                <div
                  className="cursor-pointer"
                  onClick={() => toggleTodo(t.id)}
                >
                  {t.completed ? (
                    <Check className="bg-green-500 w-6 h-6 rounded-full text-white" />
                  ) : (
                    <button className="w-6 h-6 rounded-full cursor-pointer border-2 border-gray-300 hover:border-green-400 duration-200 flex items-center justify-center"></button>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 font-medium break-words">
                    {t.text}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {" "}
                    {formatDistanceToNow(new Date(t.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <SquarePen className="text-gray-400 hover:text-blue-600 cursor-pointer duration-200 size-4 " />
                  <Trash
                    onClick={() => handleDelete(t.id)}
                    className="text-gray-400 cursor-pointer hover:text-blue-600 duration-200 size-4 "
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* stats */}
      <div className="bg-white rounded-2xl shadow-lg my-6 p-6">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{todos.length} total tasks</span>
          <span>{todos.filter((t) => t.completed).length} completed</span>
          <button
            onClick={() => setTodos(todos.filter((t) => !t.completed))}
            className="text-red-500 cursor-pointer hover:text-red-700 font-medium duration-200"
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}
