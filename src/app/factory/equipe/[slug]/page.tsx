import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/pages/PageHero'
import PageSection from '@/components/pages/PageSection'
import { Grid, Card, Heading, Text, Badge, Button } from '@/design-system'
import { FadeIn, SlideIn } from '@/components/common/AnimationWrapper'
import { getTeamMember, teamMembers } from '@/components/team/teamData'
import { Calendar, Building, GraduationCap, Briefcase, ArrowLeft, Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'

export async function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const member = getTeamMember(params.slug)

    if (!member) {
        return {
            title: 'Membre non trouvé | Kanbios Factory',
        }
    }

    return {
        title: `${member.name} - ${member.role} | Kanbios Factory`,
        description: `${member.bio} Expert technique chez Kanbios Factory.`,
        openGraph: {
            title: `${member.name} - ${member.role}`,
            description: member.bio,
            images: [member.photo],
        }
    }
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
    const member = getTeamMember(params.slug)

    if (!member) {
        notFound()
    }

    return (
        <>
            <PageHero
                badge={member.role}
                title={member.name}
                description={member.bio}
                breadcrumbs={[
                    { label: 'Factory', href: '/factory' },
                    { label: 'Équipe', href: '/factory/equipe' },
                    { label: member.name }
                ]}
            />

            <PageSection>
                <div className="mb-8">
                    <Button
                        as="a"
                        href="/factory/equipe"
                        variant="ghost"
                        size="sm"
                        icon={<ArrowLeft className="h-4 w-4" />}
                        className="text-slate-600"
                    >
                        Retour à l'équipe
                    </Button>
                </div>

                <Grid cols={3} gap="lg">
                    <div className="lg:col-span-1">
                        <FadeIn>
                            <Card variant="default" className="sticky top-24">
                                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <Heading level="h3" color="dark" className="mb-2">
                                    {member.name}
                                </Heading>
                                <Text color="blue" weight="semibold" className="mb-4">
                                    {member.role}
                                </Text>

                                <div className="flex gap-3 mb-6">
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                                            aria-label="GitHub"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                                            aria-label="Email"
                                        >
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>

                                <div>
                                    <Text size="sm" weight="semibold" color="slate-700" className="mb-3">
                                        Expertise
                                    </Text>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill) => (
                                            <Badge key={skill} variant="outline" size="sm">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        {member.experience && member.experience.length > 0 && (
                            <SlideIn direction="left">
                                <Card variant="light">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Briefcase className="h-6 w-6 text-blue-500" />
                                        <Heading level="h3" color="dark">Expérience professionnelle</Heading>
                                    </div>
                                    <div className="space-y-6">
                                        {member.experience.map((exp, index) => (
                                            <div key={index} className="relative pl-8 pb-6 border-l-2 border-slate-200 last:border-0 last:pb-0">
                                                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full" />
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <Heading level="h4" color="dark" className="text-lg">
                                                            {exp.role}
                                                        </Heading>
                                                        <div className="flex items-center gap-2 text-slate-600">
                                                            <Building className="h-4 w-4" />
                                                            <Text size="sm">{exp.company}</Text>
                                                        </div>
                                                    </div>
                                                    <Badge variant="outline" size="sm">
                                                        {exp.period}
                                                    </Badge>
                                                </div>
                                                <Text size="sm" color="slate-600">{exp.description}</Text>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </SlideIn>
                        )}

                        {member.projects && member.projects.length > 0 && (
                            <SlideIn direction="left" transition={{ delay: 0.1 }}>
                                <Card variant="light">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Calendar className="h-6 w-6 text-blue-500" />
                                        <Heading level="h3" color="dark">Projets notables</Heading>
                                    </div>
                                    <div className="space-y-4">
                                        {member.projects.map((project, index) => (
                                            <div key={index} className="p-4 bg-slate-50 rounded-lg">
                                                <Heading level="h4" color="dark" className="text-lg mb-1">
                                                    {project.name}
                                                </Heading>
                                                <Text size="sm" color="blue" weight="semibold" className="mb-2">
                                                    {project.role}
                                                </Text>
                                                <Text size="sm" color="slate-600">
                                                    {project.description}
                                                </Text>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </SlideIn>
                        )}

                        {member.education && member.education.length > 0 && (
                            <SlideIn direction="left" transition={{ delay: 0.2 }}>
                                <Card variant="light">
                                    <div className="flex items-center gap-3 mb-6">
                                        <GraduationCap className="h-6 w-6 text-blue-500" />
                                        <Heading level="h3" color="dark">Formation</Heading>
                                    </div>
                                    <div className="space-y-3">
                                        {member.education.map((edu, index) => (
                                            <div key={index} className="flex items-start justify-between">
                                                <div>
                                                    <Text weight="semibold">{edu.degree}</Text>
                                                    <Text size="sm" color="slate-600">{edu.school}</Text>
                                                </div>
                                                <Badge variant="outline" size="sm">{edu.year}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </SlideIn>
                        )}
                    </div>
                </Grid>
            </PageSection>
        </>
    )
}
