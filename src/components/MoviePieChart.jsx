import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a4de6c', '#d0ed57'];

export default function MoviePieChart({ movies }) {
    // Agrupa por idioma original
    const counts = movies.reduce((acc, m) => {
        acc[m.original_language] = (acc[m.original_language] || 0) + 1;
        return acc;
    }, {});

    const data = Object.entries(counts).map(([lang, value]) => ({
        name: lang.toUpperCase(),
        value,
    }));

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg mt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Distribución por idioma
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={4}
                        label
                    >
                        {data.map((_, idx) => (
                            <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: 4 }}
                        itemStyle={{ color: '#333' }}
                    />
                    <Legend verticalAlign="bottom" wrapperStyle={{ marginTop: 20 }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
