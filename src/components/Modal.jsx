import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Modal({ isOpen, onClose, children }) {
    const modalRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShow(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setShow(false);
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKey = e => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            <div
                ref={modalRef}
                tabIndex={-1}
                className={`transform transition-all duration-300 ease-out bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full relative
                    ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
            >
                <button
                    aria-label="Cerrar modal"
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
