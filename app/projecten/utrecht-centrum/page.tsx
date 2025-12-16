import ProjectLayout from '@/components/ProjectLayout'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Utrecht Centrum - Penthouse Badkamer | SolisBouw',
  description: 'Luxe spa-badkamer met natuursteen en panoramisch uitzicht in het hart van Utrecht.',
}

export default function UtrechtCentrumPage() {
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
              UTRECHT<br/>
              <span className="text-terracotta">CENTRUM</span>
            </h1>
            <div className="flex flex-wrap gap-6 text-xl">
              <span className="border-l-4 border-terracotta pl-4 font-bold">Penthouse Badkamer</span>
              <span className="border-l-4 border-gold pl-4 font-bold">Luxe Spa Design</span>
              <span className="border-l-4 border-white pl-4 font-bold">2024</span>
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
                src="/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg"
                alt="Penthouse met panoramisch uitzicht Utrecht"
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
                  In deze spectaculaire penthouse in het centrum van Utrecht realiseerden we een luxe spa-badkamer die doet denken aan de beste vijfsterrenhotels. Met een adembenemend panoramisch uitzicht over de stad, werd deze ruimte getransformeerd tot een persoonlijke wellness-oase.
                </p>
                <p className="text-lg text-text-grey leading-relaxed">
                  Het gebruik van natuursteen, een vrijstaand ligbad bij het raam, en subtiele verlichting creëren een serene sfeer waarin ontspanning centraal staat. Elk detail is zorgvuldig geselecteerd om luxe en functionaliteit te combineren.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-navy mb-6 uppercase">Design Concept</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Het ontwerpthema draaide om minimalisme en elegantie. We kozen voor een neutrale kleurenpalet met warme natuursteen accenten. De grote raampartijen werden behouden om het spektakulaire uitzicht te benutten, terwijl slimme oplossingen voor privacy werden geïntegreerd met elektrische smart glass technologie.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-warm-grey p-8 border-l-8 border-terracotta">
                <h3 className="text-2xl font-black text-navy mb-6 uppercase">Project Info</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Locatie</dt>
                    <dd className="text-lg font-bold text-navy">Utrecht Centrum</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oplevering</dt>
                    <dd className="text-lg font-bold text-navy">Maart 2024</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oppervlakte</dt>
                    <dd className="text-lg font-bold text-navy">35m²</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Duur</dt>
                    <dd className="text-lg font-bold text-navy">3 maanden</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Type</dt>
                    <dd className="text-lg font-bold text-navy">Luxe Badkamer</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-navy p-8 text-white">
                <h3 className="text-2xl font-black mb-4 uppercase">Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Natuursteen wanden</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Vrijstaand ligbad</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Smart glass privacy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Vloerverwarming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Stoomcabine</span>
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
                <Image src="/images/moritz-bruder-gvCLog5Yv00-unsplash.jpg" alt="Luxe penthouse interieur" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/kam-idris-hYb7kbu4x7E-unsplash.jpg" alt="Moderne luxe keuken" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/daria-nepriakhina-fuWN-XkOkCQ-unsplash.jpg" alt="Modern nieuwbouw exterieur" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/mitchell-luo-TtX79Vkm8gs-unsplash.jpg" alt="Bouwvakker aan het werk" fill className="object-cover" />
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
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Natuursteen</h3>
                <p className="text-text-grey leading-relaxed">
                  Exclusieve Calacatta marmer wanden en vloeren zorgen voor een tijdloze elegantie. Elk plaat is handgeselecteerd voor optimale aderpatronen.
                </p>
              </div>
              <div className="border-l-8 border-gold pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Smart Technology</h3>
                <p className="text-text-grey leading-relaxed">
                  Geïntegreerde domotica bestuurt verlichting, temperatuur en privacy glass. Zelfs de spiegel is voorzien van smart features en ambient lighting.
                </p>
              </div>
              <div className="border-l-8 border-navy pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Wellness Ervaring</h3>
                <p className="text-text-grey leading-relaxed">
                  De ingebouwde stoomcabine, regendouche en Bluetooth speakers creëren een complete spa-ervaring in de eigen woning.
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
              Elke ochtend voelt als een verblijf in een luxe hotel. De badkamer is onze favorite plek in huis geworden. SolisBouw heeft onze verwachtingen overtroffen.
            </p>
            <div className="border-t-4 border-terracotta inline-block pt-6">
              <p className="font-black text-xl uppercase">Sarah & Michael</p>
              <p className="text-gray-400 font-bold">Penthouse Eigenaren</p>
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
                  <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/80 transition-all duration-300 flex items-center justify-center">
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
            <h2 className="text-5xl lg:text-7xl font-black mb-8">UW DROOM<br/>BADKAMER</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Wilt u ook een luxe badkamer? We helpen u graag met het ontwerp en realisatie.
            </p>
            <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              Plan Een Consult →
            </Link>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
