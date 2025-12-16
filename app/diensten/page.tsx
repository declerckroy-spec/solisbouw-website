import Header from '@/components/Header'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onze Diensten - SolisBouw',
  description: 'Complete renovaties, badkamer design, maatwerk keukens en uitbouw projecten. Ontdek wat SolisBouw voor u kan betekenen.',
}

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <Header currentPage="diensten" />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-navy text-white pt-24 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              ONZE<br/>
              <span className="text-terracotta">DIENSTEN</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Van complete renovaties tot maatwerk keukens. Ontdek wat SolisBouw voor u kan betekenen.
            </p>
          </div>
        </div>
      </section>

      {/* Diensten Grid */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <Link href="/diensten/complete-renovatie" className="group relative overflow-hidden bg-white border-4 border-navy p-12 hover:bg-navy transition-all duration-300 block">
              <div className="absolute top-4 right-4 text-8xl font-black text-warm-grey group-hover:text-navy/20">01</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h2 className="text-3xl font-black text-navy group-hover:text-white mb-4 transition-colors uppercase">Complete Renovatie</h2>
                <p className="text-lg text-text-grey group-hover:text-gray-300 transition-colors mb-8">
                  Van kelder tot zolder transformeren we uw woning tot uw droomhuis. Complete projectbegeleiding met aandacht voor elk detail.
                </p>
                <div className="text-terracotta group-hover:text-white font-black text-sm uppercase tracking-wide transition-colors">
                  Bekijk Dienst →
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/diensten/badkamer-design" className="group relative overflow-hidden bg-terracotta border-4 border-terracotta p-12 hover:bg-navy hover:border-navy transition-all duration-300 block">
              <div className="absolute top-4 right-4 text-8xl font-black text-navy/10 group-hover:text-terracotta/10">02</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white mb-6"></div>
                <h2 className="text-3xl font-black text-white mb-4 uppercase">Badkamer Design</h2>
                <p className="text-lg text-white/90 mb-8">
                  Luxe en functionaliteit perfect gecombineerd in uw persoonlijke wellness oase. Van klassiek tot eigentijds design.
                </p>
                <div className="text-white font-black text-sm uppercase tracking-wide">
                  Bekijk Dienst →
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/diensten/maatwerk-keukens" className="group relative overflow-hidden bg-gold border-4 border-gold p-12 hover:bg-navy hover:border-navy transition-all duration-300 block">
              <div className="absolute top-4 right-4 text-8xl font-black text-white/10 group-hover:text-gold/10">03</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-navy mb-6"></div>
                <h2 className="text-3xl font-black text-white mb-4 uppercase">Maatwerk Keukens</h2>
                <p className="text-lg text-white/90 mb-8">
                  Het hart van uw huis, ontworpen rond uw levensstijl en culinaire ambities. Elke keuken is uniek en volledig op maat.
                </p>
                <div className="text-navy group-hover:text-white font-black text-sm uppercase tracking-wide transition-colors">
                  Bekijk Dienst →
                </div>
              </div>
            </Link>

            {/* Service 4 */}
            <Link href="/diensten/uitbouw-projecten" className="group relative overflow-hidden bg-white border-4 border-navy p-12 hover:bg-navy transition-all duration-300 block">
              <div className="absolute top-4 right-4 text-8xl font-black text-warm-grey group-hover:text-navy/20">04</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h2 className="text-3xl font-black text-navy group-hover:text-white mb-4 transition-colors uppercase">Uitbouw Projecten</h2>
                <p className="text-lg text-text-grey group-hover:text-gray-300 transition-colors mb-8">
                  Meer ruimte, meer mogelijkheden. Uitbouwen en aanbouwen die naadloos aansluiten bij uw bestaande woning.
                </p>
                <div className="text-gold group-hover:text-white font-black text-sm uppercase tracking-wide transition-colors">
                  Bekijk Dienst →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-terracotta text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-8">GEEN IDEE WAT U NODIG HEEFT?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Neem contact op voor een vrijblijvend adviesgesprek. We denken graag met u mee over de beste oplossing.
            </p>
            <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              Neem Contact Op →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-terracotta"></div>
                <span className="text-2xl font-black">SOLISBOUW</span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                25 jaar expertise in verbouwen en renoveren. Van concept tot realisatie.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase">Navigatie</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Home</Link></li>
                <li><Link href="/diensten" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Diensten</Link></li>
                <li><Link href="/projecten" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Projecten</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/diensten/complete-renovatie" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Complete Renovatie</Link></li>
                <li><Link href="/diensten/badkamer-design" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Badkamer Design</Link></li>
                <li><Link href="/diensten/maatwerk-keukens" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Maatwerk Keukens</Link></li>
                <li><Link href="/diensten/uitbouw-projecten" className="text-gray-400 hover:text-terracotta transition-colors font-bold">Uitbouw Projecten</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="font-bold">info@solisbouw.nl</li>
                <li className="font-bold">+31 20 123 4567</li>
                <li className="font-bold">Ma-Vr: 08:00 - 18:00</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 bg-terracotta hover:bg-gold transition-colors flex items-center justify-center font-black" aria-label="Facebook">f</a>
                <a href="#" className="w-10 h-10 bg-terracotta hover:bg-gold transition-colors flex items-center justify-center font-black" aria-label="Instagram">ig</a>
                <a href="#" className="w-10 h-10 bg-terracotta hover:bg-gold transition-colors flex items-center justify-center font-black" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">© 2024 SolisBouw. Alle rechten voorbehouden.</p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-terracotta transition-colors font-bold">Privacybeleid</a>
              <a href="#" className="hover:text-terracotta transition-colors font-bold">Algemene Voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
