"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Template = {
    title: string;
    description: string;
    image: string;
    tag: string;
    video?: string;
    videoDelayMs?: number;
    primaryLink?: {
        href: string;
        label: string;
    };
};

const templates: Template[] = [
    {
        title: "HVAC Landing Page",
        description: "Perfect for service businesses that need fast quote forms and local SEO.",
        image: "/templates/hvac-template.png",
        tag: "Service Business",
        video: "/videos/HVAC_MockUp.mp4",
        videoDelayMs: 2000,
        primaryLink: {
            href: "https://hvacmockup.netlify.app",
            label: "View live mock \u2192",
        },
    },
    {
        title: "Fitness Coach Website",
        description: "For trainers, creators, and coaches who need to convert followers into clients.",
        image: "/templates/fitness-template.png",
        tag: "Creator/Coach",
        video: "/videos/WorkoutMockup.mp4",
        videoDelayMs: 2000,
        primaryLink: {
            href: "https://mlmcdan1.github.io/workout-mockup/",
            label: "View live site →",
        },
    },
    {
        title: "School Program Website",
        description: "Perfect for PTA groups and schools that need to highlight programs, curriculum, and enrollment info.",
        image: "/templates/realestate-template.png",
        tag: "Education",
        video: "/videos/schoolMock.mp4",
        videoDelayMs: 2000,
        primaryLink: {
            href: "https://uca-delta.vercel.app",
            label: "View live site →",
        },
    },
];

const accentGradients = [
    "from-sky-500/20 via-slate-900/90 to-slate-900/70",
    "from-purple-500/20 via-slate-900/90 to-slate-900/70",
    "from-emerald-500/20 via-slate-900/90 to-slate-900/70",
];

function TemplateCard({ template, idx }: { template: Template; idx: number }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (!template.video) {
            setShowVideo(false);
            return;
        }

        setShowVideo(false);

        const delay = template.videoDelayMs ?? 2000;
        const timeoutId = window.setTimeout(() => {
            setShowVideo(true);
        }, delay);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [template.video, template.videoDelayMs]);

    useEffect(() => {
        if (!showVideo || !videoRef.current) {
            return;
        }

        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Ignore autoplay errors; the video element will remain visible.
            });
        }
    }, [showVideo]);

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-5xl mx-auto w-full"
        >
            <div
                className={`relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br ${
                    accentGradients[idx % accentGradients.length]
                } shadow-xl shadow-slate-950/40`}
            >
                <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
                    <div className="absolute -top-16 right-8 h-48 w-48 rounded-full bg-white/10 blur-[120px]" />
                    <div className="absolute -bottom-16 left-4 h-48 w-48 rounded-full bg-white/10 blur-[120px]" />
                </div>
                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-10 items-center">
                    <div className="w-full lg:w-3/5">
                        <div className="relative w-full overflow-hidden rounded-3xl bg-slate-950/60 aspect-[16/9]">
                            {showVideo && template.video ? (
                                <video
                                    ref={videoRef}
                                    src={template.video}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster={template.image}
                                    aria-label={`${template.title} walkthrough`}
                                />
                            ) : (
                                <Image
                                    src={template.image}
                                    alt={template.title}
                                    width={1200}
                                    height={675}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    priority={idx === 0}
                                />
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 space-y-4 text-left">
                        <span className="text-xs md:text-sm text-sky-200 uppercase tracking-[0.5em]">
                            {template.tag}
                        </span>
                        <h3 className="text-3xl font-semibold text-white">
                            {template.title}
                        </h3>
                        <p className="text-base md:text-lg text-slate-200/90 leading-relaxed">
                            {template.description}
                        </p>
                        {template.primaryLink && (
                            <a
                                href={template.primaryLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-base font-semibold text-sky-100 hover:text-white transition"
                            >
                                {template.primaryLink.label}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function HireMeShowcaseSection() {
    return (
        <section className="py-20 text-slate-100 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-semibold text-center mb-12"
                >
                    Need a Site that Looks Like This?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto text-slate-300/80 mb-12 text-lg"
                >
                    These are real client-ready builds from my own toolkit. I tailor each one to match brand, copy, and business goals before launch.
                </motion.p>

                <div className="flex flex-col gap-16 md:gap-24">
                    {templates.map((template, idx) => (
                        <TemplateCard key={template.title} template={template} idx={idx} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h4 className="text-2xl font-semibold mb-4">
                        Let's build something great together.
                    </h4>
                    <p className="text-slate-300/80 mb-6">
                        Whether you're launching a brand or need to revamp your online presence - I've got you covered.
                    </p>
                    <Link 
                        href="/hire-me" 
                        className="inline-block bg-sky-500/90 
                        text-white px-8 py-3 rounded-full 
                        font-semibold hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/20"
                    >
                       Work With Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
