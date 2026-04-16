import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";

  useEffect(() => {
    document.title =
      "Elektricien Apeldoorn | Elektrotechniek Khaleki - Installaties & Storingen";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Elektricien in Apeldoorn nodig? Specialist in groepenkasten, storingen, laadpalen en complete installaties. Snel en betrouwbaar vakwerk."
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

      <header style={styles.header}>
        <div style={styles.logo}>⚡ Elektrotechniek Khaleki</div>
        <div style={styles.headerButtons}>
          <a href="tel:0644878482" style={styles.callBtn}>
            📞 Bel direct
          </a>
          <a href={`https://wa.me/${whatsappNumber}`} style={styles.whatsappBtn}>
            WhatsApp
          </a>
        </div>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.title}>Professionele Elektrotechniek in Apeldoorn</h1>
        <p style={styles.subtitle}>
          Specialist in groepenkasten, storingen, renovatie, nieuwbouw en zakelijke installaties
        </p>
        <div style={styles.heroActions}>
          <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>
            💬 Direct contact
          </a>
          <a href="tel:0644878482" style={styles.secondaryBtn}>
            📞 Bel nu
          </a>
        </div>
      </section>

      <section style={styles.trustSection}>
        <div style={styles.trustOverlay}>
          <h2 style={styles.sectionTitle}>
            Veilige en professionele installaties
          </h2>
          <p style={styles.sectionText}>
            Specialist in groepenkasten, complete installaties, renovatie,
            nieuwbouw en zakelijke projecten. Veilig uitgevoerd volgens
            NEN 1010 en NEN 3140.
          </p>
          <div style={styles.grid}>
            <div style={styles.card}>✅ Groepenkasten vervangen</div>
            <div style={styles.card}>✅ Woning & bedrijfspanden</div>
            <div style={styles.card}>✅ NEN gecertificeerd</div>
            <div style={styles.card}>✅ Snelle offerte</div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Onze diensten</h2>
        <div style={styles.grid}>
          <div style={styles.card}>⚡ Complete installaties<br />Van A tot Z</div>
          <div style={styles.card}>🏠 Nieuwbouw & renovatie</div>
          <div style={styles.card}>🏢 Zakelijke projecten</div>
          <div style={styles.card}>🔌 Groepenkasten & krachtstroom</div>
          <div style={styles.card}>💡 Verlichting & LED</div>
          <div style={styles.card}>🚗 Laadpalen</div>
        </div>
      </section>

      <section style={styles.sectionDark}>
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
            placeholder="Telefoonnummer"
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
          <button style={styles.button}>Verstuur offerte</button>
        </form>
      </section>

      <section style={styles.section}>
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
    fontFamily: "Arial, sans-serif",
    background: "#f8fafc",
    color: "#0f172a",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    background: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerButtons: {
    display: "flex",
    gap: 10,
  },
  whatsappBtn: {
    background: "#25D366",
    padding: "10px 15px",
    borderRadius: 8,
    color: "white",
    textDecoration: "none",
  },
  callBtn: {
    background: "#1d4ed8",
    padding: "10px 15px",
    borderRadius: 8,
    color: "white",
    textDecoration: "none",
  },
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.78)), url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "460px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    maxWidth: 700,
    margin: "0 auto",
    lineHeight: 1.6,
  },
  heroActions: {
    marginTop: 25,
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  heroBtn: {
    background: "#1d4ed8",
    color: "white",
    padding: "14px 22px",
    borderRadius: 10,
    textDecoration: "none",
  },
  secondaryBtn: {
    background: "white",
    color: "#1d4ed8",
    padding: "14px 22px",
    borderRadius: 10,
    textDecoration: "none",
    border: "1px solid #1d4ed8",
  },
  trustSection: {
    padding: "70px 30px",
    background: "#e2e8f0",
  },
  trustOverlay: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: 32,
    marginBottom: 20,
  },
  sectionText: {
    lineHeight: 1.7,
    maxWidth: 800,
  },
  section: {
    padding: 50,
    background: "#ffffff",
  },
  sectionDark: {
    padding: 50,
    background: "#f1f5f9",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 15,
    marginTop: 20,
  },
  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 500,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #cbd5e1",
  },
  textarea: {
    padding: 12,
    borderRadius: 8,
    height: 120,
    border: "1px solid #cbd5e1",
  },
  button: {
    background: "#1d4ed8",
    color: "white",
    padding: 14,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: 20,
    background: "#e2e8f0",
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
