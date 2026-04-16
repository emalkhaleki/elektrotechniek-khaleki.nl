import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";

  useEffect(() => {
    document.title = "Elektrotechniek Khaleki | Professionele installaties in Apeldoorn";
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
      <header style={styles.header}>
        <div style={styles.logo}>ELEKTROTECHNIEK KHALEKI</div>
        <nav style={styles.nav}>
          <a href="#diensten" style={styles.navLink}>Diensten</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a href={`https://wa.me/${whatsappNumber}`} style={styles.ctaBtn}>WhatsApp</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <p style={styles.kicker}>Professioneel installatiebedrijf</p>
          <h1 style={styles.title}>Sterke elektrotechnische oplossingen voor woning en utiliteit</h1>
          <p style={styles.subtitle}>
            Specialist in groepenkasten, storingen, renovatie, nieuwbouw en zakelijke projecten in Apeldoorn en omgeving.
          </p>
          <div style={styles.heroActions}>
            <a href={`https://wa.me/${whatsappNumber}`} style={styles.primaryBtn}>Offerte aanvragen</a>
            <a href="tel:0644878482" style={styles.secondaryBtn}>Bel direct</a>
          </div>
        </div>
      </section>

      <section style={styles.statsBar}>
        <div>✔ Gecertificeerd vakwerk</div>
        <div>✔ NEN 1010 & 3140</div>
        <div>✔ Zakelijk & particulier</div>
        <div>✔ Snelle service</div>
      </section>

      <section id="diensten" style={styles.section}>
        <h2 style={styles.heading}>Onze diensten</h2>
        <div style={styles.grid}>
          <div style={styles.card}>⚡ Complete installaties</div>
          <div style={styles.card}>🏢 Bedrijfspanden & utiliteit</div>
          <div style={styles.card}>🏠 Nieuwbouw en renovatie</div>
          <div style={styles.card}>🔌 Groepenkasten</div>
          <div style={styles.card}>💡 Verlichting en LED</div>
          <div style={styles.card}>🚗 Laadpalen</div>
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>Waarom kiezen voor ons</h2>
        <p style={styles.textBlock}>
          Wij leveren betrouwbare en veilige installaties voor zowel woningen als zakelijke projecten. Onze werkwijze is strak, professioneel en volledig volgens de geldende normen.
        </p>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>Vraag direct een offerte aan</h2>
        <form onSubmit={sendEmail} style={styles.form}>
          <input name="naam" placeholder="Naam" onChange={handleChange} style={styles.input} required />
          <input name="telefoon" placeholder="Telefoonnummer" onChange={handleChange} style={styles.input} required />
          <textarea name="bericht" placeholder="Beschrijf uw project" onChange={handleChange} style={styles.textarea} required />
          <button style={styles.submitBtn}>Verstuur aanvraag</button>
        </form>
      </section>

      <footer style={styles.footer}>
        © 2026 Elektrotechniek Khaleki | Apeldoorn
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#ffffff",
    color: "#1e293b",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 40px",
    background: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 18,
  },
  nav: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#334155",
  },
  ctaBtn: {
    background: "#1d4ed8",
    color: "white",
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none",
  },
  hero: {
    minHeight: "560px",
    backgroundImage: "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.55)), url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1800&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  },
  heroOverlay: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
    color: "white",
  },
  kicker: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 14,
    opacity: 0.9,
  },
  title: {
    fontSize: 52,
    maxWidth: 800,
    lineHeight: 1.15,
    margin: "15px 0",
  },
  subtitle: {
    fontSize: 20,
    maxWidth: 700,
    lineHeight: 1.6,
  },
  heroActions: {
    display: "flex",
    gap: 15,
    marginTop: 30,
  },
  primaryBtn: {
    background: "#1d4ed8",
    color: "white",
    padding: "14px 22px",
    borderRadius: 8,
    textDecoration: "none",
  },
  secondaryBtn: {
    background: "white",
    color: "#1d4ed8",
    padding: "14px 22px",
    borderRadius: 8,
    textDecoration: "none",
  },
  statsBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    padding: "24px 40px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    padding: "70px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionAlt: {
    padding: "70px 40px",
    background: "#f8fafc",
  },
  heading: {
    fontSize: 36,
    marginBottom: 25,
  },
  textBlock: {
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 850,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
  },
  card: {
    padding: 28,
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    background: "white",
    fontSize: 18,
    fontWeight: 600,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    maxWidth: 600,
  },
  input: {
    padding: 14,
    border: "1px solid #cbd5e1",
    borderRadius: 8,
  },
  textarea: {
    padding: 14,
    minHeight: 140,
    border: "1px solid #cbd5e1",
    borderRadius: 8,
  },
  submitBtn: {
    background: "#1d4ed8",
    color: "white",
    border: "none",
    padding: 14,
    borderRadius: 8,
  },
  footer: {
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: 25,
  },
};
