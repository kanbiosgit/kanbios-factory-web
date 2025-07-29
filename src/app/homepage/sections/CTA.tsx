import { ArrowRight, Calendar, MessageCircle, Flag, Lock } from 'lucide-react'
import { Container, Section, Heading, Text, Button, IconWrapper } from '@/design-system'
import { FadeIn, ScaleIn } from '@/components/common/AnimationWrapper'

export default function CTASection() {
    return (
        <Section variant="dark" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" id="cta" aria-labelledby="cta-title">
            {/* Animated background elements */}
            <div className="absolute inset-0" aria-hidden="true">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(rgba(0,102,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(0,102,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <Container className="relative z-10">
                <FadeIn className="text-center max-w-3xl mx-auto">
                    {/* Main heading with unified gradient */}
                    <div id="cta-title">
                        <Heading as="h2" level="h2" color="white" align="center" className="mb-6">
                            Prêt à transformer votre idée en{' '}
                            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent inline-block">
                                succès digital ?
                            </span>
                        </Heading>
                    </div>

                    <Text size="lg" color="primary" className="mb-12">
                        Discutons de votre projet de développement web ou mobile et voyons comment
                        notre équipe d'experts peut vous aider à atteindre vos objectifs en 12 semaines.
                    </Text>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ScaleIn>
                            <Button
                                as="a"
                                href="/factory/contact"
                                variant="secondary"
                                size="lg"
                                icon={<ArrowRight className="h-5 w-5" />}
                                className="shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                                aria-label="Démarrer votre projet de développement digital"
                            >
                                Démarrer mon projet
                            </Button>
                        </ScaleIn>

                        <ScaleIn transition={{ delay: 0.1 }}>
                            <Button
                                as="a"
                                href="/factory/contact#demo"
                                variant="ghost"
                                size="lg"
                                icon={<Calendar className="h-5 w-5" />}
                                className="hover:scale-105 transform transition-all duration-300"
                                aria-label="Planifier une démonstration de nos réalisations"
                            >
                                Planifier une démo
                            </Button>
                        </ScaleIn>
                    </div>

                    {/* Trust Indicators */}
                    <FadeIn transition={{ delay: 0.3 }} className="mt-12">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <div className="flex items-center gap-3 group">
                                <IconWrapper variant="glass" size="sm" shape="circle" className="group-hover:scale-110 transition-transform">
                                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                                </IconWrapper>
                                <Text size="sm" color="secondary">Réponse garantie sous 24h</Text>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <IconWrapper variant="glass" size="sm" shape="circle" className="group-hover:scale-110 transition-transform">
                                    <Flag className="h-4 w-4" aria-hidden="true" />
                                </IconWrapper>
                                <Text size="sm" color="secondary">Équipe 100% française</Text>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <IconWrapper variant="glass" size="sm" shape="circle" className="group-hover:scale-110 transition-transform">
                                    <Lock className="h-4 w-4" aria-hidden="true" />
                                </IconWrapper>
                                <Text size="sm" color="secondary">NDA systématique</Text>
                            </div>
                        </div>
                    </FadeIn>
                </FadeIn>
            </Container>
        </Section>
    )
}