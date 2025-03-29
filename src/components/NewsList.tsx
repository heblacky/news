"use client"

import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'

type NewsItem = {
  id: string
  title: string
  summary: string
  category: string
  publishedAt: Date
  author: {
    name: string
    avatar: string
  }
  image: string
  slug: string
}

interface NewsListProps {
  category?: string
}

const NewsList = ({ category }: NewsListProps) => {
  // In a real application, this would come from an API
  // This is just mock data for demonstration
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Tech Giant Unveils Revolutionary AI Assistant',
      summary: 'The new AI system can understand and respond to complex human instructions with unprecedented accuracy.',
      category: 'Technology',
      publishedAt: new Date('2023-11-10T14:30:00Z'),
      author: {
        name: 'Michael Chen',
        avatar: '/images/avatar-2.jpg',
      },
      image: '/images/tech-ai.jpg',
      slug: '/article/1',
    },
    {
      id: '2',
      title: 'Stock Markets Reach All-Time High',
      summary: 'Global markets surge as economic recovery accelerates beyond expectations.',
      category: 'Business',
      publishedAt: new Date('2023-11-09T10:15:00Z'),
      author: {
        name: 'Emma Rodriguez',
        avatar: '/images/avatar-3.jpg',
      },
      image: '/images/business-stocks.jpg',
      slug: '/article/2',
    },
    {
      id: '3',
      title: 'New Study Reveals Benefits of Mediterranean Diet',
      summary: 'Research confirms that following a Mediterranean diet can significantly reduce the risk of heart disease.',
      category: 'Health',
      publishedAt: new Date('2023-11-08T09:45:00Z'),
      author: {
        name: 'David Wilson',
        avatar: '/images/avatar-4.jpg',
      },
      image: '/images/health-diet.jpg',
      slug: '/article/3',
    },
    {
      id: '4',
      title: 'Space Tourism Set to Launch Next Year',
      summary: 'Private companies announce plans to offer commercial space flights to civilians starting in 2024.',
      category: 'Technology',
      publishedAt: new Date('2023-11-07T16:20:00Z'),
      author: {
        name: 'Sophia Lee',
        avatar: '/images/avatar-5.jpg',
      },
      image: '/images/tech-space.jpg',
      slug: '/article/4',
    },
  ]

  // Filter news items by category if one is provided
  const filteredNews = category
    ? newsItems.filter(item => item.category.toLowerCase() === category.toLowerCase())
    : newsItems

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredNews.length > 0 ? (
        filteredNews.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))
      ) : (
        <p>No news items found for this category.</p>
      )}
    </div>
  )
}

const NewsCard = ({ item }: { item: NewsItem }) => {
  const timeAgo = formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })

  return (
    <Link href={item.slug} className="card hover:shadow-lg transition-shadow hover:no-underline">
      <div className="aspect-video relative bg-gray-200 overflow-hidden">
        {/* Fallback to regular img tag */}
        <img 
          src={item.image} 
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded mb-2">
          {item.category}
        </span>
        
        <h3 className="font-bold text-xl mb-2 text-primary">{item.title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{item.summary}</p>
        
        <div className="flex items-center text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-gray-200 relative overflow-hidden">
            <img 
              src={item.author.avatar} 
              alt={item.author.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="ml-2">
            <p className="font-medium">{item.author.name}</p>
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsList 