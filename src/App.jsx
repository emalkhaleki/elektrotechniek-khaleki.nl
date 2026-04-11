import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";
  const telNumber = "0644878482";

  useEffect(() => {
    document.title = "Elektricien Apeldoorn | Spoed 24/7 | Elektrotechniek Khaleki";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Spoed elektricien in Apeldoorn. 24/7 bereikbaar voor storingen, groepenkasten en installaties. Snel en betrouwbaar."
      );
    }

    // JSON-LD Local SEO (Google)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      name: "Elektrotechniek Khaleki",
      telephone: telNumber,
      areaServed: "Apeldoorn",
      url: window.location.href,
      description: "Elektricien in Apeldoorn gespecialiseerd in storingen, groepenkasten en installaties."
    });
    document.head.appendChild(script);
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

      {/* FIXED ACTION BUTTONS */}
      <div style={styles.fixedActions}>
        <a href={`tel:${telNumber}`} style={styles.callBtn}>📞 Bel</a>
        <a href={`https://wa.me/${whatsappNumber}`} style={styles.whatsappBtnFixed}>💬 WhatsApp</a>
      </div>

      {/* TOP BAR */}
      <div style={styles.topBar}>
        ⚡ 24/7 SPOEDSERVICE – DIRECT BESCHIKBAAR IN APELDOORN
      </div>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>⚡ Elektrotechniek Khaleki</div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Spoed Elektricien Apeldoorn</h1>
        <p style={styles.subtitle}>
          Storingen? Groepenkast problemen? Wij staan direct voor u klaar.
        </p>

        <div style={styles.heroButtons}>
          <a href={`https://wa.me/${whatsappNumber}`} style={styles.heroBtn}>💬 WhatsApp</a>
          <a href={`tel:${telNumber}`} style={styles.heroBtnSecondary}>📞 Bel nu</a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2>Elektricien diensten Apeldoorn</h2>
        <ul>
          <li>Groepenkast vervangen & uitbreiden</li>
          <li>Storingen oplossen (spoed)</li>
          <li>Nieuwe elektra installaties</li>
          <li>Renovatie & verbouwing</li>
        </ul>
      </section>

      {/* WHY US */}
      <section style={styles.sectionDark}>
        <h2>Waarom klanten ons kiezen</h2>
        <ul>
          <li>✔ 24/7 spoedservice</li>
          <li>✔ Snel ter plaatse in Apeldoorn</li>
          <li>✔ Eerlijke prijzen vooraf</li>
          <li>✔ Ervaren vakman</li>
        </ul>
      </section>

      {/* FAQ SEO BOOST */}
      <section style={styles.section}>
        <h2>Veelgestelde vragen</h2>

        <h3>Komt u ook bij spoed?</h3>
        <p>Ja, wij bieden 24/7 spoedservice in Apeldoorn en omgeving.</p>

        <h3>Wat kost een elektricien?</h3>
        <p>De kosten hangen af van de storing of klus. U krijgt altijd vooraf duidelijkheid.</p>

        <h3>Hoe snel bent u ter plaatse?</h3>
        <p>Meestal binnen korte tijd in Apeldoorn en directe omgeving.</p>
      </section>

      {/* MAP */}
      <section style={styles.sectionDark}>
        <h2>Werkgebied Apeldoorn</h2>
        <p>Wij zijn actief in Apeldoorn en omgeving.</p>

        <iframe
          title="map"
          src="https://www.google.com/maps?q=Apeldoorn&output=embed"
          style={{ width: "100%", height: 250, border: 0, borderRadius: 10 }}
        />
      </section>

      {/* CONTACT FORM */}
      <section style={styles.section}>
        <h2>Offerte aanvragen</h2>

        <form onSubmit={sendEmail} style={styles.form}>
          <input name="naam" placeholder="Naam" onChange={handleChange} style={styles.input} required />
          <input name="telefoon" placeholder="Telefoon" onChange={handleChange} style={styles.input} required />
          <textarea name="bericht" placeholder="Beschrijving van uw probleem" onChange={handleChange} style={styles.textarea} required />
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
    background: "#0b1220",
    color: "white"
  },

  topBar: {
    background: "#1d4ed8",
    textAlign: "center",
    padding: 8,
    fontWeight: "bold"
  },

  header: {
    padding: 20,
    background: "#0f1b33"
  },

  logo: { fontSize: 18, fontWeight: "bold" },

  hero: {
    textAlign: "center",
    padding: "70px 20px",
    background: "linear-gradient(135deg, #0f1b33, #1d4ed8)"
  },

  title: { fontSize: 38 },

  subtitle: { opacity: 0.9 },

  heroButtons: { display: "flex", justifyContent: "center", gap: 10, marginTop: 20 },

  heroBtn: {
    background: "#1d4ed8",
    padding: 12,
    borderRadius: 8,
    color: "white",
    textDecoration: "none"
  },

  heroBtnSecondary: {
    background: "#25D366",
    padding: 12,
    borderRadius: 8,
    color: "white",
    textDecoration: "none"
  },

  section: {
    padding: 40,
    background: "#0b1220"
  },

  sectionDark: {
    padding: 40,
    background: "#0f1b33"
  },

  form: { display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 },
  input: { padding: 10, borderRadius: 8, border: "none" },
  textarea: { padding: 10, borderRadius: 8, height: 100 },
  button: { background: "#1d4ed8", color: "white", padding: 12, border: "none", borderRadius: 8 },

  footer: { textAlign: "center", padding: 20, background: "#0f1b33", fontSize: 12 },

  fixedActions: {
    position: "fixed",
    right: 15,
    bottom: 15,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    zIndex: 9999
  },

  whatsappBtnFixed: {
    background: "#25D366",
    padding: 12,
    borderRadius: 50,
    color: "white",
    textDecoration: "none",
    textAlign: "center"
  },

  callBtn: {
    background: "#1d4ed8",
    padding: 12,
    borderRadius: 50,
    color: "white",
    textDecoration: "none",
    textAlign: "center"
  }
};
