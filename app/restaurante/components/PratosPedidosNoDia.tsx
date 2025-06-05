// components/MinimalBarChart.tsx
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { prato: 'Macarrão', Quantidade: 12 },
    { prato: 'Arroz', Quantidade: 11 },
    { prato: 'Bife', Quantidade: 3 },
    { prato: 'Frango', Quantidade: 65 },
    { prato: 'Pizza', Quantidade: 120 },
    { prato: 'Churrasco', Quantidade: 20 },
    { prato: 'Feijoada', Quantidade: 100 },
    { prato: 'Sopa', Quantidade: 103 },
    { prato: 'Lanche', Quantidade: 155 },
    { prato: 'Pastel', Quantidade: 102 },
    { prato: 'Saladas', Quantidade: 188 },
    { prato: 'Parmeggiana', Quantidade: 305 },


];

export default function PratosPedidosNoDia() {
    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis
                        dataKey="prato"
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
                    <Bar dataKey="Quantidade" radius={[8, 8, 0, 0]} barSize={48} fill="#6366F1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
