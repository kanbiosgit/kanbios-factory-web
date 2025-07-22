// components/common/OfferCard.tsx
import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Card, Heading, Text, Button, IconWrapper } from '@/design-system'

interface OfferCardProps {
    icon: LucideIcon
    title: string
    subtitle: string
    description: string
    features: string[]
    ctaText: string
    ctaHref: string
}

export function OfferCard({
                              icon: Icon,
                              title,
                              subtitle,
                              description,
                              features,
                              ctaText,
                              ctaHref
                          }: OfferCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Card variant="dark" hover className="h-full">
                {/* Icon with unified style */}
                <IconWrapper variant="primary" size="lg" className="mb-6">
                    <Icon className="h-7 w-7" />
                </IconWrapper>

                {/* Content */}
                <Heading level="h3" color="white" className="mb-2">
                    {title}
                </Heading>

                <Text size="sm" color="cyan" className="mb-4">
                    {subtitle}
                </Text>

                <Text color="secondary" className="mb-6">
                    {description}
                </Text>

                {/* Features list with consistent styling */}
                <ul className="space-y-2 mb-8">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                            <Text size="sm" color="muted">
                                {feature}
                            </Text>
                        </li>
                    ))}
                </ul>

                {/* CTA with consistent button style */}
                <div className="mt-auto">
                    <Button
                        as="a"
                        href={ctaHref}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center group"
                        icon={
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        }
                    >
                        {ctaText}
                    </Button>
                </div>
            </Card>
        </motion.div>
    )
}