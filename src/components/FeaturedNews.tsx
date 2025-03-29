"use client"

import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'

const FeaturedNews = () => {
  // In a real application, this would come from an API or CMS
  const featuredArticle = {
    id: 'featured-1',
    title: 'Global Climate Summit Reaches Historic Agreement',
    summary: 'World leaders have agreed on a landmark deal to reduce carbon emissions by 50% by 2030, marking a significant step forward in the fight against climate change.',
    category: 'Environment',
    publishedAt: new Date('2023-11-15T09:00:00Z'),
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/avatar-1.jpg',
    },
    image: '/images/featured-climate.jpg',
    slug: '/article/featured-1',
  }

  const timeAgo = formatDistanceToNow(new Date(featuredArticle.publishedAt), { addSuffix: true })

  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900 text-white h-[500px] mb-8">
      {/* Actual image instead of placeholder */}
      <Image
        src={featuredArticle.image}
        alt={featuredArticle.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-medium rounded-full mb-4">
          {featuredArticle.category}
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {featuredArticle.title}
        </h1>
        
        <p className="text-lg text-gray-200 mb-6 max-w-3xl">
          {featuredArticle.summary}
        </p>
        
        <div className="flex items-center text-gray-300 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-600 mr-3 relative overflow-hidden">
            <Image
              src={featuredArticle.author.avatar}
              alt={featuredArticle.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{featuredArticle.author.name}</p>
            <p className="text-sm">{timeAgo}</p>
          </div>
        </div>
        
        <Link 
          href={featuredArticle.slug} 
          className="btn btn-primary inline-block w-auto"
        >
          Read Full Story
        </Link>
      </div>
    </div>
  )
}

export default FeaturedNews 