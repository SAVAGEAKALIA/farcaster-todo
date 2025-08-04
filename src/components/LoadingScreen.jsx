import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            <div className="text-center">
                {/* Animated Logo Container */}
                <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 animate-pulse">
                        <svg className="w-10 h-10 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>

                    {/* Spinning Ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Loading TodoList
                    </h2>
                    <p className="text-white/70 text-lg">
                        Connecting to Farcaster...
                    </p>

                    {/* Loading Dots Animation */}
                    <div className="flex items-center justify-center space-x-2 mt-6">
                        <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
