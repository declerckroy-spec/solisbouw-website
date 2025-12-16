import ProjectLayout from '@/components/ProjectLayout'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amsterdam Noord - Complete Renovatie | SolisBouw',
  description: 'Bekijk onze complete renovatie van een 19e eeuws herenhuis in Amsterdam Noord. 140m² met behoud van authentieke details.',
}

export default function AmsterdamNoordPage() {
  return (
    <ProjectLayout>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-navy text-white pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <Link href="/projecten" className="inline-flex items-center gap-2 text-terracotta font-bold mb-8 hover:gap-4 transition-all">
              ← Terug naar Portfolio
            </Link>
            <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
              AMSTERDAM<br/>
              <span className="text-terracotta">NOORD</span>
            </h1>
            <div className="flex flex-wrap gap-6 text-xl">
              <span className="border-l-4 border-terracotta pl-4 font-bold">140m² Complete Renovatie</span>
              <span className="border-l-4 border-gold pl-4 font-bold">19e Eeuws Herenhuis</span>
              <span className="border-l-4 border-white pl-4 font-bold">2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-0">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto -mt-20 relative z-10">
            <div className="relative h-[600px] shadow-2xl overflow-hidden">
              <Image
                src="/images/ries-bosch-sj16pUqOoco-unsplash.jpg"
                alt="Klassiek herenhuis Amsterdam Noord"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-black text-navy mb-6 uppercase">Over Dit Project</h2>
                <p className="text-lg text-text-grey leading-relaxed mb-4">
                  Dit prachtige 19e-eeuwse herenhuis in Amsterdam Noord onderging een complete metamorfose. De opdrachtgevers wilden de authenticiteit van het pand behouden, terwijl ze tegelijkertijd een moderne, comfortabele leefomgeving creëerden die aansluit bij hun hedendaagse lifestyle.
                </p>
                <p className="text-lg text-text-grey leading-relaxed">
                  Onze aanpak was respectvol maar gedurfd: we hebben de originele gevel, ornamenten en plafondlijsten gerestaureerd, maar maakten wel een open plattegrond op de begane grond. Hierdoor stroomt het licht nu prachtig door het hele huis.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-navy mb-6 uppercase">De Uitdaging</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Het grootste vraagstuk was het behouden van de monumentale status terwijl we toch moderne voorzieningen integreerden. We werkten nauw samen met de gemeente en monumentenzorg om alle details goed te keuren. Daarnaast bleek de fundering versterking nodig te hebben, wat we vakkundig hebben aangepakt zonder de structuur te verstoren.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-warm-grey p-8 border-l-8 border-terracotta">
                <h3 className="text-2xl font-black text-navy mb-6 uppercase">Project Info</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Locatie</dt>
                    <dd className="text-lg font-bold text-navy">Amsterdam Noord</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oplevering</dt>
                    <dd className="text-lg font-bold text-navy">September 2023</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oppervlakte</dt>
                    <dd className="text-lg font-bold text-navy">140m²</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Duur</dt>
                    <dd className="text-lg font-bold text-navy">7 maanden</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Type</dt>
                    <dd className="text-lg font-bold text-navy">Complete Renovatie</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-navy p-8 text-white">
                <h3 className="text-2xl font-black mb-4 uppercase">Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Structurele renovatie</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Monumentenrestauratie</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Badkamer & keuken</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Elektra & sanitair</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Vloeren & afwerking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-navy mb-16 uppercase text-center">Project Galerij</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/jean-philippe-delberghe-7l3ruHHQlcI-unsplash.jpg" alt="Interieur herenhuis met ornamenten" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/margaret-polinder-NzCVjuMW6ww-unsplash.jpg" alt="Nederlandse rijtjeshuizen" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/alexandra-marta-pRgzUYqP4kw-unsplash.jpg" alt="Brick herenhuis" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/scott-blake-x-ghf9LjrVg-unsplash.jpg" alt="Bouwproces renovatie" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-navy mb-16 uppercase">Highlights</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="border-l-8 border-terracotta pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Open Plattegrond</h3>
                <p className="text-text-grey leading-relaxed">
                  Door dragende muren strategisch te vervangen door stalen balken, creëerden we een lichte, open leefruimte zonder de structurele integriteit aan te tasten.
                </p>
              </div>
              <div className="border-l-8 border-gold pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Authentieke Details</h3>
                <p className="text-text-grey leading-relaxed">
                  Alle originele plafondornamenten, paneeldeuren en gevelopbouw werden vakkundig gerestaureerd en waar nodig gereconstrueerd door specialisten.
                </p>
              </div>
              <div className="border-l-8 border-navy pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Moderne Comfort</h3>
                <p className="text-text-grey leading-relaxed">
                  Vloerverwarming, geïntegreerde airconditioning en slimme domotica werden onzichtbaar geïntegreerd in het historische karakter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-navy text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-terracotta mb-8">"</div>
            <p className="text-2xl lg:text-3xl leading-relaxed mb-12 font-semibold">
              SolisBouw heeft ons droomhuis werkelijkheid gemaakt. Ze begrepen precies wat we wilden: het behouden van de ziel van het pand, maar met alle moderne luxe. Het vakmanschap is onberispelijk.
            </p>
            <div className="border-t-4 border-terracotta inline-block pt-6">
              <p className="font-black text-xl uppercase">Familie Van Der Berg</p>
              <p className="text-gray-400 font-bold">Eigenaren</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Next Projects */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-navy mb-12 uppercase text-center">Meer Projecten</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/projecten/utrecht-centrum" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg" alt="Utrecht Centrum penthouse" fill className="object-cover" />
                  <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk →</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-navy uppercase">Utrecht Centrum</h3>
              </Link>
              <Link href="/projecten/den-haag-villa" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg" alt="Den Haag Villa keuken" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk →</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-navy uppercase">Den Haag Villa</h3>
              </Link>
              <Link href="/projecten/rotterdam-west" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/daria-nepriakhina-fuWN-XkOkCQ-unsplash.jpg" alt="Rotterdam West uitbouw" fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk →</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-navy uppercase">Rotterdam West</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-terracotta text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-8">START UW<br/>DROOMPROJECT</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Geïnspireerd door dit project? Laat ons u helpen uw visie te realiseren.
            </p>
            <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              Neem Contact Op →
            </Link>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
