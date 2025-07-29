import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Heading, Text } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'

export const metadata: Metadata = {
    title: 'Conditions Générales de Vente | Kanbios Factory',
    description: 'Conditions générales de vente des services Kanbios Factory. Prestations de développement, modalités et engagements.',
    robots: 'noindex, follow'
}

export default function CGVPage() {
    return (
        <>
            <PageHero
                title="Conditions Générales de Vente"
                description="Conditions applicables à nos prestations de services"
                breadcrumbs={[
                    { label: 'CGV' }
                ]}
            />

            <PageSection>
                <FadeIn className="max-w-4xl mx-auto space-y-8">
                    <section>
                        <Text color="slate-600" className="mb-6">
                            En vigueur au 1er janvier 2024
                        </Text>

                        <Heading level="h2" color="dark" className="mb-4">
                            Article 1 - Objet
                        </Heading>
                        <Text color="slate-600">
                            Les présentes conditions générales de vente (CGV) s'appliquent à toutes les
                            prestations de services de développement informatique, conseil et formation
                            réalisées par Kanbios Factory SAS.
                        </Text>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            Article 2 - Prestations
                        </Heading>
                        <Text color="slate-600" className="mb-4">
                            Kanbios Factory propose les services suivants :
                        </Text>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Développement d'applications web et mobiles</li>
                            <li>Mise à disposition d'équipes techniques</li>
                            <li>Services de migration et modernisation</li>
                            <li>Audit et conseil technique</li>
                            <li>Formation et accompagnement</li>
                        </ul>
                    </section>

                    {/* Add more sections as needed */}
                </FadeIn>
            </PageSection>
        </>
    )
}
