import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Heading, Text } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'

export const metadata: Metadata = {
    title: 'Politique de Confidentialité | Kanbios Factory',
    description: 'Politique de confidentialité de Kanbios Factory. Comment nous collectons, utilisons et protégeons vos données personnelles.',
    robots: 'noindex, follow'
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHero
                title="Politique de confidentialité"
                description="Comment nous protégeons et utilisons vos données personnelles"
                breadcrumbs={[
                    { label: 'Politique de confidentialité' }
                ]}
            />

            <PageSection>
                <FadeIn className="max-w-4xl mx-auto space-y-8">
                    <section>
                        <Text color="slate-600" className="mb-6">
                            Dernière mise à jour : 1er janvier 2024
                        </Text>

                        <Heading level="h2" color="dark" className="mb-4">
                            1. Introduction
                        </Heading>
                        <Text color="slate-600">
                            Kanbios Factory s'engage à protéger la confidentialité de vos données personnelles.
                            Cette politique de confidentialité explique comment nous collectons, utilisons et
                            protégeons vos informations lorsque vous utilisez notre site web et nos services.
                        </Text>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            2. Données collectées
                        </Heading>
                        <Text color="slate-600" className="mb-4">
                            Nous collectons les types de données suivants :
                        </Text>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Informations d'identification (nom, prénom, email)</li>
                            <li>Informations professionnelles (entreprise, poste)</li>
                            <li>Données de navigation (adresse IP, cookies)</li>
                            <li>Informations de contact (téléphone, adresse)</li>
                        </ul>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            3. Utilisation des données
                        </Heading>
                        <Text color="slate-600" className="mb-4">
                            Vos données sont utilisées pour :
                        </Text>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Fournir et améliorer nos services</li>
                            <li>Communiquer avec vous concernant vos projets</li>
                            <li>Envoyer des informations sur nos services (avec votre consentement)</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            4. Protection des données
                        </Heading>
                        <Text color="slate-600">
                            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
                            appropriées pour protéger vos données contre tout accès non autorisé, modification,
                            divulgation ou destruction. Cela inclut le chiffrement des données, l'accès
                            restreint et des audits de sécurité réguliers.
                        </Text>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            5. Vos droits
                        </Heading>
                        <Text color="slate-600" className="mb-4">
                            Conformément au RGPD, vous disposez des droits suivants :
                        </Text>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification des données inexactes</li>
                            <li>Droit à l'effacement (droit à l'oubli)</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                            <li>Droit d'opposition au traitement</li>
                        </ul>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            6. Contact
                        </Heading>
                        <Text color="slate-600">
                            Pour toute question concernant cette politique de confidentialité ou pour
                            exercer vos droits, contactez notre DPO à : privacy@kanbios.fr
                        </Text>
                    </section>
                </FadeIn>
            </PageSection>
        </>
    )
}
