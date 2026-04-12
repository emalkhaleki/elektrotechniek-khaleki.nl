import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({ naam: "", telefoon: "", bericht: "" });
  const [visibleSections, setVisibleSections] = useState({});

  const whatsappNumber = "31644878482";

  useEffect(() => {
    document.title =
      "Elektricien Apeldoorn | Elektrotechniek Khaleki - Spoed & Installaties";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Elektricien in Apeldoorn nodig? Spoedservice 24/7 voor storingen, groepenkasten en installaties."
      );
    }
  }, []);

  // simpele scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-animate]");
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleSections((prev) => ({ ...prev, [sec.id]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    window.location.href =
      `mailto:emalkhaleki@hotmail.com?subject=Offerte aanvraag ${form.naam}&body=` +
      `Naam: ${form.naam}%0D%0A` +
      `Telefoon: ${form.telefoon}%0D%0A` +
      `Bericht: ${form.bericht}`;
  };

  const reveal = (id) =>
    visibleSections[id] ? styles.revealActive : styles.reveal;

  return (
    <div style={styles.page}>
      {/* WHATSAPP */}
      <a href={`https://wa.me/${whatsappNumber}`} style={styles.whatsappFloat}>
        💬 WhatsApp
      </a>

      {/* GLASS HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>⚡ Elektrotechniek Khaleki</div>
        <a href={`https://wa.me/${whatsappNumber}`} style={styles.navBtn}>
          Direct contact
        </a>
      </header>

      {/* HERO PREMIUM */}
      <section style={styles.hero}>
        <div style={styles.heroGlow}></div>

        <h1 style={styles.title}>Elektrotechniek Khaleki</h1>
        <p style={styles.subtitle}>
          Spoed elektricien in Apeldoorn • 24/7 bereikbaar • Zakelijk & woning
        </p>

        <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>
          🔥 Direct hulp nodig
        </a>
      </section>

      {/* DIENSTEN */}
      <section
        id="diensten"
        data-animate
        style={{ ...styles.section, ...reveal("diensten") }}
      >
        <h2>Onze diensten</h2>

        <div style={styles.grid}>
          {[
            "Complete installaties",
            "Nieuwbouw & renovatie",
            "Utiliteit projecten",
            "Groepenkasten",
            "Verlichting",
            "Laadpalen",
          ].map((item, i) => (
            <div key={i} style={styles.card}>
              ⚡ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICERING */}
      <section
        id="cert"
        data-animate
        style={{ ...styles.sectionDark, ...reveal("cert") }}
      >
        <h2>Certificeringen</h2>
        <div style={styles.glassBox}>
          Werken volgens <b>NEN 1010</b> & <b>NEN 3140</b><br />
          Veilig, professioneel en gecertificeerd.
        </div>
      </section>

      {/* SEO */}
      <section style={styles.sectionSEO}>
        <h2>Elektricien Apeldoorn</h2>
        <p>Storingen, renovatie en complete installaties.</p>
      </section>

      {/* FORM */}
      <section style={styles.section}>
        <h2>Offerte aanvragen</h2>

        <form onSubmit={sendEmail} style={styles.form}>
          <input
            name="naam"
            placeholder="Naam"
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            name="telefoon"
            placeholder="Telefoon"
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="bericht"
            placeholder="Beschrijf je klus..."
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <button style={styles.button}>Verstuur</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Elektrotechniek Khaleki
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#070b14",
    color: "white",
  },

  /* GLASS HEADER */
  header: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: 18,
    backdropFilter: "blur(10px)",
    background: "rgba(15, 27, 51, 0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    zIndex: 1000,
  },

  logo: { fontWeight: "bold" },

  navBtn: {
    background: "#1d4ed8",
    padding: "8px 14px",
    borderRadius: 8,
    color: "white",
    textDecoration: "none",
  },

  /* HERO PREMIUM */
  hero: {
    textAlign: "center",
    padding: "110px 20px",
    position: "relative",
    background: "radial-gradient(circle at top, #1d4ed8, #070b14)",
    overflow: "hidden",
  },

  heroGlow: {
    position: "absolute",
    width: 400,
    height: 400,
    background: "#1d4ed8",
    filter: "blur(120px)",
    opacity: 0.3,
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
  },

  title: { fontSize: 44, fontWeight: "bold" },

  subtitle: { opacity: 0.8, marginTop: 10 },

  heroBtn: {
    marginTop: 20,
    display: "inline-block",
    background: "#1d4ed8",
    padding: "12px 22px",
    borderRadius: 12,
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  section: {
    padding: 60,
  },

  sectionDark: {
    padding: 60,
    background: "#0c162b",
  },

  sectionSEO: {
    padding: 60,
    background: "#101c33",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 15,
    marginTop: 20,
  },

  /* PREMIUM CARDS */
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.3s",
    cursor: "pointer",
  },

  glassBox: {
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.1)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 420,
  },

  input: {
    padding: 12,
    borderRadius: 10,
    border: "none",
  },

  textarea: {
    padding: 12,
    borderRadius: 10,
    height: 120,
  },

  button: {
    background: "#1d4ed8",
    padding: 12,
    borderRadius: 10,
    border: "none",
    color: "white",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    padding: 20,
    opacity: 0.6,
  },

  whatsappFloat: {
    position: "fixed",
    bottom: 80,
    right: 20,
    background: "#25D366",
    padding: "12px 14px",
    borderRadius: 50,
    color: "white",
    fontWeight: "bold",
    zIndex: 9999,
  },

  /* ANIMATIONS */
  reveal: {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "0.6s ease",
  },

  revealActive: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "0.6s ease",
  },
};
