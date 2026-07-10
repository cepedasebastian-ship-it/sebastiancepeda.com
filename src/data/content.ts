// -----------------------------------------------------------------------------
// EDIT YOUR WHOLE SITE FROM THIS FILE
// Every piece of text, project and client lives here. Change it and the site
// updates. No need to touch the components unless you want to change the design.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Sebastian Cepeda',
  role: 'Producer & Executive Producer',
  // Short line under your name in the hero.
  tagline: 'Films, series and brand stories that travel across borders.',
  email: 'cepeda.sebastian@gmail.com',
  locations: ['Zurich', 'Madrid'],
  // Shown next to your base cities to signal you travel for work.
  availability: 'Open worldwide',
  // Used for the browser tab + SEO description.
  seoDescription:
    'Sebastian Cepeda — producer and executive producer working across film, television, documentary and brand storytelling between Madrid and Zurich.',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sebasti%C3%A1n-cepeda-41404836/' },
    { label: 'IMDb', href: 'https://www.imdb.com/name/nm3173222/' },
  ],
};

// The "Who I am" section. Write it in your own voice.
export const about = {
  heading: 'Who I am',
  // Your portrait. To use your real photo: drop the file into /public
  // (e.g. public/portrait.jpg) and change src to '/portrait.jpg'.
  // A portrait shape (taller than wide, ~3:4) looks best.
  portrait: {
    src: '/portrait.jpg',
    alt: 'Sebastian Cepeda',
  },
  paragraphs: [
    'I’m a producer and executive producer working between Zurich and Madrid, and open to projects worldwide — feature films, series, documentaries, commercials and brand films.',
    'A third-culture kid, born in Buenos Aires and having lived across Germany, Switzerland and Spain, I’ve travelled through 50+ countries — and that perspective sits at the centre of what I make: stories about different lives, different voices, and different ways of telling them. My projects have found homes with Netflix, Amazon Prime Video and Apple TV+, and broadcasters like SRF and ProSieben.',
    'Having worked across many crafts — producing, directing, cinematography, editing, colour and screenwriting — I feel at home with whoever I’m talking to, able to guide and adapt to what a crew or client needs.',
    'Along the way I’ve learned that good producing is really about trust, taste and follow-through. That’s what I try to bring to every table.',
  ],
  // A few things that say a bit about you as a person. Keep them short.
  personal: [
    'Multicultural by nature — I work in Spanish, English, German, French and Italian.',
    'An “otrovert” — extrovert when it’s needed, introvert by nature.',
    'I’ll take a deep conversation over small talk any day.',
    'Off set: nature, photography and a good book.',
    'Obsessed with the craft: story first, always.',
  ],
};

// The "What I do" section — your services / roles.
export const services = [
  {
    title: 'Executive Production',
    body: 'Structuring, financing and steering projects from development through delivery — keeping vision and budget on the same side.',
  },
  {
    title: 'Production',
    body: 'Hands-on production of film, television and documentary, assembling and leading the right team for each story.',
  },
  {
    title: 'Development',
    body: 'Finding and shaping material, packaging talent, and building the partnerships that get a project made.',
  },
  {
    title: 'Brand & Corporate',
    body: 'Films that do real work — employer branding, product and brand stories built to reach and to convert.',
  },
];

// -----------------------------------------------------------------------------
// HOW I WORK — soft skills / what I bring beyond the craft.
// -----------------------------------------------------------------------------
export const approachIntro =
  'Technical and creative by nature — my experience taught me to understand both sides of a production, without ever losing the logistics and the budget out of sight.';

export const strengths = [
  {
    title: 'Negotiation',
    body: '22+ years in sales — I know how to fund a project and close a deal.',
  },
  {
    title: 'Leadership',
    body: 'Building the right team and steering it calmly under pressure.',
  },
  {
    title: 'People first',
    body: 'Look after the people, and the work shows it on screen.',
  },
];

// -----------------------------------------------------------------------------
// SELECTED WORK
// role: your role on the project. format: Film / Series / Documentary / etc.
// year: use 'In development', 'In production', 'In financing' where relevant.
// -----------------------------------------------------------------------------
export type Project = {
  title: string;
  year: string;
  format: string;
  role: string;
  note?: string;
  // Optional poster / still. Drop the file in /public/work/ and point here,
  // e.g. image: '/work/singularity.jpg'. A portrait poster (~2:3) looks best.
  // Projects without an image show a clean placeholder automatically.
  image?: string;
};

export const work: Project[] = [
  { title: 'Las Heras', year: 'Pre-production', format: 'Feature Film', role: 'Executive Producer / Producer', image: '/work/las-heras.jpg' },
  { title: 'The Last Lap', year: 'In production', format: 'Series', role: 'Executive Producer / Producer', image: '/work/the-last-lap.jpg' },
  { title: 'Foodball', year: 'In development', format: 'Series', role: 'Executive Producer / Producer', image: '/work/foodball.jpg' },
  { title: 'You and Everything Else', year: '2025', format: 'Series', role: 'Producer', image: '/work/you-and-everything-else.jpg' },
  { title: 'Villa Malaga', year: '2024', format: 'Documentary', role: 'Executive Producer', image: '/work/villa-malaga.avif' },
  { title: 'NCCR Robotics', year: '2023', format: 'Documentary', role: 'Executive Producer', image: '/work/nccr-robotics.avif' },
  { title: 'Singularity', year: '2017', format: 'Feature Film', role: 'Producer, Screenwriter, DP, Colorist', image: '/work/singularity.avif' },
  { title: 'Himmelfahrtskommando', year: '2013', format: 'Feature Film', role: 'Producer, DP, Editor, Colorist', image: '/work/himmelfahrtskommando.avif' },
  { title: 'Body Hunters', year: 'In development', format: 'Series', role: 'Executive Producer', image: '/work/body-hunters.jpg' },
  { title: 'Open World', year: 'In development', format: 'Documentary', role: 'Executive Producer', image: '/work/open-world.avif' },
  { title: 'Loch Ness', year: 'In financing', format: 'Short', role: 'Executive Producer', image: '/work/loch-ness.jpg' },
];

// -----------------------------------------------------------------------------
// EDUCATION
// -----------------------------------------------------------------------------
export const education = [
  {
    degree: 'Master in Executive Production, Film & Series',
    institution: 'ECAM — Madrid Film School',
    detail: '',
  },
  {
    degree: 'BA (Hons) Filmmaking Arts',
    institution: 'Middlesex University',
    detail: 'In collaboration with SAE Zurich — Zurich, Switzerland',
  },
];

// -----------------------------------------------------------------------------
// COMPANIES — the ventures you found / lead.
// -----------------------------------------------------------------------------
export const companies = [
  {
    name: 'Entropía Studios',
    place: 'Madrid',
    body: 'Film and television production — creative content across features, series and documentary.',
    href: 'https://www.entropia-studios.com',
  },
  {
    name: 'Viven Film',
    place: 'Zurich · Madrid',
    body: 'International narrative and documentary production with a multicultural point of view.',
    href: 'https://www.vivenfilm.ch',
  },
  {
    name: 'Viven AG',
    place: 'Zurich',
    body: 'Corporate and brand films that do real work — with a filmmaker’s standard of storytelling.',
    href: 'https://www.viven.ch',
  },
];

// -----------------------------------------------------------------------------
// CONTACT — closing call to action.
// -----------------------------------------------------------------------------
export const contact = {
  headline: 'Let’s make something worth watching.',
  intro:
    'Have a project, a script, or just an idea worth making? I’d love to hear about it.',
};

// -----------------------------------------------------------------------------
// CLIENTS — brands you’ve produced for. Shown as a simple wordmark grid.
// -----------------------------------------------------------------------------
export const clients = [
  'UBS',
  'Siemens',
  'Porsche',
  'ON Running',
  'FIFA',
  'Philips',
  'Franke',
  'V-ZUG',
  'Swarovski',
  'Kanebo',
];
