import type { Metadata } from 'next';
import '@/global/globals.css';
import { inter } from '@/assets/fonts';
import { HeroUiProvider } from '@/global/HeroUiProvider';

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
                className={`antialiased ${inter.className} max-w-full h-[100svh]`}
            >
                <HeroUiProvider>{children}</HeroUiProvider>
            </body>
        </html>
    );
}
