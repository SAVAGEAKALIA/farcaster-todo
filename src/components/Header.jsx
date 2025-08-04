import React from 'react';

const Header = ({ user }) => {
    return (
        <div className="text-center">
            {/* User Profile Section */}
            {user && (
                <div className="mb-6">
                    <div className="inline-flex items-center justify-center p-1 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                        <img
                            src={user.pfpUrl}
                            alt={user.displayName}
                            className="w-12 h-12 rounded-full border-2 border-white/30"
                        />
                    </div>
                    <p className="text-white/80 text-sm font-medium">
                        Welcome back, <span className="text-white font-semibold">{user.displayName}</span>! 👋
                    </p>
                </div>
            )}

            {/* Main Title */}
            <div className="mb-6">
                <h1 className="font-extrabold tracking-tight text-transparent bg-clip-text mb-3 text-3xl md:text-4xl bg-gradient-to-br from-blue-300 via-pink-300 to-purple-300">
                    Todo List Mini App
                </h1>
                <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto">
                    Stay organized with your Farcaster Mini App
                </p>
                <p className="text-white/50 text-sm mt-2">
                    Made with ❤️ by Luna
                </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-2 opacity-50">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    );
};

export default Header;