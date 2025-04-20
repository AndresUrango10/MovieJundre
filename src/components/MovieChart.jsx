import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function MovieChart({ movies }) {
    const data = movies.map(m => ({ name: m.title.length > 10 ? m.title.slice(0, 10) + '...' : m.title, rating: m.vote_average }));
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Promedio de votos</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="name" tick={{ fill: '#8884d8', fontSize: 12 }} />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="rating" fill="#8884d8" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}