export const caseStudies = [
    {
        id: 'fintech-financeflow',
        client: 'FinanceFlow',
        industry: 'FinTech',
        logo: '/logos/financeflow.svg',
        heroImage: '/case-studies/financeflow-hero.jpg',
        challenge: 'FinanceFlow, une startup fintech en pleine croissance, faisait face à des limitations majeures avec son application bancaire legacy. Le système monolithique ne pouvait plus supporter la charge croissante et les nouvelles réglementations PCI-DSS et DSP2 nécessitaient une refonte complète de l\'architecture.',
        solution: {
            summary: 'Migration progressive vers une architecture microservices cloud-native avec React, Node.js et Kubernetes.',
            details: [
                'Architecture microservices avec 12 services indépendants',
                'Frontend React avec Server-Side Rendering pour les performances',
                'API Gateway avec rate limiting et authentication centralisée',
                'Infrastructure AWS avec auto-scaling et multi-AZ',
                'Pipeline CI/CD avec tests automatisés et déploiements blue/green'
            ]
        },
        timeline: {
            duration: '4 mois',
            phases: [
                { name: 'Audit & Architecture', duration: '3 semaines' },
                { name: 'Migration Backend', duration: '8 semaines' },
                { name: 'Refonte Frontend', duration: '6 semaines' },
                { name: 'Tests & Go-Live', duration: '3 semaines' }
            ]
        },
        team: {
            size: 8,
            roles: ['1 Tech Lead', '3 Backend Dev', '2 Frontend Dev', '1 DevOps', '1 QA']
        },
        results: {
            metrics: [
                { label: 'Performance API', value: '+300%', description: 'Temps de réponse moyen' },
                { label: 'Utilisateurs actifs', value: '2M+', description: 'MAU après migration' },
                { label: 'Temps de réponse', value: '-60%', description: 'De 1.2s à 480ms' },
                { label: 'Uptime', value: '99.99%', description: 'SLA atteint' },
                { label: 'Coûts infra', value: '-40%', description: 'Grâce à l\'auto-scaling' },
                { label: 'Time to market', value: '-70%', description: 'Pour nouvelles features' }
            ],
            testimonial: {
                quote: "Kanbios Factory a transformé notre vision en réalité. Leur expertise en développement d'applications bancaires et leur approche agile ont été déterminantes pour notre succès. La migration s'est faite sans aucune interruption de service.",
                author: "Marie Dubois",
                role: "CTO, FinanceFlow",
                authorImage: "/testimonials/marie-dubois.jpg"
            }
        },
        technologies: ['React 18', 'Node.js', 'TypeScript', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'GitLab CI/CD'],
        deliverables: [
            'Architecture microservices complète',
            'Documentation technique détaillée',
            'Tests automatisés (95% coverage)',
            'Formation des équipes internes',
            'Monitoring et alerting setup'
        ]
    },
    {
        id: 'healthtech-medicare',
        client: 'MediCare Plus',
        industry: 'HealthTech',
        logo: '/logos/medicare.svg',
        heroImage: '/case-studies/medicare-hero.jpg',
        challenge: 'MediCare Plus devait rapidement créer une plateforme de télémédecine pour répondre à la demande explosive post-COVID. Les contraintes étaient multiples : conformité HIPAA, vidéo temps réel de qualité médicale, et capacité à gérer des pics de charge importants.',
        solution: {
            summary: 'Développement d\'une Progressive Web App avec vidéo WebRTC, chiffrement end-to-end et architecture serverless.',
            details: [
                'PWA avec support offline pour zones à faible connectivité',
                'WebRTC avec fallback sur TURN servers dédiés',
                'Chiffrement AES-256 pour toutes les données patient',
                'Architecture serverless AWS Lambda pour l\'auto-scaling',
                'Intégration avec systèmes EHR existants via HL7 FHIR'
            ]
        },
        timeline: {
            duration: '3 mois',
            phases: [
                { name: 'Design & Compliance', duration: '2 semaines' },
                { name: 'Core Development', duration: '6 semaines' },
                { name: 'Integrations', duration: '3 semaines' },
                { name: 'Security Audit & Launch', duration: '1 semaine' }
            ]
        },
        team: {
            size: 6,
            roles: ['1 Tech Lead', '2 Full-Stack Dev', '1 Security Expert', '1 DevOps', '1 UI/UX Designer']
        },
        results: {
            metrics: [
                { label: 'Consultations/mois', value: '50K+', description: 'Capacité atteinte' },
                { label: 'Latence vidéo', value: '<2s', description: 'Moyenne globale' },
                { label: 'Satisfaction', value: '4.9/5', description: 'Score patient' },
                { label: 'Conformité', value: 'HIPAA', description: 'Certification obtenue' },
                { label: 'Disponibilité', value: '99.95%', description: 'Uptime mensuel' },
                { label: 'Adoption', value: '85%', description: 'Des médecins actifs' }
            ],
            testimonial: {
                quote: "L'équipe technique de Kanbios a livré une solution au-delà de nos attentes. Leur compréhension du secteur médical et des contraintes réglementaires a fait toute la différence. Notre plateforme est devenue une référence dans le secteur.",
                author: "Dr. Pierre Martin",
                role: "Fondateur & CEO, MediCare Plus",
                authorImage: "/testimonials/pierre-martin.jpg"
            }
        },
        technologies: ['Next.js 14', 'WebRTC', 'AWS Lambda', 'MongoDB', 'Twilio', 'Docker', 'Terraform', 'Socket.io'],
        deliverables: [
            'Application PWA complète',
            'Infrastructure HIPAA-compliant',
            'Documentation de conformité',
            'APIs d\'intégration EHR',
            'Dashboard analytics temps réel'
        ]
    }
]

export function getCaseStudy(id: string) {
    return caseStudies.find(study => study.id === id)
}
