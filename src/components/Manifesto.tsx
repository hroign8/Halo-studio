export default function Manifesto() {
  return (
    <section style={{
      padding: "96px 24px",
      width: "100%",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          marginBottom: "28px",
        }}>
          Manifesto
        </p>
        <p style={{
          fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "#fff",
          lineHeight: 1.25,
          margin: 0,
        }}>
          We don&apos;t ship campaigns.
          <br />
          We ship{" "}
          <em className="gradient-text" style={{ fontStyle: "italic" }}>moments</em>
          {" "}people stop to feel.
        </p>
      </div>
    </section>
  );
}
