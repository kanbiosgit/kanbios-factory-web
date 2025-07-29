import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Button, Icon } from '@/design-system'
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from '@/components/common/AnimationWrapper'
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react'
import { caseStudies } from '@/components/case-studies/caseStudiesData'

export const metadata: Metadata = {
    title: 'Cas Clients - Réalisations et Success Stories | Kanbios Factory',
    description: 'Découvrez nos cas clients : transformations digitales réussies, migrations cloud, développement d\'applications. ROI prouvé et témoignages clients.',
    keywords: 'cas clients, success stories, transformation digitale, migration cloud, développement application, témoignages clients',
    openGraph: {
        title: 'Cas Clients Kanbios Factory - Des succès concrets',
        description: '75+ projets livrés avec succès. Découvrez comment nous transformons les défis techniques en avantages compétitifs.',
    }
}

const industries = [
    { name: 'FinTech', count: 12, icon: TrendingUp },
    { name: 'HealthTech', count: 8, icon: Users },
    { name: 'E-commerce', count: 15, icon: Award },
    { name: 'SaaS', count: 20, icon: Clock }
]

export default function CaseStudiesPage() {
    return (
        <>
            <PageHero
                badge="Réalisations"
                title="Des succès concrets"
                titleGradient="et mesurables"
                description="Découvrez comment nous avons aidé plus de 75 entreprises à transformer leurs défis techniques en avantages compétitifs."
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Cas Clients' }
                ]}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {industries.map((industry, index) => (
                        <FadeIn key={industry.name} transition={{ delay: index * 0.1 }}>
                            <Card variant="light" className="text-center">
                                <Icon color="primary" size="lg" className="mx-auto mb-3">
                                    <industry.icon />
                                </Icon>
                                <Text size="2xl" weight="bold" className="mb-1">
                                    {industry.count}
                                </Text>
                                <Text size="sm" color="slate-600">
                                    Projets {industry.name}
                                </Text>
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                <StaggerChildren>
                    <div className="space-y-8">
                        {caseStudies.map((study, index) => (
                            <StaggerItem key={study.id}>
                                <Card variant="default" hover className="overflow-hidden">
                                    <Grid cols={2} gap="lg" className="items-center">
                                        <div>
                                            <Badge variant="primary" className="mb-4">
                                                {study.industry}
                                            </Badge>
                                            <Heading level="h3" color="dark" className="mb-3">
                                                {study.client}
                                            </Heading>
                                            <Text color="slate-600" className="mb-6">
                                                {study.challenge.substring(0, 200)}...
                                            </Text>

                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                {study.results.metrics.slice(0, 3).map((metric) => (
                                                    <div key={metric.label} className="text-center">
                                                        <Text size="xl" weight="bold" color="blue">
                                                            {metric.value}
                                                        </Text>
                                                        <Text size="xs" color="slate-600">
                                                            {metric.label}
                                                        </Text>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <Button
                                                    as="a"
                                                    href={`/factory/cas-clients/${study.id}`}
                                                    variant="primary"
                                                    size="sm"
                                                    icon={<ArrowRight className="h-4 w-4" />}
                                                >
                                                    Voir le cas complet
                                                </Button>
                                                <Text size="sm" color="slate-600">
                                                    {study.timeline.duration} • {study.team.size} experts
                                                </Text>
                                            </div>
                                        </div>

                                        <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg overflow-hidden">
                                            <div className="absolute inset-0 pattern-dots opacity-10" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Text size="6xl" weight="bold" className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                                                        {study.results.metrics[0].value}
                                                    </Text>
                                                    <Text color="slate-600">{study.results.metrics[0].label}</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Card>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerChildren>
            </PageSection>

            <PageSection variant="dark">
                <FadeIn className="text-center">
                    <Heading as="h2" level="h2" color="white" align="center" className="mb-4">
                        Votre projet sera notre prochaine réussite
                    </Heading>
                    <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto">
                        Rejoignez les entreprises qui ont fait confiance à Kanbios Factory pour leur transformation digitale.
                    </Text>
                    <Button
                        as="a"
                        href="/factory/contact"
                        variant="secondary"
                        size="lg"
                        icon={<ArrowRight className="h-5 w-5" />}
                    >
                        Discuter de votre projet
                    </Button>
                </FadeIn>
            </PageSection>
        </>
    )
}
