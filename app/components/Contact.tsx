import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="space-y-6 rounded-3xl border border-base-200/80 bg-base-200/60 p-8 shadow-lg"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-primary-content">
            Let me know about opportunities
          </h2>
        </div>
        <div className="grid gap-4 rounded-3xl border border-base-200 bg-base-100/70 p-6 md:grid-cols-3">
          <a
            href="mailto:olivertouki@gmail.com"
            className="btn btn-primary h-14 rounded-2xl px-6 text-base font-semibold"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            Email me directly
          </a>
          <a
            href="https://www.linkedin.com/in/oliver-brown-53067a25b/"
            className="btn btn-outline h-14 rounded-2xl px-6 text-base font-semibold"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.3h-4V15c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.4H9z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/oliverbrown1"
            className="btn btn-outline h-14 rounded-2xl px-6 text-base font-semibold"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.5.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.59.69.48A10.2 10.2 0 0 0 22 12.24C22 6.58 17.52 2 12 2z" />
            </svg>
            View GitHub
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;
