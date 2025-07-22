import Link from 'next/link'

const offers = [
  {
    title: 'Développement End to End',
    subtitle: 'Du MVP au scale-up',
    description1: 'Transformez votre vision en réalité',
    description2: 'De l\'idée au produit fini, nous gérons tout.',
    highlight: 'Lancement garanti en 3 mois',
    cta: 'J\'ai un projet',
    href: '/offres/developpement'
  },
  {
    title: 'Déploiement d\'équipe dédiée',
    subtitle: 'Votre squad technique',
    description1: 'Renforcez vos équipes instantanément',
    description2: 'Tech Lead, DevOps, Fullstack seniors',
    highlight: 'Opérationnels en 2 semaines',
    cta: 'J\'ai besoin d\'experts',
    href: '/offres/equipe'
  },
  {
    title: 'Modernisation & Migration',
    subtitle: 'Audit complet, migration maîtrisée',
    description1: 'Votre système freine votre croissance ?',
    description2: 'Modernisation progressive, ROI rapide',
    highlight: 'Zéro interruption de service',
    cta: 'Je veux moderniser ma stack',
    href: '/offres/modernisation'
  }
]

export default function Offers() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="card-offer">
              <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
              <p className="text-xl mb-4">{offer.subtitle}</p>
              <p className="mb-2">{offer.description1}</p>
              <p className="mb-6">{offer.description2}</p>
              <p className="text-kanbios-accent mb-8 font-medium">{offer.highlight}</p>
              <Link
                href={offer.href}
                className="btn-primary"
              >
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
