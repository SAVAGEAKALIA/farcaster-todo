import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={`group flex items-center p-4 mb-3 bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
            todo.completed
                ? 'opacity-75 bg-gray-50/80 border-gray-200'
                : 'border-gray-100 hover:border-indigo-200 shadow-sm'
        }`}>
            {/* Custom Checkbox */}
            <div className="relative mr-4">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="sr-only"
                />
                <div
                    onClick={() => onToggle(todo.id)}
                    className={`w-6 h-6 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center ${
                        todo.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300 hover:border-indigo-400 group-hover:border-indigo-500'
                    }`}
                >
                    {todo.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Todo Text */}
            <span className={`flex-1 text-gray-800 font-medium transition-all duration-200 ${
                todo.completed ? 'line-through text-gray-500' : ''
            }`}>
                {todo.text}
            </span>

            {/* Delete Button */}
            <button
                onClick={() => onDelete(todo.id)}
                className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Delete todo"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
};

export default React.memo(TodoItem);