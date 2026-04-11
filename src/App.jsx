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

      {/* SPOED BANNER ⚡ */}
      <div style={styles.topBar}>
        ⚡ 24/7 SPOEDSERVICE – DIRECT BESCHIKBAAR
      </div>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>⚡ Elektrotechniek Khaleki</div>

        <a href={`https://wa.me/${whatsappNumber}`} style={styles.whatsappBtn}>
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

      {/* CERTIFICERINGEN */}
      <section style={styles.sectionDark}>
        <h2>Certificeringen</h2>

        <div style={styles.certBox}>
          <p>
            Wij werken volgens de normen van <b>NEN 1010</b> en <b>NEN 3140</b>.
          </p>
          <p>
            Dit staat garant voor veilige, betrouwbare en professionele elektrische installaties.
          </p>
        </div>
      </section>

      {/* WONING & UTILITEIT */}
      <section style={styles.section}>
        <h2>Woning & Utiliteit</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            🏠 Woningbouw<br />
            Particuliere installaties en renovaties
          </div>

          <div style={styles.card}>
            🏢 Utiliteit<br />
            Bedrijven, winkels en zakelijke projecten
          </div>
        </div>
      </section>

      {/* 🔥 SEO APPELDOORN SECTIE */}
      <section style={styles.sectionSEO}>
        <h2>Elektricien in Apeldoorn nodig?</h2>

        <p>
          Bent u op zoek naar een betrouwbare elektricien in Apeldoorn?
          Elektrotechniek Khaleki helpt u snel bij storingen, groepenkasten
          en complete installaties in woning en bedrijf.
        </p>

        <div style={{ margin: "20px 0" }}>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            style={styles.heroBtn}
          >
            💬 Direct WhatsApp contact
          </a>
        </div>

        <h3>Diensten Apeldoorn</h3>
        <ul>
          <li>Groepenkast vervangen of uitbreiden</li>
          <li>Storingen oplossen (spoed mogelijk)</li>
          <li>Elektra aanleggen in woning of bedrijf</li>
          <li>Renovatie en verbouwing</li>
          <li>Verlichting en schakelaars installeren</li>
        </ul>

        <h3>Waarom kiezen voor ons?</h3>
        <ul>
          <li>✔ Snelle service in Apeldoorn en omgeving</li>
          <li>✔ Ervaren en vakkundige elektricien</li>
          <li>✔ Duidelijke en eerlijke prijzen</li>
          <li>✔ Garantie op werkzaamheden</li>
        </ul>
      </section>

      {/* REVIEWS */}
      <section style={styles.sectionDark}>
        <h2>Klantenreviews</h2>

        <div style={styles.grid}>
          <div style={styles.review}>
            ⭐⭐⭐⭐⭐<br />
            “Snelle service en netjes gewerkt!”
          </div>

          <div style={styles.review}>
            ⭐⭐⭐⭐⭐<br />
            “Betrouwbaar en goed bereikbaar.”
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
    color: "white"
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
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f1b33, #1d4ed8)",
  },

  title: { fontSize: 40 },

  subtitle: { opacity: 0.8 },

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

  sectionSEO: {
    padding: 50,
    background: "#111c33",
    borderTop: "2px solid #1d4ed8",
    borderBottom: "2px solid #1d4ed8"
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

  certBox: {
    background: "#13264a",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #1d4ed8",
    marginTop: 20,
  },

  review: {
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
