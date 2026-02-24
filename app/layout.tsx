import './globals.css';
import SidebarNav from '@/components/SidebarNav';
import BackgroundShapes from '@/components/BackgroundShapes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[var(--ink)] antialiased overflow-x-hidden">
        <div className="relative min-h-screen bg-[var(--paper)]">
          <SidebarNav />
          <BackgroundShapes />
          <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
