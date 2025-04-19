import React from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}