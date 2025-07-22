'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageCircle, Flag, Lock } from 'lucide-react'
import { Container, Section, Heading, Text, Button, IconWrapper } from '@/design-system'

export default function CTASection() {
    return (
        <Section variant="dark" className="relative overflow-hidden gradient-main">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-blue" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-blue" style={{ animationDelay: '2s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 pattern-grid opacity-10" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Main heading with unified gradient */}
                    <Heading as="h2" level="h2" color="white" align="center" className="mb-6">
                        Prêt à transformer votre idée en{' '}
                        <span className="gradient-text">
                            succès digital ?
                        </span>
                    </Heading>

                    <Text size="lg" color="primary" className="mb-12">
                        Discutons de votre projet et voyons comment nous pouvons vous aider
                        à atteindre vos objectifs en 12 semaines.
                    </Text>

                    {/* CTA Buttons with unified style */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                as="a"
                                href="/factory/contact"
                                variant="secondary"
                                size="lg"
                                icon={<ArrowRight className="h-5 w-5" />}
                                className="shadow-lg"
                            >
                                Démarrer mon projet
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                as="a"
                                href="/factory/contact#demo"
                                variant="ghost"
                                size="lg"
                                icon={<Calendar className="h-5 w-5" />}
                            >
                                Planifier une démo
                            </Button>
                        </motion.div>
                    </div>

                    {/* Trust Indicators - Using IconWrapper for consistency */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
                    >
                        <div className="flex items-center gap-3">
                            <IconWrapper variant="glass" size="sm" shape="circle">
                                <MessageCircle className="h-4 w-4" />
                            </IconWrapper>
                            <Text size="sm" color="primary">Réponse sous 24h</Text>
                        </div>

                        <div className="flex items-center gap-3">
                            <IconWrapper variant="glass" size="sm" shape="circle">
                                <Flag className="h-4 w-4" />
                            </IconWrapper>
                            <Text size="sm" color="primary">Équipe 100% française</Text>
                        </div>

                        <div className="flex items-center gap-3">
                            <IconWrapper variant="glass" size="sm" shape="circle">
                                <Lock className="h-4 w-4" />
                            </IconWrapper>
                            <Text size="sm" color="primary">NDA systématique</Text>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    )
}