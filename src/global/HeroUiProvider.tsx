'use client';

import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from '@heroui/toast';

export function HeroUiProvider({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider className="w-full h-full">
            <ToastProvider placement="top-center" toastOffset={30} />
            {children}
        </HeroUIProvider>
    );
}
