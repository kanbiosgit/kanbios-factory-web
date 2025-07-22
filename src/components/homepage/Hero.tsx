'use client'

import { motion } from 'framer-motion'
import { Rocket, Users, RefreshCw, ArrowRight } from 'lucide-react'
import {
    Container,
    Section,
    Grid,
    Card,
    Heading,
    Text,
    Button,
    IconWrapper
} from '@/design-system'

const offers = [
    {
        icon: Rocket,
        title: "Développement End-to-End",
        subtitle: "Du MVP au scale-up",
        description: "Nous gérons tout : conception, développement, déploiement. Architecture moderne, tests automatisés, CI/CD inclus.",
        features: [
            "Lancement garanti en 3 mois",
            "Équipe senior dédiée",
            "Maintenance incluse"
        ],
        ctaText: "J'ai un projet",
        ctaHref: "/offres/developpement"
    },
    {
        icon: Users,
        title: "Équipe Dédiée",
        subtitle: "Vos experts intégrés",
        description: "Tech Lead, développeurs seniors et DevOps qui rejoignent vos équipes. Intégration dans vos process existants.",
        features: [
            "Opérationnels en 2 semaines",
            "Profils triés sur le volet",
            "Flexibilité totale"
        ],
        ctaText: "J'ai besoin d'experts",
        ctaHref: "/offres/equipe"
    },
    {
        icon: RefreshCw,
        title: "Modernisation & Migration",
        subtitle: "Transformation sans risque",
        description: "Audit de votre SI / migration progressive vers le cloud / Zéro interruption de service, formation incluse.",
        features: [
            "Audit d'architecture complète",
            "Migration par phases",
            "ROI garanti sous 6 mois"
        ],
        ctaText: "Je veux moderniser",
        ctaHref: "/offres/modernisation"
    }
]

function OfferCard({ offer, index }: { offer: typeof offers[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="h-full"
        >
            <Card variant="dark" hover className="h-full">
                {/* Icon with unified blue accent */}
                <IconWrapper variant="primary" size="lg" className="mb-6">
                    <offer.icon className="h-7 w-7" />
                </IconWrapper>

                <Heading level="h3" color="white" className="mb-2">
                    {offer.title}
                </Heading>

                <Text size="sm" color="cyan" className="mb-4">
                    {offer.subtitle}
                </Text>

                <Text color="secondary" className="mb-6">
                    {offer.description}
                </Text>

                {/* Features with consistent styling */}
                <div className="space-y-2 mb-8">
                    {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                            <Text size="sm" color="muted">
                                {feature}
                            </Text>
                        </div>
                    ))}
                </div>

                <Button
                    as="a"
                    href={offer.ctaHref}
                    variant="ghost"
                    size="sm"
                    fullWidth
                    className="justify-center"
                    icon={<ArrowRight className="h-4 w-4" />}
                >
                    {offer.ctaText}
                </Button>
            </Card>
        </motion.div>
    )
}

export default function Hero() {
    return (
        <Section
            variant="dark"
            spacing="lg"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,102,255,0.2) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(0,212,255,0.2) 0%, transparent 50%)`
                }} />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 pattern-grid opacity-[0.03]" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            <Container size="lg" className="relative z-10">
                {/* Hero Title with unified gradient */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <Heading as="h1" level="h1" align="center" color="white" className="mb-6">
                        Du besoin à la mise en prod
                        <br />
                        <span className="gradient-text">
                            en 12 semaines
                        </span>
                    </Heading>

                    <Text size="xl" color="primary" className="text-center">
                        Expertise technique. Impact mesurable.
                    </Text>
                </motion.div>

                {/* Offers Grid */}
                <Grid cols={3} gap="md" className="mb-16">
                    {offers.map((offer, index) => (
                        <OfferCard key={offer.title} offer={offer} index={index} />
                    ))}
                </Grid>

                {/* Unified CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <Button
                        as="a"
                        href="/contact"
                        variant="primary"
                        size="lg"
                        icon={<ArrowRight className="h-5 w-5" />}
                        className="hover-glow"
                    >
                        Parlons de votre projet
                    </Button>
                </motion.div>
            </Container>
        </Section>
    )
}