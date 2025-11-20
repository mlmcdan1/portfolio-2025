import './globals.css';
import Image from 'next/image';
import profilePic from '@/public/images/profile.jpg';
import SidebarNav from '@/components/SidebarNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-slate-100 antialiased">
        <div className="relative flex min-h-screen overflow-hidden z-[1]">
          <div className="spotlight" style={{ top: '-16rem', left: '-12rem' }} />
          <div className="spotlight" style={{ bottom: '-14rem', right: '-10rem' }} />

          <header className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-3xl glass-panel glass-border px-6 py-4 flex items-center justify-between md:hidden">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-200 font-semibold">
                MM
              </div>
              <div>
                <p className="text-sm font-semibold text-white tracking-tight">Matthew McDaniel</p>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-sky-300/90">Full-Stack Developer</p>
              </div>
            </div>
            <nav className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-slate-300">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#projects" className="hover:text-white transition">Work</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
          </header>

          {/* Sidebar */}
          <aside className="hidden lg:flex fixed h-[calc(100vh-3rem)] w-64 glass-panel glass-border text-slate-100 flex-col items-center py-8 left-8 top-6 z-20">
            {/* Profile Image */}
            <Image
              src={profilePic}
              alt="Matthew McDaniel"
              width={100}
              height={100}
              className="rounded-full mb-4 object-cover ring-4 ring-white/10"
            />
            {/* Name */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Matthew McDaniel</h1>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300 mt-2">
                Full-Stack Developer
              </p>
            </div>

            <SidebarNav />
          </aside>

        {/* Main Content */}
        <div className="flex-1 w-full lg:ml-[19rem] px-4 py-24 md:px-10 lg:px-16 lg:py-16 relative z-10">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
