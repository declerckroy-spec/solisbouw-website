import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Renovatie - SolisBouw',
  description: 'Complete woning renovatie van kelder tot zolder. 25 jaar ervaring, vaste prijs garantie en 5 jaar garantie op alle werkzaamheden.',
}

export default function CompleteRenovatiePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-navy text-white pt-24 diagonal-split">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-terracotta px-6 py-2 text-sm font-black tracking-widest mb-8 uppercase">Meest Gekozen</div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              COMPLETE<br/>
              <span className="text-terracotta">RENOVATIE</span>
            </h1>
            <p className="text-2xl mb-12 max-w-2xl text-gray-300 leading-relaxed">
              Van kelder tot zolder transformeren we uw woning tot uw droomhuis. Complete projectbegeleiding met aandacht voor elk detail.
            </p>
            <Link href="/contact" className="bg-terracotta text-white px-12 py-5 text-lg font-black uppercase inline-block hover:bg-gold transition-colors">
              Vraag Offerte Aan →
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/images/mitchell-luo-TtX79Vkm8gs-unsplash.jpg"
                alt="Bouwvakker aan het werk tijdens renovatie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat Houdt Het In */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-8">WAT HOUDT HET IN?</h2>
              <div className="w-32 h-2 bg-terracotta mb-8"></div>
              <p className="text-xl text-text-grey leading-relaxed max-w-3xl">
                Een complete renovatie is meer dan alleen verbouwen. Het is het totale proces van analyse, ontwerp, vergunningen, uitvoering en oplevering. Wij begeleiden u van A tot Z.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Structurele Aanpassingen</h3>
                <p className="text-text-grey leading-relaxed">
                  Wanden verplaatsen, vloeren verhogen, dakconstructies aanpassen. Alle structurele werkzaamheden volgens bouwvoorschriften.
                </p>
              </div>

              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Installaties & Voorzieningen</h3>
                <p className="text-text-grey leading-relaxed">
                  Volledige vernieuwing van elektra, leidingwerk, verwarming, ventilatie en sanitair. Modern en energiezuinig.
                </p>
              </div>

              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-navy mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Afwerking & Styling</h3>
                <p className="text-text-grey leading-relaxed">
                  Stucwerk, schilderwerk, vloeren, wandafwerking. Van basic tot luxe, altijd kwaliteit en oog voor detail.
                </p>
              </div>

              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Projectmanagement</h3>
                <p className="text-text-grey leading-relaxed">
                  Één aanspreekpunt, planning, coördinatie van onderaannemers en transparante communicatie tijdens het hele project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Het Proces */}
      <section className="py-32 texture-bg">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">HET PROCES</h2>
              <p className="text-xl text-text-grey">Stap voor stap naar uw droomhuis</p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start gap-8 bg-white border-4 border-terracotta p-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-terracotta flex items-center justify-center">
                    <span className="text-5xl font-black text-white">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-navy mb-4 uppercase">Intake & Advies</h3>
                  <p className="text-text-grey text-lg leading-relaxed">
                    Kennismakingsgesprek op locatie. We bespreken uw wensen, budget en mogelijkheden. U ontvangt vrijblijvend advies en een globale prijsindicatie.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start gap-8 bg-white border-4 border-gold p-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gold flex items-center justify-center">
                    <span className="text-5xl font-black text-white">02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-navy mb-4 uppercase">Ontwerp & Offerte</h3>
                  <p className="text-text-grey text-lg leading-relaxed">
                    Gedetailleerde tekeningen, materiaalspecificaties en een vaste prijs offerte. Aanpassingen mogelijk tot alles naar wens is.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start gap-8 bg-white border-4 border-navy p-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-navy flex items-center justify-center">
                    <span className="text-5xl font-black text-white">03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-navy mb-4 uppercase">Vergunningen & Voorbereiding</h3>
                  <p className="text-text-grey text-lg leading-relaxed">
                    Wij regelen alle benodigde vergunningen en bereiden de uitvoering voor. Planning, materiaal inkoop en coördinatie onderaannemers.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start gap-8 bg-white border-4 border-terracotta p-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-terracotta flex items-center justify-center">
                    <span className="text-5xl font-black text-white">04</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-navy mb-4 uppercase">Uitvoering</h3>
                  <p className="text-text-grey text-lg leading-relaxed">
                    De verbouwing start volgens planning. Wekelijkse updates en één vast aanspreekpunt. Kwaliteitscontrole bij elke fase.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-start gap-8 bg-white border-4 border-gold p-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gold flex items-center justify-center">
                    <span className="text-5xl font-black text-white">05</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-navy mb-4 uppercase">Oplevering & Garantie</h3>
                  <p className="text-text-grey text-lg leading-relaxed">
                    Gezamenlijke inspectie, puntenwerkzaamheden en officiële oplevering. 5 jaar garantie op alle uitgevoerde werkzaamheden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-32 bg-navy text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black mb-24 text-center">WAAROM<br/><span className="text-terracotta">SOLISBOUW?</span></h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-navy p-10 border-t-8 border-terracotta">
                <div className="text-5xl mb-6">✓</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Vaste Prijs Garantie</h3>
                <p className="leading-relaxed">
                  Geen verrassingen achteraf. De offerte prijs is de eindprijs, tenzij u zelf wijzigingen doorvoert.
                </p>
              </div>

              <div className="bg-terracotta p-10 border-t-8 border-gold">
                <div className="text-5xl mb-6">★</div>
                <h3 className="text-2xl font-black mb-4 uppercase">25 Jaar Ervaring</h3>
                <p className="leading-relaxed">
                  Sinds 1999 succesvol actief in renovaties. Honderden tevreden klanten en een bewezen track record.
                </p>
              </div>

              <div className="bg-white text-navy p-10 border-t-8 border-navy">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-2xl font-black mb-4 uppercase">5 Jaar Garantie</h3>
                <p className="leading-relaxed">
                  Ruime garantie op alle materialen en werkzaamheden. U bent verzekerd van kwaliteit en service.
                </p>
              </div>

              <div className="bg-white text-navy p-10 border-t-8 border-gold">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Totaalpakket</h3>
                <p className="leading-relaxed">
                  Van ontwerp tot oplevering alles uit één hand. Geen gedoe met verschillende aannemers.
                </p>
              </div>

              <div className="bg-terracotta p-10 border-t-8 border-terracotta">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Persoonlijk Contact</h3>
                <p className="leading-relaxed">
                  Directe communicatie met uw projectleider. Bereikbaar via telefoon, email en WhatsApp.
                </p>
              </div>

              <div className="bg-white text-navy p-10 border-t-8 border-terracotta">
                <div className="text-5xl mb-6">🏆</div>
                <h3 className="text-2xl font-black mb-4 uppercase">A-Merk Materialen</h3>
                <p className="leading-relaxed">
                  Wij werken alleen met hoogwaardige materialen van bekende merken. Kwaliteit staat voorop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voorbeeldprojecten */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">RECENT AFGEROND</h2>
              <p className="text-xl text-text-grey">Voorbeelden van complete renovaties</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Link href="/projecten/amsterdam-noord" className="group">
                <div className="relative h-96 mb-6 overflow-hidden">
                  <Image src="/images/ries-bosch-sj16pUqOoco-unsplash.jpg" alt="Herenhuis Amsterdam renovatie" fill className="object-cover" />
                  <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                  </div>
                </div>
                <div className="border-l-8 border-terracotta pl-6">
                  <h3 className="text-3xl font-black text-navy mb-3 uppercase">Herenhuis Amsterdam</h3>
                  <p className="text-text-grey mb-4">Complete renovatie 140m² - 7 maanden</p>
                  <p className="text-text-grey leading-relaxed">
                    Volledige renovatie van 19e eeuws herenhuis. Behoud van authentieke details gecombineerd met moderne comfort en technieken.
                  </p>
                </div>
              </Link>

              <Link href="/projecten/utrecht-centrum" className="group">
                <div className="relative h-96 mb-6 overflow-hidden">
                  <Image src="/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg" alt="Modern penthouse Utrecht" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                  </div>
                </div>
                <div className="border-l-8 border-gold pl-6">
                  <h3 className="text-3xl font-black text-navy mb-3 uppercase">Penthouse Utrecht</h3>
                  <p className="text-text-grey mb-4">Luxe badkamer 35m² - 3 maanden</p>
                  <p className="text-text-grey leading-relaxed">
                    Complete spa-badkamer met natuursteen, vrijstaand bad en smart glass privacy technologie voor ultieme luxe.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gold text-navy">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">KLAAR VOOR UW<br/>RENOVATIE?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Neem contact op voor een vrijblijvend gesprek. We bespreken uw wensen en maken een offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-navy text-white px-12 py-5 text-lg font-black uppercase hover:bg-terracotta transition-colors inline-block">
                Gratis Offerte →
              </Link>
              <a href="tel:0201234567" className="border-4 border-navy text-navy px-12 py-5 text-lg font-black uppercase hover:bg-navy hover:text-white transition-colors inline-block">
                Bel Direct: 020-1234567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
