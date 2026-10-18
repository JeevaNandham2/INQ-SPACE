// Shared image URLs (Unsplash) — placeholder residential / interior imagery.
// Swap for INQ SPACE's own project photographs in production.
const u = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  hero: u('1600585154340-be6161a56a0c', 1600),
  about: '/media/about.jpg',
  about2: u('1600210492486-724fe5c67fb0', 1000),
  planning: u('1524758631624-e2822e304c36', 1200),
  pocketHome: u('1505691938895-1758d7feb511', 1200),
  godown: u('1600607687939-ce8a6c25118c', 1200),
  cta: u('1512917774080-9991f1c4c750', 1600),
  servicesBanner: u('1600566753190-17f0baa2a6c3', 1600),
  aboutBanner: u('1600596542815-ffad4c1539a9', 1600),
  projectsBanner: u('1512917774080-9991f1c4c750', 1600),
  contactBanner: u('1497366216548-37526070297c', 1600),
}

export const STUDIO = {
  name: 'INQ SPACE',
  legalName: 'INQ SPACE (OPC) Pvt. Ltd.',
  owner: 'Ajeeth Elancheziyan',
  tagline: 'Architecture / Interiors / Execution',
  motto: 'We don’t just design buildings — we capture spaces.',
  address: ['#1/37, School Street, Soorapattu', 'Chennai - 600 066'],
  phone: '+91 72996 75654',
  phoneHref: 'tel:+917299675654',
  email: 'inqyourspace@gmail.com',
  emailHref: 'mailto:inqyourspace@gmail.com',
  whatsappHref: 'https://wa.me/917299675654',
  instagram: 'INQ SPACE',
  linkedin: 'INQ SPACE',
}

export const SERVICES = [
  {
    icon: 'ruler',
    title: 'Architecture',
    image: '/media/service-architecture.jpg',
    desc: 'From initial site analysis to detailed construction drawings, we develop architectural solutions that balance function, aesthetics and buildability.',
    listLabel: 'Our scope includes',
    points: [
      'Concept Design',
      'Space Planning',
      'Floor Planning',
      'Building Elevation Design',
      '3D Visualization',
      'Material & Colour Palette',
      'Working Drawings',
      'Good for Construction Drawings',
      'Structural Coordination',
      'Electrical & Plumbing Coordination',
    ],
  },
  {
    icon: 'sofa',
    title: 'Interior Design',
    image: '/media/service-interiors.jpg',
    desc: 'We create interiors that are visually refined while remaining practical, comfortable and easy to maintain.',
    listLabel: 'Our interior projects include',
    points: [
      'Residential Interiors',
      'Apartment Interiors',
      'Villa Interiors',
      'Office Interiors',
      'Commercial Spaces',
      'Cafés & Retail Spaces',
      'Experience Centres',
      'Custom Furniture Planning',
      'Material Selection',
      'Lighting Planning',
    ],
  },
  {
    icon: 'hardhat',
    title: 'Design + Execution',
    image: '/media/service-execution.jpg',
    desc: 'For clients looking for a single point of coordination, INQ SPACE provides design-led project execution. From drawings and BOQs to vendor coordination and site implementation, our involvement helps ensure that the original design intent is carried through during construction.',
    listLabel: 'Design. Detail. Coordinate. Execute.',
    points: ['Drawings & BOQs', 'Vendor Coordination', 'Site Implementation', 'Design Intent Carried Through'],
  },
  {
    icon: 'compass',
    title: 'Design Consultancy',
    image: '/media/service-consultancy.jpg',
    desc: 'For projects that already have a construction team, we provide independent architectural and interior design consultancy.',
    listLabel: 'Our consultancy can include',
    points: [
      'Concept Development',
      'Planning',
      '3D Visualization',
      'GFC Drawings',
      'BOQ Preparation',
      'Material Specifications',
      'Vendor Coordination',
      'Periodic Site Reviews',
    ],
  },
]

export const PROJECT_CATEGORIES = ['All', 'Architecture', 'Interiors']

export const PROJECTS = [
  {
    title: 'Pocket Home',
    category: 'Architecture',
    scope: '20’ × 24’ Compact Residential Design',
    image: u('1505691938895-1758d7feb511'),
  },
  {
    title: 'Porur Villa',
    category: 'Architecture',
    scope: 'Approx. 2,600 sq.ft Residential Design',
    image: u('1512917774080-9991f1c4c750'),
  },
  {
    title: 'Neyveli Residence',
    category: 'Interiors',
    scope: 'Residential Interior Design',
    image: u('1600210492486-724fe5c67fb0'),
  },
  {
    title: 'Velappanchavadi Residence',
    category: 'Architecture',
    scope: 'Architecture & Interior Design',
    image: u('1600596542815-ffad4c1539a9'),
  },
  {
    title: 'Anna Nagar Residence',
    category: 'Interiors',
    scope: 'Interior Design',
    image: u('1616486338812-3dadae4b4ace'),
  },
  {
    title: 'Soorapattu Residence',
    category: 'Architecture',
    scope: 'Architecture & Construction Coordination',
    image: u('1600566753190-17f0baa2a6c3'),
  },
]

// `end` animates as a count-up; stats without it render `value` as-is.
export const STATS = [
  { icon: 'clock', end: 6, suffix: '+', value: '6+', label: 'Years of Professional Experience' },
  { icon: 'building', end: 50, suffix: '+', value: '50+', label: 'Architecture & Interior Projects' },
  { icon: 'tag', end: 480, suffix: ' sq.ft.', value: '480 sq.ft.', label: 'One of Our Smallest Home Footprints' },
  { icon: 'compass', value: 'ONE', label: 'Integrated Design Approach' },
]

export const PHILOSOPHY = [
  { icon: 'users', title: 'Function', image: '/media/sketch-1.jpg', desc: 'Spaces planned around the way people actually live and work.' },
  { icon: 'compass', title: 'Context', image: '/media/sketch-2.jpg', desc: 'Architecture that responds to the site, climate and surroundings.' },
  { icon: 'tag', title: 'Detail', image: '/media/sketch-3.jpg', desc: 'Thoughtful design carried through from concept to construction.' },
  { icon: 'award', title: 'Value', image: '/media/sketch-4.jpg', desc: 'Better use of space, materials and investment without unnecessary complexity.' },
]

export const WHY = [
  { icon: 'ruler', title: 'Architecture before decoration.', desc: 'We believe the plan must work before the elevation looks beautiful.' },
  { icon: 'hardhat', title: 'Practical design.', desc: 'Our experience with drawings, vendors and execution allows us to design with construction realities in mind.' },
  { icon: 'building', title: 'Space-conscious thinking.', desc: 'From pocket homes to large residences, every square foot is considered.' },
  { icon: 'spark', title: 'Detail-driven.', desc: 'Material junctions, proportions, lighting, furniture and finishes are treated as part of the architecture.' },
  { icon: 'users', title: 'Client collaboration.', desc: 'Good projects happen through conversation, understanding and informed decisions—not simply by producing drawings.' },
]

export const PROCESS = [
  { no: '01', title: 'Understand', desc: 'We begin with the client, site, requirements, budget and possibilities.' },
  { no: '02', title: 'Explore', desc: 'Multiple planning and design directions are studied before arriving at the right solution.' },
  { no: '03', title: 'Design', desc: 'Architecture, interiors, materials and visual language are developed as one integrated idea.' },
  { no: '04', title: 'Detail', desc: 'The concept is translated into coordinated working drawings, specifications and details.' },
  { no: '05', title: 'Build', desc: 'Where execution is part of our scope, we coordinate the site, vendors and materials to maintain the design intent.' },
]

export const DEVELOPER_SCOPE = [
  'Site Potential',
  'Unit Planning',
  'Saleable Space Optimization',
  'Compact Housing',
  'Residential Layouts',
  'Façade Identity',
  'Amenity Planning',
  'Project Positioning',
  'Architectural Visualization',
]

// Everything below elaborates on the studio's own brief — no invented facts or figures.
export const KEYWORDS = ['Function', 'Context', 'Detail', 'Value', 'Smart Planning', 'Light', 'Ventilation', 'Proportion', 'Execution']

export const TYPOLOGIES = [
  { icon: 'building', title: 'Compact & Pocket Homes', desc: 'Homes on small plots where every square foot performs a purpose — down to a 20’ × 24’, 480 sq.ft footprint.' },
  { icon: 'tree', title: 'Residences & Villas', desc: 'Independent homes planned around the way the family lives, with light, ventilation and proportion worked out first.' },
  { icon: 'sofa', title: 'Interiors', desc: 'Residential, apartment, villa and office interiors that are visually refined, practical, comfortable and easy to maintain.' },
  { icon: 'compass', title: 'Commercial & Retail', desc: 'Offices, cafés, retail spaces and experience centres — from planning and interior design through to execution.' },
  { icon: 'wrench', title: 'Adaptive Reuse', desc: 'Existing structures re-planned for a new life, like a 2,400 sq.ft godown transformed into a comfortable home.' },
  { icon: 'tag', title: 'Developer Projects', desc: 'Site potential, unit planning, saleable space optimization and façade identity for residential developments.' },
]

export const AUDIENCE = [
  { icon: 'users', title: 'Homeowners', desc: 'Planning a new home or transforming an existing property. We start with how you live, then the site, requirements and budget.' },
  { icon: 'building', title: 'Developers & Landowners', desc: 'Architectural planning directly affects the commercial potential of a project. We help get more value from the same land.' },
  { icon: 'compass', title: 'Businesses', desc: 'Offices, cafés, retail spaces and experience centres designed to work for the people who use them every day.' },
]

export const STUDY = ['Space', 'Movement', 'Light', 'Ventilation', 'Proportion', 'Usability', 'Construction Practicality']

export const SITE_ANALYSIS = ['Circulation', 'Setbacks', 'Natural Light', 'Ventilation', 'Furniture Planning', 'Usable Area']

export const SERVICE_FIT = [
  {
    icon: 'hardhat',
    title: 'Choose Design + Execution when…',
    lead: 'You want a single point of coordination from drawing board to site.',
    points: [
      'You do not already have a construction team',
      'You want drawings, BOQs, vendors and site work coordinated together',
      'You want the original design intent carried through during construction',
    ],
  },
  {
    icon: 'compass',
    title: 'Choose Design Consultancy when…',
    lead: 'Your project already has a construction team and needs independent design.',
    points: [
      'You need concept development, planning and 3D visualization',
      'You need GFC drawings, BOQ preparation and material specifications',
      'You want periodic site reviews while your own team builds',
    ],
  },
]

export const BRIEF_CHECKLIST = [
  'Where the site is, and its size or plot dimensions',
  'Whether it is a new build, an interior, or an existing building',
  'What you need from the space and who will use it',
  'Your budget range and any timeline you have in mind',
  'Any specific requirements, such as Vastu',
]

export const FAQS = [
  {
    q: 'What kinds of projects does INQ SPACE take on?',
    a: 'From compact homes to residences, villas, commercial spaces, interiors, experience centres and adaptive reuse projects. Every project is approached with the same attention to planning, proportion, functionality and detail.',
  },
  {
    q: 'My plot is small or difficult. Can you still design for it?',
    a: 'Yes — it is one of our core strengths. A small plot is not a limitation, and a difficult site does not necessarily require an expensive solution. We have designed a complete home on a 20’ × 24’, 480 sq.ft footprint.',
  },
  {
    q: 'Can you work with an existing building instead of a new one?',
    a: 'Yes. An existing building is not always a problem. In one project we re-planned a 2,400 sq.ft godown with almost no natural light or ventilation into a comfortable home, while responding to the family’s functional and Vastu requirements.',
  },
  {
    q: 'Do you only design, or do you also build?',
    a: 'Both are possible. With Design + Execution we provide design-led project execution with a single point of coordination — drawings, BOQs, vendor coordination and site implementation. If you already have a construction team, we work as independent design consultants.',
  },
  {
    q: 'What drawings and documents will we receive?',
    a: 'Depending on the scope: concept design, floor plans, building elevations, 3D visualization, material and colour palettes, working drawings, Good for Construction drawings, BOQs and material specifications — with structural, electrical and plumbing coordination.',
  },
  {
    q: 'Do you work with developers?',
    a: 'Yes. We work with developers and landowners on site potential, unit planning, saleable space optimization, compact housing, residential layouts, façade identity, amenity planning, project positioning and architectural visualization.',
  },
  {
    q: 'Where do you work?',
    a: 'INQ SPACE is based in Soorapattu, Chennai. Our experience covers projects across Chennai and other parts of Tamil Nadu.',
  },
  {
    q: 'How do we get started?',
    a: 'Tell us about your project. We begin by understanding the client, site, requirements, budget and possibilities, and then study multiple planning and design directions before arriving at the right solution.',
  },
]
