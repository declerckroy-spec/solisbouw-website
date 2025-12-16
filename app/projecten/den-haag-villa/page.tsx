import ProjectLayout from '@/components/ProjectLayout'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Den Haag Villa - Luxe Keuken | SolisBouw',
  description: 'Op maat gemaakte chef\'s kitchen met professionele apparatuur in een karakteristieke villa in Den Haag.',
}

export default function DenHaagVillaPage() {
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
              DEN HAAG<br/>
              <span className="text-terracotta">VILLA</span>
            </h1>
            <div className="flex flex-wrap gap-6 text-xl">
              <span className="border-l-4 border-terracotta pl-4 font-bold">Luxe Keuken Installatie</span>
              <span className="border-l-4 border-gold pl-4 font-bold">Chef's Kitchen</span>
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
                src="/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"
                alt="Luxe keuken met kookeiland"
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
                  Voor deze prachtige villa in Den Haag ontwierpen we een keuken die zou misstaan in geen enkel sterrrenrestaurant. De opdrachtgevers zijn gepassioneerde thuiskoks die graag entertainen, en hadden behoefte aan een ruimte die zowel functioneel als indrukwekkend is.
                </p>
                <p className="text-lg text-text-grey leading-relaxed">
                  Het eindresultaat is een chef's kitchen met professionele apparatuur, een groot kookeiland als middelpunt, en maatwerk kasten uitgevoerd in warm eikenhout gecombineerd met strakke zwarte accenten. De ruimte ademt luxe maar blijft praktisch voor dagelijks gebruik.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-navy mb-6 uppercase">Maatwerk Details</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Elk kastje, elke lade is op maat gemaakt door onze meubelmakers. We integreerden verborgen opbergruimte, een ingebouwd koffiestation, en zelfs een klimaatkast voor wijnopslag. De Gaggenau apparatuur werd naadloos geïntegreerd in het ontwerp.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-warm-grey p-8 border-l-8 border-terracotta">
                <h3 className="text-2xl font-black text-navy mb-6 uppercase">Project Info</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Locatie</dt>
                    <dd className="text-lg font-bold text-navy">Den Haag</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oplevering</dt>
                    <dd className="text-lg font-bold text-navy">November 2023</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oppervlakte</dt>
                    <dd className="text-lg font-bold text-navy">45m²</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Duur</dt>
                    <dd className="text-lg font-bold text-navy">4 maanden</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Type</dt>
                    <dd className="text-lg font-bold text-navy">Maatwerk Keuken</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-navy p-8 text-white">
                <h3 className="text-2xl font-black mb-4 uppercase">Apparatuur</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Gaggenau inductie kookplaat</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Dubbele oven combinatie</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Wijn klimaatkast</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Quooker kokend water</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Ingebouwd koffiesysteem</span>
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
                <Image src="/images/jason-briscoe-GliaHAJ3_5A-unsplash.jpg" alt="Luxe keuken met marmeren werkblad" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/kam-idris-hYb7kbu4x7E-unsplash.jpg" alt="Moderne keuken met hout en zwart" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/alice-kang-Bc_uN5PeErA-unsplash.jpg" alt="Keuken detail" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/h-co-3coKbdfnAFg-unsplash.jpg" alt="Keuken interieur" fill className="object-cover" />
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
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Kookeiland</h3>
                <p className="text-text-grey leading-relaxed">
                  Een imposant eiland van 3,5 meter met geïntegreerde apparatuur, voldoende werkruimte en zitplek voor gasten. Het hart van de keuken.
                </p>
              </div>
              <div className="border-l-8 border-gold pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Slimme Opslag</h3>
                <p className="text-text-grey leading-relaxed">
                  Doordacht ontworpen opbergsystemen met soft-close laden, uitschuifbare voorraadkasten en geïntegreerde verlichting in elke kast.
                </p>
              </div>
              <div className="border-l-8 border-navy pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Materialen</h3>
                <p className="text-text-grey leading-relaxed">
                  Composiet werkblad dat tegen hitte en vlekken kan, gecombineerd met massief eikenhout fronten en zwart staal details.
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
              We koken nu meer dan ooit. De keuken is perfect doordacht en werkt als een droom. Onze gasten zijn altijd onder de indruk van het resultaat.
            </p>
            <div className="border-t-4 border-terracotta inline-block pt-6">
              <p className="font-black text-xl uppercase">Robert & Linda</p>
              <p className="text-gray-400 font-bold">Villa Eigenaren</p>
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
              <Link href="/projecten/amsterdam-noord" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/ries-bosch-sj16pUqOoco-unsplash.jpg" alt="Amsterdam Noord herenhuis" fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk →</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-navy uppercase">Amsterdam Noord</h3>
              </Link>
              <Link href="/projecten/utrecht-centrum" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg" alt="Utrecht Centrum penthouse" fill className="object-cover" />
                  <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk →</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-navy uppercase">Utrecht Centrum</h3>
              </Link>
              <Link href="/projecten/rotterdam-west" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/daria-nepriakhina-fuWN-XkOkCQ-unsplash.jpg" alt="Rotterdam West uitbouw" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-300 flex items-center justify-center">
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
            <h2 className="text-5xl lg:text-7xl font-black mb-8">UW DROOM<br/>KEUKEN</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Op zoek naar een maatwerk keuken? Wij ontwerpen en realiseren uw perfecte keuken.
            </p>
            <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              Vraag Offerte Aan →
            </Link>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
