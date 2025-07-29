// FAQ.tsx - Server Component with Progressive Enhancement
import { HelpCircle, Lightbulb, Settings, DollarSign, Plus } from 'lucide-react'
import { Container, Section, Heading, Text, Badge, Card, Button, IconWrapper } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'
import Script from 'next/script'

const faqs = [
    {
        category: 'Général',
        icon: Lightbulb,
        id: 'general',
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
        id: 'technique',
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
        id: 'budget',
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

export default function FAQSection() {
    return (
        <Section variant="light-alt" className="relative overflow-hidden" id="faq" aria-labelledby="faq-title">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" aria-hidden="true" />

            <Container className="relative z-10">
                <FadeIn className="text-center mb-16">
                    <Badge variant="primary" size="lg" className="mb-6">
                        FAQ
                    </Badge>
                    <div id="faq-title">
                        <Heading as="h2" level="h2" color="dark" align="center" className="mb-4">
                            Questions fréquentes sur nos services de développement
                        </Heading>
                    </div>
                    <Text size="lg" color="slate-600" className="max-w-2xl mx-auto">
                        Tout ce que vous devez savoir pour démarrer votre projet de développement web,
                        mobile ou logiciel avec Kanbios Factory.
                    </Text>
                </FadeIn>

                {/* Category selector with data attributes */}
                <div className="max-w-4xl mx-auto mb-12" data-faq-tabs>
                    <div className="relative">
                        {/* Background track */}
                        <div className="absolute inset-0 bg-slate-100 rounded-2xl" />

                        {/* Animated indicator */}
                        <div
                            className="absolute h-full w-1/3 gradient-main rounded-2xl shadow-lg transition-transform duration-300"
                            data-faq-indicator
                            style={{ transform: 'translateX(0%)' }}
                        />

                        {/* Category buttons */}
                        <div className="relative grid grid-cols-3 p-1">
                            {faqs.map((category, index) => (
                                <button
                                    key={category.id}
                                    data-faq-tab={category.id}
                                    data-faq-index={index}
                                    className={`
                                        relative z-10 px-6 py-4 rounded-xl font-medium transition-all duration-300
                                        flex items-center justify-center gap-3
                                        ${index === 0 ? 'text-white' : 'text-slate-700 hover:text-slate-900'}
                                    `}
                                    aria-label={`Voir les questions ${category.category}`}
                                >
                                    <IconWrapper
                                        variant={index === 0 ? "glass" : "default"}
                                        size="sm"
                                        shape="rounded"
                                        data-faq-icon
                                    >
                                        <category.icon className="h-5 w-5" />
                                    </IconWrapper>
                                    <span className="hidden sm:inline">{category.category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Content panels */}
                <div className="max-w-3xl mx-auto">
                    {faqs.map((category, categoryIndex) => (
                        <div
                            key={category.id}
                            data-faq-panel={category.id}
                            className={`space-y-4 ${categoryIndex !== 0 ? 'hidden' : ''}`}
                        >
                            <FadeIn>
                                <Heading level="h3" color="dark" className="mb-4 flex items-center gap-3">
                                    <IconWrapper variant="primary" size="sm">
                                        <category.icon className="h-5 w-5" />
                                    </IconWrapper>
                                    {category.category}
                                </Heading>
                            </FadeIn>

                            {category.questions.map((faq, index) => (
                                <FadeIn key={index} transition={{ delay: index * 0.1 }}>
                                    <details
                                        className="group bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                            <Text weight="semibold" color="dark" className="pr-4">
                                                {faq.question}
                                            </Text>
                                            <div className="flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
                                                <Plus className="h-5 w-5 text-blue-500" />
                                            </div>
                                        </summary>
                                        <div className="px-6 pb-6">
                                            <div className="pt-4 border-t border-slate-200">
                                                <Text color="slate-600">
                                                    {faq.answer}
                                                </Text>
                                            </div>
                                        </div>
                                    </details>
                                </FadeIn>
                            ))}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <FadeIn className="mt-16">
                    <Card variant="default" className="relative overflow-hidden p-0">
                        <div className="absolute inset-0 gradient-main opacity-5" aria-hidden="true" />
                        <div className="relative p-8 sm:p-12 text-center">
                            <IconWrapper variant="primary" size="lg" shape="circle" className="mx-auto mb-6">
                                <HelpCircle className="h-8 w-8" aria-label="Questions" />
                            </IconWrapper>
                            <Heading level="h3" color="dark" className="mb-2" align="center">
                                Une question spécifique sur votre projet ?
                            </Heading>
                            <Text color="slate-600" className="mb-8 max-w-md mx-auto">
                                Notre équipe d'experts est là pour répondre à toutes vos interrogations
                                et vous accompagner dans votre transformation digitale.
                            </Text>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    as="a"
                                    href="/factory/contact"
                                    variant="primary"
                                    size="lg"
                                    aria-label="Contactez notre équipe d'experts"
                                >
                                    Contactez-nous
                                </Button>
                                <Button
                                    as="a"
                                    href="/factory/offres"
                                    variant="outline"
                                    size="lg"
                                    aria-label="Découvrir nos offres de développement"
                                >
                                    Voir nos offres
                                </Button>
                            </div>
                        </div>
                    </Card>
                </FadeIn>
            </Container>

            {/* Progressive Enhancement Script */}
            <Script id="faq-enhancement" strategy="afterInteractive">
                {`
                    (function() {
                        const tabsContainer = document.querySelector('[data-faq-tabs]');
                        if (!tabsContainer) return;

                        const tabs = tabsContainer.querySelectorAll('[data-faq-tab]');
                        const panels = document.querySelectorAll('[data-faq-panel]');
                        const indicator = tabsContainer.querySelector('[data-faq-indicator]');

                        tabs.forEach((tab, index) => {
                            tab.addEventListener('click', () => {
                                // Update active state
                                tabs.forEach((t, i) => {
                                    const icon = t.querySelector('[data-faq-icon]');
                                    if (i === index) {
                                        t.classList.add('text-white');
                                        t.classList.remove('text-slate-700', 'hover:text-slate-900');
                                        if (icon) icon.setAttribute('variant', 'glass');
                                    } else {
                                        t.classList.remove('text-white');
                                        t.classList.add('text-slate-700', 'hover:text-slate-900');
                                        if (icon) icon.setAttribute('variant', 'default');
                                    }
                                });

                                // Move indicator
                                if (indicator) {
                                    indicator.style.transform = 'translateX(' + (index * 100) + '%)';
                                }

                                // Show/hide panels with fade effect
                                panels.forEach((panel, i) => {
                                    if (i === index) {
                                        panel.style.display = 'block';
                                        setTimeout(() => {
                                            panel.classList.add('opacity-100');
                                            panel.classList.remove('opacity-0');
                                        }, 10);
                                    } else {
                                        panel.classList.add('opacity-0');
                                        panel.classList.remove('opacity-100');
                                        setTimeout(() => {
                                            panel.style.display = 'none';
                                        }, 300);
                                    }
                                });
                            });
                        });

                        // Add fade transition to panels
                        panels.forEach(panel => {
                            panel.classList.add('transition-opacity', 'duration-300');
                            if (panel.style.display !== 'none') {
                                panel.classList.add('opacity-100');
                            } else {
                                panel.classList.add('opacity-0');
                            }
                        });
                    })();
                `}
            </Script>
        </Section>
    )
}