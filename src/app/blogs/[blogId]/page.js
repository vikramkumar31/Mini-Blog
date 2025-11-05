import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample blog data
const blogPosts = {
  1: {
    id: 1,
    title: 'Getting Started with Next.js',
    content: `
      <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. In this comprehensive guide, we'll explore the fundamentals of Next.js and help you build your first application.</p>
      
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that provides many features out of the box, including:</p>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>API routes</li>
        <li>Automatic code splitting</li>
        <li>Built-in CSS support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js application, you can use the following command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary dependencies and configuration files.</p>
      
      <h2>Project Structure</h2>
      <p>A typical Next.js project has the following structure:</p>
      <ul>
        <li><strong>pages/</strong> - Contains your application pages</li>
        <li><strong>public/</strong> - Static assets like images</li>
        <li><strong>styles/</strong> - CSS files</li>
        <li><strong>components/</strong> - Reusable React components</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js is an excellent choice for building modern web applications. Its powerful features and excellent developer experience make it a go-to framework for many developers.</p>
    `,
    author: 'John Doe',
    date: '2024-11-01',
    category: 'Web Development',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development', 'Frontend']
  },
  2: {
    id: 2,
    title: 'The Future of Web Development',
    content: `
      <p>Web development is constantly evolving, with new technologies and methodologies emerging regularly. Let's explore what the future holds for web development.</p>
      
      <h2>Emerging Technologies</h2>
      <p>Several technologies are shaping the future of web development:</p>
      <ul>
        <li>WebAssembly (WASM)</li>
        <li>Progressive Web Apps (PWAs)</li>
        <li>Serverless computing</li>
        <li>Edge computing</li>
        <li>AI and machine learning integration</li>
      </ul>
      
      <h2>Development Trends</h2>
      <p>Current trends that are likely to continue:</p>
      <ul>
        <li>Component-based architecture</li>
        <li>JAMstack approach</li>
        <li>Micro-frontends</li>
        <li>Low-code/no-code platforms</li>
      </ul>
      
      <h2>The Role of AI</h2>
      <p>Artificial Intelligence is becoming increasingly important in web development, from automated testing to code generation and optimization.</p>
      
      <p>The future of web development looks bright, with exciting technologies and methodologies on the horizon.</p>
    `,
    author: 'Jane Smith',
    date: '2024-10-28',
    category: 'Technology',
    readTime: '7 min read',
    tags: ['Future', 'Technology', 'Trends', 'AI']
  },
  3: {
    id: 3,
    title: 'React Best Practices',
    content: `
      <p>Writing clean, efficient, and maintainable React code is crucial for building scalable applications. Here are some best practices to follow.</p>
      
      <h2>Component Structure</h2>
      <p>Keep your components small and focused on a single responsibility. This makes them easier to test, debug, and reuse.</p>
      
      <h2>State Management</h2>
      <p>Use the appropriate state management solution for your application size:</p>
      <ul>
        <li>useState for local component state</li>
        <li>useContext for shared state</li>
        <li>Redux or Zustand for complex global state</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Optimize your React applications with these techniques:</p>
      <ul>
        <li>Use React.memo for expensive components</li>
        <li>Implement code splitting with lazy loading</li>
        <li>Optimize bundle size</li>
        <li>Use useMemo and useCallback wisely</li>
      </ul>
      
      <h2>Testing</h2>
      <p>Write comprehensive tests for your components using Jest and React Testing Library.</p>
      
      <p>Following these best practices will help you build robust and maintainable React applications.</p>
    `,
    author: 'Mike Johnson',
    date: '2024-10-25',
    category: 'React',
    readTime: '6 min read',
    tags: ['React', 'Best Practices', 'Performance', 'Testing']
  },
  4: {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    content: `
      <p>CSS Grid and Flexbox are two powerful layout systems in CSS. Understanding when to use each one is crucial for creating effective layouts.</p>
      
      <h2>CSS Grid</h2>
      <p>CSS Grid is best for:</p>
      <ul>
        <li>Two-dimensional layouts</li>
        <li>Complex grid systems</li>
        <li>When you need precise control over rows and columns</li>
        <li>Overlapping elements</li>
      </ul>
      
      <h2>Flexbox</h2>
      <p>Flexbox excels at:</p>
      <ul>
        <li>One-dimensional layouts</li>
        <li>Aligning items within containers</li>
        <li>Distributing space between items</li>
        <li>Responsive design patterns</li>
      </ul>
      
      <h2>When to Use Which</h2>
      <p>Use CSS Grid when you need to create complex layouts with rows and columns. Use Flexbox for simpler, one-dimensional layouts and alignment tasks.</p>
      
      <h2>Can They Work Together?</h2>
      <p>Absolutely! Grid and Flexbox complement each other perfectly. You can use Grid for the overall page layout and Flexbox for component-level alignment.</p>
      
      <p>Both are essential tools in modern CSS, and mastering both will make you a more effective web developer.</p>
    `,
    author: 'Sarah Wilson',
    date: '2024-10-22',
    category: 'CSS',
    readTime: '8 min read',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout']
  },
  5: {
    id: 5,
    title: 'JavaScript ES2024 Features',
    content: `
      <p>JavaScript continues to evolve with each new ECMAScript specification. Let's explore the exciting new features introduced in ES2024.</p>
      
      <h2>New Array Methods</h2>
      <p>ES2024 introduces several new array methods that make working with arrays even more powerful:</p>
      <ul>
        <li>Array.prototype.toReversed()</li>
        <li>Array.prototype.toSorted()</li>
        <li>Array.prototype.toSpliced()</li>
        <li>Array.prototype.with()</li>
      </ul>
      
      <h2>Temporal API</h2>
      <p>A new, modern API for working with dates and times that solves many of the issues with the current Date object.</p>
      
      <h2>Pattern Matching</h2>
      <p>Although still in proposal stage, pattern matching could revolutionize how we handle conditional logic in JavaScript.</p>
      
      <h2>Decorators</h2>
      <p>Decorators provide a way to modify classes and class members through declarative syntax.</p>
      
      <p>These new features continue to make JavaScript more powerful and developer-friendly. Stay updated with the latest specifications to leverage these improvements in your projects.</p>
    `,
    author: 'Alex Brown',
    date: '2024-10-20',
    category: 'JavaScript',
    readTime: '4 min read',
    tags: ['JavaScript', 'ES2024', 'Features', 'Modern JS']
  }
}

export default function BlogDetailPage({ params }) {
  const { blogId } = params
  
  // Trigger error for IDs greater than 5
  if (parseInt(blogId) > 5) {
    throw new Error("Blog not found or Invalid Id")
  }
  
  const post = blogPosts[parseInt(blogId)]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back to blogs link */}
      <div className="mb-8">
        <Link 
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all posts
        </Link>
      </div>

      {/* Article header */}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 md:h-80 gradient-bg flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
            {post.title}
          </h1>
        </div>
        
        <div className="p-8">
          {/* Article meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{post.author}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </div>
            
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation to other posts */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between">
              {parseInt(blogId) > 1 && (
                <Link 
                  href={`/blogs/${parseInt(blogId) - 1}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Post
                </Link>
              )}
              
              {parseInt(blogId) < 5 && (
                <Link 
                  href={`/blogs/${parseInt(blogId) + 1}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors ml-auto"
                >
                  Next Post
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}