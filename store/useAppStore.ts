import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AppState = {
    tema: 'claro' | 'escuro';
    idioma: 'pt' | 'en' | 'es';
    toggleTema: () => void;
    setIdioma: (lang: 'pt' | 'en' | 'es') => void;
};

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            tema: 'escuro',
            idioma: 'pt',
            toggleTema: () =>
                set((state) => ({ tema: state.tema === 'escuro' ? 'claro' : 'escuro' })),
            setIdioma: (lang) => set({ idioma: lang }),
        }),
        {
            name: 'preferencias-usuario',
        }
    )
);
