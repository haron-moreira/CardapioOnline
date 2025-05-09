'use client';

import { useAppStore } from '@/store/useAppStore';
import { useState, useRef, useEffect } from 'react';

type Props = {
    nome_restaurante?: string;
}

export default function HeaderSuperior(props: Props) {
    const { tema, idioma, toggleTema, setIdioma } = useAppStore();
    const [showLangModal, setShowLangModal] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowLangModal(false);
            }
        }

        if (showLangModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLangModal]);

    return (
        <div className="w-full px-4 py-4 flex justify-between items-center bg-transparent relative z-50">
            <h1 className="text-lg font-bold ">{props.nome_restaurante}</h1>
            <div className="flex items-center gap-4">
                {/* Tema: Sol/Lua */}
                <button onClick={toggleTema} className="text-xl cursor-pointer">
                    {tema === 'escuro' ? '🌙' : '☀️'}
                </button>

                {/* Idioma: mostra bandeira atual */}
                <button onClick={() => setShowLangModal(true)} className="text-xl cursor-pointer">
                    {idioma === 'pt' && '🇧🇷'}
                    {idioma === 'en' && '🇺🇸'}
                    {idioma === 'es' && '🇪🇸'}
                </button>
            </div>

            {/* Modal de idiomas */}
            {showLangModal && (
                <div ref={modalRef} className="absolute right-4 top-12 bg-neutral-800 text-white rounded shadow-md px-4 py-2 space-y-2">
                    <button onClick={() => { setIdioma('pt'); setShowLangModal(false); }}>🇧🇷 Português</button><br />
                    <button onClick={() => { setIdioma('en'); setShowLangModal(false); }}>🇺🇸 English</button><br />
                    <button onClick={() => { setIdioma('es'); setShowLangModal(false); }}>🇪🇸 Español</button>
                </div>
            )}
        </div>
    );
}