import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 text-center">
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              marginBottom: "24px",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Page not found.
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.75,
              maxWidth: "400px",
              margin: "0 auto 36px",
            }}
          >
            This page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
