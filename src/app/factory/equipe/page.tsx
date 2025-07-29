import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Heading, Text, Badge } from '@/design-system'
import TeamMemberCard from '@/components/team/TeamMemberCard'
import { teamMembers } from '@/components/team/teamData'
import { FadeIn } from '@/components/common/AnimationWrapper'

export const metadata: Metadata = {
    title: 'Notre Équipe - Experts techniques seniors | Kanbios Factory',
    description: 'Découvrez l\'équipe d\'experts techniques de Kanbios Factory. Développeurs seniors, architectes, DevOps avec 5 à 15 ans d\'expérience.',
    keywords: 'équipe technique, développeurs seniors, experts React, experts Node.js, DevOps, architectes cloud',
    openGraph: {
        title: 'L\'équipe Kanbios Factory - Experts techniques',
        description: 'Une équipe de passionnés avec plus de 100 ans d\'expérience cumulée.',
    }
}

const departments = [
    { name: 'Leadership', count: 2 },
    { name: 'Développement', count: 8 },
    { name: 'DevOps', count: 3 },
    { name: 'Design', count: 2 }
]

export default function TeamPage() {
    return (
        <>
            <PageHero
                badge="Notre équipe"
                title="Les experts qui font"
                titleGradient="la différence"
                description="Une équipe de passionnés, sélectionnés pour leur expertise technique et leur capacité à transformer des idées en produits exceptionnels."
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Équipe' }
                ]}
            />

            <PageSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {departments.map((dept) => (
                        <FadeIn key={dept.name}>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                                    {dept.count}
                                </div>
                                <Text color="slate-600">{dept.name}</Text>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn className="text-center mb-12">
                    <Heading level="h2" color="dark" align="center" className="mb-4">
                        Une équipe soudée et complémentaire
                    </Heading>
                    <Text size="lg" color="slate-600" className="max-w-3xl mx-auto">
                        Chaque membre de notre équipe apporte une expertise unique. Ensemble, nous formons
                        une force technique capable de relever tous les défis.
                    </Text>
                </FadeIn>

                <Grid cols={3} gap="lg">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.slug} member={member} />
                    ))}
                </Grid>
            </PageSection>

            <PageSection variant="light-alt">
                <FadeIn className="text-center">
                    <Badge variant="primary" size="lg" className="mb-6">
                        Nous recrutons
                    </Badge>
                    <Heading level="h2" color="dark" align="center" className="mb-4">
                        Rejoignez l'aventure Kanbios Factory
                    </Heading>
                    <Text size="lg" color="slate-600" className="max-w-2xl mx-auto mb-8">
                        Nous sommes toujours à la recherche de talents passionnés pour renforcer notre équipe.
                    </Text>
                    <a
                        href="mailto:recrutement@kanbios.fr"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        Voir nos offres d'emploi →
                    </a>
                </FadeIn>
            </PageSection>
        </>
    )
}
