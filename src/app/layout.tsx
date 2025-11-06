import type { Metadata } from 'next';
import '@/global/globals.css';
import { inter } from '@/assets/fonts';
import { HeroUiProvider } from '@/global/HeroUiProvider';
import Image from 'next/image';
import HeaderMenu from '@/components/headerMenu';

export const metadata: Metadata = {
    title: 'TCC FRONT',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={`antialiased ${inter.className} max-w-full h-svh bg-linear-to-br from-white to-amber-50`}
            >
                <HeroUiProvider>
                    <HeaderMenu />
                    <div className='max-w-[1200px] mx-auto bg-white/30 border border-stone-50 rounded-2xl p-6'>
                        {children}
                    </div>
                </HeroUiProvider>
            </body>
        </html>
    );
}
