import ProjectLayout from '@/components/ProjectLayout'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rotterdam West - Moderne Uitbouw | SolisBouw',
  description: 'Lichte 40m² uitbouw met stalen kozijnen en naadloze tuinaansluiting in Rotterdam West.',
}

export default function RotterdamWestPage() {
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
              ROTTERDAM<br/>
              <span className="text-terracotta">WEST</span>
            </h1>
            <div className="flex flex-wrap gap-6 text-xl">
              <span className="border-l-4 border-terracotta pl-4 font-bold">40m² Moderne Uitbouw</span>
              <span className="border-l-4 border-gold pl-4 font-bold">Stalen Kozijnen</span>
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
                src="/images/daria-nepriakhina-fuWN-XkOkCQ-unsplash.jpg"
                alt="Moderne nieuwbouw uitbouw"
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
                  Een karakteristieke jaren '30 woning in Rotterdam West kreeg een spectaculaire toevoeging: een moderne glazen uitbouw die de leefruimte met 40m² vergroot. Het contrast tussen het klassieke pand en de strakke moderne uitbouw creëert een unieke architecturale spanning.
                </p>
                <p className="text-lg text-text-grey leading-relaxed">
                  De sleutel van dit ontwerp zijn de imposante stalen kozijnen die zorgen voor maximale lichtinval en een naadloze overgang naar de tuin. De uitbouw functioneert als eetkamer en tuinkamer, een lichte oase die het hele jaar door te gebruiken is.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-navy mb-6 uppercase">Architectonisch Concept</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  We kozen bewust voor een eigentijds design dat het bestaande pand respecteert zonder het te imiteren. De glazen vlakken, strakke lijnen en industriële uitstraling van de stalen frames vormen een eerlijk statement. De hoge plafonds en grote glaspartijen versterken het gevoel van ruimte.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-warm-grey p-8 border-l-8 border-terracotta">
                <h3 className="text-2xl font-black text-navy mb-6 uppercase">Project Info</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Locatie</dt>
                    <dd className="text-lg font-bold text-navy">Rotterdam West</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oplevering</dt>
                    <dd className="text-lg font-bold text-navy">Januari 2024</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Oppervlakte</dt>
                    <dd className="text-lg font-bold text-navy">40m²</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Duur</dt>
                    <dd className="text-lg font-bold text-navy">5 maanden</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-text-grey font-bold mb-1">Type</dt>
                    <dd className="text-lg font-bold text-navy">Moderne Uitbouw</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-navy p-8 text-white">
                <h3 className="text-2xl font-black mb-4 uppercase">Kenmerken</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Stalen kozijnen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Vloerverwarming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Schuifpui 6 meter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Betonnen vloer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta"></span>
                    <span className="font-bold">Groendak</span>
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
                <Image src="/images/backbone-L4iRkKL5dng-unsplash.jpg" alt="Modern exterieur bouwproject" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg" alt="Architectuur detail" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/ernys-57ldq9age5U-unsplash.jpg" alt="Modern interieur" fill className="object-cover" />
              </div>
              <div className="relative h-96 overflow-hidden">
                <Image src="/images/billy-freeman-nkxB5Ab-ONY-unsplash.jpg" alt="Tuin aansluiting" fill className="object-cover" />
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
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Stalen Frames</h3>
                <p className="text-text-grey leading-relaxed">
                  Smalle maar sterke stalen profielen maximaliseren het glasoppervlak. De zwarte coating geeft een industriële chic en zorgt voor minimaal onderhoud.
                </p>
              </div>
              <div className="border-l-8 border-gold pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Binnen-Buiten</h3>
                <p className="text-text-grey leading-relaxed">
                  De 6 meter brede schuifpui verdwijnt volledig in de wand, waardoor binnen en buiten naadloos in elkaar overlopen tijdens mooie dagen.
                </p>
              </div>
              <div className="border-l-8 border-navy pl-6">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Duurzaamheid</h3>
                <p className="text-text-grey leading-relaxed">
                  HR+++ beglazing, een groendak voor waterafvoer en biodiversiteit, en optimale isolatie zorgen voor een energiezuinige uitbouw.
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
              De uitbouw heeft ons huis compleet getransformeerd. We leven nu praktisch in de tuin, ook in de winter. De lichtinval is fenomenaal en het design is precies wat we wilden.
            </p>
            <div className="border-t-4 border-terracotta inline-block pt-6">
              <p className="font-black text-xl uppercase">Emma & Thomas</p>
              <p className="text-gray-400 font-bold">Woning Eigenaren</p>
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
              <Link href="/projecten/den-haag-villa" className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image src="/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg" alt="Den Haag Villa keuken" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk →</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-navy uppercase">Den Haag Villa</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-terracotta text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-8">UW WONING<br/>UITBREIDEN?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Droomt u van meer ruimte? Ontdek de mogelijkheden van een uitbouw.
            </p>
            <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              Bespreek Mogelijkheden →
            </Link>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
