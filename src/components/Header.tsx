"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold text-primary hover:no-underline">
            NewsPortal
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <SearchBar />
          </div>
          
          <button 
            className="md:hidden text-primary p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <NavLinks mobile />
          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  )
}

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Top Stories', href: '/category/top' },
    { name: 'Technology', href: '/category/technology' },
    { name: 'Politics', href: '/category/politics' },
    { name: 'Business', href: '/category/business' },
  ]

  return (
    <nav className={mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-primary hover:text-accent hover:no-underline font-medium"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full md:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}

export default Header 