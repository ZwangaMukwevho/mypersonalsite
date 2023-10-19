import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  // Add more links as needed
]
const Navigation = () => {
  return (
    <nav className="block flex flex-wrap md:hidden">
      {headerNavLinks.map((link) => (
        <div key={link.title} className="px-4 py-2 text-white hover:text-blue-700">
          <Link href={link.href}> {link.title}</Link>
        </div>
      ))}
    </nav>
  )
}

export default Navigation
