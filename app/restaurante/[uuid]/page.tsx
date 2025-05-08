// app/restaurante/[uuid]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function RestauranteGestaoPage() {
    const { uuid } = useParams();

    const [pratos, setPratos] = useState([
        { id: 1, nome: 'Prato 1', preco: 25.0 },
        { id: 2, nome: 'Prato 2', preco: 30.0 },
    ]);

    const handleNomeChange = (id: number, novoNome: string) => {
        setPratos((prev) =>
            prev.map((prato) => (prato.id === id ? { ...prato, nome: novoNome } : prato))
        );
    };

    const handlePrecoChange = (id: number, novoPreco: number) => {
        setPratos((prev) =>
            prev.map((prato) => (prato.id === id ? { ...prato, preco: novoPreco } : prato))
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                Gestão do Restaurante
            </h1>
            <p className="text-center text-gray-600 text-sm mb-4">
                Editando restaurante com UUID: <span className="font-mono text-blue-600">{uuid}</span>
            </p>
            <div className="space-y-6">
                {pratos.map((prato) => (
                    <div key={prato.id} className="bg-white p-4 rounded shadow">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nome do prato:
                            </label>
                            <input
                                type="text"
                                value={prato.nome}
                                onChange={(e) => handleNomeChange(prato.id, e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preço:
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                value={prato.preco}
                                onChange={(e) => handlePrecoChange(prato.id, parseFloat(e.target.value))}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
