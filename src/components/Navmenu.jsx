import React, { useState } from 'react';
export default function Sidebar({ theme, toggleTheme }) {
    const [collapsed, setCollapsed] = useState(false);
    const menuItems = [
        { name: 'Inicio', icon: '🏠' },
        { name: 'Populares', icon: '🔥' },
        { name: 'Tendencias', icon: '📈' },
        { name: 'Favoritas', icon: '❤️' },
        { name: 'Más Valoradas', icon: '⭐' },
        { name: 'Próximos Estrenos', icon: '🎬' },
        { name: 'Doc API', icon: '📚' },
        { name: 'Ajustes', icon: '⚙️' },
    ];
    return (
        <aside className={`bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4">
                {!collapsed && <h2 className="text-lg font-bold text-gray-900 dark:text-white">Mi Movie App</h2>}
                <button onClick={() => setCollapsed(!collapsed)} className="text-xl">
                    {collapsed ? '☰' : '✖'}
                </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2">
                {menuItems.map(item => (
                    <button key={item.name}
                        className="flex items-center w-full px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mb-1">
                        <span className="text-xl mr-3">{item.icon}</span>
                        {!collapsed && <span className="text-gray-900 dark:text-white">{item.name}</span>}
                    </button>
                ))}
            </nav>
            <div className="p-4">
                <button onClick={toggleTheme} className="w-full text-left px-2 py-2 rounded bg-gray-200 dark:bg-gray-700 transition-colors">
                    {theme === 'dark' ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
                </button>
            </div>
        </aside>
    );
}
