import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold text-white mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="text-lg font-semibold text-white mb-2">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                <strong>Netlify</strong><br />
                Anbieter ist die Netlify, Inc., 2325 3rd Street, Suite 215, San Francisco, California 94107, USA. Wenn Sie unsere Website besuchen, erfasst Netlify verschiedene Logfiles inklusive Ihrer IP-Adressen.<br />
                Die Verwendung von Netlify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-semibold text-white mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <h3 className="text-lg font-semibold text-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Master Law Firm SL<br />
                Avda. Alexandre Rosselló 15, 5º H<br />
                07002 Palma de Mallorca<br />
                Spanien<br /><br />
                E-Mail: palma@master-law.de
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold text-white mb-2">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <h3 className="text-lg font-semibold text-white mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
