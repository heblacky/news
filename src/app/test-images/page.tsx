import Image from 'next/image'

export default function TestImages() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-4">
          <h2 className="text-xl font-bold mb-2">Featured Climate Image</h2>
          <div className="relative h-[300px] mb-4">
            {/* Direct image with basic next/image */}
            <Image 
              src="/images/featured-climate.jpg" 
              alt="Featured Climate" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <p>Path: /images/featured-climate.jpg</p>
        </div>
        
        <div className="card p-4">
          <h2 className="text-xl font-bold mb-2">Tech AI Image</h2>
          <div className="relative h-[300px] mb-4">
            <Image 
              src="/images/tech-ai.jpg" 
              alt="Tech AI" 
              fill
              className="object-cover"
            />
          </div>
          <p>Path: /images/tech-ai.jpg</p>
        </div>
        
        <div className="card p-4">
          <h2 className="text-xl font-bold mb-2">Avatar 1</h2>
          <div className="relative h-[100px] w-[100px] mb-4 rounded-full overflow-hidden">
            <Image 
              src="/images/avatar-1.jpg" 
              alt="Avatar 1" 
              fill
              className="object-cover"
            />
          </div>
          <p>Path: /images/avatar-1.jpg</p>
        </div>
        
        <div className="card p-4">
          <h2 className="text-xl font-bold mb-2">With Regular HTML Img Tag</h2>
          <img 
            src="/images/business-stocks.jpg" 
            alt="Business Stocks" 
            className="h-[300px] object-cover w-full"
          />
          <p>Path: /images/business-stocks.jpg (using regular img tag)</p>
        </div>
      </div>
      
      <div className="mt-8">
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </div>
  )
} 