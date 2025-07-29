import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Button, Icon, CheckIcon } from '@/design-system'
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from '@/components/common/AnimationWrapper'
import { Code, Zap, Shield, Users, Calendar, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Développement End-to-End - MVP en 12 semaines | Kanbios Factory',
    description: 'Service de développement complet de votre produit digital. Du MVP au scale-up, nous gérons conception, développement et déploiement. Lancement garanti en 3 mois.',
    keywords: 'développement end-to-end, MVP, développement produit, développement agile, startup, scale-up, développement web, développement mobile',
    openGraph: {
        title: 'Développement End-to-End - Transformez votre idée en produit',
        description: 'Nous gérons tout le développement de votre produit digital, du MVP au scale-up. Architecture moderne, équipe senior, lancement en 3 mois.',
    }
}

const processSteps = [
    { icon: Users, title: 'Discovery', desc: 'Workshops et analyse des besoins' },
    { icon: Code, title: 'Développement', desc: 'Sprints agiles de 2 semaines' },
    { icon: Shield, title: 'Tests & QA', desc: 'Qualité garantie à chaque étape' },
    { icon: Zap, title: 'Déploiement', desc: 'Mise en production progressive' }
]

const features = [
    'Architecture moderne et scalable',
    'Tests automatisés (TDD/BDD)',
    'CI/CD et DevOps inclus',
    'Documentation technique complète',
    'Formation de vos équipes',
    'Code source 100% propriétaire'
]

export default function DeveloppementEndToEndPage() {
    return (
        <>
            <PageHero
                badge="Service phare"
                title="Développement"
                titleGradient="End-to-End"
                description="De l'idée au produit fini, nous prenons en charge l'intégralité du développement de votre solution digitale. MVP fonctionnel livré en 12 semaines."
                ctaText="Estimer mon projet"
                ctaHref="/factory/contact"
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Offres', href: '/factory/offres' },
                    { label: 'Développement End-to-End' }
                ]}
            />

            <PageSection
                title="Notre processus éprouvé"
                subtitle="Une méthodologie agile qui garantit des résultats"
            >
                <StaggerChildren>
                    <Grid cols={4} gap="md" className="mb-16">
                        {processSteps.map((step, index) => (
                            <StaggerItem key={step.title}>
                                <Card variant="default" hover className="text-center h-full">
                                    <Icon color="primary" size="lg" className="mx-auto mb-4">
                                        <step.icon />
                                    </Icon>
                                    <Heading level="h3" color="dark" className="mb-2">{step.title}</Heading>
                                    <Text size="sm" color="slate-600">{step.desc}</Text>
                                </Card>
                            </StaggerItem>
                        ))}
                    </Grid>
                </StaggerChildren>

                <Grid cols={2} gap="lg">
                    <FadeIn>
                        <Card variant="light" className="h-full">
                            <Badge variant="primary" className="mb-4">Ce qui est inclus</Badge>
                            <Heading level="h3" color="dark" className="mb-6">
                                Tout pour réussir votre lancement
                            </Heading>
                            <ul className="space-y-3">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <CheckIcon className="mt-1 flex-shrink-0" />
                                        <Text>{feature}</Text>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </FadeIn>

                    <FadeIn transition={{ delay: 0.2 }}>
                        <Card variant="dark" className="h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="h-8 w-8 text-blue-400" />
                                <Heading level="h3" color="white">Timeline type</Heading>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <Text color="white" weight="semibold">Semaines 1-3</Text>
                                    <Text color="secondary" size="sm">Discovery & Design</Text>
                                </div>
                                <div>
                                    <Text color="white" weight="semibold">Semaines 4-10</Text>
                                    <Text color="secondary" size="sm">Développement Sprint</Text>
                                </div>
                                <div>
                                    <Text color="white" weight="semibold">Semaines 11-12</Text>
                                    <Text color="secondary" size="sm">Tests & Déploiement</Text>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-700">
                                <div className="flex items-center gap-2 text-green-400">
                                    <TrendingUp className="h-5 w-5" />
                                    <Text color="white">94% de projets livrés dans les temps</Text>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                </Grid>
            </PageSection>

            <PageSection variant="dark">
                <FadeIn className="text-center">
                    <Heading as="h2" level="h2" color="white" align="center" className="mb-4">
                        Prêt à lancer votre projet ?
                    </Heading>
                    <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto">
                        Discutons de vos besoins et voyons comment nous pouvons transformer votre vision en réalité.
                    </Text>
                    <Button
                        as="a"
                        href="/factory/contact"
                        variant="secondary"
                        size="lg"
                        icon={<ArrowRight className="h-5 w-5" />}
                    >
                        Démarrer mon projet
                    </Button>
                </FadeIn>
            </PageSection>
        </>
    )
}
