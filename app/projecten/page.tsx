import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - SolisBouw',
  description: 'Bekijk onze gerealiseerde projecten. Complete renovaties, badkamers, keukens en uitbouwen in heel Nederland.',
}

export default function ProjectenPage() {
  return (
    <>
      {/* Header */}
      <Header currentPage="projecten" />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-navy text-white pt-24 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-none">
              ONS<br/>
              <span className="text-terracotta">PORTFOLIO</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Bekijk een selectie van onze meest recente en bijzondere projecten. Van complete renovaties tot maatwerk keukens.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Project 1 */}
            <Link href="/projecten/amsterdam-noord" className="group">
              <div className="h-96 mb-6 relative overflow-hidden">
                <Image
                  src="/images/jared-rice-PibraWHb4h8-unsplash.jpg"
                  alt="Amsterdam Noord herenhuis renovatie"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-terracotta pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Amsterdam Noord</h3>
                <p className="text-lg text-text-grey font-bold mb-2">140m² Complete Renovatie</p>
                <p className="text-text-grey">Volledige renovatie 19e eeuws herenhuis met behoud van authentieke details</p>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/projecten/utrecht-centrum" className="group">
              <div className="h-96 mb-6 relative overflow-hidden">
                <Image
                  src="/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg"
                  alt="Utrecht Centrum penthouse badkamer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-gold pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Utrecht Centrum</h3>
                <p className="text-lg text-text-grey font-bold mb-2">Penthouse Badkamer</p>
                <p className="text-text-grey">Luxe spa-badkamer met natuursteen en panoramisch uitzicht</p>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/projecten/den-haag-villa" className="group">
              <div className="h-96 mb-6 relative overflow-hidden">
                <Image
                  src="/images/jean-philippe-delberghe-7l3ruHHQlcI-unsplash.jpg"
                  alt="Den Haag villa luxe keuken"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-navy pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Den Haag Villa</h3>
                <p className="text-lg text-text-grey font-bold mb-2">Luxe Keuken Installatie</p>
                <p className="text-text-grey">Op maat gemaakte chef's kitchen met professionele apparatuur</p>
              </div>
            </Link>

            {/* Project 4 */}
            <Link href="/projecten/rotterdam-west" className="group">
              <div className="h-96 mb-6 relative overflow-hidden">
                <Image
                  src="/images/scott-blake-x-ghf9LjrVg-unsplash.jpg"
                  alt="Rotterdam West moderne uitbouw"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-terracotta pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Rotterdam West</h3>
                <p className="text-lg text-text-grey font-bold mb-2">40m² Moderne Uitbouw</p>
                <p className="text-text-grey">Lichte uitbouw met stalen kozijnen en naadloze tuinaansluiting</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-terracotta text-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-8">WIL U OOK ZO'N<br/>RESULTAAT?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Laat u inspireren en neem contact op. Samen maken we van uw woning een droomhuis.
            </p>
            <Link href="/contact" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              Bespreek Uw Project →
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
