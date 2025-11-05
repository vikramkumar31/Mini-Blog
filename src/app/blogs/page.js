import Link from 'next/link'

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the fundamentals of Next.js and build your first application with this comprehensive guide.',
    author: 'John Doe',
    date: '2024-11-01',
    category: 'Web Development',
    readTime: '5 min read',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    author: 'Jane Smith',
    date: '2024-10-28',
    category: 'Technology',
    readTime: '7 min read',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'React Best Practices',
    excerpt: 'Tips and tricks for writing clean, efficient, and maintainable React code.',
    author: 'Mike Johnson',
    date: '2024-10-25',
    category: 'React',
    readTime: '6 min read',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'A comprehensive comparison between CSS Grid and Flexbox to help you choose the right tool.',
    author: 'Sarah Wilson',
    date: '2024-10-22',
    category: 'CSS',
    readTime: '8 min read',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'JavaScript ES2024 Features',
    excerpt: 'Discover the latest JavaScript features and how they can improve your development workflow.',
    author: 'Alex Brown',
    date: '2024-10-20',
    category: 'JavaScript',
    readTime: '4 min read',
    image: '/api/placeholder/400/250'
  }
]

export default function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600">
          Discover insights, tutorials, and stories from our community
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Featured
                </span>
                <span className="text-gray-500 text-sm ml-2">{blogPosts[0].category}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                <Link 
                  href={`/blogs/${blogPosts[0].id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link 
                  href={`/blogs/${blogPosts[0].id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden blog-card">
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm ml-auto">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                <Link 
                  href={`/blogs/${post.id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-1">•</span>
                  <span>{post.date}</span>
                </div>
                <Link 
                  href={`/blogs/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  Read →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Load More Posts
        </button>
      </div>
    </div>
  )
}
