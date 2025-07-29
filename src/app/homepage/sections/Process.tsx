import {Search, Palette, Code, Rocket, Shield, TrendingUp, ArrowRight, Calendar} from 'lucide-react'
import { Container, Section, Card, Heading, Text, Badge, Button, IconWrapper } from '@/design-system'
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from '@/components/common/AnimationWrapper'
import { AnimatedTimeline, TimelineDot } from '@/components/common/ProcessTimeline'
import { Icon } from '@/components/design-system/Icons'

const processSteps = [
    {
        icon: Search,
        title: 'Découverte',
        duration: 'Semaine 1',
        description: 'Analyse de vos besoins et définition des objectifs.',
        keyPoint: 'Workshops & audit'
    },
    {
        icon: Palette,
        title: 'Conception',
        duration: 'Semaines 2-3',
        description: 'Design UX/UI et prototypes interactifs.',
        keyPoint: 'Prototypes testés'
    },
    {
        icon: Code,
        title: 'Développement',
        duration: 'Semaines 4-10',
        description: 'Développement agile avec livraisons continues.',
        keyPoint: 'Sprints 2 semaines'
    },
    {
        icon: Rocket,
        title: 'Déploiement',
        duration: 'Semaine 11',
        description: 'Mise en production progressive.',
        keyPoint: 'Zero downtime'
    },
    {
        icon: Shield,
        title: 'Stabilisation',
        duration: 'Semaine 12',
        description: 'Optimisations et sécurité.',
        keyPoint: 'Performance max'
    },
    {
        icon: TrendingUp,
        title: 'Croissance',
        duration: 'Ongoing',
        description: 'Support et évolutions.',
        keyPoint: 'Maintenance incluse'
    }
]

export default function ProcessSection() {
    return (
        <Section variant="light-alt" className="relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 pattern-dots opacity-[0.03]" aria-hidden="true" />

            <Container size="lg" className="relative z-10">
                <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
                    <Badge variant="primary" size="lg" className="mb-6">
                        Notre Méthodologie
                    </Badge>
                    <Heading as="h2" level="h2" color="dark" align="center" className="mb-4">
                        12 semaines pour votre MVP
                    </Heading>
                    <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                        Développement agile de votre solution digitale avec les meilleures technologies :
                        React, Vue.js, Node.JS, Python, FastAPI, ReactNative, Flutter. <br/>Architecture cloud et DevOps inclus.
                    </Text>
                </FadeIn>

                {/* Desktop Timeline - Fixed alignment */}
                <div className="hidden lg:block relative max-w-6xl mx-auto mb-16">
                    <div className="relative">
                        {/* Timeline container with proper alignment */}
                        <div className="absolute left-0 right-0" style={{ top: '72px' }}>
                            {/* Base Line */}
                            <div className="absolute left-0 right-0 h-1 bg-slate-200 rounded-full" />
                            {/* Animated components */}
                            <AnimatedTimeline />
                        </div>

                        {/* Steps Grid */}
                        <StaggerChildren>
                            <div className="grid grid-cols-6 gap-4">
                                {processSteps.map((step, index) => (
                                    <StaggerItem key={step.title}>
                                        <div className="relative group">
                                            <div className="flex flex-col items-center">
                                                {/* Icon */}
                                                <IconWrapper variant="default" size="lg" className="mb-2.5 group-hover:scale-110 transition-transform">
                                                    <step.icon className="h-7 w-7" aria-hidden="true" />
                                                </IconWrapper>
                                                <TimelineDot index={index} />
                                            </div>

                                            {/* Content */}
                                            <div className="text-center mt-6">
                                                <Text size="xs" color="slate-600" className="mb-1">
                                                    {step.duration}
                                                </Text>
                                                <Heading level="h3" color="dark" align="center" className="mb-2 text-base font-semibold">
                                                    {step.title}
                                                </Heading>
                                                <Text size="xs" weight="semibold" color="blue">
                                                    {step.keyPoint}
                                                </Text>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </div>
                        </StaggerChildren>
                    </div>
                </div>

                {/* Mobile Version - Compact cards */}
                <div className="lg:hidden mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {processSteps.map((step, index) => (
                            <SlideIn
                                key={step.title}
                                direction="left"
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card variant="default" hover className="p-5">
                                    <div className="flex items-start gap-3">
                                        <IconWrapper variant="primary" size="sm" className="flex-shrink-0">
                                            <step.icon className="h-5 w-5" aria-hidden="true" />
                                        </IconWrapper>
                                        <div className="flex-1">
                                            <div className="mb-1">
                                                <Heading level="h3" color="dark" className="text-base font-semibold mb-1">
                                                    {step.title}
                                                </Heading>
                                                <Text size="xs" color="slate-600">
                                                    {step.duration}
                                                </Text>
                                            </div>
                                            <Text size="xs" weight="semibold" color="blue">
                                                {step.keyPoint}
                                            </Text>
                                        </div>
                                    </div>
                                </Card>
                            </SlideIn>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <FadeIn className="text-center">
                    <Button
                        as="a"
                        href="/factory/contact"
                        variant="primary"
                        size="lg"
                        icon={<ArrowRight className="h-5 w-5" />}
                        aria-label="Démarrer votre projet de développement MVP"
                    >
                        Lancer mon projet
                    </Button>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <Icon size="sm" color="default">
                            <Calendar className="h-4 w-4" />
                        </Icon>
                        <Text size="sm" color="slate-600">
                            Premier sprint dans 2 semaines
                        </Text>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    )
}