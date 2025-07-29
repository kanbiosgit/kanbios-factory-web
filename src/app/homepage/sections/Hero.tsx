import {Rocket, Users, RefreshCw, ArrowRight, Clock, Lock} from 'lucide-react'
import {
    Container,
    Section,
    Grid,
    Heading,
    Text,
    Button,
    Icon,
    CheckIcon
} from '@/design-system'
import {FadeIn, StaggerChildren} from '@/components/common/AnimationWrapper'
import {OfferCard} from '@/components/common/OfferCard'

const offers = [
    {
        icon: Rocket,
        title: "Développement End-to-End",
        subtitle: "Du MVP au scale-up",
        description: "Nous gérons tout : conception, développement, déploiement. Architecture moderne, tests automatisés, CI/CD inclus.",
        features: [
            "Lancement garanti en 3 mois",
            "Équipe senior dédiée",
            "Maintenance incluse"
        ],
        ctaText: "Estimer mon projet MVP",
        ctaHref: "/factory/offres/developpement"
    },
    {
        icon: Users,
        title: "Équipe Dédiée",
        subtitle: "Vos experts intégrés",
        description: "Tech Lead, développeurs seniors et DevOps qui rejoignent vos équipes. Intégration dans vos process existants.",
        features: [
            "Opérationnels en 2 semaines",
            "Profils en CDI et en présenciels",
            "Flexibilité totale"
        ],
        ctaText: "Recruter en 48h",
        ctaHref: "/factory/offres/equipe"
    },
    {
        icon: RefreshCw,
        title: "Modernisation & Migration",
        subtitle: "Transformation sans risque",
        description: "Audit de votre SI / migration progressive vers le cloud / Zéro interruption de service, formation incluse.",
        features: [
            "Audit d'architecture complète",
            "Migration par phases",
            "ROI garanti sous 6 mois"
        ],
        ctaText: "Obtenir mon audit gratuit",
        ctaHref: "/factory/offres/modernisation"
    }
]

export default function Hero() {
    return (
        <Section
            variant="dark"
            spacing="lg"
            className="h-screen flex items-center relative overflow-hidden pt-40"
            aria-labelledby="hero-title"
        >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,102,255,0.2) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(0,212,255,0.2) 0%, transparent 50%)`
                }}/>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 pattern-grid opacity-[0.03]" aria-hidden="true"/>

            <Container size="lg" className="relative z-10">
                {/* Hero Title with unified gradient and SEO keywords */}
                <FadeIn className="text-center mb-8">
                    <div id="hero-title">
                        <Heading
                            as="h1"
                            level="h1"
                            align="center"
                            color="white"
                            className="mb-4"
                        >
                            Développement produit digital :
                        </Heading>
                        <Heading
                            as="h2"
                            level="h2"
                            align="center"
                            color="gradient"
                            className="mb-8"
                        >
                            De l'idée au lancement en 12 semaines
                        </Heading>
                    </div>

                    <Text size="xl" color="primary" className="text-center max-w-3xl mx-auto mb-6">
                        Agence technique spécialisée dans le développement web et mobile.<br/>
                        Expertise React, Node.js, Python, CMS & Cloud. <br/>
                        Équipe senior 100% française.
                    </Text>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Text color="secondary" className="flex items-center">
                            <CheckIcon className="mr-2"/>
                            15+ développeurs seniors
                        </Text>
                        <Text color="secondary" className="flex items-center">
                            <CheckIcon className="mr-2"/>
                            100% du code vous appartient
                        </Text>
                        <Text color="secondary" className="flex items-center">
                            <CheckIcon className="mr-2"/>
                            75+ produits déjà livrés
                        </Text>
                    </div>
                </FadeIn>

                {/* Offers Grid */}
                <StaggerChildren>
                    <Grid cols={3} gap="md" className="mb-12">
                        {offers.map((offer, index) => (
                            <OfferCard key={offer.title} offer={offer} index={index}/>
                        ))}
                    </Grid>
                </StaggerChildren>

                {/* Unified CTA with urgency */}
                <FadeIn className="text-center pb-8">
                    <Button
                        as="a"
                        href="/factory/contact"
                        variant="primary"
                        size="lg"
                        icon={<ArrowRight className="h-5 w-5"/>}
                        className="hover-glow"
                        aria-label="Commencer votre projet de développement digital"
                    >
                       J'ai un projet, je veux un devis gratuit
                    </Button>
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                        <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-slate-400" aria-hidden="true"/>
                            <Text size="sm" color="muted">
                                Réponse garantie sous 24h
                            </Text>
                        </span>
                        <span className="text-slate-500 hidden sm:inline">•</span>
                        <span className="flex items-center gap-2">
                            <Lock className="h-4 w-4 text-slate-400" aria-hidden="true"/>
                            <Text size="sm" color="muted">
                                NDA systématique
                            </Text>
                        </span>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    )
}