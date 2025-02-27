export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-white">
        {/* Sidebar */}
        <aside className="fixed h-screen w-64 bg-gray-200 text-black flex flex-col items-center py-8">
          <h1 className="text-2xl font-bold">Matthew McDaniel</h1>
          <p className="text-sm text-blue-600">Full-Stack Web Developer</p>
          <nav className="space-y-4 text-center">
            <a href="#home" className="block text-lg hover:text-gray-500 transition">Home</a>
            <a href="#about" className="block text-lg hover:text-gray-500 transition">About</a>
            <a href="#services" className="block text-lg hover:text-gray-500 transition">Services</a>
            <a href="#skills" className="block text-lg hover:text-gray-500 transition">Skills</a>
            <a href="#education" className="block text-lg hover:text-gray-500 transition">Education</a>
            <a href="#projects" className="block text-lg hover:text-gray-500 transition">Projects</a>
            <a href="#contact" className="block text-lg hover:text-gray-500 transition">Contact</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 ml-64">{children}</main>
      </body>
    </html>
  );
}
