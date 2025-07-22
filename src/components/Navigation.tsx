'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Container, Button, Text } from '@/components/design-system'
import { cn } from '@/lib/utils'

const navigationItems = [
    {
        label: 'Offres',
        href: '/offres',
        dropdown: [
            { label: 'Développement End-to-End', href: '/offres/developpement' },
            { label: 'Équipe Dédiée', href: '/offres/equipe' },
            { label: 'Modernisation & Migration', href: '/offres/modernisation' },
        ]
    },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Équipe', href: '/equipe' },
    { label: 'Insights', href: '/insights' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
                    : 'bg-transparent'
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NextLink href="/" className="flex items-center group">
                        <span className={cn(
                            'text-2xl font-bold transition-colors duration-300',
                            isScrolled ? 'text-slate-900' : 'text-white'
                        )}>
                            KANBIOS
                            <span className={cn(
                                'font-light ml-1 bg-gradient-to-r bg-clip-text text-transparent',
                                isScrolled
                                    ? 'from-blue-600 to-cyan-500'
                                    : 'from-blue-400 to-cyan-400'
                            )}>
                                Factory
                            </span>
                        </span>
                    </NextLink>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <li key={item.label} className="relative">
                                {item.dropdown ? (
                                    <div
                                        onMouseEnter={() => setOpenDropdown(item.label)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <button
                                            className={cn(
                                                'flex items-center py-2 font-medium transition-colors',
                                                isScrolled
                                                    ? 'text-slate-700 hover:text-blue-600'
                                                    : 'text-white/90 hover:text-white'
                                            )}
                                        >
                                            {item.label}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {openDropdown === item.label && (
                                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                                                {item.dropdown.map((subItem) => (
                                                    <NextLink
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all"
                                                    >
                                                        {subItem.label}
                                                    </NextLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NextLink
                                        href={item.href}
                                        className={cn(
                                            'py-2 font-medium transition-colors',
                                            isScrolled
                                                ? 'text-slate-700 hover:text-blue-600'
                                                : 'text-white/90 hover:text-white'
                                        )}
                                    >
                                        {item.label}
                                    </NextLink>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            as="a"
                            href="/contact"
                            size="md"
                            className={cn(
                                'transition-all duration-300',
                                isScrolled
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white border-0'
                                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-slate-900'
                            )}
                        >
                            Parlons de votre projet
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            'lg:hidden p-2 rounded-lg transition-colors',
                            isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                        )}
                        aria-label="Menu mobile"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <Container>
                        <div className="py-4 space-y-4">
                            {navigationItems.map((item) => (
                                <div key={item.label}>
                                    <NextLink
                                        href={item.href}
                                        className="block py-2 text-slate-700 font-medium hover:text-blue-600"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </NextLink>
                                    {item.dropdown && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {item.dropdown.map((subItem) => (
                                                <NextLink
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block py-2 text-slate-600 text-sm hover:text-blue-600"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </NextLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button
                                    as="a"
                                    href="/contact"
                                    fullWidth
                                    className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white border-0"
                                >
                                    Parlons de votre projet
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    )
}