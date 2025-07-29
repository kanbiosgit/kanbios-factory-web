import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Heading, Text } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'

export const metadata: Metadata = {
    title: 'Mentions Légales | Kanbios Factory',
    description: 'Mentions légales de Kanbios Factory. Informations légales, éditeur, hébergeur et conditions d\'utilisation du site.',
    robots: 'noindex, follow'
}

export default function MentionsLegalesPage() {
    return (
        <>
            <PageHero
                title="Mentions légales"
                description="Informations légales concernant le site Kanbios Factory"
                breadcrumbs={[
                    { label: 'Mentions légales' }
                ]}
            />

            <PageSection>
                <FadeIn className="max-w-4xl mx-auto space-y-8">
                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            1. Éditeur du site
                        </Heading>
                        <div className="space-y-2 text-slate-600">
                            <Text>Kanbios Factory SAS</Text>
                            <Text>Capital social : 50 000 €</Text>
                            <Text>Siège social : 123 Avenue des Champs-Élysées, 75008 Paris</Text>
                            <Text>RCS Paris : 123 456 789</Text>
                            <Text>TVA Intracommunautaire : FR12345678901</Text>
                            <Text>Téléphone : +33 1 00 00 00 00</Text>
                            <Text>Email : contact@kanbios.fr</Text>
                        </div>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            2. Directeur de publication
                        </Heading>
                        <Text color="slate-600">
                            Le directeur de publication est Monsieur [Nom], en qualité de Président de Kanbios Factory SAS.
                        </Text>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            3. Hébergement
                        </Heading>
                        <div className="space-y-2 text-slate-600">
                            <Text>Ce site est hébergé par :</Text>
                            <Text>Vercel Inc.</Text>
                            <Text>340 S Lemon Ave #4133</Text>
                            <Text>Walnut, CA 91789</Text>
                            <Text>United States</Text>
                        </div>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            4. Propriété intellectuelle
                        </Heading>
                        <Text color="slate-600" className="mb-4">
                            L'ensemble du contenu de ce site (textes, images, vidéos, logos, marques, etc.)
                            est la propriété exclusive de Kanbios Factory SAS ou de ses partenaires.
                        </Text>
                        <Text color="slate-600">
                            Toute reproduction, distribution, modification, adaptation, retransmission ou
                            publication, même partielle, de ces différents éléments est strictement interdite
                            sans l'accord écrit de Kanbios Factory SAS.
                        </Text>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            5. Données personnelles
                        </Heading>
                        <Text color="slate-600">
                            Les informations concernant la collecte et le traitement des données personnelles
                            sont détaillées dans notre{' '}
                            <a href="/confidentialite" className="text-blue-600 hover:underline">
                                Politique de confidentialité
                            </a>.
                        </Text>
                    </section>

                    <section>
                        <Heading level="h2" color="dark" className="mb-4">
                            6. Cookies
                        </Heading>
                        <Text color="slate-600">
                            Ce site utilise des cookies pour améliorer l'expérience utilisateur.
                            Pour plus d'informations sur l'utilisation des cookies, veuillez consulter
                            notre{' '}
                            <a href="/confidentialite" className="text-blue-600 hover:underline">
                                Politique de confidentialité
                            </a>.
                        </Text>
                    </section>
                </FadeIn>
            </PageSection>
        </>
    )
}
