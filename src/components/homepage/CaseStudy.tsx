'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import { Container, Section, Grid, Card, Heading, Text, Badge, Link, Icon } from '@/design-system'

const caseStudies = [
    {
        id: 1,
        client: 'FinanceFlow',
        industry: 'FinTech',
        thumbnail: '/api/placeholder/600/400',
        logo: '/api/placeholder/120/40',
        challenge: 'Moderniser une application bancaire legacy tout en maintenant la conformité réglementaire.',
        solution: 'Migration progressive vers une architecture microservices avec React et Node.js.',
        results: [
            { icon: TrendingUp, metric: '+300%', label: 'Performance' },
            { icon: Users, metric: '2M+', label: 'Utilisateurs' },
            { icon: Zap, metric: '-60%', label: 'Temps de chargement' }
        ],
        technologies: ['React', 'Node.js', 'Kubernetes', 'PostgreSQL'],
        testimonial: {
            quote: "Kanbios Factory a transformé notre vision en réalité. Leur expertise technique et leur approche agile ont été déterminantes.",
            author: "Marie Dubois",
            role: "CTO, FinanceFlow"
        }
    },
    {
        id: 2,
        client: 'MediCare Plus',
        industry: 'HealthTech',
        thumbnail: '/api/placeholder/600/400',
        logo: '/api/placeholder/120/40',
        challenge: 'Créer une plateforme de télémédecine scalable et sécurisée en 3 mois.',
        solution: 'Développement d\'une PWA avec vidéo en temps réel et chiffrement end-to-end.',
        results: [
            { icon: Users, metric: '50K+', label: 'Consultations/mois' },
            { icon: TrendingUp, metric: '99.9%', label: 'Uptime' },
            { icon: Zap, metric: '4.8/5', label: 'Satisfaction' }
        ],
        technologies: ['Next.js', 'WebRTC', 'AWS', 'MongoDB'],
        testimonial: {
            quote: "L'équipe de Kanbios a livré au-delà de nos attentes. Leur compréhension du secteur médical a fait la différence.",
            author: "Dr. Pierre Martin",
            role: "Fondateur, MediCare Plus"
        }
    },
    {
        id: 3,
        client: 'EcoCommerce',
        industry: 'E-commerce',
        thumbnail: '/api/placeholder/600/400',
        logo: '/api/placeholder/120/40',
        challenge: 'Refondre entièrement une marketplace avec 100K+ produits sans interruption.',
        solution: 'Migration progressive avec feature flags et architecture headless commerce.',
        results: [
            { icon: TrendingUp, metric: '+150%', label: 'Conversion' },
            { icon: Zap, metric: '1.2s', label: 'Page load' },
            { icon: Users, metric: '+200%', label: 'Traffic mobile' }
        ],
        technologies: ['Vue.js', 'GraphQL', 'Elasticsearch', 'Redis'],
        testimonial: {
            quote: "La migration s'est faite sans aucune interruption. C'est exactement ce dont nous avions besoin.",
            author: "Sophie Laurent",
            role: "CEO, EcoCommerce"
        }
    }
]

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <Card variant="default" hover className="h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <Badge variant="primary">
                        {study.industry}
                    </Badge>
                    <Text size="lg" weight="bold" color="dark">
                        {study.client}
                    </Text>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <div className="mb-4">
                        <Text size="sm" weight="semibold" color="blue" className="mb-2">
                            Défi
                        </Text>
                        <Text size="sm" color="slate-600">
                            {study.challenge}
                        </Text>
                    </div>

                    <div className="mb-6">
                        <Text size="sm" weight="semibold" color="blue" className="mb-2">
                            Solution
                        </Text>
                        <Text size="sm" color="slate-600">
                            {study.solution}
                        </Text>
                    </div>

                    {/* Results - Unified style */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                        {study.results.map((result, idx) => (
                            <div key={idx} className="text-center">
                                <Icon color="primary" size="sm">
                                    <result.icon className="mx-auto mb-1" />
                                </Icon>
                                <Text weight="bold" color="dark">
                                    {result.metric}
                                </Text>
                                <Text size="xs" color="slate-600">
                                    {result.label}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Technologies - Unified style */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testimonial */}
                <div className="mt-auto pt-6 border-t border-slate-200">
                    <Text size="sm" color="slate-600" className="italic mb-3">
                        "{study.testimonial.quote}"
                    </Text>
                    <div className="flex items-center justify-between">
                        <div>
                            <Text size="sm" weight="semibold" color="dark">
                                {study.testimonial.author}
                            </Text>
                            <Text size="xs" color="slate-600">
                                {study.testimonial.role}
                            </Text>
                        </div>
                        <Link
                            href={`/factory/cas-clients/${study.id}`}
                            variant="default"
                            showArrow
                        >
                            Voir le cas
                        </Link>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

export default function CaseStudiesSection() {
    return (
        <Section variant="light">
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="primary" size="lg" className="mb-6">
                        Réalisations
                    </Badge>
                    <Heading as="h2" level="h2" color="dark" align="center" className="mb-4">
                        Des succès concrets et mesurables
                    </Heading>
                    <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                        Découvrez comment nous avons aidé nos clients à transformer leurs défis techniques
                        en avantages compétitifs.
                    </Text>
                </motion.div>

                <Grid cols={3} gap="lg" className="mb-12">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </Grid>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/factory/cas-clients"
                        variant="gradient"
                        showArrow
                        className="text-lg"
                    >
                        Voir toutes nos réalisations
                    </Link>
                </motion.div>
            </Container>
        </Section>
    )
}