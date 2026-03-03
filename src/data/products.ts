export type PeptideCategory = 'Recovery' | 'Metabolic' | 'Cognitive' | 'Aesthetic' | 'Longevity'

export type PeptideProduct = {
  slug: string
  name: string
  shortName: string
  category: PeptideCategory
  tagline: string
  description: string
  heroClaim: string
  benefits: string[]
  protocols: string[]
  warning: string
  image: string
  badge?: string
  isFeatured?: boolean
}

export const products: PeptideProduct[] = [
  {
    slug: 'bpc-157',
    name: 'BPC-157 Repair Complex',
    shortName: 'BPC-157',
    category: 'Recovery',
    tagline: 'Tissue repair, gut integrity and joint resilience.',
    description:
      'Clinically-inspired BPC-157 formulation crafted for athletes and high-performers who need connective tissue and gut support without compromising on quality.',
    heroClaim: 'Engineered to support soft-tissue recovery and gut barrier integrity.',
    benefits: [
      'Supports soft-tissue, tendon and ligament recovery after intense training',
      'Helps maintain healthy gut lining integrity under stress',
      'Pairs well with structured rehab and physiotherapy protocols',
      'Ultra-clean excipient profile designed for sensitive clients',
    ],
    protocols: [
      'Ideal in 6–8 week structured recovery blocks alongside progressive loading.',
      'Rotate with TB-500 for advanced tendon / ligament protocols under practitioner supervision.',
    ],
    warning:
      'For research and educational use only. Not intended to diagnose, treat, cure or prevent any disease. Always consult a qualified practitioner.',
    image: '/img/bpc-157.jpg',
    badge: 'Athlete favorite',
    isFeatured: true,
  },
  {
    slug: 'tb-500',
    name: 'TB-500 Recovery Matrix',
    shortName: 'TB-500',
    category: 'Recovery',
    tagline: 'Support for complex soft-tissue work and high-volume training blocks.',
    description:
      'TB-500 Recovery Matrix is aligned with demanding rehab phases where connective tissue is under sustained load and athletes require structured support.',
    heroClaim: 'Built for longer, tendon-focused recovery blocks with coaching support.',
    benefits: [
      'Complements tendon and ligament-focused rehab phases',
      'Designed to sit alongside strength and conditioning plans',
      'Highly suitable for rotational athletes and field sports',
    ],
    protocols: [
      'Best utilized in defined 8–12 week blocks for complex rehab cases.',
      'Stack concept: pair conceptually with BPC-157 for staged tendon support protocols.',
    ],
    warning:
      'For research and educational use only. Not intended for human consumption. Follow all local regulations.',
    image: '/img/TB-500.jpg',
    badge: 'Recovery stack',
    isFeatured: true,
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide Metabolic Blueprint',
    shortName: 'Tirzepatide',
    category: 'Metabolic',
    tagline: 'Metabolic signalling support for structured body-composition work.',
    description:
      'A modern, signalling-focused tirzepatide research formulation framed for body recomposition and metabolic protocol education.',
    heroClaim: 'Supports structured transformation phases with clinical-style oversight.',
    benefits: [
      'Conceptual support for appetite, satiety and glycaemic control discussions',
      'Pairs with dietician-led nutritional frameworks and resistance training',
      'Ideal for transformation, mini-cut and recomp educational content',
    ],
    protocols: [
      'Designed around 16–24 week transformation frameworks with lifestyle coaching.',
      'Educational emphasis on progressive habit change, sleep and resistance training.',
    ],
    warning:
      'Not for human use. Educational and research framing only. Always discuss metabolic therapies with a specialist.',
    image: '/img/tirzepatide.jpg',
    badge: 'Transformation focus',
    isFeatured: true,
  },
  {
    slug: 'melanotan-2',
    name: 'Melanotan II Radiance Program',
    shortName: 'Melanotan II',
    category: 'Aesthetic',
    tagline: 'Even, controlled pigment-focused aesthetic protocols.',
    description:
      'An advanced, education-first take on melanocortin-focused aesthetic protocols, built for clinics that value informed client journeys.',
    heroClaim: 'Supports structured pigment-focused programs with clinic oversight.',
    benefits: [
      'Conceptual support for controlled, even pigment protocols',
      'Pairs with dermatology-led sun safety education',
      'Useful in aesthetic clinics with compliance-driven journeys',
    ],
    protocols: [
      'Ideal in short, clearly bounded phases with rigorous monitoring.',
      'Best implemented inside clinics with formal consent processes.',
    ],
    warning:
      'Strictly for research and in-clinic education. Not a tanning product. Always prioritize skin health and UV protection.',
    image: '/img/melatotan 2 .png',
  },
  {
    slug: 'hcg-5000',
    name: 'HCG 5000iu Precision Matrix',
    shortName: 'HCG 5000iu',
    category: 'Metabolic',
    tagline: 'Endocrine-focused research for specialist-led environments.',
    description:
      'Structured HCG 5000iu research matrix, created for practitioners who require clean, consistent material for endocrine protocol education.',
    heroClaim: 'Supports protocol design discussions in hormone optimisation settings.',
    benefits: [
      'Conceptual support for fertility and hormone optimisation frameworks',
      'Designed to align with evidence-informed endocrine protocols',
      'Clear labelling and batch consistency for research settings',
    ],
    protocols: [
      'Used inside specialist-led endocrine and fertility frameworks.',
      'Always anchored by lab work, case review and follow-up.',
    ],
    warning:
      'Not for human use. Hormone-related compounds should only be discussed with qualified medical professionals.',
    image: '/img/HCG 5000iu Medium.png',
  },
  {
    slug: 'mots-c',
    name: 'MOTS-c Mitochondrial Circuit',
    shortName: 'MOTS-c',
    category: 'Longevity',
    tagline: 'Metabolic resilience and performance-ageing conversations.',
    description:
      'MOTS-c Mitochondrial Circuit is framed for practitioners exploring the frontier between performance, ageing and metabolic resilience.',
    heroClaim: 'Built to sit inside data-driven, longevity-focused case design.',
    benefits: [
      'Supports educational content around mitochondrial signalling',
      'Pairs with VO2, strength and metabolic data for advanced clients',
      'Ideal for progressive clinics building “age like an athlete” programs',
    ],
    protocols: [
      'Commonly framed in 8–12 week performance-ageing blocks.',
      'Pairs with aerobic base building, resistance training and sleep work.',
    ],
    warning:
      'For research and educational protocol modelling only. Not intended for human use.',
    image: '/img/mots-c.png',
  },
  {
    slug: 'ss-31',
    name: 'SS-31 Cell Guard Program',
    shortName: 'SS-31',
    category: 'Longevity',
    tagline: 'Advanced cell-protection conversations for high-level clients.',
    description:
      'SS-31 Cell Guard Program is positioned for cutting-edge, longevity-focused clinics who build layered, data-heavy protocols.',
    heroClaim: 'Supports conceptual frameworks around cellular resilience and recovery.',
    benefits: [
      'Educational support for mitochondrial resilience protocols',
      'Pairs with leaders in functional medicine and performance labs',
      'Best for clients invested in advanced biomarker tracking',
    ],
    protocols: [
      'Typically modelled in cycles within longer, 12–18 month frameworks.',
      'Stack concept: can be framed with MOTS-c and foundational lifestyle pillars.',
    ],
    warning:
      'For research professionals only. Not intended to diagnose, treat, cure or prevent any disease.',
    image: '/img/ss-31.png',
  },
  {
    slug: 'oxytocin-2mg',
    name: 'Oxytocin 2mg Connection Lab',
    shortName: 'Oxytocin 2mg',
    category: 'Cognitive',
    tagline: 'Exploring connection, trust and emotional state protocols.',
    description:
      'Oxytocin 2mg Connection Lab is designed for neuroscience-savvy practitioners exploring the behavioural and social dimensions of protocol design.',
    heroClaim: 'Supports research conversations around bonding, trust and state.',
    benefits: [
      'Educational frame for oxytocin-centred neuroscience research',
      'Pairs with psychometric tools and therapeutic frameworks',
      'Useful in cutting-edge mind-body and performance psychology clinics',
    ],
    protocols: [
      'Used inside structured, therapist-led programs only.',
      'Always combined with clear screening, boundaries and follow-up.',
    ],
    warning:
      'For research, not for unsupervised or recreational use. Emotional state work should only be led by qualified professionals.',
    image: '/img/Oxytocin 2mg Medium.png',
  },
  {
    slug: '5-amino-1mq',
    name: '5-Amino-1MQ Metabolic Signal',
    shortName: '5-Amino-1MQ',
    category: 'Metabolic',
    tagline: 'Research-forward metabolic signalling education.',
    description:
      '5-Amino-1MQ Metabolic Signal helps advanced coaches and practitioners educate clients on novel metabolic signalling frameworks.',
    heroClaim: 'Built for those running highly structured, lab-informed programs.',
    benefits: [
      'Supports conceptual frameworks around adipocyte signalling',
      'Pairs with DEXA, metabolic carts and strength tracking',
      'Ideal for transformation labs and performance clinics',
    ],
    protocols: [
      'Generally framed in time-bound blocks with hard lifestyle anchors.',
      'Never presented without clear risk-benefit and regulatory context.',
    ],
    warning:
      'For research only. Metabolic signal compounds require specialist oversight.',
    image: '/img/5-amino-1 Medium.png',
  },
] as const

export const featuredProducts = products.filter((p) => p.isFeatured)

