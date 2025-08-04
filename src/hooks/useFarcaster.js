import { useState, useEffect, useCallback } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';

export const useFarcaster = () => {
    const [isReady, setIsReady] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeFarcaster = async () => {
            try {
                // Initialize the SDK
                await sdk.actions.ready();
                setIsReady(true);

                // Get user context if available
                const context = await sdk.context;
                if (context?.user) {
                    setUser(context.user);
                }

                console.log('Farcaster SDK initialized successfully');
            } catch (err) {
                console.error('Failed to initialize Farcaster SDK:', err);
                setError(err.message);
            }
        };

        initializeFarcaster();
    }, []);

    return { isReady, user, error };
};