export const teamMembers = [
    {
        slug: 'jean-dupont',
        name: 'Jean Dupont',
        role: 'CTO & Co-fondateur',
        photo: '/team/jean-dupont.jpg',
        expertise: ['Architecture', 'Cloud', 'DevOps', 'Node.js', 'Kubernetes'],
        bio: 'Expert en architecture cloud avec 15 ans d\'expérience. Passionné par les défis techniques complexes et la scalabilité.',
        linkedin: 'https://linkedin.com/in/jeandupont',
        github: 'https://github.com/jeandupont',
        email: 'jean@kanbios.fr',
        experience: [
            {
                company: 'Amazon Web Services',
                role: 'Senior Solutions Architect',
                period: '2018-2020',
                description: 'Architecture de solutions cloud pour des clients Fortune 500'
            },
            {
                company: 'BlaBlaCar',
                role: 'Lead Developer',
                period: '2015-2018',
                description: 'Développement de l\'architecture microservices'
            }
        ],
        projects: [
            {
                name: 'FinanceFlow',
                role: 'Architecture Lead',
                description: 'Migration d\'une architecture monolithique vers microservices'
            },
            {
                name: 'MediCare Plus',
                role: 'Technical Advisor',
                description: 'Conception de l\'infrastructure cloud HIPAA-compliant'
            }
        ],
        education: [
            {
                school: 'École Polytechnique',
                degree: 'Ingénieur Informatique',
                year: '2010'
            }
        ]
    },
    {
        slug: 'marie-martin',
        name: 'Marie Martin',
        role: 'Lead Frontend Developer',
        photo: '/team/marie-martin.jpg',
        expertise: ['React', 'Next.js', 'TypeScript', 'Performance', 'Accessibility'],
        bio: 'Spécialiste frontend avec un focus sur la performance et l\'accessibilité. 10 ans d\'expérience en développement d\'applications web complexes.',
        linkedin: 'https://linkedin.com/in/mariemartin',
        github: 'https://github.com/mariemartin',
        email: 'marie@kanbios.fr',
        experience: [
            {
                company: 'Spotify',
                role: 'Senior Frontend Engineer',
                period: '2019-2021',
                description: 'Développement de nouvelles features pour l\'app web'
            },
            {
                company: 'Criteo',
                role: 'Frontend Developer',
                period: '2016-2019',
                description: 'Optimisation des performances des dashboards publicitaires'
            }
        ],
        projects: [
            {
                name: 'EcoCommerce',
                role: 'Frontend Lead',
                description: 'Refonte complète avec Next.js et optimisation SEO'
            }
        ],
        education: [
            {
                school: 'EPITECH',
                degree: 'Expert en Technologies de l\'Information',
                year: '2013'
            }
        ]
    },
    {
        slug: 'pierre-dubois',
        name: 'Pierre Dubois',
        role: 'DevOps Lead',
        photo: '/team/pierre-dubois.jpg',
        expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Security'],
        bio: 'Expert DevOps passionné par l\'automatisation et la sécurité. Certifié AWS Solutions Architect Professional.',
        linkedin: 'https://linkedin.com/in/pierredubois',
        email: 'pierre@kanbios.fr',
        experience: [
            {
                company: 'OVHcloud',
                role: 'Senior DevOps Engineer',
                period: '2017-2020',
                description: 'Mise en place de pipelines CI/CD pour les équipes produit'
            }
        ],
        projects: [
            {
                name: 'Infrastructure as Code',
                role: 'DevOps Lead',
                description: 'Migration de 50+ applications vers Kubernetes'
            }
        ],
        education: [
            {
                school: 'Université Paris-Saclay',
                degree: 'Master en Systèmes Distribués',
                year: '2015'
            }
        ]
    }
]

export function getTeamMember(slug: string) {
    return teamMembers.find(member => member.slug === slug)
}
