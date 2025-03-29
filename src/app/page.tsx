import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeaturedNews from '@/components/FeaturedNews'
import NewsList from '@/components/NewsList'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <FeaturedNews />
          
          <div className="my-12">
            <h2 className="mb-6">Latest News</h2>
            <NewsList />
          </div>
          
          <div className="my-12">
            <h2 className="mb-6">Top Stories</h2>
            <NewsList category="top" />
          </div>
          
          <div className="my-12">
            <h2 className="mb-6">Technology</h2>
            <NewsList category="technology" />
          </div>
          
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>
  )
} 