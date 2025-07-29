import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import { Container, Section, Grid, Card, Heading, Text, Badge, Link, Icon, Button } from '@/design-system'
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from '@/components/common/AnimationWrapper'

const caseStudies = [
    {
        id: 1,
        client: 'FinanceFlow',
        industry: 'FinTech',
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
        <SlideIn direction="up" transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card variant="default" hover className="h-full flex flex-col">
                {/* Header - Fixed height */}
                <div className="flex items-center justify-between mb-6 h-8">
                    <Badge variant="primary">
                        {study.industry}
                    </Badge>
                    <Text size="lg" weight="bold" color="dark">
                        {study.client}
                    </Text>
                </div>

                {/* Content - Flex grow with consistent subsection heights */}
                <div className="flex-grow flex flex-col">
                    {/* Challenge - Fixed min-height */}
                    <div className="mb-4 min-h-[80px]">
                        <Text size="sm" weight="semibold" color="blue" className="mb-2">
                            Défi
                        </Text>
                        <Text size="sm" color="slate-600">
                            {study.challenge}
                        </Text>
                    </div>

                    {/* Solution - Fixed min-height */}
                    <div className="mb-6 min-h-[80px]">
                        <Text size="sm" weight="semibold" color="blue" className="mb-2">
                            Solution
                        </Text>
                        <Text size="sm" color="slate-600">
                            {study.solution}
                        </Text>
                    </div>

                    {/* Results - Fixed height */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl h-[120px]">
                        {study.results.map((result, idx) => (
                            <div key={idx} className="text-center flex flex-col justify-center">
                                <div>
                                    <Icon color="primary" size="sm">
                                        <result.icon className="mx-auto mb-1" />
                                    </Icon>
                                </div>

                                <Text weight="bold" color="dark">
                                    {result.metric}
                                </Text>
                                <Text size="xs" color="slate-600">
                                    {result.label}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Technologies - Fixed height */}
                    <div className="flex flex-wrap gap-2 mb-6 min-h-[60px]">
                        {study.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 h-fit"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testimonial - Always at bottom, fixed structure */}
                <div className="mt-auto pt-6 border-t border-slate-200">
                    <Text size="sm" color="slate-600" className="italic mb-3 min-h-[48px]">
                        "{study.testimonial.quote}"
                    </Text>
                    <div className="flex items-center justify-between min-h-[48px]">
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
        </SlideIn>
    )
}

export default function CaseStudiesSection() {
    return (
        <Section variant="light">
            <Container size="xl">
                <FadeIn className="text-center mb-16">
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
                </FadeIn>

                <StaggerChildren>
                    <Grid cols={3} gap="lg" className="mb-12">
                        {caseStudies.map((study, index) => (
                            <StaggerItem key={study.id}>
                                <CaseStudyCard study={study} index={index} />
                            </StaggerItem>
                        ))}
                    </Grid>
                </StaggerChildren>

                <FadeIn className="text-center">
                    <Button
                        as="a"
                        href="/factory/cas-clients"
                        variant="primary"
                        size="lg"
                        icon={<ArrowRight className="h-5 w-5" />}
                    >
                        Voir toutes nos réalisations
                    </Button>
                </FadeIn>
            </Container>
        </Section>
    )
}