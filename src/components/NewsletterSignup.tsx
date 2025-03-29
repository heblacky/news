"use client"

import { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    
    // In a real app, you would submit this to your API
    console.log('Subscribing email:', email)
    
    // Show success message
    setIsSubmitted(true)
    setError('')
    setEmail('')
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-primary text-white rounded-xl p-8 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with the Latest News</h2>
        <p className="text-gray-300 mb-6">
          Subscribe to our newsletter to receive the most important news stories directly in your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Email address"
          />
          <button 
            type="submit" 
            className="btn bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md hover:no-underline"
          >
            Subscribe
          </button>
        </form>
        
        {error && (
          <p className="mt-4 text-red-400">{error}</p>
        )}
        
        {isSubmitted && (
          <p className="mt-4 text-green-400">
            Thanks for subscribing! Please check your email to confirm your subscription.
          </p>
        )}
        
        <p className="mt-4 text-sm text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}

export default NewsletterSignup 