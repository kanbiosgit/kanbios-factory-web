import { Container, Section, Text, Badge, Heading } from "@/design-system";
import { FadeIn, ScaleIn } from "@/components/common/AnimationWrapper";

const metrics = [
    {
        value: "75+",
        label: "Produits livrés",
        sublabel: "en production",
    },
    {
        value: "100%",
        label: "Code propriétaire",
        sublabel: "vous appartient",
    },
    {
        value: "12",
        label: "Semaines",
        sublabel: "time to market",
    },
    {
        value: "15+",
        label: "Experts seniors",
        sublabel: "dans l'équipe",
    },
];

const clientLogos = [
    {
        name: "BNP Paribas",
        logo: "https://franceactive-valdoise-yvelines.org/wp-content/uploads/2018/07/bnp-paribas-logo.png",
    },
    {
        name: "Société Générale",
        logo: "https://logo-marque.com/wp-content/uploads/2021/03/Societe-Generale-Logo.png",
    },
    {
        name: "Orange",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png",
    },
    {
        name: "Carrefour",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/1200px-Logo_Carrefour.svg.png",
    },
    {
        name: "TotalEnergies",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Logo_TotalEnergies.svg/2000px-Logo_TotalEnergies.svg.png",
    },
    {
        name: "Sanofi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Logo_Sanofi_%282022%29.png",
    },
    {
        name: "Air France",
        logo: "https://logo-marque.com/wp-content/uploads/2020/03/Air-France-Logo.png",
    },
    {
        name: "Renault",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg",
    },
];

export default function MetricsSection() {
    return (
        <>
            {/* Metrics Section with unified design */}
            <Section
                variant="light-alt"
                spacing="lg"
                className="relative overflow-hidden">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 pattern-grid opacity-[0.02]" aria-hidden="true" />

                <Container size="xl" className="relative z-10">
                    <FadeIn className="text-center mb-12">
                        <Badge variant="primary" size="lg" className="mb-6">
                            Nos chiffres
                        </Badge>
                        <Heading as="h2" level="h2" color="dark" align="center" className="mb-4">
                            Une expertise technique reconnue
                        </Heading>
                        <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                            Des résultats concrets qui parlent d'eux-mêmes
                        </Text>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {metrics.map((metric, index) => (
                            <FadeIn
                                key={metric.label}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group cursor-default">
                                {/* Metric card with hover effect */}
                                <div className="relative">
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-4 gradient-main opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full" aria-hidden="true" />

                                    <div className="relative">
                                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                                            {metric.value}
                                        </div>
                                        <Text
                                            weight="semibold"
                                            color="dark"
                                            className="text-lg">
                                            {metric.label}
                                        </Text>
                                        <Text size="sm" color="slate-600">
                                            {metric.sublabel}
                                        </Text>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Clients Section - Unified style */}
            <Section
                variant="light"
                spacing="md"
                className="border-t border-slate-100">
                <Container size="xl">
                    <FadeIn className="text-center mb-10">
                        <Heading
                            as="h2"
                            level="h3"
                            color="dark"
                            align="center"
                            className="mb-2"
                        >
                            Ils nous font confiance
                        </Heading>
                        <Text
                            size="sm"
                            color="slate-600"
                        >
                            Des entreprises leaders pour leur transformation digitale
                        </Text>
                    </FadeIn>

                    {/* Logo grid with unified hover effect */}
                    <FadeIn transition={{ duration: 0.6, delay: 0.2 }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                            {clientLogos.map((client, index) => (
                                <ScaleIn
                                    key={client.name}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="group flex items-center justify-center">
                                    <div className="relative">
                                        {/* Hover glow effect */}
                                        <div className="absolute -inset-2 gradient-main opacity-0 group-hover:opacity-20 rounded-lg blur-md transition-all duration-300" aria-hidden="true" />
                                        <img
                                            src={client.logo}
                                            alt={`${client.name} - Client Kanbios Factory`}
                                            className="relative h-12 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                            loading="lazy"
                                            width="120"
                                            height="48"
                                        />
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}