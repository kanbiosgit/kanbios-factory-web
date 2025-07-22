'use client'

import { Container, Heading, Text, Link } from '@/design-system'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        services: [
            { name: 'Développement End-to-End', href: '/factory/offres/developpement' },
            { name: 'Équipe Dédiée', href: '/factory/offres/equipe' },
            { name: 'Modernisation', href: '/factory/offres/modernisation' },
            { name: 'Migration Sécurisée', href: '/factory/offres/migration' }
        ],
        company: [
            { name: 'À propos', href: '/factory/a-propos' },
            { name: 'Équipe', href: '/factory/equipe' },
            { name: 'Cas Clients', href: '/factory/cas-clients' },
            { name: 'Insights', href: '/factory/insights' }
        ],
        legal: [
            { name: 'Mentions légales', href: '/mentions-legales' },
            { name: 'Politique de confidentialité', href: '/confidentialite' },
            { name: 'CGV', href: '/cgv' }
        ]
    }

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <Container size="xl" className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Heading level="h3" className="text-white mb-2">
                                KANBIOS <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Factory</span>
                            </Heading>
                            <Text className="text-slate-400 mb-6">
                                Votre partenaire technique pour transformer vos idées en produits digitaux performants.
                            </Text>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <MapPin className="h-4 w-4 text-blue-400" />
                                </div>
                                <Text size="sm" className="text-slate-300">Paris, France</Text>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Mail className="h-4 w-4 text-blue-400" />
                                </div>
                                <Link href="mailto:factory@kanbios.fr" variant="muted" className="text-sm hover:text-blue-400">
                                    factory@kanbios.fr
                                </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Phone className="h-4 w-4 text-blue-400" />
                                </div>
                                <Link href="tel:+33100000000" variant="muted" className="text-sm hover:text-blue-400">
                                    +33 1 00 00 00 00
                                </Link>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://github.com/kanbios"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                                aria-label="Github"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/kanbios"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com/kanbios"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <Heading level="h4" className="text-white mb-4">Services</Heading>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        variant="muted"
                                        className="text-sm hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <Heading level="h4" className="text-white mb-4">Entreprise</Heading>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        variant="muted"
                                        className="text-sm hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <Heading level="h4" className="text-white mb-4">Légal</Heading>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        variant="muted"
                                        className="text-sm hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <Text size="sm" className="text-slate-500">
                            © {currentYear} Kanbios Factory. Tous droits réservés.
                        </Text>
                        <div className="flex items-center gap-6">
                            <Link href="/" variant="muted" className="text-sm hover:text-blue-400">
                                Retour à Kanbios.fr
                            </Link>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                                <Text size="sm" className="text-slate-500">
                                    Tous systèmes opérationnels
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}