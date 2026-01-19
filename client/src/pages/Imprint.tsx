import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Imprint() {
  const { lang } = useLanguage();

  return (
    <Layout>
      <SEO 
        title={lang === "DE" ? "Impressum" : lang === "ES" ? "Aviso Legal" : "Imprint"}
        description={lang === "DE" ? "Rechtliche Informationen" : lang === "ES" ? "Información Legal" : "Legal Information"}
      />
      <div className="pt-32 pb-20 container max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-12">
          {lang === "DE" ? "Impressum" : lang === "ES" ? "Aviso Legal" : "Imprint"}
        </h1>
        
        <div className="space-y-8 text-white/80">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Angaben gemäß § 5 TMG</h2>
            <p>
              Master Law Firm<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]<br />
              [Land]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer]<br />
              E-Mail: info@lr-lifestyle.info
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-ID]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name des Verantwortlichen]<br />
              [Anschrift]
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
