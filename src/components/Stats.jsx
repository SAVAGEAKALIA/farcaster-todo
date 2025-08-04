import React from 'react';
import {useFarcasterActions} from "../hooks/useFarcasterActions.js";


const Stats = ({ stats }) => {
    const { shareProgress } = useFarcasterActions();

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="grid grid-cols-3 gap-6">
                <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-3 group-hover:bg-blue-500/30 transition-colors duration-200">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stats.total}</div>
                    <div className="text-sm text-white/70 font-medium">Total</div>
                </div>

                <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-3 group-hover:bg-green-500/30 transition-colors duration-200">
                        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stats.completed}</div>
                    <div className="text-sm text-white/70 font-medium">Completed</div>
                </div>

                <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-xl mb-3 group-hover:bg-orange-500/30 transition-colors duration-200">
                        <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stats.pending}</div>
                    <div className="text-sm text-white/70 font-medium">Pending</div>
                </div>
            </div>

            {/* Share Progress Button */}
            {stats.completed > 0 && (
                <div className="mt-6 pt-4 border-t border-white/20">
                    <button
                        onClick={() => shareProgress(stats)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
                    >
                        <span className="text-lg">🎉</span>
                        <span>Share Progress on Farcaster</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Stats;