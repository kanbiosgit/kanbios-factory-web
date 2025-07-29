import { Container, Section, Heading, Text, Badge, Card, IconWrapper, Progress } from '@/design-system'
import { Palette, Code, Shield, Zap, Globe, Microscope, Check, Activity, RefreshCw, ShieldCheck } from 'lucide-react'
import { FadeIn, ScaleIn, StaggerChildren, StaggerItem } from '@/components/common/AnimationWrapper'

const techCategories = [
    {
        title: 'Frontend',
        icon: Palette,
        technologies: [
            { name: 'React', level: 5 },
            { name: 'Next.js', level: 5 },
            { name: 'Vue.js', level: 4 },
            { name: 'TypeScript', level: 5 },
            { name: 'Tailwind CSS', level: 5 },
            { name: 'React Native', level: 4 }
        ]
    },
    {
        title: 'Backend',
        icon: Code,
        technologies: [
            { name: 'Node.js', level: 5 },
            { name: 'Python', level: 4 },
            { name: 'Go', level: 3 },
            { name: 'GraphQL', level: 5 },
            { name: 'PostgreSQL', level: 5 },
            { name: 'MongoDB', level: 4 }
        ]
    },
    {
        title: 'CMS & No-Code',
        icon: Globe,
        technologies: [
            { name: 'Strapi', level: 5 },
            { name: 'WordPress', level: 4 },
            { name: 'Webflow', level: 4 },
            { name: 'Sanity', level: 4 },
            { name: 'Contentful', level: 3 },
            { name: 'Shopify', level: 4 }
        ]
    },
    {
        title: 'DevOps & Cloud',
        icon: Shield,
        technologies: [
            { name: 'AWS', level: 5 },
            { name: 'Docker', level: 5 },
            { name: 'Kubernetes', level: 4 },
            { name: 'CI/CD', level: 5 },
            { name: 'Terraform', level: 4 },
            { name: 'Vercel', level: 5 }
        ]
    },
    {
        title: 'Data & AI',
        icon: Zap,
        technologies: [
            { name: 'OpenAI API', level: 5 },
            { name: 'LangChain', level: 4 },
            { name: 'Elasticsearch', level: 4 },
            { name: 'Redis', level: 5 },
            { name: 'TensorFlow', level: 3 },
            { name: 'Pinecone', level: 3 }
        ]
    },
    {
        title: 'Architecture & Audit',
        icon: Microscope,
        technologies: [
            { name: 'Audit technique', level: 5 },
            { name: 'Architecture SI', level: 5 },
            { name: 'Due Diligence', level: 4 },
            { name: 'Tests de charge', level: 5 },
            { name: 'Sécurité & RGPD', level: 5 },
            { name: 'Monitoring', level: 4 }
        ]
    }
]

function ExpertiseLevel({ level }: { level: number }) {
    const percentage = (level / 5) * 100
    return (
        <div className="w-32">
            <Progress value={percentage} variant="gradient" />
        </div>
    )
}

export default function TechnologiesSection() {
    return (
        <Section variant="dark" className="relative overflow-hidden" id="technologies" aria-labelledby="tech-title">
            {/* Background pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0,102,255,0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 20%, rgba(0,212,255,0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 40% 40%, rgba(0,158,255,0.2) 0%, transparent 50%)`
                }} aria-hidden="true" />
            </div>

            <Container size="xl" className="relative z-10">
                <FadeIn className="text-center mb-16">
                    <Badge variant="secondary" size="lg" className="mb-6">
                        Stack Technique
                    </Badge>
                    <div id="tech-title">
                        <Heading as="h2" level="h2" color="white" align="center" className="mb-4">
                            Technologies de pointe pour des solutions durables
                        </Heading>
                    </div>
                    <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
                        Nous maîtrisons les technologies les plus modernes pour garantir
                        performance, scalabilité et maintenabilité.
                    </Text>
                </FadeIn>

                <StaggerChildren>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {techCategories.map((category, categoryIndex) => (
                            <StaggerItem key={category.title}>
                                <Card variant="dark" hover className="h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <IconWrapper variant="primary" size="md">
                                            <category.icon className="h-6 w-6" aria-label={category.title} />
                                        </IconWrapper>
                                        <Heading level="h3" color="white">
                                            {category.title}
                                        </Heading>
                                    </div>

                                    <div className="space-y-3">
                                        {category.technologies.map((tech, techIndex) => (
                                            <FadeIn
                                                key={tech.name}
                                                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                                            >
                                                <Text weight="medium" color="secondary">
                                                    {tech.name}
                                                </Text>
                                                <ExpertiseLevel level={tech.level} />
                                            </FadeIn>
                                        ))}
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerChildren>

                {/* Tech Philosophy */}
                <FadeIn>
                    <Card variant="glass" className="text-center p-8">
                        <Heading level="h3" color="white" className="mb-8" align="center">
                            Notre approche technique
                        </Heading>
                        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { icon: Check, title: 'Best practices', desc: 'Code propre et maintenable' },
                                { icon: Activity, title: 'Performance', desc: 'Optimisation continue' },
                                { icon: RefreshCw, title: 'Évolutivité', desc: 'Architecture scalable' },
                                { icon: ShieldCheck, title: 'Sécurité', desc: 'Protection maximale' }
                            ].map((item, index) => (
                                <ScaleIn
                                    key={item.title}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="group cursor-default"
                                >
                                    <IconWrapper variant="glass" size="lg" className="mx-auto mb-3">
                                        <item.icon className="h-7 w-7" aria-label={item.title} />
                                    </IconWrapper>
                                    <Text weight="semibold" color="white" className="mb-1">
                                        {item.title}
                                    </Text>
                                    <Text size="sm" color="secondary">
                                        {item.desc}
                                    </Text>
                                </ScaleIn>
                            ))}
                        </div>
                    </Card>
                </FadeIn>

                {/* Special expertise */}
                <FadeIn className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <Badge variant="secondary" className="flex items-center gap-2">
                            <Globe className="h-4 w-4" aria-hidden="true" />
                            Experts certifiés Strapi, WordPress & Webflow
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-2">
                            <Microscope className="h-4 w-4" aria-hidden="true" />
                            Audits techniques pour CTO & investisseurs
                        </Badge>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    )
}