import { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Link } from '@/design-system'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/common/AnimationWrapper'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Insights - Blog technique et actualités | Kanbios Factory',
    description: 'Découvrez nos articles techniques, tutoriels, retours d\'expérience et actualités sur le développement web, mobile et cloud.',
    keywords: 'blog technique, articles développement, tutoriels, actualités tech, best practices',
}

const articles = [
    {
        slug: 'migration-microservices-retour-experience',
        title: 'Migration vers les microservices : retour d\'expérience',
        excerpt: 'Comment nous avons migré une application monolithique de 2M d\'utilisateurs vers une architecture microservices sans interruption.',
        category: 'Architecture',
        author: 'Jean Dupont',
        date: '2024-03-15',
        readTime: '8 min',
        tags: ['Microservices', 'Architecture', 'Migration']
    },
    {
        slug: 'optimisation-performance-react',
        title: 'Optimisation des performances React : le guide complet',
        excerpt: 'Techniques avancées pour améliorer les performances de vos applications React, de la mémoisation au lazy loading.',
        category: 'Frontend',
        author: 'Marie Martin',
        date: '2024-03-10',
        readTime: '12 min',
        tags: ['React', 'Performance', 'Frontend']
    },
    {
        slug: 'securite-api-best-practices',
        title: 'Sécurité des APIs : les bonnes pratiques en 2024',
        excerpt: 'Guide complet sur la sécurisation des APIs REST et GraphQL, de l\'authentification au rate limiting.',
        category: 'Security',
        author: 'Pierre Dubois',
        date: '2024-03-05',
        readTime: '10 min',
        tags: ['Security', 'API', 'Backend']
    }
]

const categories = ['Tous', 'Architecture', 'Frontend', 'Backend', 'DevOps', 'Security']

export default function InsightsPage() {
    return (
        <>
            <PageHero
                badge="Blog technique"
                title="Insights &"
                titleGradient="Expertise"
                description="Partageons nos connaissances techniques, retours d'expérience et best practices du développement moderne."
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Insights' }
                ]}
            />

            <PageSection>
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant={category === 'Tous' ? 'primary' : 'outline'}
                            size="lg"
                            className="cursor-pointer hover:bg-blue-50"
                        >
                            {category}
                        </Badge>
                    ))}
                </div>

                <StaggerChildren>
                    <Grid cols={3} gap="lg">
                        {articles.map((article) => (
                            <StaggerItem key={article.slug}>
                                <Card variant="default" hover className="h-full flex flex-col">
                                    <Badge variant="outline" size="sm" className="mb-4 self-start">
                                        {article.category}
                                    </Badge>

                                    <Heading level="h3" color="dark" className="mb-3">
                                        {article.title}
                                    </Heading>

                                    <Text color="slate-600" className="mb-4 flex-grow">
                                        {article.excerpt}
                                    </Text>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {article.tags.map((tag) => (
                                            <span key={tag} className="flex items-center gap-1 text-xs text-slate-500">
                                                <Tag className="h-3 w-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(article.date).toLocaleDateString('fr-FR')}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/factory/insights/${article.slug}`}
                                            variant="default"
                                            showArrow
                                            className="text-sm"
                                        >
                                            Lire
                                        </Link>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </Grid>
                </StaggerChildren>
            </PageSection>
        </>
    )
}
