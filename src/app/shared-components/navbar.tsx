'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, User, Home, Mail } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  const navLinks = [
    { href: "/", label: "Domov", icon: <Home size={18} /> },
    { href: "/about", label: "O mne", icon: <User size={18} /> },
    { href: "/contact", label: "Kontakt", icon: <Mail size={18} /> },
  ]

  return (
    <nav className="bg-background  top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="brand-title"
          onClick={() => setIsOpen(false)}
        >
          Portfolio Arny
        </Link>

        {!isOpen && (
          <button
            className="lg:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        )}

        <div className="hidden lg:flex lg:gap-6 lg:items-center">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`btn-link ${
                pathname === href ? "active-link" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col gap-6">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`btn-link  ${
                  pathname === href ? "active-link" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
