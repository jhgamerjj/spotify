import './globals.css'
import { Metadata } from 'next';

export const metadata: Metadata  = {
  title: "Spotify",
  description: 'listen to music',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
