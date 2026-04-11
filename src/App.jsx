import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    bericht: "",
  });

  const whatsappNumber = "31644878482";

  useEffect(() => {
    document.title = "Elektricien Apeldoorn | Elektrotechniek Khaleki - Spoed & Installaties";

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
