import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
    { name: 'Inicio', icon: '🏠', path: '/home' },
    { name: 'Gráficos', icon: '📊', path: '/charts' },
    { name: 'Idiomas', icon: '🌐', path: '/languages' },
];

export default function Sidebar({ theme, toggleTheme }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} h-screen bg-white dark:bg-gray-900 shadow-lg flex flex-col`}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                {!collapsed && <h1 className="text-lg font-bold text-gray-800 dark:text-white">🎥 Películas</h1>}
                <button onClick={() => setCollapsed(!collapsed)} className="text-gray-500 dark:text-gray-300">
                    {collapsed ? '➡️' : '⬅️'}
                </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-2 space-y-1">
                {menuItems.map(({ name, icon, path }) => (
                    <NavLink
                        key={name}
                        to={path}
                        className={({ isActive }) => `flex items-center w-full gap-2 px-3 py-2 rounded text-left transition-colors ${isActive ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-gray-200 dark:hover:bg-gray-700'} text-gray-800 dark:text-white`}
                    >
                        <span>{icon}</span>
                        {!collapsed && <span>{name}</span>}
                    </NavLink>
                ))}
            </nav>
            <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
                >{theme === 'dark' ? '🌞 Claro' : '🌙 Oscuro'}</button>
            </div>
        </aside>
    );
}
