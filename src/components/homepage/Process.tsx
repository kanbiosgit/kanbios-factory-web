"use client";

import { motion } from "framer-motion";
import {
    Search,
    Palette,
    Code,
    Rocket,
    Shield,
    TrendingUp,
} from "lucide-react";
import {
    Container,
    Section,
    Card,
    Heading,
    Text,
    Badge,
    Button,
    IconWrapper,
} from "@/design-system";

const processSteps = [
    {
        icon: Search,
        title: "Discovery",
        duration: "Semaine 1",
        description: "Analyse de vos besoins et définition des objectifs.",
        keyPoint: "Workshops & audit",
    },
    {
        icon: Palette,
        title: "Design Sprint",
        duration: "Semaines 2-3",
        description: "Conception UX/UI et validation utilisateurs.",
        keyPoint: "Prototypes testés",
    },
    {
        icon: Code,
        title: "Development",
        duration: "Semaines 4-10",
        description: "Développement agile avec livraisons continues.",
        keyPoint: "Sprints 2 semaines",
    },
    {
        icon: Rocket,
        title: "Deployment",
        duration: "Semaine 11",
        description: "Mise en production progressive.",
        keyPoint: "Zero downtime",
    },
    {
        icon: Shield,
        title: "Stabilisation",
        duration: "Semaine 12",
        description: "Optimisations et sécurité.",
        keyPoint: "Performance max",
    },
    {
        icon: TrendingUp,
        title: "Growth",
        duration: "Ongoing",
        description: "Support et évolutions.",
        keyPoint: "Maintenance incluse",
    },
];

export default function ProcessSection() {
    return (
        <Section variant="light-alt" className="relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 pattern-dots opacity-[0.03]" />

            <Container size="lg" className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-2xl mx-auto">
                    <Badge variant="primary" size="lg" className="mb-6">
                        Notre Méthodologie
                    </Badge>
                    <Heading
                        as="h2"
                        level="h2"
                        color="dark"
                        align="center"
                        className="mb-4">
                        Un process éprouvé pour votre succès
                    </Heading>
                    <Text size="lg" color="slate-600">
                        12 semaines pour transformer votre idée en produit
                        fonctionnel.
                    </Text>
                </motion.div>

                {/* Desktop Timeline - Unified design */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Base Line */}
                        <div className="absolute top-[72px] left-0 right-0 h-1 bg-slate-200 rounded-full" />

                        {/* Animated Progress Line - Unified gradient */}
                        <motion.div
                            className="absolute top-[72px] left-0 h-1 gradient-main rounded-full shadow-lg shadow-blue-500/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />

                        {/* Glowing dot animation */}
                        <motion.div
                            className="absolute top-[70px] w-2 h-2 rounded-full shadow-glow-cyan"
                            style={{
                                background:
                                    "radial-gradient(circle, #00D4FF 0%, #0066FF 100%)",
                            }}
                            initial={{ left: 0 }}
                            whileInView={{ left: "100%" }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                // delay: 0.5,
                            }}
                            viewport={{ once: true }}
                        />

                        {/* Steps Grid */}
                        <div className="grid grid-cols-6 gap-4">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative group">
                                    <div className="flex flex-col items-center relative">
                                        {/* Icon with unified style */}
                                        <div className="relative mb-4">
                                            <IconWrapper
                                                variant="default"
                                                size="lg"
                                                className="hover-glow">
                                                <step.icon className="h-8 w-8 text-blue-500" />
                                            </IconWrapper>
                                        </div>

                                        {/* Connection Dot */}
                                        <motion.div
                                            className="absolute top-[66px] w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.4,
                                            }}
                                            viewport={{ once: true }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mt-6">
                                        <Text
                                            size="xs"
                                            color="slate-600"
                                            className="mb-2">
                                            {step.duration}
                                        </Text>

                                        <Heading
                                            level="h4"
                                            color="dark"
                                            align="center"
                                            className="mb-3">
                                            {step.title}
                                        </Heading>

                                        <Text
                                            size="sm"
                                            color="slate-600"
                                            className="mb-3 line-clamp-2">
                                            {step.description}
                                        </Text>

                                        <Text
                                            size="xs"
                                            weight="semibold"
                                            color="blue">
                                            {step.keyPoint}
                                        </Text>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Version - Unified cards */}
                <div className="lg:hidden">
                    <div className="space-y-4">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}>
                                <Card variant="default" hover>
                                    <div className="flex gap-4">
                                        {/* Icon */}
                                        <IconWrapper
                                            variant="primary"
                                            size="md">
                                            <step.icon className="h-7 w-7" />
                                        </IconWrapper>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-3 mb-2">
                                                <Heading
                                                    level="h4"
                                                    color="dark">
                                                    {step.title}
                                                </Heading>
                                                <Text
                                                    size="xs"
                                                    color="slate-600">
                                                    {step.duration}
                                                </Text>
                                            </div>
                                            <Text
                                                size="sm"
                                                color="slate-600"
                                                className="mb-2">
                                                {step.description}
                                            </Text>
                                            <Text
                                                size="xs"
                                                weight="semibold"
                                                color="blue">
                                                {step.keyPoint}
                                            </Text>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA - Unified style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16">
                    <Button
                        as="a"
                        href="/factory/contact"
                        variant="primary"
                        size="lg"
                        className="hover-glow">
                        Lancer mon projet
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
