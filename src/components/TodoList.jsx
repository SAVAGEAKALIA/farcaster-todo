import React from 'react';
import TodoItem from './TodoItem';
import {useFarcasterActions} from "../hooks/useFarcasterActions.js";

const TodoList = ({ todos, onToggle, onDelete, onClearCompleted }) => {
    const { shareTodos } = useFarcasterActions();

    if (todos.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl mb-6">
                    <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">No tasks yet!</h3>
                <p className="text-gray-500 text-lg">Create your first task above to get started on your productivity journey.</p>
            </div>
        );
    }

    const hasCompleted = todos.some(todo => todo.completed);

    return (
        <div>
            {/* Todo Items Container */}
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {todos.map((todo, index) => (
                    <div
                        key={todo.id}
                        style={{
                            animationDelay: `${index * 50}ms`
                        }}
                        className="animate-fadeInUp"
                    >
                        <TodoItem
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    </div>
                ))}
            </div>

            {/* Action Buttons Section */}
            <div className="space-y-4">
                {/* Clear Completed Button */}
                {hasCompleted && (
                    <div className="pt-6 border-t border-gray-200">
                        <button
                            onClick={onClearCompleted}
                            className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-2xl hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                        >
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Clear Completed Tasks
                        </button>
                    </div>
                )}

                {/* Share Todos Button */}
                {todos.length > 0 && (
                    <div className={`${hasCompleted ? '' : 'pt-6 border-t border-gray-200'}`}>
                        <button
                            onClick={() => shareTodos(todos)}
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
                        >
                            <span className="text-lg">📋</span>
                            <span>Share Todo List</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;