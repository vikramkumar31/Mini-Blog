import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 404 Icon */}
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/home"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Go Home
          </Link>
          
          <Link 
            href="/blogs"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          >
            Browse Blogs
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Here are some helpful links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/home" className="text-blue-600 hover:text-blue-800 underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              About
            </Link>
            <Link href="/blogs" className="text-blue-600 hover:text-blue-800 underline">
              Blog
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}