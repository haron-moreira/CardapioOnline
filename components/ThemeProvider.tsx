'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';

export default function ThemeProvider() {
    const { tema } = useAppStore();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', tema === 'escuro');
    }, [tema]);

    return null;
}
