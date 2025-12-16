import Link from 'next/link'

export default function Footer() {
  return (
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
  )
}
