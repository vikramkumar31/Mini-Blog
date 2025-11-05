'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blogs', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="gradient-bg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/home" className="text-white text-2xl font-bold hover:text-gray-200 transition-colors">
            Mini Blog
          </Link>
          
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-gray-200 transition-colors px-3 py-2 rounded-md ${
                  pathname === item.href ? 'bg-white bg-opacity-20' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
