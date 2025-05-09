import { useAppStore } from '@/store/useAppStore';
import { textos } from '@/locales';

export function useTraducao() {
    const idioma = useAppStore(state => state.idioma);
    return textos[idioma];
}
