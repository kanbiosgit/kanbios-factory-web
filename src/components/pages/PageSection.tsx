import { Container, Section, Heading, Text } from '@/design-system'
import { FadeIn } from '@/components/common/AnimationWrapper'

interface PageSectionProps {
    variant?: 'light' | 'light-alt' | 'dark'
    title?: string
    subtitle?: string
    children: React.ReactNode
    id?: string
}

export default function PageSection({
    variant = 'light',
    title,
    subtitle,
    children,
    id
}: PageSectionProps) {
    return (
        <Section variant={variant} id={id}>
            <Container size="lg">
                {title && (
                    <FadeIn className="text-center mb-12">
                        <Heading as="h2" level="h2" color={variant === 'dark' ? 'white' : 'dark'} align="center" className="mb-4">
                            {title}
                        </Heading>
                        {subtitle && (
                            <Text size="lg" color={variant === 'dark' ? 'secondary' : 'slate-600'} className="max-w-2xl mx-auto">
                                {subtitle}
                            </Text>
                        )}
                    </FadeIn>
                )}
                {children}
            </Container>
        </Section>
    )
}
