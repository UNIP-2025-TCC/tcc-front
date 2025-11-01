import type { Metadata } from 'next';
import '@/global/globals.css';
import { inter } from '@/assets/fonts';
import { HeroUiProvider } from '@/global/HeroUiProvider';
import Image from 'next/image';

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
                className={`antialiased ${inter.className} max-w-full h-[100svh] bg-gradient-to-br from-white to-amber-50`}
            >
                <div id='menu-header' className='w-full px-16 py-4 bg-white mb-6'>
                    <Image src="/img/mega_logo.png" alt="Logo" width={48} height={48} />
                </div>
                <div className='max-w-[1200px] mx-auto bg-white/80 rounded-2xl border-1 border-stone-100 p-6'>
                    <HeroUiProvider>{children}</HeroUiProvider>
                </div>
            </body>
        </html>
    );
}
