import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";

  useEffect(() => {
    document.title = "Elektricien Apeldoorn | Elektrotechniek Khaleki";
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const message = `Hallo, ik wil een offerte aanvragen.%0A%0ANaam: ${form.naam}%0ATelefoon: ${form.telefoon}%0ABericht: ${form.bericht}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>ELEKTROTECHNIEK KHALEKI</div>
        <nav style={styles.nav}>
          <a href="#diensten" style={styles.navLink}>Diensten</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a href="tel:0644878482" style={styles.phone}>0644878482</a>
          <a href={`https://wa.me/${whatsappNumber}?text=Hallo,%20ik%20wil%20een%20offerte%20aanvragen`} style={styles.ctaBtn}>WhatsApp</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <p style={styles.kicker}>Elektricien in Apeldoorn</p>
          <h1 style={styles.title}>Elektricien voor groepenkasten en installaties</h1>
          <p style={styles.subtitle}>
            Specialist in storingen, renovatie en nieuwbouw. Snelle service en gecertificeerd vakwerk.
          </p>

          <div style={styles.urgency}>
            <p>✔ Binnen 24 uur reactie</p>
            <p>✔ Spoedservice mogelijk</p>
          </div>

          <div style={styles.heroActions}>
            <a href={`https://wa.me/${whatsappNumber}?text=Hallo,%20ik%20wil%20een%20offerte%20aanvragen`} style={styles.primaryBtn}>Offerte aanvragen</a>
            <a href="tel:0644878482" style={styles.secondaryBtn}>Bel direct</a>
          </div>
        </div>
      </section>

      <section style={styles.statsBar}>
        <div>✔ Gecertificeerd</div>
        <div>✔ NEN 1010 & 3140</div>
        <div>✔ Zakelijk & particulier</div>
        <div>✔ Snelle service</div>
      </section>

      <section id="diensten" style={styles.section}>
        <h2 style={styles.heading}>Onze diensten</h2>
        <div style={styles.grid}>
          <div style={styles.card}>⚡ Installaties</div>
          <div style={styles.card}>🏢 Bedrijfspanden</div>
          <div style={styles.card}>🏠 Renovatie</div>
          <div style={styles.card}>🔌 Groepenkasten</div>
          <div style={styles.card}>💡 Verlichting</div>
          <div style={styles.card}>🚗 Laadpalen</div>
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>Waarom kiezen voor ons</h2>
        <p style={styles.textBlock}>
          Betrouwbare installaties volgens de hoogste normen. Wij werken snel, veilig en professioneel.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Ervaringen van klanten</h2>
        <p>⭐⭐⭐⭐⭐ "Snelle service en netjes gewerkt"</p>
        <p>⭐⭐⭐⭐⭐ "Professioneel en duidelijk"</p>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>Vraag direct een offerte aan</h2>
        <form onSubmit={sendWhatsApp} style={styles.form}>
          <input name="naam" placeholder="Naam" onChange={handleChange} style={styles.input} required />
          <input name="telefoon" placeholder="Telefoonnummer" onChange={handleChange} style={styles.input} required />
          <textarea name="bericht" placeholder="Beschrijf uw project" onChange={handleChange} style={styles.textarea} required />
          <button style={styles.submitBtn}>Verstuur via WhatsApp</button>
        </form>
      </section>

      <a href={`https://wa.me/${whatsappNumber}`} style={styles.floatingBtn}>💬</a>

      <footer style={styles.footer}>
        © 2026 Elektrotechniek Khaleki | Apeldoorn
      </footer>
    </div>
  );
}

const styles = {
  page: { fontFamily: "Arial", background: "#fff" },
  header: { display: "flex", justifyContent: "space-between", padding: 20, borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff" },
  logo: { fontWeight: "bold" },
  nav: { display: "flex", gap: 15, alignItems: "center" },
  navLink: { textDecoration: "none" },
  phone: { color: "#1d4ed8", fontWeight: "bold" },
  ctaBtn: { background: "#1d4ed8", color: "#fff", padding: 10, borderRadius: 6, textDecoration: "none" },
  hero: { minHeight: 500, background: "#0f172a", color: "#fff", display: "flex", alignItems: "center" },
  heroOverlay: { padding: 40 },
  title: { fontSize: 40 },
  subtitle: { maxWidth: 600 },
  urgency: { marginTop: 20 },
  heroActions: { marginTop: 20, display: "flex", gap: 10 },
  primaryBtn: { background: "#1d4ed8", color: "#fff", padding: 12, borderRadius: 6 },
  secondaryBtn: { background: "#fff", color: "#1d4ed8", padding: 12, borderRadius: 6 },
  statsBar: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", padding: 20, background: "#0f172a", color: "#fff", textAlign: "center" },
  section: { padding: 40 },
  sectionAlt: { padding: 40, background: "#f1f5f9" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 15 },
  card: { padding: 20, border: "1px solid #eee", borderRadius: 10 },
  form: { display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 },
  input: { padding: 10 },
  textarea: { padding: 10 },
  submitBtn: { background: "#1d4ed8", color: "#fff", padding: 12, border: "none" },
  floatingBtn: { position: "fixed", bottom: 20, right: 20, background: "#25D366", color: "#fff", padding: 15, borderRadius: "50%", textDecoration: "none" },
  footer: { textAlign: "center", padding: 20, background: "#0f172a", color: "#fff" },
};
