import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Wrench, Bolt, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ElektroWebsite() {
  const whatsappNumber = "31644878482";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailto = `mailto:emalkhaleki@hotmail.com?subject=Offerte aanvraag van ${name}&body=Naam: ${name}%0D%0ATelefoon: ${phone}%0D%0AEmail: ${email}%0D%0ABericht: ${message}`;

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="bg-slate-900 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>
          <span className="text-xl font-bold">Khaleki Elektrotechniek</span>
        </div>

        <Button className="bg-blue-500 hover:bg-blue-600">Offerte aanvragen</Button>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white py-28 px-6 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-bold">
          Jouw betrouwbare elektricien in Apeldoorn
        </motion.h1>
        <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
          Installaties, storingen en keuringen voor particulieren en bedrijven.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Offerte aanvragen</Button>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <MessageCircle size={18} /> WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">Diensten</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Bolt className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold">Installaties</h3>
              <p>Nieuwe en renovatie elektrotechniek.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Wrench className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold">Storingen</h3>
              <p>Snel hulp bij elektrische problemen.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold">Keuringen</h3>
              <p>Veilig volgens NEN-normen.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROJECTEN */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projecten</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-slate-100 p-4 rounded-xl">Groepenkast vervangen</div>
          <div className="bg-slate-100 p-4 rounded-xl">Nieuwbouw installaties</div>
          <div className="bg-slate-100 p-4 rounded-xl">Storingsdiensten</div>
        </div>
      </section>

      {/* OFFRTE FORMULIER */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Offerte aanvragen</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="name" className="border p-3 rounded" placeholder="Naam" required />
          <input name="phone" className="border p-3 rounded" placeholder="Telefoon" required />
          <input name="email" className="border p-3 rounded" placeholder="E-mail" required />
          <textarea name="message" className="border p-3 rounded" placeholder="Omschrijf je klus" rows={5} />
          <Button className="bg-blue-600 text-white">Verstuur offerte</Button>
        </form>
      </section>

      {/* MAP */}
      <section className="py-24 px-6 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-6">Werkgebied</h2>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Apeldoorn&output=embed"
            width="100%"
            height="300"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <Phone className="text-blue-600" />
              <p>0644878482</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Mail className="text-blue-600" />
              <p>emalkhaleki@hotmail.com</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle size={28} />
      </a>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white text-center py-6">
        © {new Date().getFullYear()} Khaleki Elektrotechniek
      </footer>
    </div>
  );
}
