import Link from "next/link";

export default function HireMePage() {
    return (
        <main className="min-h-screen py-24 px-6 text-slate-100">
            <section className="max-w-4xl mx-auto text-center glass-panel glass-border px-10 py-14">
                <h1 className="text-4xl font-semibold mb-6">
                    Let's Work Together
                </h1>
                <p className="text-slate-300/80 text-lg">
                    Looking for a high-converting, professional website that matches your brand?
                    You've already seen the kind of templates I can build. Now let's turn one of them
                    into your live site. 
                </p>

                <div className="mt-10 bg-white/5 p-8 rounded-2xl text-left text-base mb-8 border border-white/15">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-slate-100">
                        What I Offer
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300/80">
                        <li>⚡ Landing pages for businesses or products</li>
                        <li>📱 Mobile-responsive, clean, and modern UI</li>
                        <li>🛠️ Optional backend (contact forms, CMS, etc.)</li>
                        <li>📦 Fast delivery using React, Next.js, or plain HTML</li>
                        <li>💡 Hosting setup, domain connection, and basic SEO</li>
                    </ul>
                </div>

                <div className="text-center mb-10">
                    <p className="text-lg mb-2 font-medium">
                        💬 Want to get started? Reach out below.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a 
                            href="mailto:matthewiv.codes@gmail.com"
                            className="bg-sky-500/90 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25">
                            Email Me  
                        </a>
                        <a 
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 px-8 py-3 rounded-full font-semibold text-slate-200 hover:bg-white/10 transition-all duration-200"
                        >
                            Book a Call
                        </a>
                    </div>
                </div>

                <p className="text-sm text-slate-400">
                    Not ready to commit?
                    <Link 
                        href="/"
                        className="underline hover:text-slate-200 transition"
                    >
                        Explore my templates again
                    </Link>
                </p>
            </section>
        </main>
    );
}
