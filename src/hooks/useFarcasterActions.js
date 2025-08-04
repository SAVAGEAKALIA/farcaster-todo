import { useCallback } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';

export const useFarcasterActions = () => {
    const shareProgress = useCallback(async (stats) => {
        try {
            const message = `Just completed ${stats.completed} out of ${stats.total} tasks on my Farcaster Todo app! 🎉`;

            // This opens Farcaster's compose window with pre-filled text
            await sdk.actions.openUrl(`https://warpcast.com/~/compose?text=${encodeURIComponent(message)}`);
        } catch (error) {
            console.error('Failed to share progress:', error);
        }
    }, []);

    const shareTodo = useCallback(async (todoText) => {
        try {
            const message = `Just added "${todoText}" to my todo list! What's on your list today? 📝`;

            await sdk.actions.openUrl(`https://warpcast.com/~/compose?text=${encodeURIComponent(message)}`);
        } catch (error) {
            console.error('Failed to share todo:', error);
        }
    }, []);

    const shareTodos = useCallback(async (todos) => {
        try {
            const todoList = todos.map((todo, index) =>
                `${index + 1}. ${todo.completed ? '✅' : '⏳'} ${todo.text}`
            ).join('\n');

            const message = `My current todo list:\n\n${todoList}\n\nStaying productive with my Farcaster Todo app! 📋`;

            await sdk.actions.openUrl(`https://warpcast.com/~/compose?text=${encodeURIComponent(message)}`);
        } catch (error) {
            console.error('Failed to share todos:', error);
        }
    }, []);

    return { shareProgress, shareTodo, shareTodos };
};