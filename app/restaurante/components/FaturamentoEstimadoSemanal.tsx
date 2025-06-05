// components/MinimalBarChart.tsx
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { dia: 'Seg', R$: 3500.88 },
    { dia: 'Ter', R$: 8000.25 },
    { dia: 'Qua', R$: 300.25 },
    { dia: 'Qui', R$: 6500.25 },
    { dia: 'Sex', R$: 1200.25 },
    { dia: 'Sab', R$: 2000.25 },
    { dia: 'Dom', R$: 1000.25 },
];

export default function FaturamentoEstimadoSemanal() {
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
                    <Bar dataKey="R$" radius={[8, 8, 0, 0]} barSize={48} fill="#6366F1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
