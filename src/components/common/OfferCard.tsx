import {LucideIcon, ArrowRight} from 'lucide-react'
import {Card, Heading, Text, Button, IconWrapper} from '@/design-system'
import {StaggerItem} from '@/components/common/AnimationWrapper'

interface OfferCardProps {
    offer: {
        icon: LucideIcon
        title: string
        subtitle: string
        description: string
        features: string[]
        ctaText: string
        ctaHref: string
    }
    index: number
}

export function OfferCard({offer}: OfferCardProps) {
    return (
        <StaggerItem>
            <Card variant="dark" hover className="h-full p-6 flex flex-col">
                {/* Header with icon and title - fixed layout */}
                <div className="flex gap-3 h-[80px] items-center">
                    <IconWrapper variant="primary" size="md" className="flex-shrink-0">
                        <offer.icon className="h-6 w-6" aria-hidden="true"/>
                    </IconWrapper>
                    <div>
                        <Heading level="h3" color="white" className="mb-1">
                            {offer.title}
                        </Heading>
                    </div>
                </div>
                <Text size="sm" color="cyan">
                    {offer.subtitle}
                </Text>

                {/* Body content - all left aligned */}
                <div className="flex-1 flex flex-col">
                    {/* Description */}
                    <Text size="sm" color="secondary" className="mb-4">
                        {offer.description}
                    </Text>

                    {/* Features */}
                    <ul className="space-y-2 flex-1" role="list">
                        {offer.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="text-cyan-400">•</span>
                                <Text size="sm" color="muted">
                                    {feature}
                                </Text>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Button always at bottom */}
                <Button
                    as="a"
                    href={offer.ctaHref}
                    variant="ghost"
                    size="sm"
                    fullWidth
                    className="justify-center mt-6"
                    icon={<ArrowRight className="h-4 w-4"/>}
                    aria-label={`${offer.ctaText} - ${offer.title}`}
                >
                    {offer.ctaText}
                </Button>
            </Card>
        </StaggerItem>
    )
}