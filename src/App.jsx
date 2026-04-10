import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";

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

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>⚡ Elektrotechniek Khaleki</div>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          style={styles.whatsappBtn}
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Elektrotechniek Khaleki</h1>
        <p style={styles.subtitle}>
          Betrouwbare elektricien voor installaties, storingen en groepenkasten
        </p>

        <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>
          Direct contact
        </a>
      </section>

      {/* DIENSTEN */}
      <section style={styles.section}>
        <h2>Onze diensten</h2>

        <div style={styles.grid}>
          <div style={styles.card}>⚡ Installaties</div>
          <div style={styles.card}>🔧 Storingen</div>
          <div style={styles.card}>🛡️ Groepenkasten</div>
          <div style={styles.card}>🏠 Renovatie elektra</div>
        </div>
      </section>

      {/* CERTIFICERINGEN ⭐ NIEUW */}
      <section style={styles.sectionDark}>
        <h2>Certificeringen & veiligheid</h2>

        <div style={styles.grid}>
          <div style={styles.certCard}>
            <h3>🔵 NEN 1010</h3>
            <p>
              Installatienorm voor veilige aanleg van elektrische installaties.
              Wij werken volgens de geldende veiligheidsnormen.
            </p>
          </div>

          <div style={styles.certCard}>
            <h3>🔵 NEN 3140</h3>
            <p>
              Veilig werken aan en met elektrische installaties.
              Periodieke inspectie en veilig onderhoud gegarandeerd.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERTES */}
      <section style={styles.section}>
        <h2>Offerte aanvragen</h2>

        <form onSubmit={sendEmail} style={styles.form}>
          <input name="naam" placeholder="Naam" onChange={handleChange} style={styles.input} required />
          <input name="telefoon" placeholder="Telefoonnummer" onChange={handleChange} style={styles.input} required />
          <textarea name="bericht" placeholder="Beschrijf je klus..." onChange={handleChange} style={styles.textarea} required />

          <button style={styles.button}>Verstuur offerte</button>
        </form>
      </section>

      {/* CONTACT */}
      <section style={styles.sectionDark}>
        <h2>Contact</h2>
        <p>📞 0644878482</p>
        <p>✉️ emalkhaleki@hotmail.com</p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Elektrotechniek Khaleki
      </footer>
    </div>
  );
}

/* STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#0b1220",
    color: "white",
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
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f1b33, #1d4ed8)",
  },

  title: { fontSize: 40 },

  subtitle: { opacity: 0.8, marginBottom: 20 },

  heroBtn: {
    background: "#1d4ed8",
    padding: "12px 20px",
    borderRadius: 10,
    color: "white",
    textDecoration: "none",
  },

  section: {
    padding: 50,
    background: "#0b1220",
  },

  sectionDark: {
    padding: 50,
    background: "#0f1b33",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 15,
    marginTop: 20,
  },

  card: {
    background: "#111c33",
    padding: 20,
    borderRadius: 12,
  },

  certCard: {
    background: "#13264a",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #1d4ed8",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 400,
  },

  input: {
    padding: 10,
    borderRadius: 8,
    border: "none",
  },

  textarea: {
    padding: 10,
    borderRadius: 8,
    height: 100,
  },

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
};
