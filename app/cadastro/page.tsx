// app/cadastro/page.tsx
'use client';

import { useState } from 'react';

export default function CadastroPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Cadastro attempt with:', { name, email, password });
        // Futuramente: chamar backend NestJS
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleCadastro}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
                    Criar Conta
                </h2>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Nome
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded text-sm sm:text-base"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
