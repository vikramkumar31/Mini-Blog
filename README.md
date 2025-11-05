# Mini Blog Website

A modern, responsive mini blog website built with Next.js 15, featuring dynamic routing, error handling, and beautiful Tailwind CSS styling.

## 🚀 Features

### Pages & Navigation
- **Home Page**: Welcoming landing page with feature highlights and recent posts preview
- **About Page**: Information about the blog and technology stack
- **Contact Page**: Contact form and information with social media links
- **Blog List Page**: Display of all blog posts with featured post section
- **Dynamic Blog Detail Pages**: Individual blog post pages with full content

### Routing & Error Handling
- **Dynamic Routes**: `/blog/[id]` for individual blog posts
- **Custom 404 Page**: Styled not-found page with navigation options
- **Error Boundary**: Custom error page that triggers for invalid blog IDs (>5)
- **Nested Routing**: Organized page structure with proper URL hierarchy

### Styling & UI
- **Tailwind CSS**: Modern, responsive design system
- **Custom Components**: Reusable navigation and layout components
- **Gradient Backgrounds**: Beautiful gradient designs
- **Hover Effects**: Interactive card animations and transitions
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ES6+)
- **Icons**: Heroicons (SVG)
- **Development**: Turbopack (Fast Refresh)

## 📁 Project Structure

```
Mini-Blog/
├── src/
│   ├── app/
│   │   ├── (page)/
│   │   │   ├── home/
│   │   │   │   └── page.js          # Home page
│   │   │   ├── about/
│   │   │   │   └── page.js          # About page
│   │   │   └── contact/
│   │   │       └── page.js          # Contact page
│   │   ├── blogs/
│   │   │   ├── page.js              # Blog list page
│   │   │   └── [blogId]/
│   │   │       ├── page.js          # Dynamic blog detail page
│   │   │       └── error.js         # Blog-specific error page
│   │   ├── layout.js                # Root layout with navigation
│   │   ├── page.js                  # Root page (redirects to /home)
│   │   ├── not-found.js             # Custom 404 page
│   │   └── globals.css              # Global styles
│   └── components/
│       └── Navigation.js            # Navigation component
├── public/                          # Static assets
├── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Mini-Blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Features Demonstration

### Dynamic Routing
- Visit `/blogs` to see all blog posts
- Click on any blog post to view details at `/blogs/[id]`
- Try accessing `/blogs/6` or higher to see the error page

### Error Handling
- **404 Error**: Visit any non-existent route (e.g., `/non-existent`)
- **Blog Error**: Visit `/blogs/10` to trigger the custom error boundary

### Responsive Design
- Resize your browser or use mobile view to see responsive layouts
- Navigation adapts to different screen sizes
- Cards and content reflow appropriately

## 🎨 Customization

### Adding New Blog Posts
Edit the `blogPosts` object in `/src/app/blogs/[blogId]/page.js` to add new posts:

```javascript
const blogPosts = {
  // Add new post with incremented ID
  6: {
    id: 6,
    title: 'Your New Post Title',
    content: 'Your HTML content here...',
    author: 'Author Name',
    date: '2024-11-05',
    category: 'Category',
    readTime: '5 min read',
    tags: ['tag1', 'tag2']
  }
}
```

### Styling Modifications
- Global styles: Edit `/src/app/globals.css`
- Component styles: Modify Tailwind classes in component files
- Custom gradients and animations: Add to globals.css

### Navigation Updates
Modify the navigation items in `/src/components/Navigation.js`:

```javascript
const navItems = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  // Add new navigation items here
]
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Other Platforms
1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Deploy the `.next` folder to your hosting platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help with the project, please:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Open an issue in the repository

---

**Built with ❤️ using Next.js and Tailwind CSS**
