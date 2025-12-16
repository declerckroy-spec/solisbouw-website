import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maatwerk Keukens - SolisBouw',
  description: 'Op maat gemaakte keukens voor kookliefhebbers. Van modern tot landelijk, altijd perfect passend bij uw levensstijl.',
}

export default function MaatwerkKeukensPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-gold text-navy pt-24 diagonal-split">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-navy text-white px-6 py-2 text-sm font-black tracking-widest mb-8 uppercase">Op Maat Gemaakt</div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              MAATWERK<br/>
              <span className="text-navy">KEUKENS</span>
            </h1>
            <p className="text-2xl mb-12 max-w-2xl leading-relaxed">
              Het hart van uw huis, ontworpen rond uw levensstijl en culinaire ambities. Elke keuken is uniek en volledig op maat.
            </p>
            <Link href="/contact" className="bg-navy text-white px-12 py-5 text-lg font-black uppercase inline-block hover:bg-terracotta transition-colors">
              Plan Keukengesprek →
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Images */}
      <section className="py-0">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"
                alt="Luxe keuken met kookeiland"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/images/kam-idris-hYb7kbu4x7E-unsplash.jpg"
                alt="Moderne keuken design"
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
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-8">VOLLEDIG OP MAAT</h2>
              <div className="w-32 h-2 bg-gold mb-8"></div>
              <p className="text-xl text-text-grey leading-relaxed max-w-3xl">
                Een maatwerk keuken is precies afgestemd op uw wensen, ruimte en budget. Van het ontwerp tot de laatste greep, alles is uniek voor u gemaakt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-4 border-gold p-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Design & Indeling</h3>
                <p className="text-text-grey leading-relaxed">
                  3D ontwerp op basis van uw wensen en de beschikbare ruimte. Optimale werkdriehoek en slimme opbergruimte.
                </p>
              </div>

              <div className="bg-white border-4 border-terracotta p-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Kasten & Werkbladen</h3>
                <p className="text-text-grey leading-relaxed">
                  Massief houten kasten of moderne hoogglans. Werkbladen in composiet, natuursteen of keramiek.
                </p>
              </div>

              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-navy mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Apparatuur</h3>
                <p className="text-text-grey leading-relaxed">
                  Inbouwapparatuur van top merken. Van inductie kookplaten tot professionele dampkappen en ovens.
                </p>
              </div>

              <div className="bg-white border-4 border-gold p-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Montage & Afwerking</h3>
                <p className="text-text-grey leading-relaxed">
                  Professionele montage, wandafwerking, verlichting en alle aansluitingen. Binnen één week volledig gebruiksklaar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stijlen */}
      <section className="py-32 texture-bg">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">KEUKEN STIJLEN</h2>
              <p className="text-xl text-text-grey">Van klassiek tot industrieel</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-4 border-gold p-10 text-center">
                <div className="text-6xl mb-6">🏡</div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Landelijk</h3>
                <p className="text-text-grey leading-relaxed">
                  Warm, gezellig en tijdloos. Houten fronten, natuurlijke materialen en klassieke details.
                </p>
              </div>

              <div className="bg-gold text-navy border-4 border-gold p-10 text-center">
                <div className="text-6xl mb-6">📐</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Modern</h3>
                <p className="leading-relaxed">
                  Strakke lijnen, greeploos en minimalistisch. Hoogglans of mat in iedere gewenste kleur.
                </p>
              </div>

              <div className="bg-white border-4 border-terracotta p-10 text-center">
                <div className="text-6xl mb-6">⚙️</div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Industrieel</h3>
                <p className="text-text-grey leading-relaxed">
                  Robuust en stoer. Combinatie van hout, staal, beton en zwarte accenten voor een unieke uitstraling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merken */}
      <section className="py-32 bg-navy text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black mb-12 text-center">WIJ WERKEN MET<br/><span className="text-gold">TOP MERKEN</span></h2>
            <p className="text-xl text-center mb-24 text-gray-300 max-w-3xl mx-auto">
              Alleen A-merk apparatuur en materialen. Kwaliteit, duurzaamheid en service gegarandeerd.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-navy p-10 border-t-8 border-gold text-center">
                <h3 className="text-2xl font-black mb-4 uppercase">Apparatuur</h3>
                <p className="leading-relaxed">
                  Miele, Siemens, Bosch, AEG, Gaggenau - De beste merken voor lange levensduur.
                </p>
              </div>

              <div className="bg-gold text-navy p-10 border-t-8 border-terracotta text-center">
                <h3 className="text-2xl font-black mb-4 uppercase">Werkbladen</h3>
                <p className="leading-relaxed">
                  Silestone, Dekton, Graniet, Marmer - Krasbestendig en onderhoudsarm.
                </p>
              </div>

              <div className="bg-white text-navy p-10 border-t-8 border-navy text-center">
                <h3 className="text-2xl font-black mb-4 uppercase">Kasten</h3>
                <p className="leading-relaxed">
                  Blum, Grass, Hettich - Topkwaliteit scharnieren en laden systemen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-terracotta text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">KLAAR VOOR UW<br/>DROOMKEUKEN?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Maak een afspraak in onze showroom of voor een thuisbezoek. Ontdek de mogelijkheden en krijg direct een prijsindicatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase hover:bg-navy hover:text-white transition-colors inline-block">
                Bezoek Showroom →
              </Link>
              <Link href="/diensten/badkamer-design" className="border-4 border-white text-white px-12 py-5 text-lg font-black uppercase hover:bg-white hover:text-terracotta transition-colors inline-block">
                Bekijk Andere Diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
