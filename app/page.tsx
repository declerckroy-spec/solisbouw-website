import Counter from '@/components/Counter'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header currentPage="home" />

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center bg-navy text-white pt-24 diagonal-split">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-5xl">
            <div className="inline-block bg-terracotta px-6 py-2 text-sm font-black tracking-widest mb-8 uppercase">Premium Bouwservice</div>
            <h1 className="text-5xl lg:text-9xl font-black mb-8 leading-none">
              BOUW<br/>
              <span className="text-terracotta">MEESTERS</span>
            </h1>
            <p className="text-2xl mb-12 max-w-2xl text-gray-300 leading-relaxed">
              Transformeer uw woning met 25 jaar expertise. Van concept tot realisatie, wij maken het mogelijk.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="bg-terracotta text-white px-12 py-5 text-lg font-black uppercase inline-block hover:bg-gold transition-colors text-center">
                Start Project →
              </Link>
              <a href="#projecten" className="border-4 border-white text-white px-12 py-5 text-lg font-black uppercase inline-block hover:bg-white hover:text-navy transition-colors text-center">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="diensten" className="py-32 texture-bg">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <div className="inline-block border-4 border-navy px-8 py-3 mb-8">
              <span className="text-sm font-black tracking-widest uppercase text-terracotta">Onze Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-navy">VAKMANSCHAP</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <Link href="/diensten/complete-renovatie" className="group relative overflow-hidden bg-white border-4 border-navy p-12 hover:bg-navy transition-all duration-300 block cursor-pointer">
              <div className="absolute top-4 right-4 text-8xl font-black text-warm-grey group-hover:text-navy/20">01</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-terracotta mb-6"></div>
                <h3 className="text-3xl font-black text-navy group-hover:text-white mb-4 transition-colors uppercase">Complete Renovatie</h3>
                <p className="text-lg text-text-grey group-hover:text-gray-300 transition-colors">Van kelder tot zolder - complete transformatie met aandacht voor elk detail.</p>
                <div className="mt-6 text-terracotta group-hover:text-white font-black text-sm uppercase tracking-wide transition-colors">
                  Meer Info →
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/diensten/badkamer-design" className="group relative overflow-hidden bg-terracotta border-4 border-terracotta p-12 block cursor-pointer hover:bg-navy transition-all duration-300">
              <div className="absolute top-4 right-4 text-8xl font-black text-navy/10 group-hover:text-terracotta/10">02</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white mb-6"></div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase">Badkamer Design</h3>
                <p className="text-lg text-white/90">Luxe en functionaliteit perfect gecombineerd in uw persoonlijke wellness oase.</p>
                <div className="mt-6 text-white font-black text-sm uppercase tracking-wide">
                  Meer Info →
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/diensten/maatwerk-keukens" className="group relative overflow-hidden bg-gold border-4 border-gold p-12 block cursor-pointer hover:bg-navy hover:border-navy transition-all duration-300">
              <div className="absolute top-4 right-4 text-8xl font-black text-white/10 group-hover:text-gold/10">03</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-navy mb-6"></div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase">Maatwerk Keukens</h3>
                <p className="text-lg text-white/90">Het hart van uw huis, ontworpen rond uw levensstijl en culinaire ambities.</p>
                <div className="mt-6 text-navy group-hover:text-white font-black text-sm uppercase tracking-wide transition-colors">
                  Meer Info →
                </div>
              </div>
            </Link>

            {/* Service 4 */}
            <Link href="/diensten/uitbouw-projecten" className="group relative overflow-hidden bg-white border-4 border-navy p-12 hover:bg-navy transition-all duration-300 block cursor-pointer">
              <div className="absolute top-4 right-4 text-8xl font-black text-warm-grey group-hover:text-navy/20">04</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gold mb-6"></div>
                <h3 className="text-3xl font-black text-navy group-hover:text-white mb-4 transition-colors uppercase">Uitbouw Projecten</h3>
                <p className="text-lg text-text-grey group-hover:text-gray-300 transition-colors">Meer ruimte, meer mogelijkheden - naadloos geïntegreerd met uw bestaande woning.</p>
                <div className="mt-6 text-gold group-hover:text-white font-black text-sm uppercase tracking-wide transition-colors">
                  Meer Info →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projecten" className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="mb-24">
            <h2 className="text-4xl lg:text-8xl font-black text-navy mb-4">PORTFOLIO</h2>
            <p className="text-2xl text-text-grey font-bold">Recente transformaties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Project 1 */}
            <Link href="/projecten/amsterdam-noord" className="group">
              <div className="relative h-96 mb-6 overflow-hidden">
                <Image src="/images/ries-bosch-sj16pUqOoco-unsplash.jpg" alt="Amsterdam Noord herenhuis" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-terracotta pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Amsterdam Noord</h3>
                <p className="text-lg text-text-grey font-bold">140m² Complete Renovatie</p>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/projecten/utrecht-centrum" className="group">
              <div className="relative h-96 mb-6 overflow-hidden">
                <Image src="/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg" alt="Utrecht penthouse" fill className="object-cover" />
                <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-gold pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Utrecht Centrum</h3>
                <p className="text-lg text-text-grey font-bold">Penthouse Badkamer</p>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/projecten/den-haag-villa" className="group">
              <div className="relative h-96 mb-6 overflow-hidden">
                <Image src="/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg" alt="Den Haag keuken" fill className="object-cover" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-navy pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Den Haag Villa</h3>
                <p className="text-lg text-text-grey font-bold">Luxe Keuken Installatie</p>
              </div>
            </Link>

            {/* Project 4 */}
            <Link href="/projecten/rotterdam-west" className="group">
              <div className="relative h-96 mb-6 overflow-hidden">
                <Image src="/images/daria-nepriakhina-fuWN-XkOkCQ-unsplash.jpg" alt="Rotterdam uitbouw" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase">Bekijk Project →</span>
                </div>
              </div>
              <div className="border-l-8 border-terracotta pl-6">
                <h3 className="text-3xl font-black text-navy mb-3 uppercase">Rotterdam West</h3>
                <p className="text-lg text-text-grey font-bold">40m² Moderne Uitbouw</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-terracotta text-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto text-center">
            <div>
              <div className="mb-4">
                <Counter end={25} suffix="+" />
              </div>
              <div className="text-xl font-bold uppercase tracking-wide">Jaar Ervaring</div>
            </div>
            <div>
              <div className="mb-4">
                <Counter end={500} suffix="+" />
              </div>
              <div className="text-xl font-bold uppercase tracking-wide">Projecten</div>
            </div>
            <div>
              <div className="mb-4">
                <Counter end={100} suffix="%" />
              </div>
              <div className="text-xl font-bold uppercase tracking-wide">Tevreden</div>
            </div>
            <div>
              <div className="mb-4">
                <Counter end={5} suffix="★" />
              </div>
              <div className="text-xl font-bold uppercase tracking-wide">Beoordeling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-32 bg-navy text-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl lg:text-7xl font-black mb-24 text-center">WAT KLANTEN<br/><span className="text-terracotta">ZEGGEN</span></h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white text-navy p-10 border-t-8 border-terracotta">
              <div className="text-6xl font-black text-terracotta mb-8">&quot;</div>
              <p className="text-lg mb-8 leading-relaxed">Professioneel van A tot Z. Onze complete renovatie is vlekkeloos verlopen en het eindresultaat overtreft onze verwachtingen.</p>
              <div className="font-black uppercase text-sm tracking-wider">Familie Jansen</div>
              <div className="text-text-grey">Amsterdam</div>
            </div>

            <div className="bg-terracotta text-white p-10 border-t-8 border-gold">
              <div className="text-6xl font-black text-white mb-8">&quot;</div>
              <p className="text-lg mb-8 leading-relaxed">Vakmanschap van de hoogste orde. Onze badkamer is een meesterwerk geworden waar we elke dag van genieten.</p>
              <div className="font-black uppercase text-sm tracking-wider">M. de Vries</div>
              <div className="text-white/80">Utrecht</div>
            </div>

            <div className="bg-white text-navy p-10 border-t-8 border-gold">
              <div className="text-6xl font-black text-gold mb-8">&quot;</div>
              <p className="text-lg mb-8 leading-relaxed">Transparante communicatie en perfecte uitvoering. De uitbouw geeft ons zoveel extra leefruimte. Top!</p>
              <div className="font-black uppercase text-sm tracking-wider">Familie Peters</div>
              <div className="text-text-grey">Rotterdam</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-40 bg-gold text-navy">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-8xl font-black mb-8 leading-tight">KLAAR VOOR<br/>UW PROJECT?</h2>
          <p className="text-2xl mb-16 max-w-3xl mx-auto font-bold">Neem vandaag nog contact op en ontdek wat we voor u kunnen realiseren.</p>
          <a href="#" className="inline-block bg-navy text-white px-16 py-6 text-xl font-black uppercase hover:bg-terracotta transition-colors">
            Gratis Offerte →
          </a>

          <div className="flex flex-col md:flex-row justify-center gap-12 mt-24 font-bold">
            <div>
              <div className="text-sm uppercase tracking-wider mb-2">Telefoon</div>
              <div className="text-2xl font-black">020-1234567</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider mb-2">Email</div>
              <div className="text-2xl font-black">INFO@SOLISBOUW.NL</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider mb-2">Locatie</div>
              <div className="text-2xl font-black">AMSTERDAM</div>
            </div>
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
