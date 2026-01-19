import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">1. Geltungsbereich</h2>
              <p className="mb-4">
                Für die Geschäftsbeziehung zwischen Master Law Firm SL (nachfolgend "Anbieter") und dem Kunden (nachfolgend "Kunde") gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">2. Vertragsgegenstand</h2>
              <p className="mb-4">
                Gegenstand des Vertrages ist die Erbringung von Beratungsdienstleistungen im Bereich Unternehmensgründung, Steueroptimierung und Insolvenzberatung. Der genaue Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung auf der Website oder dem individuellen Angebot.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">3. Vertragsschluss</h2>
              <p className="mb-4">
                Die Präsentation der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe einer Bestellung dar. Durch Anklicken des Buttons "Kostenpflichtig bestellen" geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Dienstleistungen ab.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">4. Preise und Zahlungsbedingungen</h2>
              <p className="mb-4">
                Alle Preise, die auf der Website des Anbieters angegeben sind, verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer. Die Zahlung erfolgt wahlweise per Kreditkarte, Überweisung oder anderen auf der Website angebotenen Zahlungsmethoden.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">5. Haftung</h2>
              <p className="mb-4">
                Ansprüche des Kunden auf Schadensersatz sind ausgeschlossen. Hiervon ausgenommen sind Schadensersatzansprüche des Kunden aus der Verletzung des Lebens, des Körpers, der Gesundheit oder aus der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) sowie die Haftung für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Anbieters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">6. Schlussbestimmungen</h2>
              <p className="mb-4">
                Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht des Königreichs Spanien unter Ausschluss des UN-Kaufrechts Anwendung. Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen zwischen dem Kunden und dem Anbieter ist der Sitz des Anbieters (Palma de Mallorca), sofern es sich beim Kunden um einen Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen handelt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
