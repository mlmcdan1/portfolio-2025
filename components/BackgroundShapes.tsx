export default function BackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute -top-16 left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-[0.06]"
        viewBox="0 0 520 520"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 120L260 20l220 100-40 260-220 120L40 380z"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="120" cy="140" r="6" fill="black" />
        <circle cx="400" cy="320" r="6" fill="black" />
      </svg>

      <svg
        className="absolute right-[-60px] top-[18%] h-[420px] w-[420px] opacity-[0.08]"
        viewBox="0 0 420 420"
        fill="none"
        aria-hidden
      >
        <path
          d="M60 40h260l40 80-60 220H80L40 140z"
          fill="black"
        />
      </svg>

      <svg
        className="absolute left-[-40px] top-[55%] h-[360px] w-[360px] opacity-[0.05]"
        viewBox="0 0 360 360"
        fill="none"
        aria-hidden
      >
        <rect x="40" y="40" width="280" height="280" rx="60" stroke="black" strokeWidth="2" />
        <path d="M80 180h200" stroke="black" strokeWidth="2" />
      </svg>

      <svg
        className="absolute right-[10%] bottom-[-40px] h-[260px] w-[520px] opacity-[0.08]"
        viewBox="0 0 520 260"
        fill="none"
        aria-hidden
      >
        <path
          d="M20 200L260 40l240 160-40 40H60z"
          fill="black"
        />
      </svg>
    </div>
  );
}
