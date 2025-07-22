'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, HelpCircle, Lightbulb, Settings, DollarSign } from 'lucide-react'
import { Container, Section, Heading, Text, Badge, Card, Button, IconWrapper } from '@/design-system'
import { cn } from '@/lib/utils'

const faqs = [
    {
        category: 'Général',
        icon: Lightbulb,
        questions: [
            {
                question: 'Combien de temps dure un projet type ?',
                answer: 'Notre process standard est de 12 semaines pour un MVP fonctionnel. Cependant, la durée peut varier selon la complexité du projet. Pour des projets plus simples, nous pouvons livrer en 8 semaines, tandis que des projets enterprise peuvent nécessiter 16 à 20 semaines.'
            },
            {
                question: 'Travaillez-vous avec des startups ou seulement des grandes entreprises ?',
                answer: 'Nous travaillons avec les deux ! Nos clients vont de la startup early-stage aux grands groupes du CAC 40. Notre approche modulaire nous permet d\'adapter nos services et nos tarifs selon la taille et les besoins de chaque client.'
            },
            {
                question: 'Proposez-vous des services de maintenance après la livraison ?',
                answer: 'Oui, absolument. Nous proposons différents niveaux de maintenance : correctif (bugs), évolutif (nouvelles fonctionnalités) et préventif (mises à jour de sécurité). Les 3 premiers mois de maintenance corrective sont inclus dans tous nos projets.'
            }
        ]
    },
    {
        category: 'Technique',
        icon: Settings,
        questions: [
            {
                question: 'Quelles technologies utilisez-vous ?',
                answer: 'Nous sommes spécialisés dans les stacks modernes : React/Next.js et Vue.js côté frontend, Node.js/Python côté backend, et AWS/GCP pour le cloud. Nous choisissons toujours la technologie la plus adaptée à votre projet et vos contraintes.'
            },
            {
                question: 'Comment gérez-vous la scalabilité des applications ?',
                answer: 'Dès la conception, nous pensons scalabilité. Architecture microservices, conteneurisation avec Docker/Kubernetes, bases de données distribuées, CDN, et auto-scaling. Nos applications sont conçues pour supporter la croissance de votre business.'
            },
            {
                question: 'Quid de la sécurité et de la conformité RGPD ?',
                answer: 'La sécurité est notre priorité. Nous appliquons les best practices OWASP, chiffrement des données, authentification robuste, et audits réguliers. Pour le RGPD, nous implémentons privacy by design, gestion des consentements, et droit à l\'oubli.'
            }
        ]
    },
    {
        category: 'Budget & Process',
        icon: DollarSign,
        questions: [
            {
                question: 'Comment sont structurés vos tarifs ?',
                answer: 'Nous proposons deux modèles : forfait projet (prix fixe pour un périmètre défini) ou régie (facturation au temps passé). Le choix dépend de la nature du projet et de vos préférences. Nous fournissons toujours un devis détaillé avant de commencer.'
            },
            {
                question: 'Comment se passe la collaboration pendant le projet ?',
                answer: 'Nous travaillons en méthodologie agile avec des sprints de 2 semaines. Vous aurez un point quotidien avec l\'équipe, une démo à chaque fin de sprint, et un accès permanent à l\'environnement de staging pour suivre l\'avancement en temps réel.'
            },
            {
                question: 'Que se passe-t-il si le projet prend du retard ?',
                answer: 'Notre taux de livraison dans les temps est de 94%. Si un retard survient, nous communiquons immédiatement, analysons les causes, et proposons un plan d\'action. Les retards dus à des changements de périmètre sont gérés via un processus de change request transparent.'
            }
        ]
    }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            layout
            className="mb-4"
        >
            <Card
                variant="default"
                className={cn(
                    "cursor-pointer transition-all duration-300",
                    isOpen && "shadow-lg"
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-between">
                    <Text weight="semibold" color="dark" className="pr-4">
                        {question}
                    </Text>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                    >
                        <Plus className="h-5 w-5 text-blue-500" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 mt-4 border-t border-slate-200">
                                <Text color="slate-600">
                                    {answer}
                                </Text>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    )
}

// New category selector with brand identity
function CategorySelector({ categories, activeCategory, onCategoryChange }: {
    categories: typeof faqs,
    activeCategory: string,
    onCategoryChange: (category: string) => void
}) {
    return (
        <div className="relative max-w-4xl mx-auto mb-12">
            {/* Background track */}
            <div className="absolute inset-0 bg-slate-100 rounded-2xl" />

            {/* Animated indicator */}
            <motion.div
                className="absolute h-full w-1/3 gradient-main rounded-2xl shadow-lg"
                initial={false}
                animate={{
                    x: categories.findIndex(c => c.category === activeCategory) * 100 + '%'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Category buttons */}
            <div className="relative grid grid-cols-3 p-1">
                {categories.map((category) => (
                    <button
                        key={category.category}
                        onClick={() => onCategoryChange(category.category)}
                        className={cn(
                            'relative z-10 px-6 py-4 rounded-xl font-medium transition-all duration-300',
                            'flex items-center justify-center gap-3',
                            activeCategory === category.category
                                ? 'text-white'
                                : 'text-slate-700 hover:text-slate-900'
                        )}
                    >
                        <IconWrapper
                            variant={activeCategory === category.category ? "glass" : "default"}
                            size="sm"
                            shape="rounded"
                            className="transition-all duration-300"
                        >
                            <category.icon className="h-5 w-5" />
                        </IconWrapper>
                        <span className="hidden sm:inline">{category.category}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState('Général')
    const activeData = faqs.find(cat => cat.category === activeCategory)

    return (
        <Section variant="light-alt" className="relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="primary" size="lg" className="mb-6">
                        FAQ
                    </Badge>
                    <Heading as="h2" level="h2" color="dark" align="center" className="mb-4">
                        Questions fréquentes
                    </Heading>
                    <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                        Tout ce que vous devez savoir pour démarrer votre projet avec nous.
                    </Text>
                </motion.div>

                {/* New branded category selector */}
                <CategorySelector
                    categories={faqs}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Questions with improved animation */}
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeData?.questions.map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <FAQItem question={faq.question} answer={faq.answer} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA Section - Unified style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Card variant="default" className="relative overflow-hidden p-0">
                        {/* Gradient background */}
                        <div className="absolute inset-0 gradient-main opacity-5" />

                        {/* Content */}
                        <div className="relative p-8 sm:p-12 text-center">
                            <IconWrapper variant="primary" size="lg" shape="circle" className="mx-auto mb-6">
                                <HelpCircle className="h-8 w-8" />
                            </IconWrapper>

                            <Heading level="h3" color="dark" className="mb-2" align={"center"}>
                                Une question spécifique ?
                            </Heading>
                            <Text color="slate-600" className="mb-8 max-w-md mx-auto">
                                Notre équipe est là pour répondre à toutes vos interrogations et vous accompagner dans votre projet.
                            </Text>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    as="a"
                                    href="/factory/contact"
                                    variant="primary"
                                    size="lg"
                                >
                                    Contactez-nous
                                </Button>
                                <Button
                                    as="a"
                                    href="/factory/offres"
                                    variant="outline"
                                    size="lg"
                                >
                                    Voir nos offres
                                </Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </Container>
        </Section>
    )
}