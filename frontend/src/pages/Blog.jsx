// src/components/Blog/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // In a real app, this would fetch from your API
    const mockPosts = [
      {
        id: 1,
        title: "Summer 2025 Fashion Trends You Need to Know",
        excerpt: "Discover the hottest trends for this summer season and how to incorporate them into your wardrobe.",
        date: "June 15, 2025",
        author: "Emma Johnson",
        category: "trends",
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["summer", "trends", "2025"],
        content: `
          <p>The summer of 2025 brings a fresh wave of fashion trends that blend comfort with style. From vibrant colors to sustainable fabrics, this season is all about making a statement while staying eco-conscious.</p>
          
          <h3>Color Palettes</h3>
          <p>This season, designers are embracing bold, saturated hues. Think electric blues, fiery oranges, and lush greens. These colors work beautifully when paired with neutral basics for a balanced look.</p>
          
          <h3>Sustainable Fabrics</h3>
          <p>More than ever, fashion is moving towards sustainability. Look for pieces made from organic cotton, recycled polyester, and innovative materials like pineapple leather.</p>
          
          <h3>Key Pieces</h3>
          <p>The must-have items for summer 2025 include:</p>
          <ul>
            <li>Wide-leg linen trousers</li>
            <li>Crochet tops and dresses</li>
            <li>Oversized sunglasses</li>
            <li>Minimalist sandals</li>
            <li>Structured totes</li>
          </ul>
          
          <p>Remember, the best fashion is what makes you feel confident and comfortable. Use these trends as inspiration, but always make them your own.</p>
        `
      },
      {
        id: 2,
        title: "How to Style Denim for Every Occasion",
        excerpt: "From casual Fridays to evening events, learn how to make denim work for any situation.",
        date: "June 10, 2025",
        author: "Michael Chen",
        category: "styling",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["denim", "styling", "wardrobe"],
        content: "..."
      },
      {
        id: 3,
        title: "The Ultimate Guide to Sustainable Fashion Brands",
        excerpt: "Discover ethical brands that are changing the fashion industry for the better.",
        date: "June 5, 2025",
        author: "Sophia Rodriguez",
        category: "sustainability",
        image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["sustainable", "eco-friendly", "brands"],
        content: "..."
      },
      {
        id: 4,
        title: "5 Accessories That Will Transform Your Outfit",
        excerpt: "Small details make a big difference. Elevate your look with these statement accessories.",
        date: "May 28, 2025",
        author: "David Wilson",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["accessories", "jewelry", "style"],
        content: "..."
      },
      {
        id: 5,
        title: "The History of Streetwear and Its Influence on High Fashion",
        excerpt: "How urban style conquered the runway and changed fashion forever.",
        date: "May 20, 2025",
        author: "Olivia Martinez",
        category: "culture",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["streetwear", "history", "culture"],
        content: "..."
      },
      {
        id: 6,
        title: "Building a Capsule Wardrobe: Less is More",
        excerpt: "Create a versatile collection of clothing that works for every season and occasion.",
        date: "May 15, 2025",
        author: "James Thompson",
        category: "wardrobe",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["capsule", "minimalist", "wardrobe"],
        content: "..."
      }
    ];

    const mockPopular = mockPosts.slice(0, 3);
    const mockCategories = [
      { name: "trends", count: 12 },
      { name: "styling", count: 8 },
      { name: "sustainability", count: 15 },
      { name: "accessories", count: 7 },
      { name: "culture", count: 5 },
      { name: "wardrobe", count: 9 }
    ];

    setPosts(mockPosts);
    setPopularPosts(mockPopular);
    setCategories(mockCategories);
  }, []);

  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeTab);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Style Journal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest fashion trends, styling tips, and industry insights from our expert contributors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('all')}
              >
                All Articles
              </button>
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${activeTab === category.name ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab(category.name)}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span className="flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FaUser className="mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-rose-500 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FaTags className="text-gray-400 mr-2" />
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="flex items-center text-rose-500 hover:text-rose-700 font-medium"
                      >
                        Read More <FaArrowRight className="ml-2 text-sm" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-md bg-black text-white">1</button>
                <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">2</button>
                <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">3</button>
                <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4">Search Articles</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type and press enter..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-rose-500">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <div key={post.id} className="flex items-start group">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="font-medium text-gray-900 group-hover:text-rose-500 transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button 
                      className={`w-full flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${activeTab === category.name ? 'bg-gray-100 text-rose-600' : 'hover:bg-gray-50'}`}
                      onClick={() => setActiveTab(category.name)}
                    >
                      <span className="capitalize">{category.name}</span>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['summer', 'trends', 'sustainable', 'denim', 'accessories', 'wardrobe', 'streetwear', 'minimalist', '2025'].map((tag, index) => (
                  <button 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-rose-500 to-fuchsia-600 p-6 rounded-xl shadow-md text-white">
              <h3 className="text-lg font-bold mb-2">Style Newsletter</h3>
              <p className="mb-4 text-rose-100">
                Get the latest fashion insights delivered to your inbox weekly.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-rose-200 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-rose-600 font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs mt-3 text-rose-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// src/components/Blog/BlogPost.jsx
const BlogPost = () => {
  // In a real app, this would come from your router params and API
  const post = {
    id: 1,
    title: "Summer 2025 Fashion Trends You Need to Know",
    excerpt: "Discover the hottest trends for this summer season and how to incorporate them into your wardrobe.",
    date: "June 15, 2025",
    author: "Emma Johnson",
    category: "trends",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["summer", "trends", "2025"],
    content: `
      <p>The summer of 2025 brings a fresh wave of fashion trends that blend comfort with style. From vibrant colors to sustainable fabrics, this season is all about making a statement while staying eco-conscious.</p>
      
      <h3>Color Palettes</h3>
      <p>This season, designers are embracing bold, saturated hues. Think electric blues, fiery oranges, and lush greens. These colors work beautifully when paired with neutral basics for a balanced look.</p>
      
      <h3>Sustainable Fabrics</h3>
      <p>More than ever, fashion is moving towards sustainability. Look for pieces made from organic cotton, recycled polyester, and innovative materials like pineapple leather.</p>
      
      <h3>Key Pieces</h3>
      <p>The must-have items for summer 2025 include:</p>
      <ul>
        <li>Wide-leg linen trousers</li>
        <li>Crochet tops and dresses</li>
        <li>Oversized sunglasses</li>
        <li>Minimalist sandals</li>
        <li>Structured totes</li>
      </ul>
      
      <p>Remember, the best fashion is what makes you feel confident and comfortable. Use these trends as inspiration, but always make them your own.</p>
    `
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-rose-500 hover:text-rose-700 font-medium"
        >
          <FaArrowRight className="mr-2 rotate-180" /> Back to Blog
        </Link>
      </div>
      
      <article className="bg-white rounded-xl shadow-md overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-96 object-cover"
        />
        
        <div className="p-8">
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
            <span className="flex items-center mr-6">
              <FaCalendarAlt className="mr-2" />
              {post.date}
            </span>
            <span className="flex items-center mr-6">
              <FaUser className="mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <FaTags className="mr-2" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="mr-3 text-gray-700">Share:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-rose-500">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <FaPinterestP />
                  </a>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(id => (
            <div key={id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80&${id}`} 
                alt="Related post"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-medium text-rose-600 mb-2 inline-block">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mb-2 hover:text-rose-500 transition-colors">
                  <Link to={`/blog/${id + 10}`}>
                    How to Accessorize Your Summer Outfits
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential accessories to elevate your summer wardrobe
                </p>
                <p className="text-xs text-gray-500">June 8, 2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
export { BlogPost };