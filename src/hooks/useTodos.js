import { useState, useCallback, useMemo } from "react";

export const useTodos = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback((text) => {
        if (!text.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: Date.now().toString(),
        };

        setTodos(prev => [...prev, newTodo]);
    }, []);

    const toggleTodo = useCallback((id) => {
        setTodos(prev => prev.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter((item) => item.id !== id));
    }, []);

    const clearCompleted = useCallback(() => {
        setTodos(prev => prev.filter((item) => !item.completed));
    }, []);

    const stats = useMemo(() => ({
        total: todos.length,
        completed: todos.filter((item) => item.completed).length,
        pending: todos.filter((item) => !item.completed).length
    }), [todos]);

    return {
        todos,
        stats,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompleted,

    }
}