import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge } from '@/design-system'
import { FadeIn, Counter } from '@/components/common/AnimationWrapper'
import { Target, Heart, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
    title: 'À propos - Agence technique spécialisée | Kanbios Factory',
    description: 'Kanbios Factory est une agence technique spécialisée dans le développement web et mobile. 15+ experts, 75+ projets livrés, 100% français.',
    keywords: 'agence technique, développement web, développement mobile, équipe française, expertise technique',
    openGraph: {
        title: 'À propos de Kanbios Factory',
        description: 'Découvrez notre équipe d\'experts techniques et notre approche du développement digital.',
    }
}

const values = [
    {
        icon: Target,
        title: 'Excellence technique',
        description: 'Nous visons la perfection dans chaque ligne de code, chaque architecture, chaque déploiement.'
    },
    {
        icon: Heart,
        title: 'Passion du produit',
        description: 'Nous nous investissons dans vos projets comme si c\'étaient les nôtres, avec passion et dévouement.'
    },
    {
        icon: Zap,
        title: 'Agilité maximale',
        description: 'Nous nous adaptons rapidement aux changements et livrons de la valeur en continu.'
    },
    {
        icon: Shield,
        title: 'Transparence totale',
        description: 'Communication claire, reporting régulier, et honnêteté dans tous nos échanges.'
    }
]

const stats = [
    { value: 75, suffix: '+', label: 'Projets livrés' },
    { value: 15, suffix: '+', label: 'Experts seniors' },
    { value: 94, suffix: '%', label: 'Taux de satisfaction' },
    { value: 100, suffix: '%', label: 'Code propriétaire' }
]

export default function AboutPage() {
    return (
        <>
            <PageHero
                badge="Qui sommes-nous"
                title="L'expertise technique"
                titleGradient="au service de vos ambitions"
                description="Kanbios Factory est née de la volonté de créer une agence technique différente, où l'excellence du code rencontre la compréhension business."
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'À propos' }
                ]}
            />

            <PageSection>
                <Grid cols={2} gap="lg" className="mb-16">
                    <FadeIn>
                        <Heading level="h2" color="dark" className="mb-6">
                            Notre histoire
                        </Heading>
                        <div className="space-y-4 text-slate-600">
                            <Text>
                                Fondée en 2020, Kanbios Factory est née d'un constat simple : trop d'entreprises
                                peinent à trouver des partenaires techniques fiables pour leurs projets digitaux.
                            </Text>
                            <Text>
                                Notre mission est de combler ce gap en proposant une expertise technique de pointe,
                                une approche agile éprouvée, et un engagement total dans la réussite de vos projets.
                            </Text>
                            <Text>
                                Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 75 entreprises dans leur
                                transformation digitale, du startup early-stage aux grands groupes du CAC 40.
                            </Text>
                        </div>
                    </FadeIn>

                    <FadeIn transition={{ delay: 0.2 }}>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <Card key={stat.label} variant="light" className="text-center">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                                        <Counter end={stat.value} />
                                        {stat.suffix}
                                    </div>
                                    <Text color="slate-600">{stat.label}</Text>
                                </Card>
                            ))}
                        </div>
                    </FadeIn>
                </Grid>

                <div>
                    <FadeIn className="text-center mb-12">
                        <Heading level="h2" color="dark" align="center" className="mb-4">
                            Nos valeurs fondamentales
                        </Heading>
                        <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                            Ces principes guident chaque décision, chaque projet, chaque ligne de code.
                        </Text>
                    </FadeIn>

                    <Grid cols={2} gap="lg">
                        {values.map((value, index) => (
                            <FadeIn key={value.title} transition={{ delay: index * 0.1 }}>
                                <Card variant="default" hover className="h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <value.icon className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <Heading level="h3" color="dark" className="mb-2">
                                                {value.title}
                                            </Heading>
                                            <Text color="slate-600">{value.description}</Text>
                                        </div>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </Grid>
                </div>
            </PageSection>

            <PageSection variant="light-alt">
                <FadeIn className="text-center mb-12">
                    <Badge variant="primary" size="lg" className="mb-6">
                        Certifications & Partenariats
                    </Badge>
                    <Heading level="h2" color="dark" align="center" className="mb-4">
                        Reconnus par les meilleurs
                    </Heading>
                </FadeIn>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Badge variant="outline" className="px-6 py-3 text-lg">AWS Partner</Badge>
                    <Badge variant="outline" className="px-6 py-3 text-lg">Google Cloud Partner</Badge>
                    <Badge variant="outline" className="px-6 py-3 text-lg">Strapi Gold Partner</Badge>
                    <Badge variant="outline" className="px-6 py-3 text-lg">ISO 27001</Badge>
                </div>
            </PageSection>
        </>
    )
}
