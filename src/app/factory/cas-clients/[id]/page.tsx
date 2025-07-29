import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Button, CheckIcon, Icon } from '@/design-system'
import { FadeIn, SlideIn, Counter } from '@/components/common/AnimationWrapper'
import { getCaseStudy, caseStudies } from '@/components/case-studies/caseStudiesData'
import { ArrowLeft, Calendar, Users, Zap, Quote } from 'lucide-react'
import Image from 'next/image'

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const study = getCaseStudy(params.id)

    if (!study) {
        return {
            title: 'Cas client non trouvé | Kanbios Factory',
        }
    }

    return {
        title: `${study.client} - Cas Client ${study.industry} | Kanbios Factory`,
        description: study.challenge.substring(0, 160),
        openGraph: {
            title: `Success Story: ${study.client}`,
            description: study.challenge,
            images: [study.heroImage],
        }
    }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
    const study = getCaseStudy(params.id)

    if (!study) {
        notFound()
    }

    return (
        <>
            <PageHero
                badge={study.industry}
                title={`Cas client: ${study.client}`}
                description={study.challenge}
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Cas Clients', href: '/factory/cas-clients' },
                    { label: study.client }
                ]}
            />

            <PageSection>
                <div className="mb-8">
                    <Button
                        as="a"
                        href="/factory/cas-clients"
                        variant="ghost"
                        size="sm"
                        icon={<ArrowLeft className="h-4 w-4" />}
                        className="text-slate-600"
                    >
                        Retour aux cas clients
                    </Button>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                    {study.results.metrics.map((metric, index) => (
                        <FadeIn key={metric.label} transition={{ delay: index * 0.1 }}>
                            <Card variant="light" className="text-center">
                                <Text size="2xl" weight="bold" className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-1">
                                    {metric.value}
                                </Text>
                                <Text size="xs" color="slate-600" className="mb-1">{metric.label}</Text>
                                <Text size="xs" color="slate-500">{metric.description}</Text>
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                <Grid cols={3} gap="lg">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Challenge */}
                        <SlideIn direction="left">
                            <Card variant="default">
                                <Heading level="h2" color="dark" className="mb-4">
                                    Le défi
                                </Heading>
                                <Text color="slate-600" className="leading-relaxed">
                                    {study.challenge}
                                </Text>
                            </Card>
                        </SlideIn>

                        {/* Solution */}
                        <SlideIn direction="left" transition={{ delay: 0.1 }}>
                            <Card variant="default">
                                <Heading level="h2" color="dark" className="mb-4">
                                    Notre solution
                                </Heading>
                                <Text color="slate-600" className="mb-6">
                                    {study.solution.summary}
                                </Text>
                                <ul className="space-y-3">
                                    {study.solution.details.map((detail, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckIcon className="mt-1 flex-shrink-0" />
                                            <Text color="slate-600">{detail}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </SlideIn>

                        {/* Timeline */}
                        <SlideIn direction="left" transition={{ delay: 0.2 }}>
                            <Card variant="dark">
                                <div className="flex items-center gap-3 mb-6">
                                    <Calendar className="h-6 w-6 text-blue-400" />
                                    <Heading level="h3" color="white">Timeline du projet</Heading>
                                </div>
                                <div className="space-y-4">
                                    {study.timeline.phases.map((phase, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                                            <Text color="white">{phase.name}</Text>
                                            <Badge variant="secondary" size="sm">{phase.duration}</Badge>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-700">
                                    <Text color="secondary" className="text-center">
                                        Durée totale: <span className="text-white font-semibold">{study.timeline.duration}</span>
                                    </Text>
                                </div>
                            </Card>
                        </SlideIn>
                    </div>

                    <div className="space-y-6">
                        {/* Team */}
                        <FadeIn>
                            <Card variant="light">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="h-6 w-6 text-blue-500" />
                                    <Heading level="h3" color="dark">L'équipe projet</Heading>
                                </div>
                                <div className="text-center mb-4">
                                    <Text size="3xl" weight="bold" color="blue">{study.team.size}</Text>
                                    <Text color="slate-600">experts mobilisés</Text>
                                </div>
                                <ul className="space-y-2">
                                    {study.team.roles.map((role, index) => (
                                        <li key={index} className="text-sm text-slate-600">• {role}</li>
                                    ))}
                                </ul>
                            </Card>
                        </FadeIn>

                        {/* Technologies */}
                        <FadeIn transition={{ delay: 0.1 }}>
                            <Card variant="light">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="h-6 w-6 text-blue-500" />
                                    <Heading level="h3" color="dark">Stack technique</Heading>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {study.technologies.map((tech) => (
                                        <Badge key={tech} variant="outline" size="sm">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </FadeIn>

                        {/* Deliverables */}
                        <FadeIn transition={{ delay: 0.2 }}>
                            <Card variant="light">
                                <Heading level="h3" color="dark" className="mb-4">
                                    Livrables
                                </Heading>
                                <ul className="space-y-2">
                                    {study.deliverables.map((deliverable, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckIcon className="mt-1 flex-shrink-0 text-green-500" size="sm" />
                                            <Text size="sm" color="slate-600">{deliverable}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </FadeIn>
                    </div>
                </Grid>

                {/* Testimonial */}
                <SlideIn direction="up" className="mt-12">
                    <Card variant="dark" className="relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <Quote className="h-16 w-16 text-blue-500/20" />
                        </div>
                        <div className="relative z-10">
                            <Text size="lg" color="secondary" className="italic mb-6 leading-relaxed">
                                "{study.results.testimonial.quote}"
                            </Text>
                            <div className="flex items-center gap-4">
                                {study.results.testimonial.authorImage && (
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src={study.results.testimonial.authorImage}
                                            alt={study.results.testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <Text weight="semibold" color="white">
                                        {study.results.testimonial.author}
                                    </Text>
                                    <Text size="sm" color="secondary">
                                        {study.results.testimonial.role}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </SlideIn>
            </PageSection>

            <PageSection variant="light-alt">
                <FadeIn className="text-center">
                    <Heading level="h2" color="dark" align="center" className="mb-4">
                        Prêt à écrire votre success story ?
                    </Heading>
                    <Text size="lg" color="slate-600" className="mb-8 max-w-2xl mx-auto">
                        Comme {study.client}, transformez vos défis techniques en avantages compétitifs.
                    </Text>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            as="a"
                            href="/factory/contact"
                            variant="primary"
                            size="lg"
                        >
                            Démarrer votre projet
                        </Button>
                        <Button
                            as="a"
                            href="/factory/cas-clients"
                            variant="outline"
                            size="lg"
                        >
                            Voir d'autres cas clients
                        </Button>
                    </div>
                </FadeIn>
            </PageSection>
        </>
    )
}
