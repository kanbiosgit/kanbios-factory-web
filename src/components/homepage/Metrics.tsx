"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Section, Text, Badge } from "@/design-system";

const metrics = [
    {
        value: 25,
        suffix: "+",
        label: "Produits livrés",
        sublabel: "en production",
    },
    {
        value: 98,
        suffix: "%",
        label: "Satisfaction",
        sublabel: "client moyenne",
    },
    {
        value: 3,
        prefix: "<",
        suffix: "",
        label: "Mois",
        sublabel: "time to market",
    },
    {
        value: 15,
        suffix: "+",
        label: "Experts seniors",
        sublabel: "dans l'équipe",
    },
];

const clientLogos = [
    {
        name: "BNP Paribas",
        logo: "https://franceactive-valdoise-yvelines.org/wp-content/uploads/2018/07/bnp-paribas-logo.png",
    },
    {
        name: "Société Générale",
        logo: "https://logo-marque.com/wp-content/uploads/2021/03/Societe-Generale-Logo.png",
    },
    {
        name: "Orange",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png",
    },
    {
        name: "Carrefour",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/1200px-Logo_Carrefour.svg.png",
    },
    {
        name: "TotalEnergies",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Logo_TotalEnergies.svg/2000px-Logo_TotalEnergies.svg.png",
    },
    {
        name: "Sanofi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Logo_Sanofi_%282022%29.png",
    },
    {
        name: "Air France",
        logo: "https://logo-marque.com/wp-content/uploads/2020/03/Air-France-Logo.png",
    },
    {
        name: "Renault",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg",
    },
];

function Counter({
    end,
    duration = 2,
    prefix = "",
    suffix = "",
}: {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => {
            clearInterval(timer);
        };
    }, [end, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}

export default function MetricsSection() {
    return (
        <>
            {/* Metrics Section with unified design */}
            <Section
                variant="light-alt"
                spacing="lg"
                className="relative overflow-hidden">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 pattern-grid opacity-[0.02]" />

                <Container size="xl" className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12">
                        <Badge variant="primary" size="lg">
                            Nos chiffres
                        </Badge>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-center group cursor-default">
                                {/* Metric card with hover effect */}
                                <div className="relative">
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-4 gradient-main opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full" />

                                    <div className="relative">
                                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-kanbios-blue to-kanbios-accent mb-2">
                                            <Counter
                                                end={metric.value}
                                                prefix={metric.prefix}
                                                suffix={metric.suffix}
                                            />
                                        </div>
                                        <Text
                                            weight="semibold"
                                            color="dark"
                                            className="text-lg">
                                            {metric.label}
                                        </Text>
                                        <Text size="sm" color="slate-600">
                                            {metric.sublabel}
                                        </Text>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Clients Section - Unified style */}
            <Section
                variant="light"
                spacing="md"
                className="border-t border-slate-100">
                <Container size="xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-10">
                        <Text
                            size="sm"
                            weight="semibold"
                            className="text-slate-400 uppercase tracking-wider">
                            Ils nous font confiance
                        </Text>
                    </motion.div>

                    {/* Logo grid with unified hover effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                        {clientLogos.map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                className="group flex items-center justify-center">
                                <div className="relative">
                                    {/* Hover glow effect */}
                                    <div className="absolute -inset-2 gradient-main opacity-0 group-hover:opacity-20 rounded-lg blur-md transition-all duration-300" />
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="relative h-12 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>
        </>
    );
}
