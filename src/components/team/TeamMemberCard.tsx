import { Card, Heading, Text, Badge, Link } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'
import { Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'

interface TeamMemberCardProps {
    member: {
        slug: string
        name: string
        role: string
        photo: string
        expertise: string[]
        bio: string
        linkedin?: string
        github?: string
        email?: string
    }
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <FadeIn>
            <Card variant="default" hover className="h-full">
                <Link href={`/factory/equipe/${member.slug}`} className="block">
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
                        <Image
                            src={member.photo}
                            alt={`${member.name} - ${member.role}`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <Heading level="h3" color="dark" className="mb-1">
                        {member.name}
                    </Heading>
                    <Text color="blue" weight="semibold" className="mb-4">
                        {member.role}
                    </Text>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" size="sm">
                                {skill}
                            </Badge>
                        ))}
                        {member.expertise.length > 3 && (
                            <Badge variant="outline" size="sm">
                                +{member.expertise.length - 3}
                            </Badge>
                        )}
                    </div>

                    <Text size="sm" color="slate-600" className="mb-4 line-clamp-3">
                        {member.bio}
                    </Text>
                </Link>

                <div className="flex gap-3 pt-4 border-t border-slate-200">
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            aria-label={`LinkedIn de ${member.name}`}
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    )}
                    {member.github && (
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-900 transition-colors"
                            aria-label={`GitHub de ${member.name}`}
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                    {member.email && (
                        <a
                            href={`mailto:${member.email}`}
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            aria-label={`Email ${member.name}`}
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </Card>
        </FadeIn>
    )
}
