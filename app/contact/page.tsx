import Header from '@/components/Header'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - SolisBouw',
  description: 'Neem contact op met SolisBouw voor een vrijblijvend adviesgesprek over uw verbouwing.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <Header currentPage="contact" />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-navy text-white pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              LATEN WE<br/>
              <span className="text-terracotta">PRATEN</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Heeft u een verbouwingsproject in gedachten? Wij helpen u graag met advies op maat en een vrijblijvende offerte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-black text-navy mb-8 uppercase">Stuur Een Bericht</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-black uppercase tracking-wider text-navy mb-2">
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-4 border-4 border-navy focus:border-terracotta outline-none font-bold text-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-black uppercase tracking-wider text-navy mb-2">
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-4 border-4 border-navy focus:border-terracotta outline-none font-bold text-navy"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-black uppercase tracking-wider text-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 border-4 border-navy focus:border-terracotta outline-none font-bold text-navy"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-black uppercase tracking-wider text-navy mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-4 border-4 border-navy focus:border-terracotta outline-none font-bold text-navy"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-black uppercase tracking-wider text-navy mb-2">
                    Interesse In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-4 border-4 border-navy focus:border-terracotta outline-none font-bold text-navy"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="renovatie">Complete Renovatie</option>
                    <option value="badkamer">Badkamer Design</option>
                    <option value="keuken">Maatwerk Keuken</option>
                    <option value="uitbouw">Uitbouw Project</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-black uppercase tracking-wider text-navy mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-4 border-4 border-navy focus:border-terracotta outline-none font-bold text-navy resize-none"
                    placeholder="Vertel ons over uw project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta text-white px-8 py-5 text-lg font-black uppercase tracking-wide hover:bg-navy transition-colors"
                >
                  Verstuur Bericht →
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-navy mb-8 uppercase">Contact Gegevens</h2>

                <div className="space-y-6">
                  <div className="border-l-8 border-terracotta pl-6">
                    <h3 className="text-xl font-black text-navy mb-2 uppercase">Telefoon</h3>
                    <a href="tel:+31201234567" className="text-lg text-text-grey font-bold hover:text-terracotta transition-colors">
                      +31 20 123 4567
                    </a>
                  </div>

                  <div className="border-l-8 border-gold pl-6">
                    <h3 className="text-xl font-black text-navy mb-2 uppercase">Email</h3>
                    <a href="mailto:info@solisbouw.nl" className="text-lg text-text-grey font-bold hover:text-terracotta transition-colors">
                      info@solisbouw.nl
                    </a>
                  </div>

                  <div className="border-l-8 border-navy pl-6">
                    <h3 className="text-xl font-black text-navy mb-2 uppercase">Adres</h3>
                    <p className="text-lg text-text-grey font-bold">
                      Hoofdstraat 123<br/>
                      1011 AB Amsterdam<br/>
                      Nederland
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-warm-grey p-8 border-l-8 border-terracotta">
                <h3 className="text-2xl font-black text-navy mb-6 uppercase">Openingstijden</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="font-bold text-navy">Maandag - Vrijdag</dt>
                    <dd className="font-bold text-text-grey">08:00 - 18:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-bold text-navy">Zaterdag</dt>
                    <dd className="font-bold text-text-grey">09:00 - 14:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-bold text-navy">Zondag</dt>
                    <dd className="font-bold text-text-grey">Gesloten</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-navy p-8 text-white">
                <h3 className="text-2xl font-black mb-4 uppercase">Spoed?</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  Voor spoedgevallen zijn wij 24/7 bereikbaar op ons spoednummer:
                </p>
                <a href="tel:+31612345678" className="text-2xl font-black text-terracotta hover:text-gold transition-colors">
                  +31 6 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-2xl font-black text-navy uppercase">Kaart Placeholder</p>
                <p className="text-lg text-text-grey font-bold">Hoofdstraat 123, Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-warm-grey">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-navy mb-16 uppercase text-center">Veelgestelde Vragen</h2>

            <div className="space-y-6">
              <div className="bg-white border-l-8 border-terracotta p-8">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Hoe snel kan ik een afspraak maken?</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Meestal kunnen we binnen 3-5 werkdagen een intake gesprek inplannen. Voor spoedgevallen doen we ons best om eerder langs te komen.
                </p>
              </div>

              <div className="bg-white border-l-8 border-gold p-8">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Is een offerte gratis?</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Ja, wij maken altijd eerst een vrijblijvende offerte op maat. Het eerste adviesgesprek en de offerte zijn volledig kosteloos.
                </p>
              </div>

              <div className="bg-white border-l-8 border-navy p-8">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">In welke regio's zijn jullie actief?</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Wij werken voornamelijk in de Randstad (Amsterdam, Rotterdam, Utrecht, Den Haag), maar voor grotere projecten komen we door heel Nederland.
                </p>
              </div>

              <div className="bg-white border-l-8 border-terracotta p-8">
                <h3 className="text-2xl font-black text-navy mb-4 uppercase">Hoe lang duurt een gemiddeld project?</h3>
                <p className="text-lg text-text-grey leading-relaxed">
                  Dit verschilt sterk per project. Een badkamerrenovatie duurt gemiddeld 3-4 weken, een complete woonhuisrenovatie 3-6 maanden. We geven altijd een realistische planning.
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
            <h2 className="text-5xl lg:text-7xl font-black mb-8">LIEVER<br/>DIRECT CONTACT?</h2>
            <p className="text-2xl mb-12 leading-relaxed">
              Bel ons gerust voor een vrijblijvend gesprek over uw plannen.
            </p>
            <a href="tel:+31201234567" className="bg-white text-terracotta px-12 py-5 text-lg font-black uppercase inline-block hover:bg-navy hover:text-white transition-colors">
              +31 20 123 4567
            </a>
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
