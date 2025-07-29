import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Button, IconWrapper } from '@/design-system'
import { FadeIn, ScaleIn } from '@/components/common/AnimationWrapper'
import { Users, Zap, Shield, Code, Database, Cloud, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Équipe Dédiée - Experts techniques intégrés | Kanbios Factory',
    description: 'Renforcez vos équipes avec nos experts : Tech Lead, développeurs seniors, DevOps. Intégration rapide, profils CDI, opérationnels en 2 semaines.',
    keywords: 'équipe dédiée, développeurs seniors, tech lead, devops, recrutement tech, experts techniques, équipe agile',
    openGraph: {
        title: 'Équipe Dédiée - Vos experts techniques intégrés',
        description: 'Tech Lead, développeurs seniors et DevOps qui rejoignent vos équipes. Opérationnels en 2 semaines.',
    }
}

const profiles = [
    {
        role: 'Tech Lead',
        icon: Shield,
        skills: ['Architecture', 'Code Review', 'Mentoring', 'Best Practices'],
        experience: '8+ ans'
    },
    {
        role: 'Développeur Full-Stack Senior',
        icon: Code,
        skills: ['React/Vue', 'Node.js/Python', 'TypeScript', 'Tests'],
        experience: '5+ ans'
    },
    {
        role: 'DevOps Engineer',
        icon: Cloud,
        skills: ['AWS/GCP', 'Docker/K8s', 'CI/CD', 'Monitoring'],
        experience: '5+ ans'
    },
    {
        role: 'Data Engineer',
        icon: Database,
        skills: ['ETL', 'Data Pipeline', 'Cloud Data', 'Analytics'],
        experience: '5+ ans'
    }
]

const advantages = [
    { title: 'Recrutement rapide', desc: 'Profils validés en 48h', icon: Clock },
    { title: 'Flexibilité totale', desc: 'CDI, freelance ou portage', icon: Users },
    { title: 'Intégration fluide', desc: 'Dans vos process et outils', icon: Zap },
    { title: 'Suivi dédié', desc: 'Account manager attitré', icon: Shield }
]

export default function EquipeDedieePage() {
    return (
        <>
            <PageHero
                badge="Ressources humaines"
                title="Équipe technique"
                titleGradient="dédiée"
                description="Renforcez instantanément vos équipes avec nos experts seniors. Intégration rapide, collaboration fluide, résultats garantis."
                ctaText="Recruter mes experts"
                ctaHref="/factory/contact"
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Offres', href: '/factory/offres' },
                    { label: 'Équipe Dédiée' }
                ]}
            />

            <PageSection
                title="Profils disponibles immédiatement"
                subtitle="Des experts seniors prêts à rejoindre vos équipes"
            >
                <Grid cols={2} gap="lg" className="mb-16">
                    {profiles.map((profile, index) => (
                        <FadeIn key={profile.role} transition={{ delay: index * 0.1 }}>
                            <Card variant="default" hover className="h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <IconWrapper variant="primary" size="lg">
                                        <profile.icon className="h-6 w-6" />
                                    </IconWrapper>
                                    <div>
                                        <Heading level="h3" color="dark" className="mb-1">
                                            {profile.role}
                                        </Heading>
                                        <Text size="sm" color="slate-600">{profile.experience} d'expérience</Text>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {profile.skills.map((skill) => (
                                        <Badge key={skill} variant="outline" size="sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </FadeIn>
                    ))}
                </Grid>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => (
                        <ScaleIn key={advantage.title} transition={{ delay: index * 0.1 }}>
                            <div className="text-center">
                                <IconWrapper variant="glass" size="lg" shape="circle" className="mx-auto mb-4">
                                    <advantage.icon className="h-6 w-6" />
                                </IconWrapper>
                                <Heading level="h4" color="dark" className="mb-2">{advantage.title}</Heading>
                                <Text size="sm" color="slate-600">{advantage.desc}</Text>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </PageSection>

            <PageSection variant="light-alt">
                <Grid cols={2} gap="lg">
                    <FadeIn>
                        <Heading level="h3" color="dark" className="mb-6">
                            Notre processus de matching
                        </Heading>
                        <ol className="space-y-4">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                                <div>
                                    <Text weight="semibold" className="mb-1">Analyse de vos besoins</Text>
                                    <Text size="sm" color="slate-600">Call de 30min pour comprendre votre contexte</Text>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                                <div>
                                    <Text weight="semibold" className="mb-1">Sélection des profils</Text>
                                    <Text size="sm" color="slate-600">3 candidats maximum, tous validés techniquement</Text>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                                <div>
                                    <Text weight="semibold" className="mb-1">Entretiens et validation</Text>
                                    <Text size="sm" color="slate-600">Vous rencontrez les candidats sous 48h</Text>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                                <div>
                                    <Text weight="semibold" className="mb-1">Intégration rapide</Text>
                                    <Text size="sm" color="slate-600">Opérationnels en 2 semaines maximum</Text>
                                </div>
                            </li>
                        </ol>
                    </FadeIn>

                    <FadeIn transition={{ delay: 0.2 }}>
                        <Card variant="dark" className="h-full">
                            <Badge variant="secondary" className="mb-4">Garanties</Badge>
                            <Heading level="h3" color="white" className="mb-6">
                                Zéro risque pour vous
                            </Heading>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-blue-400 mt-1" />
                                    <Text color="secondary">Période d'essai de 3 mois</Text>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-blue-400 mt-1" />
                                    <Text color="secondary">Remplacement gratuit si inadéquation</Text>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-blue-400 mt-1" />
                                    <Text color="secondary">Suivi mensuel de la collaboration</Text>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-blue-400 mt-1" />
                                    <Text color="secondary">Facturation au temps réellement travaillé</Text>
                                </li>
                            </ul>
                        </Card>
                    </FadeIn>
                </Grid>
            </PageSection>

            <PageSection variant="dark">
                <FadeIn className="text-center">
                    <Heading as="h2" level="h2" color="white" align="center" className="mb-4">
                        Besoin de renfort technique ?
                    </Heading>
                    <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto">
                        Nos experts sont prêts à rejoindre vos équipes dès maintenant.
                    </Text>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            as="a"
                            href="/factory/contact"
                            variant="secondary"
                            size="lg"
                            icon={<ArrowRight className="h-5 w-5" />}
                        >
                            Recruter en 48h
                        </Button>
                        <Button
                            as="a"
                            href="/factory/cas-clients"
                            variant="ghost"
                            size="lg"
                        >
                            Voir nos réussites
                        </Button>
                    </div>
                </FadeIn>
            </PageSection>
        </>
    )
}
