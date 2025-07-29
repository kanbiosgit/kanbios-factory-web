import { Container, Section, Heading, Text, Badge, Button } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
    badge?: string
    title: string
    titleGradient?: string
    description: string
    ctaText?: string
    ctaHref?: string
    breadcrumbs?: Array<{ label: string; href?: string }>
}

export default function PageHero({
    badge,
    title,
    titleGradient,
    description,
    ctaText,
    ctaHref,
    breadcrumbs
}: PageHeroProps) {
    return (
        <Section variant="dark" className="relative overflow-hidden pt-32 pb-20">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,102,255,0.2) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(0,212,255,0.2) 0%, transparent 50%)`
            }} />

            <Container size="lg" className="relative z-10">
                {breadcrumbs && (
                    <nav aria-label="Fil d'Ariane" className="mb-8">
                        <ol className="flex items-center gap-2 text-sm text-slate-400">
                            <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span>/</span>
                                    {crumb.href ? (
                                        <a href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</a>
                                    ) : (
                                        <span className="text-white">{crumb.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                <FadeIn className="text-center">
                    {badge && (
                        <Badge variant="secondary" size="lg" className="mb-6">
                            {badge}
                        </Badge>
                    )}
                    <Heading as="h1" level="h1" color="white" align="center" className="mb-6">
                        {title}
                        {titleGradient && (
                            <>
                                {' '}
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    {titleGradient}
                                </span>
                            </>
                        )}
                    </Heading>
                    <Text size="xl" color="secondary" className="max-w-3xl mx-auto mb-8">
                        {description}
                    </Text>
                    {ctaText && ctaHref && (
                        <Button
                            as="a"
                            href={ctaHref}
                            variant="primary"
                            size="lg"
                            icon={<ArrowRight className="h-5 w-5" />}
                        >
                            {ctaText}
                        </Button>
                    )}
                </FadeIn>
            </Container>
        </Section>
    )
}
