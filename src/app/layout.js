import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Mini Blog',
  description: 'A mini blog website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
