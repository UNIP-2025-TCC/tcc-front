import type { Metadata } from 'next';
import '@/global/globals.css';
import { inter } from '@/assets/fonts';
import { HeroUiProvider } from '@/global/HeroUiProvider';
import Image from 'next/image';
import HeaderMenu from '@/components/headerMenu';

export const metadata: Metadata = {
    title: 'TCC FRONT',
};

export default function LoginLayout({
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
                    <div className='max-w-[1200px] mx-auto bg-white/80 rounded-2xl border-1 border-stone-100 p-6'>
                        {children}
                    </div>
                </HeroUiProvider>
            </body>
        </html>
    );
}
