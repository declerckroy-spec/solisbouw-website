import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Badkamer Design - SolisBouw',
  description: 'Luxe badkamer renovatie op maat. Van klassiek tot modern design. Complete wellness ervaring in uw eigen huis.',
}

export default function BadkamerDesignPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-terracotta text-white pt-24 diagonal-split">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-navy px-6 py-2 text-sm font-black tracking-widest mb-8 uppercase">Wellness Specialist</div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              BADKAMER<br/>
              <span className="text-white">DESIGN</span>
            </h1>
            <p className="text-2xl mb-12 max-w-2xl leading-relaxed">
              Luxe en functionaliteit perfect gecombineerd in uw persoonlijke wellness oase. Van klassiek tot eigentijds design.
            </p>
            <Link href="/contact" className="bg-navy text-white px-12 py-5 text-lg font-black uppercase inline-block hover:bg-gold transition-colors">
              Vraag Offerte Aan →
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
                src="/images/lotus-design-n-print-g51F6-WYzyU-unsplash.jpg"
                alt="Luxe badkamer design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/images/sven-brandsma-3hEGHI4b4gg-unsplash.jpg"
                alt="Moderne badkamer met bad"
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
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-8">WAT BIEDEN WIJ?</h2>
              <div className="w-32 h-2 bg-terracotta mb-8"></div>
              <p className="text-xl text-text-grey leading-relaxed max-w-3xl">
                Een badkamer is meer dan een functionele ruimte. Het is uw dagelijkse ontspanningsmoment. Wij ontwerpen en realiseren badkamers die luxe, comfort en stijl perfect verenigen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-4 border-terracotta p-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Design & Advies</h3>
                <p className="text-text-grey leading-relaxed">
                  3D visualisatie van uw nieuwe badkamer. Professioneel advies over indeling, materialen en verlichting voor optimaal resultaat.
                </p>
              </div>

              <div className="bg-white border-4 border-gold p-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Loodgieterwerk</h3>
                <p className="text-text-grey leading-relaxed">
                  Volledige vernieuwing van alle leidingen, afvoeren en aansluitingen. Moderne technieken voor duurzaam en betrouwbaar gebruik.
                </p>
              </div>

              <div className="bg-white border-4 border-navy p-10">
                <div className="w-16 h-16 bg-navy mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Tegelwerk & Afwerking</h3>
                <p className="text-text-grey leading-relaxed">
                  Vakkundig tegelwerk in alle formaten en stijlen. Wandafwerking, voegwerk en detaillering op hoog niveau.
                </p>
              </div>

              <div className="bg-white border-4 border-terracotta p-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Sanitair & Meubilair</h3>
                <p className="text-text-grey leading-relaxed">
                  A-merk sanitair en op maat gemaakt meubilair. Van vrijstaande baden tot inloopdouches en maatwerk meubels.
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
              <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">BADKAMER STIJLEN</h2>
              <p className="text-xl text-text-grey">Voor elke smaak en budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-4 border-terracotta p-10 text-center">
                <div className="text-6xl mb-6">🏛️</div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Klassiek</h3>
                <p className="text-text-grey leading-relaxed">
                  Tijdloze elegantie met natuursteen, klassieke kranen en warme kleuren. Perfect voor karaktervolle woningen.
                </p>
              </div>

              <div className="bg-terracotta text-white border-4 border-terracotta p-10 text-center">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Modern</h3>
                <p className="leading-relaxed">
                  Strak, minimalistisch en functioneel. Grote tegels, inloopdouches en moderne sanitair voor een luxe uitstraling.
                </p>
              </div>

              <div className="bg-white border-4 border-gold p-10 text-center">
                <div className="text-6xl mb-6">🌿</div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Wellness</h3>
                <p className="text-text-grey leading-relaxed">
                  Complete spa-ervaring thuis. Regendouche, stortdouche, vrijstaand bad en sfeerverlichting voor ultiem ontspanning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-32 bg-navy text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black mb-24 text-center">ONZE<br/><span className="text-terracotta">GARANTIES</span></h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-navy p-10 border-t-8 border-terracotta">
                <div className="text-5xl mb-6">💧</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Waterdicht Werk</h3>
                <p className="leading-relaxed">
                  Professionele waterdichte afwerking volgens KIWA richtlijnen. Geen lekkages, gegarandeerd.
                </p>
              </div>

              <div className="bg-terracotta p-10 border-t-8 border-gold">
                <div className="text-5xl mb-6">⏱️</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Planning & Snelheid</h3>
                <p className="leading-relaxed">
                  Binnen 2-3 weken is uw badkamer compleet gerenoveerd. Duidelijke planning en dagelijkse schoonmaak.
                </p>
              </div>

              <div className="bg-white text-navy p-10 border-t-8 border-navy">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-black mb-4 uppercase">3D Visualisatie</h3>
                <p className="leading-relaxed">
                  Zie uw nieuwe badkamer al voor de bouw start. Aanpassingen mogelijk tot alles perfect is.
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
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">KLAAR VOOR UW<br/>DROMBADKAMER?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Maak een afspraak voor een adviesgesprek. We nemen uw huidige situatie op en maken een 3D visualisatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-navy text-white px-12 py-5 text-lg font-black uppercase hover:bg-terracotta transition-colors inline-block">
                Gratis 3D Design →
              </Link>
              <Link href="/diensten/complete-renovatie" className="border-4 border-navy text-navy px-12 py-5 text-lg font-black uppercase hover:bg-navy hover:text-white transition-colors inline-block">
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
