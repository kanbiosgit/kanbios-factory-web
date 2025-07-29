import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Button, CheckIcon } from '@/design-system'
import { FadeIn, ScaleIn } from '@/components/common/AnimationWrapper'
import { Shield, Database, Cloud, RefreshCw, ArrowRight, AlertTriangle, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Migration Sécurisée - Zero Downtime | Kanbios Factory',
    description: 'Service de migration sécurisée vers le cloud ou entre technologies. Migration progressive, zéro interruption, données sécurisées, ROI garanti.',
    keywords: 'migration cloud, migration sécurisée, zero downtime, migration données, transformation cloud, migration AWS',
}

const migrationTypes = [
    {
        title: 'On-Premise vers Cloud',
        icon: Cloud,
        features: ['AWS, Azure, GCP', 'Architecture cloud-native', 'Optimisation des coûts'],
    },
    {
        title: 'Legacy vers Modern Stack',
        icon: RefreshCw,
        features: ['Monolithe vers Microservices', 'PHP vers Node.js/Python', 'jQuery vers React/Vue'],
    },
    {
        title: 'Base de données',
        icon: Database,
        features: ['Oracle vers PostgreSQL', 'MySQL vers MongoDB', 'Migration sans perte'],
    },
    {
        title: 'Infrastructure',
        icon: Shield,
        features: ['VM vers Containers', 'Kubernetes adoption', 'Infrastructure as Code'],
    }
]

const processSteps = [
    {
        step: 1,
        title: 'Audit & Planning',
        description: 'Analyse complète de votre système actuel',
        duration: '1-2 semaines'
    },
    {
        step: 2,
        title: 'Proof of Concept',
        description: 'Validation de l\'approche sur un périmètre réduit',
        duration: '2-3 semaines'
    },
    {
        step: 3,
        title: 'Migration Progressive',
        description: 'Migration par phases avec rollback possible',
        duration: '4-12 semaines'
    },
    {
        step: 4,
        title: 'Optimisation',
        description: 'Fine-tuning et formation des équipes',
        duration: '1-2 semaines'
    }
]

export default function MigrationPage() {
    return (
        <>
            <PageHero
                badge="Zero Downtime"
                title="Migration"
                titleGradient="Sécurisée"
                description="Migrez vos systèmes vers des technologies modernes sans interruption de service. Approche progressive, données sécurisées, ROI garanti."
                ctaText="Planifier ma migration"
                ctaHref="/factory/contact"
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Offres', href: '/factory/offres' },
                    { label: 'Migration Sécurisée' }
                ]}
            />

            <PageSection>
                <FadeIn className="text-center mb-12">
                    <Badge variant="primary" size="lg" className="mb-4">
                        94% de migrations sans incident
                    </Badge>
                    <Heading level="h2" color="dark" align="center" className="mb-4">
                        Types de migration que nous maîtrisons
                    </Heading>
                </FadeIn>

                <Grid cols={2} gap="lg" className="mb-16">
                    {migrationTypes.map((type, index) => (
                        <ScaleIn key={type.title} transition={{ delay: index * 0.1 }}>
                            <Card variant="default" hover className="h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <type.icon className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <Heading level="h3" color="dark">
                                        {type.title}
                                    </Heading>
                                </div>
                                <ul className="space-y-2">
                                    {type.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <CheckIcon className="mt-1 flex-shrink-0" size="sm" />
                                            <Text size="sm" color="slate-600">{feature}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </ScaleIn>
                    ))}
                </Grid>

                <div>
                    <FadeIn className="text-center mb-12">
                        <Heading level="h2" color="dark" align="center" className="mb-4">
                            Notre processus de migration éprouvé
                        </Heading>
                        <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                            Une approche en 4 phases qui garantit une migration sans risque
                        </Text>
                    </FadeIn>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block" />

                        <div className="space-y-8">
                            {processSteps.map((step, index) => (
                                <SlideIn key={step.step} direction="left" transition={{ delay: index * 0.1 }}>
                                    <div className="flex gap-6 items-start">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                                {step.step}
                                            </div>
                                            {index < processSteps.length - 1 && (
                                                <div className="absolute top-16 left-8 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent md:hidden" />
                                            )}
                                        </div>
                                        <Card variant="light" className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <Heading level="h3" color="dark">{step.title}</Heading>
                                                <Badge variant="outline" size="sm">{step.duration}</Badge>
                                            </div>
                                            <Text color="slate-600">{step.description}</Text>
                                        </Card>
                                    </div>
                                </SlideIn>
                            ))}
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection variant="light-alt">
                <Grid cols={2} gap="lg">
                    <FadeIn>
                        <Card variant="dark" className="h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-8 w-8 text-blue-400" />
                                <Heading level="h3" color="white">
                                    Garanties de sécurité
                                </Heading>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckIcon className="mt-1 text-green-400" />
                                    <div>
                                        <Text color="white" weight="semibold">Zéro perte de données</Text>
                                        <Text size="sm" color="secondary">Backup complet et tests de restauration</Text>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckIcon className="mt-1 text-green-400" />
                                    <div>
                                        <Text color="white" weight="semibold">Rollback instantané</Text>
                                        <Text size="sm" color="secondary">Retour arrière possible à tout moment</Text>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckIcon className="mt-1 text-green-400" />
                                    <div>
                                        <Text color="white" weight="semibold">Tests automatisés</Text>
                                        <Text size="sm" color="secondary">Validation continue pendant la migration</Text>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckIcon className="mt-1 text-green-400" />
                                    <div>
                                        <Text color="white" weight="semibold">Monitoring 24/7</Text>
                                        <Text size="sm" color="secondary">Surveillance continue des performances</Text>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </FadeIn>

                    <FadeIn transition={{ delay: 0.2 }}>
                        <div className="space-y-6">
                            <Card variant="default">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingUp className="h-6 w-6 text-blue-500" />
                                    <Heading level="h3" color="dark">ROI moyen constaté</Heading>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <Text size="2xl" weight="bold" color="blue">-40%</Text>
                                        <Text size="sm" color="slate-600">Coûts d'infrastructure</Text>
                                    </div>
                                    <div className="text-center">
                                        <Text size="2xl" weight="bold" color="blue">+200%</Text>
                                        <Text size="sm" color="slate-600">Performance</Text>
                                    </div>
                                    <div className="text-center">
                                        <Text size="2xl" weight="bold" color="blue">-60%</Text>
                                        <Text size="sm" color="slate-600">Time to market</Text>
                                    </div>
                                    <div className="text-center">
                                        <Text size="2xl" weight="bold" color="blue">99.9%</Text>
                                        <Text size="sm" color="slate-600">Uptime</Text>
                                    </div>
                                </div>
                            </Card>

                            <Card variant="default">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <Heading level="h4" color="dark" className="mb-2">
                                            Migration sans risque
                                        </Heading>
                                        <Text size="sm" color="slate-600">
                                            Notre approche progressive permet de valider chaque étape avant de passer
                                            à la suivante. Vous gardez le contrôle total du processus.
                                        </Text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </FadeIn>
                </Grid>
            </PageSection>

            <PageSection variant="dark">
                <FadeIn className="text-center">
                    <Heading as="h2" level="h2" color="white" align="center" className="mb-4">
                        Prêt à moderniser votre infrastructure ?
                    </Heading>
                    <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto">
                        Obtenez un audit gratuit et découvrez comment migrer sans risque vers des technologies modernes.
                    </Text>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            as="a"
                            href="/factory/contact"
                            variant="secondary"
                            size="lg"
                            icon={<ArrowRight className="h-5 w-5" />}
                        >
                            Demander un audit gratuit
                        </Button>
                        <Button
                            as="a"
                            href="/factory/cas-clients"
                            variant="ghost"
                            size="lg"
                        >
                            Voir nos migrations réussies
                        </Button>
                    </div>
                </FadeIn>
            </PageSection>
        </>
    )
}
