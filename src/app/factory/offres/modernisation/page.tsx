import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Text, Button } from '@/design-system'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Modernisation & Migration - Transformation sans risque | Kanbios Factory',
    description: 'Service de modernisation et migration de vos systèmes legacy. Audit complet, migration progressive, zéro interruption de service.',
    keywords: 'modernisation SI, migration cloud, transformation digitale, legacy, audit technique',
}

export default function ModernisationPage() {
    return (
        <>
            <PageHero
                badge="Transformation"
                title="Modernisation &"
                titleGradient="Migration"
                description="Transformez vos systèmes legacy en architectures modernes et scalables. Migration progressive, zéro interruption."
                ctaText="Demander un audit gratuit"
                ctaHref="/factory/contact"
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Offres', href: '/factory/offres' },
                    { label: 'Modernisation' }
                ]}
            />

            <PageSection>
                <Text>Page en construction...</Text>
                <Button as="a" href="/factory/contact" variant="primary" icon={<ArrowRight />}>
                    Contactez-nous
                </Button>
            </PageSection>
        </>
    )
}
