import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './context/ModalContext';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Wagmi - Premium Co-Working',
    description: 'A premium co-working hub for startups',
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} antialiased`}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
