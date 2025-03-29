import Link from 'next/link'
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NewsPortal</h3>
            <p className="text-gray-300">
              Stay updated with the latest news from around the world.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="https://twitter.com" icon={<FiTwitter />} />
              <SocialLink href="https://facebook.com" icon={<FiFacebook />} />
              <SocialLink href="https://instagram.com" icon={<FiInstagram />} />
              <SocialLink href="https://linkedin.com" icon={<FiLinkedin />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <FooterLinks
              links={[
                { name: 'Top Stories', href: '/category/top' },
                { name: 'Technology', href: '/category/technology' },
                { name: 'Politics', href: '/category/politics' },
                { name: 'Business', href: '/category/business' },
                { name: 'Health', href: '/category/health' },
              ]}
            />
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <FooterLinks
              links={[
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Careers', href: '/careers' },
                { name: 'Advertise', href: '/advertise' },
              ]}
            />
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <FooterLinks
              links={[
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Cookie Policy', href: '/cookies' },
              ]}
            />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} NewsPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white hover:no-underline"
    >
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-accent transition-colors">
        {icon}
      </span>
    </a>
  )
}

const FooterLinks = ({ links }: { links: { name: string; href: string }[] }) => {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-gray-300 hover:text-white hover:no-underline"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Footer 