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
      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        style={styles.stickyWhatsApp}
      >
        💬 WhatsApp
      </a>

      {/* TOP BAR */}
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

      {/* HERO WITH WATERMARK */}
      <section style={styles.hero}>
        <div style={styles.heroWatermark}>⚡ 🔌</div>

        <h1 style={styles.title}>Elektrotechniek Khaleki</h1>

        <p style={styles.subtitle}>
          Spoed elektricien in Apeldoorn – snel, betrouwbaar en 24/7 bereikbaar
        </p>

        <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>
          🔥 Direct hulp nodig
        </a>
      </section>

      {/* DIENSTEN */}
      <section style={styles.section}>
        <h2>Onze diensten</h2>

        <p style={{ opacity: 0.85, marginTop: 10 }}>
          Gespecialiseerd in complete elektrotechnische installaties voor
          woningbouw en utiliteit, van aanleg tot oplevering.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            ⚡ Complete installaties<br />
            Van A tot Z voor woningen en bedrijfspanden
          </div>

          <div style={styles.card}>
            🏠 Nieuwbouw & renovatie<br />
            Volledige elektra bij verbouwingen en nieuwbouw
          </div>

          <div style={styles.card}>
            🏢 Utiliteit & zakelijke projecten<br />
            Kantoren, winkels en bedrijfspanden
          </div>

          <div style={styles.card}>
            🔌 Groepenkasten & krachtstroom<br />
            Uitbreiden, vervangen en aansluiten
          </div>

          <div style={styles.card}>
            💡 Verlichting & lichtplannen<br />
            Binnen, buiten en LED-oplossingen
          </div>

          <div style={styles.card}>
            🚗 Laadpalen<br />
            Installatie voor thuis en zakelijk gebruik
          </div>
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
            Dit staat garant voor veilige, betrouwbare en professionele
            elektrische installaties.
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

      {/* SEO */}
      <section style={styles.sectionSEO}>
        <h2>Elektricien in Apeldoorn nodig?</h2>

        <p>
          Spoed of planning nodig? Wij helpen direct bij storingen,
          groepenkasten en elektra problemen in Apeldoorn en omgeving.
        </p>

        <div style={{ margin: "20px 0" }}>
          <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>
            💬 Direct contact
          </a>
        </div>

        <h3>Diensten</h3>
        <ul>
          <li>Groepenkast vervangen</li>
          <li>Storingen oplossen (spoed)</li>
          <li>Elektra renovatie</li>
          <li>Installaties woning & bedrijf</li>
        </ul>

        <h3>Waarom wij?</h3>
        <ul>
          <li>✔ 24/7 bereikbaar</li>
          <li>✔ Snelle service in Apeldoorn</li>
          <li>✔ Eerlijke prijzen</li>
          <li>✔ Ervaren elektricien</li>
        </ul>
      </section>

      {/* OFFERTES */}
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
    padding: "90px 20px",
    background: "linear-gradient(135deg, #0f1b33, #1d4ed8)",
    position: "relative",
    overflow: "hidden",
  },

  heroWatermark: {
    position: "absolute",
    fontSize: 140,
    opacity: 0.08,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },

  title: { fontSize: 40 },

  subtitle: { opacity: 0.85 },

  heroBtn: {
    background: "#1d4ed8",
    padding: "12px 20px",
    borderRadius: 10,
    color: "white",
    textDecoration: "none",
    display: "inline-block",
    marginTop: 15,
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
    borderBottom: "2px solid #1d4ed8",
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
  },
};
