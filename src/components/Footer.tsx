import Link from "next/link";

const LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Instagram", href: "https://instagram.com/halostudio.co", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 md:px-10 py-10">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo mark */}
        <div className="flex items-center gap-2">
          <span className="size-[6px] rounded-full bg-gradient-to-br from-pink-400 to-blue-400" />
          <span className="text-[13px] text-white/30 tracking-[-0.01em]">
            © {new Date().getFullYear()} Halo Studio.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[13px] text-white/30 hover:text-white/65 transition-colors tracking-[-0.01em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
