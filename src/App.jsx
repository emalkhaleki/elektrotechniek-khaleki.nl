import React, { useState, useEffect } from "react";
import heroImage from "./assets/hero-installatie.jpg"; //

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";

  useEffect(() => {
    document.title =
      "Elektricien Apeldoorn | Elektrotechniek Khaleki - Spoed & Installaties";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Elektricien in Apeldoorn nodig? Spoedservice 24/7 voor storingen, groepenkasten en installaties. Snel en betrouwbaar Elektrotechniek Khaleki."
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    window.location.href =
      `mailto:emalkhaleki@hotmail.com?subject=Offerte aanvraag van ${form.naam}&body=` +
      `Naam: ${form.naam}%0D%0A` +
      `Telefoon: ${form.telefoon}%0D%0A` +
      `Bericht: ${form.bericht}`;
  };

  return (
    <div style={styles.page}>
      <a href={`https://wa.me/${whatsappNumber}`} style={styles.stickyWhatsApp}>
        💬 WhatsApp
      </a>

      <div style={styles.topBar}>
        ⚡ 24/7 SPOEDSERVICE – DIRECT BESCHIKBAAR
      </div>

      <header style={styles.header}>
        <div style={styles.logo}>⚡ Elektrotechniek Khaleki</div>
        <a href={`https://wa.me/${whatsappNumber}`} style={styles.whatsappBtn}>
          WhatsApp
        </a>
      </header>

      <section
        style={{
          ...styles.hero,
          backgroundImage: `linear-gradient(rgba(15,27,51,0.75), rgba(29,78,216,0.75)), url(${heroImage})`,
        }}
      >
        <h1 style={styles.title}>Elektrotechniek Khaleki</h1>
        <p style={styles.subtitle}>
          Specialist in complete elektrotechnische installaties, utiliteit en woningbouw
        </p>
        <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>
          🔥 Direct hulp nodig
        </a>
      </section>

      <section style={styles.trustSection}>
        <div style={styles.trustOverlay}>
          <h2 style={{ fontSize: 32, marginBottom: 20 }}>
            Professionele installaties voor woning en utiliteit
          </h2>
          <p style={{ maxWidth: 700, lineHeight: 1.7, opacity: 0.95 }}>
            Specialist in groepenkasten, kabelgoten, krachtstroom, nieuwbouw,
            renovatie en zakelijke projecten volgens NEN 1010 en NEN 3140.
          </p>
          <div style={styles.grid}>
            <div style={styles.card}>✅ 24/7 spoedservice</div>
            <div style={styles.card}>✅ Zakelijke & particuliere projecten</div>
            <div style={styles.card}>✅ Gecertificeerd vakwerk</div>
            <div style={styles.card}>✅ Snelle offerte</div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Onze diensten</h2>
        <div style={styles.grid}>
          <div style={styles.card}>⚡ Complete installaties</div>
          <div style={styles.card}>🏠 Nieuwbouw & renovatie</div>
          <div style={styles.card}>🏢 Utiliteit & zakelijke projecten</div>
          <div style={styles.card}>🔌 Groepenkasten & krachtstroom</div>
          <div style={styles.card}>💡 Verlichting & lichtplannen</div>
          <div style={styles.card}>🚗 Laadpalen</div>
        </div>
      </section>

      <section style={styles.sectionDark}>
        <h2>Offerte aanvragen</h2>
        <form onSubmit={sendEmail} style={styles.form}>
          <input name="naam" placeholder="Naam" onChange={handleChange} style={styles.input} required />
          <input name="telefoon" placeholder="Telefoonnummer" onChange={handleChange} style={styles.input} required />
          <textarea name="bericht" placeholder="Beschrijf je klus..." onChange={handleChange} style={styles.textarea} required />
          <button style={styles.button}>Verstuur offerte</button>
        </form>
      </section>

      <section style={styles.sectionDark}>
        <h2>Contact</h2>
        <p>📞 0644878482</p>
        <p>✉️ emalkhaleki@hotmail.com</p>
      </section>

      <footer style={styles.footer}>© 2026 Elektrotechniek Khaleki</footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#0b1220",
    color: "white",
  },
  topBar: {
    background: "#1d4ed8",
    textAlign: "center",
    padding: 8,
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    background: "#0f1b33",
  },
  logo: { fontSize: 18, fontWeight: "bold" },
  whatsappBtn: {
    background: "#25D366",
    padding: "10px 15px",
    borderRadius: 8,
    color: "white",
    textDecoration: "none",
  },
  hero: {
    textAlign: "center",
    padding: "110px 20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "520px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  trustSection: {
    padding: "80px 30px",
    background: "#0f1b33",
  },
  trustOverlay: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: { fontSize: 42, fontWeight: "bold" },
  subtitle: { opacity: 0.9, fontSize: 18 },
  heroBtn: {
    background: "#1d4ed8",
    padding: "12px 20px",
    borderRadius: 10,
    color: "white",
    textDecoration: "none",
    display: "inline-block",
    marginTop: 15,
  },
  section: { padding: 50 },
  sectionDark: { padding: 50, background: "#0f1b33" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 15,
    marginTop: 20,
  },
  card: {
    background: "#111c33",
    padding: 20,
    borderRadius: 12,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 400,
  },
  input: { padding: 10, borderRadius: 8, border: "none" },
  textarea: { padding: 10, borderRadius: 8, height: 100 },
  button: {
    background: "#1d4ed8",
    color: "white",
    padding: 12,
    border: "none",
    borderRadius: 8,
  },
  footer: {
    textAlign: "center",
    padding: 20,
    background: "#0f1b33",
    fontSize: 12,
  },
  stickyWhatsApp: {
    position: "fixed",
    right: 20,
    bottom: 80,
    background: "#25D366",
    padding: "12px 14px",
    borderRadius: "50px",
    color: "white",
    fontWeight: "bold",
    zIndex: 9999,
    textDecoration: "none",
  },
};
