// components/MinimalBarChart.tsx
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { dia: 'Seg', acessos: 1210 },
    { dia: 'Ter', acessos: 908 },
    { dia: 'Qua', acessos: 150 },
    { dia: 'Qui', acessos: 800 },
    { dia: 'Sex', acessos: 705 },
    { dia: 'Sab', acessos: 200 },
    { dia: 'Dom', acessos: 10 },
];

export default function AcessoSemanal() {
    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis
                        dataKey="dia"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'currentColor', fontSize: 14 }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'currentColor', fontSize: 14 }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'white', border: 'none', boxShadow: '0px 2px 6px rgba(0,0,0,0.1)' }}
                        labelStyle={{ color: '#666' }}
                    />
                    <Bar dataKey="acessos" radius={[8, 8, 0, 0]} barSize={48} fill="#6366F1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
