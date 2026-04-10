
}
import React from "react";

export default function App() {
  const whatsappNumber = "31644878482";

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      
      <h1>Khaleki Elektrotechniek ⚡</h1>

      <p>Betrouwbare elektricien in Apeldoorn</p>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp direct
      </a>

      <hr />

      <h2>Diensten</h2>
      <ul>
        <li>Installaties</li>
        <li>Storingen</li>
        <li>Groepenkasten</li>
      </ul>

      <hr />

      <p>📞 0644878482</p>
      <p>✉️ emalkhaleki@hotmail.com</p>
    </div>
  );
}
