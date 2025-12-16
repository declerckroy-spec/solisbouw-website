import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uitbouw Projecten - SolisBouw',
  description: 'Meer ruimte nodig? Wij realiseren uitbouwen en aanbouwen die naadloos aansluiten bij uw bestaande woning.',
}

export default function UitbouwProjectenPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-navy text-white pt-24 diagonal-split">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-gold px-6 py-2 text-sm font-black tracking-widest mb-8 uppercase text-navy">Meer Ruimte</div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              UITBOUW<br/>
              <span className="text-gold">PROJECTEN</span>
            </h1>
            <p className="text-2xl mb-12 max-w-2xl text-gray-300 leading-relaxed">
              Meer ruimte, meer mogelijkheden. Wij realiseren uitbouwen en aanbouwen die naadloos aansluiten bij uw bestaande woning.
            </p>
            <Link href="/contact" className="bg-gold text-navy px-12 py-5 text-lg font-black uppercase inline-block hover:bg-terracotta hover:text-white transition-colors">
              Bespreek Mogelijkheden →
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Images */}
      <section className="py-0">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/images/daria-nepriakhina-fuWN-XkOkCQ-unsplash.jpg"
                alt="Moderne uitbouw project"
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
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-8">MEER RUIMTE CREËREN</h2>
              <div className="w-32 h-2 bg-gold mb-8"></div>
              <p className="text-xl text-text-grey leading-relaxed max-w-3xl">
                Een groeiend gezin heeft meer ruimte nodig. Met een uitbouw of aanbouw vergroot u uw woonoppervlak zonder te hoeven verhuizen. Wij begeleiden het complete proces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-4 border-gold p-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Architectuur & Vergunning</h3>
                <p className="text-text-grey leading-relaxed">
                  Architectonisch ontwerp dat perfect aansluit bij uw woning. Wij regelen alle vergunningen en goedkeuringen.
                </p>
              </div>

              <div className="bg-white border-4 border-terracotta p-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Fundering & Constructie</h3>
                <p className="text-text-grey leading-relaxed">
                  Solide fundering en constructie volgens bouwvoorschriften. Naadloze aansluiting op bestaande woning.
                </p>
              </div>

              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-navy mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Isolatie & Installaties</h3>
                <p className="text-text-grey leading-relaxed">
                  Moderne isolatie voor energiezuinig wonen. Complete installaties voor verwarming, elektra en ventilatie.
                </p>
              </div>

              <div className="bg-white border-4 border-gold p-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Afbouw & Styling</h3>
                <p className="text-text-grey leading-relaxed">
                  Volledige afbouw met stucwerk, vloeren, deuren en ramen. Afgestemd op de bestaande woning voor eenheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-32 texture-bg">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">SOORTEN UITBOUWEN</h2>
              <p className="text-xl text-text-grey">Welke past bij uw situatie?</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white border-4 border-gold p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gold flex items-center justify-center text-4xl">🏠</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-navy mb-4 uppercase">Achteruitbouw</h3>
                    <p className="text-text-grey text-lg leading-relaxed">
                      De meest voorkomende optie. Verleng uw woonkamer, eetkamer of keuken richting de tuin. Grote glaspartijen voor optimaal lichtinval en zicht op de tuin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-terracotta p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-terracotta flex items-center justify-center text-4xl">⬆️</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-navy mb-4 uppercase">Dakopbouw</h3>
                    <p className="text-text-grey text-lg leading-relaxed">
                      Extra verdieping op uw bestaande woning. Ideaal voor extra slaapkamers of een ruime master bedroom met badkamer en suite.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-navy p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-navy flex items-center justify-center text-4xl text-white">↔️</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-navy mb-4 uppercase">Zijuitbouw</h3>
                    <p className="text-text-grey text-lg leading-relaxed">
                      Uitbouw aan de zijkant van uw woning. Perfect voor een extra kamer, kantoor aan huis of hobbyruimte met eigen ingang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Het Proces */}
      <section className="py-32 bg-navy text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black mb-24 text-center">VAN IDEE TOT<br/><span className="text-gold">REALISATIE</span></h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white text-navy p-10 border-t-8 border-gold">
                <div className="text-5xl mb-6 font-black text-gold">01</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Adviesgesprek & Haalbaarheid</h3>
                <p className="leading-relaxed">
                  We bekijken samen de mogelijkheden. Vergunningvrij of vergunningplichtig? Wat zijn de kosten? Binnen 1 week duidelijkheid.
                </p>
              </div>

              <div className="bg-gold text-navy p-10 border-t-8 border-terracotta">
                <div className="text-5xl mb-6 font-black text-terracotta">02</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Tekeningen & Offerte</h3>
                <p className="leading-relaxed">
                  Architectonische tekeningen en een vaste prijs offerte. 3D visualisatie zodat u precies ziet hoe het wordt.
                </p>
              </div>

              <div className="bg-terracotta p-10 border-t-8 border-navy">
                <div className="text-5xl mb-6 font-black text-navy">03</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Vergunningen</h3>
                <p className="leading-relaxed">
                  Wij dienen de vergunning in en communiceren met de gemeente. U hoeft zich nergens zorgen over te maken.
                </p>
              </div>

              <div className="bg-white text-navy p-10 border-t-8 border-gold">
                <div className="text-5xl mb-6 font-black text-gold">04</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Bouw & Oplevering</h3>
                <p className="leading-relaxed">
                  Binnen 8-12 weken staat uw uitbouw er. Wekelijkse updates en één vast aanspreekpunt tijdens het proces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gold text-navy">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">MEER WOONRUIMTE<br/>NODIG?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Bel ons voor een vrijblijvend adviesgesprek. We bespreken de mogelijkheden en geven direct een indicatie van kosten en doorlooptijd.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-navy text-white px-12 py-5 text-lg font-black uppercase hover:bg-terracotta transition-colors inline-block">
                Gratis Adviesgesprek →
              </Link>
              <a href="tel:0201234567" className="border-4 border-navy text-navy px-12 py-5 text-lg font-black uppercase hover:bg-navy hover:text-white transition-colors inline-block">
                Bel: 020-1234567
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
