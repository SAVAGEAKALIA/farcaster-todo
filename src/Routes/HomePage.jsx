import React, {useEffect} from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { useTodos } from '../hooks/useTodos';
import Header from '../components/Header';
import Stats from '../components/Stats';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import {useFarcaster} from "../hooks/useFarcaster.js";
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';


function HomePage() {
    const { todos, stats, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
    const { isReady, user, error } = useFarcaster();

    // Show loading screen while Farcaster initializes
    if (!isReady) {
        return <LoadingScreen />;
    }

    // Show error if something went wrong
    if (error) {
        return <ErrorScreen error={error} />;
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
            <div className="max-w-2xl mx-auto">
                {/* Header Component */}
                <div className="pt-8 mb-6">
                    <Header user={user} />
                </div>

                {/* Stats Card */}
                <div className="mb-8">
                    <Stats stats={stats} />
                </div>

                {/* Main Todo Container */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                    <TodoInput onAddTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onClearCompleted={clearCompleted}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;