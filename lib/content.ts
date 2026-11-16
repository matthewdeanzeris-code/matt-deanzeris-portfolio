export type ProjectCategory = 'AI & Software' | 'Hardware & Research' | 'Operations'

export type Project = {
  slug: string
  number: string
  title: string
  subtitle: string
  org: string
  date?: string
  category: ProjectCategory
  summary: string
  featured?: boolean
  status?: string
  problem: string
  whatIDid: string[]
  result: string[]
  tools: string[]
}

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'AI & Software',
  'Hardware & Research',
  'Operations',
]

export const projects: Project[] = [
  {
    slug: 'pitchperfect',
    number: '01',
    title: 'PitchPerfect',
    subtitle: 'An AI proposal generator',
    org: 'IBM',
    date: 'Summer 2026',
    category: 'AI & Software',
    featured: true,
    summary:
      'Built in Python on the Claude API from client feedback. It drafts and scores sales proposals. A team used it to close a $50K deal, IBM’s first AI sale to that client.',
    problem:
      'Sales teams needed a faster way to draft and evaluate proposals, shaped by what clients were actually saying.',
    whatIDid: [
      'Built PitchPerfect in Python on the Claude API, working from client feedback.',
      'Designed it to both draft sales proposals and score them.',
      'Pitched it in the IBM intern pitch competition.',
    ],
    result: [
      'A team used it to close a $50K deal, IBM’s first AI sale to that client.',
      'Won 1st of 10 teams in the IBM intern pitch competition.',
      'Earned $150K in development funding.',
    ],
    tools: ['Python', 'Claude API', 'API integration'],
  },
  {
    slug: 'counter-uas-drone-detection',
    number: '02',
    title: 'Counter-UAS Drone Detection',
    subtitle: 'Vanderbilt Senior Design',
    org: 'Sponsored by the 101st Airborne',
    category: 'Hardware & Research',
    status: 'In progress',
    summary:
      'Low-cost drone detection for soldiers on a $1,000 budget, built on ESP32-S3 / LoRa hardware.',
    problem:
      'Soldiers need drone detection that is low-cost. The system has to be built on a $1,000 budget.',
    whatIDid: [
      'Senior design project sponsored by the 101st Airborne.',
      'Building low-cost detection hardware on ESP32-S3 and LoRa.',
    ],
    result: ['In progress. Results will be posted as the project develops.'],
    tools: ['ESP32-S3', 'LoRa', 'Arduino/ESP32'],
  },
  {
    slug: 'nanoscale-electrode-testing',
    number: '03',
    title: 'Automated Nanoscale Electrode Testing',
    subtitle: 'Test apparatus & automation tool',
    org: 'Vanderbilt Institute of Nanoscale Science & Engineering',
    category: 'Hardware & Research',
    summary:
      'Designed a test apparatus and a Python automation tool that cut analysis time 75%. Found a flaw in the testing method that supported a $3M NSF-funded initiative.',
    problem:
      'Analyzing nanoscale electrode tests was slow, and the testing method itself needed scrutiny.',
    whatIDid: [
      'Designed a test apparatus for nanoscale electrode testing.',
      'Built a Python automation tool for the analysis.',
      'Identified a flaw in the testing method.',
    ],
    result: [
      'Cut analysis time by 75%.',
      'The flaw I found supported a $3M NSF-funded initiative.',
    ],
    tools: ['Python', 'Test apparatus design'],
  },
  {
    slug: 'mobile-work-instructions',
    number: '04',
    title: 'Mobile Work Instructions',
    subtitle: 'Scrap reduction & process improvement',
    org: 'Tech Etch, Inc.',
    category: 'Operations',
    summary:
      'Traced 3 root causes of defects through operator interviews and AI-assisted analysis of 200 scrap reports. Deployed mobile work instructions that cut $600K/yr in scrap.',
    problem:
      'Defects were driving manufacturing scrap, and their root causes were not yet understood.',
    whatIDid: [
      'Interviewed operators on the floor.',
      'Ran AI-assisted analysis of 200 scrap reports.',
      'Traced 3 root causes of defects.',
      'Deployed mobile work instructions.',
      'Applied Lean Six Sigma to the etch process.',
    ],
    result: [
      'Cut $600K/yr in scrap.',
      'Raised etch throughput 12%.',
    ],
    tools: ['Lean Six Sigma', 'AI-assisted analysis', 'Operator interviews'],
  },
  {
    slug: 'ibm-bob-linuxone-poc',
    number: '05',
    title: 'IBM Bob x LinuxONE AI PoC',
    subtitle: 'AI infrastructure proof of concept',
    org: 'IBM',
    category: 'AI & Software',
    summary:
      'Designed and delivered an AI infrastructure proof of concept to 36 clients at a technical event.',
    problem:
      'Clients at a technical event needed to see what AI infrastructure on IBM Bob and LinuxONE could do.',
    whatIDid: [
      'Designed an AI infrastructure proof of concept with IBM Bob and LinuxONE.',
      'Delivered it at a technical event.',
    ],
    result: ['Delivered to 36 clients.'],
    tools: ['IBM Bob', 'LinuxONE'],
  },
  {
    slug: 'seafood-logistics',
    number: '06',
    title: 'Seafood Logistics',
    subtitle: 'Routing across four harbors',
    org: 'Superior Lobster & Seafood, Cape Cod',
    category: 'Operations',
    summary:
      'Re-routed trucks across four harbors to cut lobster deaths in transit by 15%. Grew striped bass intake 20% year over year.',
    problem: 'Lobsters were dying in transit between harbors.',
    whatIDid: [
      'Re-routed trucks across four harbors.',
      'Worked on striped bass intake.',
    ],
    result: [
      'Cut lobster deaths in transit by 15%.',
      'Grew striped bass intake 20% year over year.',
    ],
    tools: ['Truck routing'],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const stats = [
  { value: '$2M', label: 'Pipeline from an Agentic AI event I ran at IBM' },
  { value: '$600K/yr', label: 'Manufacturing scrap eliminated at Tech Etch' },
  { value: '75%', label: 'Analysis time cut in nanoscale electrode testing' },
  { value: '1st of 10', label: 'IBM intern pitch competition, $150K in funding won' },
]

export const experience = [
  {
    org: 'IBM',
    role: 'Customer Success Engineer Intern',
    location: 'New York',
    dates: 'May – Aug 2026',
  },
  {
    org: 'Vanderbilt Institute of Nanoscale Science & Engineering',
    role: 'Undergraduate Research Assistant',
    dates: 'Aug 2025 – May 2026',
  },
  {
    org: 'Tech Etch, Inc.',
    role: 'Process Engineering Intern',
    location: 'Plymouth, MA',
    dates: 'Jun – Aug 2025',
  },
  {
    org: 'Superior Lobster & Seafood',
    role: 'Retail & Warehouse Associate / Truck Driver',
    dates: 'Summers 2023 & 2024',
  },
]

export const leadership = [
  {
    org: 'Vanderbilt Ice Hockey',
    role: 'President & Captain',
    points: ['Run a $105K budget', 'Grew membership 25%', 'Made league playoffs'],
  },
  {
    org: 'Theta Tau',
    role: 'Professional Development Chair',
    points: ['Recruiting events with McKinsey, Oracle, and AWS', 'For 100+ members'],
  },
]

export const skills = [
  'Python',
  'R',
  'SQL',
  'C++',
  'MATLAB',
  'SOLIDWORKS (CSWA)',
  'Arduino/ESP32',
  'Power BI',
  'Lean Six Sigma',
  'API integration',
]

export const contact = {
  email: 'matthew.p.deanzeris@vanderbilt.edu',
  linkedin: 'https://www.linkedin.com/in/matthew-deanzeris',
  linkedinLabel: 'linkedin.com/in/matthew-deanzeris',
}
