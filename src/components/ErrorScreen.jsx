import React from 'react';

const ErrorScreen = ({ error }) => {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                    {/* Error Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-3xl mb-6">
                        <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>

                    {/* Error Title */}
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Oops! Something went wrong
                    </h2>

                    {/* Error Message */}
                    <div className="mb-6">
                        <p className="text-white/70 text-lg mb-4">
                            We encountered an issue while connecting to Farcaster.
                        </p>

                        {/* Error Details */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-6">
                                <p className="text-red-300 text-sm font-mono break-words">
                                    {error.message || error.toString()}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={handleRetry}
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                        >
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Try Again
                        </button>

                        <button
                            onClick={() => window.history.back()}
                            className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 border border-white/20"
                        >
                            Go Back
                        </button>
                    </div>

                    {/* Additional Help Text */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                        <p className="text-white/50 text-sm">
                            If the problem persists, please check your connection or try again later.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorScreen;
