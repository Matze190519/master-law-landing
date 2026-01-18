import Layout from "@/components/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-4">
                <strong className="text-white">Master Law Firm SL</strong><br />
                Avda. Alexandre Rosselló 15, 5º H<br />
                07002 Palma de Mallorca<br />
                Spanien
              </p>
              
              <p>
                <strong className="text-white">Vertreten durch:</strong><br />
                Die Geschäftsführung
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
              <p className="space-y-2">
                <div className="flex justify-between max-w-xs">
                  <span>Telefon:</span>
                  <span className="text-white">+34 871180619</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Fax:</span>
                  <span className="text-white">+34 971570804</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>E-Mail:</span>
                  <span className="text-white">palma@master-law.de</span>
                </div>
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Palma de Mallorca<br />
                Registernummer: B02735264 (NIF)
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
