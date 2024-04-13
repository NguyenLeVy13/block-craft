export default function Footer() {
    return (
      <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900/5 py-10">
          <svg
            className="mx-auto w-auto text-slate-900"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="10" fill="#E31C79" />
            <path d="M20 12H45V37H32.5V25H20V12Z" fill="white" />
            <path
              d="M13.3333 19.1667L20 12.5V25H7.5L13.3333 19.1667Z"
              fill="white"
              fill-opacity="0.4"
            />
            <path d="M20 25H32.5V37H20V25Z" fill="white" fill-opacity="0.4" />
            <path
              d="M32.5 37H45L38.75 43.25L32.5 49.5V37Z"
              fill="white"
              fill-opacity="0.4"
            />
          </svg>
          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            © {/* */}2024{/* */} block craft. All rights reserved.
          </p>
          <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
            <a href="/privacy-policy">Privacy policy</a>
            <div className="h-4 w-px bg-slate-500/20" />
            <a href="/changelog">Changelog</a>
          </div>
        </div>
      </footer>
    );
  }
  