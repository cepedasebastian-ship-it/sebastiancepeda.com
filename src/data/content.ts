// -----------------------------------------------------------------------------
// EDIT YOUR WHOLE SITE FROM THIS FILE
// `shared` holds language-independent data (name, links, images, client list).
// `t` holds every piece of text, per language (en / de / es).
// -----------------------------------------------------------------------------

export const locales = ['en', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = { en: 'EN', de: 'DE', es: 'ES' };

// Path of each page in each language (used for nav, canonical, hreflang, switcher).
export const homeHrefs: Record<Locale, string> = { en: '/', de: '/de/', es: '/es/' };
export const privacyHrefs: Record<Locale, string> = {
  en: '/privacy/',
  de: '/de/privacy/',
  es: '/es/privacy/',
};

// -----------------------------------------------------------------------------
// SHARED — the same in every language.
// -----------------------------------------------------------------------------
export const shared = {
  name: 'Sebastian Cepeda',
  email: 'cepeda.sebastian@gmail.com',
  locations: ['Zurich', 'Madrid'], // used for schema.org address
  portrait: '/portrait.jpg',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sebasti%C3%A1n-cepeda-41404836/' },
    { label: 'IMDb', href: 'https://www.imdb.com/name/nm3173222/' },
  ],
  clients: ['UBS', 'Siemens', 'Porsche', 'ON Running', 'FIFA', 'Philips', 'Franke', 'V-ZUG', 'Swarovski', 'Kanebo'],
  companyLinks: [
    { name: 'Entropía Studios', href: 'https://www.entropia-studios.com' },
    { name: 'Viven Film', href: 'https://www.vivenfilm.ch' },
    { name: 'Viven AG', href: 'https://www.viven.ch' },
  ],
  workBase: [
    { title: 'Las Heras', image: '/work/las-heras.jpg' },
    { title: 'The Last Lap', image: '/work/the-last-lap.jpg' },
    { title: 'Foodball', image: '/work/foodball.jpg' },
    { title: 'You and Everything Else', image: '/work/you-and-everything-else.jpg' },
    { title: 'Villa Malaga', image: '/work/villa-malaga.avif' },
    { title: 'NCCR Robotics', image: '/work/nccr-robotics.avif' },
    { title: 'Singularity', image: '/work/singularity.avif' },
    { title: 'Himmelfahrtskommando', image: '/work/himmelfahrtskommando.avif' },
    { title: 'Body Hunters', image: '/work/body-hunters.jpg' },
    { title: 'Open World', image: '/work/open-world.avif' },
    { title: 'Loch Ness', image: '/work/loch-ness.jpg' },
  ],
  eduBase: [{ institution: 'ECAM — Madrid Film School' }, { institution: 'Middlesex University' }],
};

// -----------------------------------------------------------------------------
// TRANSLATIONS
// -----------------------------------------------------------------------------
export const t = {
  // ===========================================================================
  // ENGLISH
  // ===========================================================================
  en: {
    langName: 'English',
    role: 'Producer & Executive Producer',
    tagline: 'Films, series, documentaries and brand stories that travel across borders.',
    seoDescription:
      'Sebastian Cepeda — producer and executive producer working across film, television, documentary and brand storytelling between Zurich and Madrid.',
    availability: 'Open worldwide',
    basedIn: 'Based in',
    cities: ['Zurich', 'Madrid'],
    heroFormats: 'Film · Series · Documentary · Brand',
    heroScroll: 'Scroll',
    cta: { work: 'Selected work', contact: 'Get in touch' },
    nav: { about: 'About', work: 'Work', companies: 'Companies', contact: 'Contact' },
    navCta: 'Get in touch',
    privacyLabel: 'Privacy',
    about: {
      heading: 'Who I am',
      portraitAlt: 'Sebastian Cepeda',
      paragraphs: [
        'I’m a producer and executive producer working between Zurich and Madrid, and open to projects worldwide — feature films, series, documentaries, commercials and brand films.',
        'A third-culture kid, born in Buenos Aires and having lived across Germany, Switzerland and Spain, I’ve travelled through 50+ countries — and that perspective sits at the centre of what I make: stories about different lives, different voices, and different ways of telling them. My projects have found homes with Netflix, Amazon Prime Video and Apple TV, and broadcasters like SRF and ProSieben.',
        'Having worked across many disciplines myself — producing, directing, cinematography, editing, colour and screenwriting — I’m at home with every department. I’ve led teams from 3 to around 150 people, and I know how to adapt to what a crew or client needs.',
        'Along the way I’ve learned that good producing is really about trust, taste and follow-through. That’s what I try to bring to every table.',
      ],
      personal: [
        'Multicultural by nature — I work in Spanish, English, German, French and Italian.',
        'An “otrovert” — extrovert when it’s needed, introvert by nature.',
        'I’ll take a deep conversation over small talk any day.',
        'Off set: nature, photography and a good book.',
        'Obsessed with the craft: story first, always.',
      ],
    },
    servicesLabel: 'What I do',
    services: [
      { title: 'Executive Production', body: 'Structuring, financing and steering projects from development through delivery — keeping vision and budget on the same side.' },
      { title: 'Production', body: 'Hands-on production of film, television and documentary, assembling and leading the right team for each story.' },
      { title: 'Development', body: 'Finding and shaping material, packaging talent, and building the partnerships that get a project made.' },
      { title: 'Brand & Corporate', body: 'Films that do real work — employer branding, product and brand stories built to reach and to convert.' },
    ],
    approachLabel: 'How I work',
    approachIntro:
      'Technical and creative by nature — my experience taught me to understand both sides of a production, without ever losing the logistics and the budget out of sight.',
    strengths: [
      { title: 'Negotiation', body: '22+ years negotiating and closing deals — I know how to get a project financed and off the ground.' },
      { title: 'Leadership', body: 'Building the right team and steering it calmly under pressure.' },
      { title: 'People first', body: 'A production works best when the people making it are looked after.' },
    ],
    workLabel: 'Selected work',
    work: [
      { format: 'Feature Film', role: 'Executive Producer / Producer', year: 'Pre-production' },
      { format: 'Series', role: 'Executive Producer / Producer', year: 'In production' },
      { format: 'Series', role: 'Executive Producer / Producer', year: 'In development' },
      { format: 'Series', role: 'Producer', year: '2025' },
      { format: 'Documentary', role: 'Executive Producer', year: '2024' },
      { format: 'Documentary', role: 'Executive Producer', year: '2023' },
      { format: 'Feature Film', role: 'Producer, Screenwriter, DP, Colorist', year: '2017' },
      { format: 'Feature Film', role: 'Producer, DP, Editor, Colorist', year: '2013' },
      { format: 'Series', role: 'Executive Producer', year: 'In development' },
      { format: 'Documentary', role: 'Executive Producer', year: 'In development' },
      { format: 'Short', role: 'Executive Producer', year: 'In financing' },
    ],
    companiesLabel: 'Companies',
    companiesIntro:
      'Three companies, each covering a front — fiction in Spain, international fiction and documentary, and corporate in Switzerland.',
    companies: [
      { place: 'Madrid', body: 'Film and television production — creative content across features, series and documentary.' },
      { place: 'Zurich · Madrid', body: 'International narrative and documentary production with a multicultural point of view.' },
      { place: 'Zurich', body: 'Corporate and brand films that do real work — with a filmmaker’s standard of storytelling.' },
    ],
    clientsLabel: 'Trusted by',
    educationLabel: 'Education',
    education: [
      { degree: 'Master in Executive Production, Film & Series', detail: '' },
      { degree: 'BA (Hons) Filmmaking Arts', detail: 'In collaboration with SAE Zurich — Zurich, Switzerland' },
    ],
    contactLabel: 'Contact',
    contact: {
      headline: 'Let’s make something worth watching.',
      intro: 'Have a project, a script, or just an idea worth making? I’d love to hear about it.',
    },
    privacy: {
      title: 'Privacy & data',
      updated: 'Last updated July 2026',
      lead: 'This site is built to respect your privacy. It sets no cookies, shows no ads, and never tries to identify you or follow you around the web. Here’s exactly what happens when you visit.',
      sections: [
        { h: 'Analytics', body: 'I use Cloudflare Web Analytics, a privacy-first, cookieless service. It measures only anonymous, aggregate information — such as page views, the country a visit comes from, and which site referred you. It does not use cookies, does not fingerprint your device, and cannot identify you or track you across other websites.' },
        { h: 'Cookies', body: 'This site stores no cookies on your device. That’s why you won’t see a cookie banner — there’s nothing to consent to.' },
        { h: 'If you email me', body: 'If you reach out at cepeda.sebastian@gmail.com, I use your message and contact details only to reply to you. I don’t add you to any mailing list and I don’t share your information with anyone.' },
        { h: 'Hosting', body: 'The site is hosted on Netlify, which — like any web host — may process standard technical request logs (such as IP addresses) to serve pages and keep the site secure. These logs are not used to profile visitors.' },
        { h: 'Your rights', body: 'Under Swiss (nFADP) and EU (GDPR) data-protection law you have rights over any personal data relating to you. Since this site doesn’t build visitor profiles, there’s very little to act on — but if you have any question about privacy here, just write to cepeda.sebastian@gmail.com and I’ll be glad to help.' },
      ],
      back: '← Back to home',
    },
  },

  // ===========================================================================
  // DEUTSCH
  // ===========================================================================
  de: {
    langName: 'Deutsch',
    role: 'Produzent & Executive Producer',
    tagline: 'Filme, Serien, Dokumentationen und Markenfilme, die Grenzen überschreiten.',
    seoDescription:
      'Sebastian Cepeda — Produzent und Executive Producer für Film, Fernsehen, Dokumentation und Markenfilme, zwischen Zürich und Madrid.',
    availability: 'Weltweit tätig',
    basedIn: 'Zwischen',
    cities: ['Zürich', 'Madrid'],
    heroFormats: 'Film · Serie · Dokumentation · Marke',
    heroScroll: 'Scrollen',
    cta: { work: 'Ausgewählte Arbeiten', contact: 'Kontakt' },
    nav: { about: 'Über mich', work: 'Arbeiten', companies: 'Unternehmen', contact: 'Kontakt' },
    navCta: 'Kontakt',
    privacyLabel: 'Datenschutz',
    about: {
      heading: 'Wer ich bin',
      portraitAlt: 'Sebastian Cepeda',
      paragraphs: [
        'Ich bin Produzent und Executive Producer, zu Hause in Zürich und Madrid und weltweit tätig. Ich entwickle und begleite Projekte von der ersten Idee bis zur Veröffentlichung: Spielfilme, Serien, Dokumentationen, Werbespots, Kurzfilme, Musikvideos und Markenfilme.',
        'Als Third Culture Kid – geboren in Buenos Aires, gelebt in Deutschland, der Schweiz und Spanien – habe ich über 50 Länder bereist. Diese Perspektive prägt alles, was ich mache: Geschichten über unterschiedliche Leben und Stimmen – und über neue Wege, sie zu erzählen. Meine Projekte liefen bei Netflix, Amazon Prime Video und Apple TV sowie bei SRF und ProSieben.',
        'Ich habe selbst in vielen Bereichen gearbeitet – Produktion, Regie, Kamera, Schnitt, Farbkorrektur und Drehbuch. Deshalb bewege ich mich auf Augenhöhe mit jedem Department. Ich habe Teams von 3 bis rund 150 Personen geleitet und weiss, mich dabei auf die Bedürfnisse von Crew und Kunde einzustellen.',
        'Über die Jahre habe ich gelernt: Gutes Produzieren beruht vor allem auf Vertrauen, Gespür und Verlässlichkeit. Genau das bringe ich in jedes Projekt ein.',
      ],
      personal: [
        'Multikulturell von Natur aus – ich arbeite auf Spanisch, Englisch, Deutsch, Französisch und Italienisch.',
        'Ein „Otrovert“: extrovertiert, wenn es sein muss – introvertiert von Natur aus.',
        'Ein tiefes Gespräch ist mir lieber als Small Talk.',
        'Abseits des Sets: Natur, Fotografie und ein gutes Buch.',
        'Besessen vom Handwerk: Am Anfang steht immer die Geschichte.',
      ],
    },
    servicesLabel: 'Was ich mache',
    services: [
      { title: 'Executive Production', body: 'Projekte strukturieren, finanzieren und steuern – von der Entwicklung bis zur Auslieferung, damit die Vision trägt und das Budget hält.' },
      { title: 'Produktion', body: 'Praxisnahe Produktion für Film, Fernsehen und Dokumentation – das richtige Team für jede Geschichte zusammenstellen und führen.' },
      { title: 'Development', body: 'Stoffe finden und entwickeln, Talente zusammenbringen und die Partnerschaften aufbauen, die ein Projekt erst möglich machen.' },
      { title: 'Marke & Corporate', body: 'Filme, die etwas bewegen – Employer Branding, Produkt- und Markenfilme, gemacht für Reichweite und Wirkung.' },
    ],
    approachLabel: 'Wie ich arbeite',
    approachIntro:
      'Technisch und kreativ zugleich – ich verstehe beide Seiten einer Produktion, ohne Logistik und Budget aus den Augen zu verlieren.',
    strengths: [
      { title: 'Verhandlung', body: 'Über 22 Jahre Erfahrung darin, Projekte zu finanzieren und Deals abzuschliessen.' },
      { title: 'Führung', body: 'Das richtige Team aufbauen – und es auch unter Druck ruhig auf Kurs halten.' },
      { title: 'Der Mensch im Mittelpunkt', body: 'Ein Projekt gelingt am besten, wenn es den Menschen dahinter gut geht.' },
    ],
    workLabel: 'Ausgewählte Arbeiten',
    work: [
      { format: 'Spielfilm', role: 'Executive Producer / Produzent', year: 'In Vorproduktion' },
      { format: 'Serie', role: 'Executive Producer / Produzent', year: 'In Produktion' },
      { format: 'Serie', role: 'Executive Producer / Produzent', year: 'In Entwicklung' },
      { format: 'Serie', role: 'Produzent', year: '2025' },
      { format: 'Dokumentation', role: 'Executive Producer', year: '2024' },
      { format: 'Dokumentation', role: 'Executive Producer', year: '2023' },
      { format: 'Spielfilm', role: 'Produzent, Drehbuch, Kamera, Farbkorrektur', year: '2017' },
      { format: 'Spielfilm', role: 'Produzent, Kamera, Schnitt, Farbkorrektur', year: '2013' },
      { format: 'Serie', role: 'Executive Producer', year: 'In Entwicklung' },
      { format: 'Dokumentation', role: 'Executive Producer', year: 'In Entwicklung' },
      { format: 'Kurzfilm', role: 'Executive Producer', year: 'In Finanzierung' },
    ],
    companiesLabel: 'Unternehmen',
    companiesIntro:
      'Drei Unternehmen, jedes mit eigenem Schwerpunkt – Fiktion in Spanien, internationale Fiktion und Dokumentarfilm sowie Corporate in der Schweiz.',
    companies: [
      { place: 'Madrid', body: 'Film- und Fernsehproduktion – kreative Inhalte für Spielfilme, Serien und Dokumentationen.' },
      { place: 'Zürich · Madrid', body: 'Internationale fiktionale und dokumentarische Produktion mit multikultureller Perspektive.' },
      { place: 'Zürich', body: 'Corporate- und Markenfilme mit spürbarer Wirkung – erzählt mit dem Anspruch eines Filmemachers.' },
    ],
    clientsLabel: 'Kunden',
    educationLabel: 'Ausbildung',
    education: [
      { degree: 'Master in Executive Production, Film & Serie', detail: '' },
      { degree: 'BA (Hons) Filmmaking Arts', detail: 'In Zusammenarbeit mit SAE Zürich — Zürich, Schweiz' },
    ],
    contactLabel: 'Kontakt',
    contact: {
      headline: 'Machen wir etwas, das man sehen will.',
      intro: 'Ein Projekt, ein Drehbuch oder eine Idee, die erzählt werden will? Schreiben Sie mir.',
    },
    privacy: {
      title: 'Datenschutz & Daten',
      updated: 'Zuletzt aktualisiert im Juli 2026',
      lead: 'Diese Website respektiert Ihre Privatsphäre. Sie setzt keine Cookies, zeigt keine Werbung und versucht nie, Sie zu identifizieren oder im Netz zu verfolgen. Hier steht genau, was bei Ihrem Besuch passiert.',
      sections: [
        { h: 'Analyse', body: 'Ich nutze Cloudflare Web Analytics, einen datenschutzfreundlichen, cookielosen Dienst. Er misst nur anonyme, aggregierte Informationen – etwa Seitenaufrufe, das Herkunftsland eines Besuchs und die verweisende Seite. Er verwendet keine Cookies, erstellt keinen Geräte-Fingerabdruck und kann Sie nicht identifizieren oder über andere Websites hinweg verfolgen.' },
        { h: 'Cookies', body: 'Diese Website speichert keine Cookies auf Ihrem Gerät. Deshalb sehen Sie auch kein Cookie-Banner – es gibt nichts, dem Sie zustimmen müssten.' },
        { h: 'Wenn Sie mir schreiben', body: 'Wenn Sie sich unter cepeda.sebastian@gmail.com melden, nutze ich Ihre Nachricht und Kontaktdaten ausschliesslich, um Ihnen zu antworten. Ich setze Sie auf keine Verteilerliste und gebe Ihre Daten an niemanden weiter.' },
        { h: 'Hosting', body: 'Die Website wird bei Netlify gehostet, das – wie jeder Webhost – technische Standard-Logs (etwa IP-Adressen) verarbeiten kann, um Seiten auszuliefern und die Website sicher zu halten. Diese Logs werden nicht zur Profilbildung genutzt.' },
        { h: 'Ihre Rechte', body: 'Nach schweizerischem (revDSG) und EU-Recht (DSGVO) haben Sie Rechte an allen Sie betreffenden personenbezogenen Daten. Da diese Website keine Besucherprofile erstellt, gibt es kaum etwas zu veranlassen – bei Fragen zum Datenschutz schreiben Sie mir einfach an cepeda.sebastian@gmail.com, ich helfe gern.' },
      ],
      back: '← Zurück zur Startseite',
    },
  },

  // ===========================================================================
  // ESPAÑOL (rioplatense / argentino — voseo)
  // ===========================================================================
  es: {
    langName: 'Español',
    role: 'Productor y Productor Ejecutivo',
    tagline: 'Cine, series, documentales e historias de marca que cruzan fronteras.',
    seoDescription:
      'Sebastian Cepeda — productor y productor ejecutivo de cine, televisión, documental e historias de marca, entre Zúrich y Madrid.',
    availability: 'Disponible en todo el mundo',
    basedIn: 'Con base en',
    cities: ['Zúrich', 'Madrid'],
    heroFormats: 'Cine · Series · Documental · Marca',
    heroScroll: 'Deslizá',
    cta: { work: 'Trabajos', contact: 'Contacto' },
    nav: { about: 'Sobre mí', work: 'Trabajos', companies: 'Empresas', contact: 'Contacto' },
    navCta: 'Contacto',
    privacyLabel: 'Privacidad',
    about: {
      heading: 'Quién soy',
      portraitAlt: 'Sebastian Cepeda',
      paragraphs: [
        'Soy productor y productor ejecutivo, trabajo entre Zúrich y Madrid y estoy abierto a proyectos en todo el mundo. Desarrollo y lidero proyectos desde la primera chispa de una idea hasta el momento en que llegan a su público: largometrajes, series, documentales, publicidad, cortometrajes, videoclips y films de marca.',
        'Soy un third culture kid: nací en Buenos Aires y viví entre Alemania, Suiza y España, y he viajado por más de 50 países. Esa mirada está en el centro de lo que hago: historias sobre vidas distintas, voces distintas y formas distintas de contarlas. Mis proyectos han llegado a Netflix, Amazon Prime Video y Apple TV, y a cadenas como SRF y ProSieben.',
        'Trabajé en muchos oficios —producción, dirección, fotografía, montaje, color y guion—, así que me muevo de igual a igual con cada departamento. Lideré equipos de 3 a unas 150 personas, y sé adaptarme a lo que necesita el equipo o el cliente.',
        'Con el tiempo aprendí que producir bien es, sobre todo, cuestión de confianza, criterio y cumplir lo que se promete. Eso es lo que intento llevar a cada mesa.',
      ],
      personal: [
        'Multicultural por naturaleza: trabajo en español, inglés, alemán, francés e italiano.',
        'Un “otrovert”: extrovertido cuando hace falta, introvertido por naturaleza.',
        'Prefiero una conversación profunda al small talk.',
        'Fuera del set: naturaleza, fotografía y un buen libro.',
        'Obsesionado con el oficio: siempre la historia primero.',
      ],
    },
    servicesLabel: 'Qué hago',
    services: [
      { title: 'Producción Ejecutiva', body: 'Estructurar, financiar y guiar proyectos desde el desarrollo hasta la entrega, manteniendo la visión y el presupuesto del mismo lado.' },
      { title: 'Producción', body: 'Producción práctica de cine, televisión y documental, formando y liderando el equipo adecuado para cada historia.' },
      { title: 'Desarrollo', body: 'Encontrar y dar forma al material, reunir el talento y construir las alianzas que hacen posible un proyecto.' },
      { title: 'Marca y Corporativo', body: 'Films que trabajan de verdad: employer branding e historias de producto y marca pensadas para llegar y convertir.' },
    ],
    approachLabel: 'Cómo trabajo',
    approachIntro:
      'Técnico y creativo por naturaleza: mi experiencia me llevó a entender ambos lados de una producción, sin perder de vista la logística ni el presupuesto.',
    strengths: [
      { title: 'Negociación', body: 'Más de 22 años negociando y cerrando acuerdos: sé cómo financiar un proyecto y sacarlo adelante.' },
      { title: 'Liderazgo', body: 'Formar el equipo adecuado y conducirlo con calma bajo presión.' },
      { title: 'Las personas primero', body: 'Un proyecto funciona mejor cuando la gente que lo hace está bien.' },
    ],
    workLabel: 'Trabajos seleccionados',
    work: [
      { format: 'Largometraje', role: 'Productor Ejecutivo / Productor', year: 'Preproducción' },
      { format: 'Serie', role: 'Productor Ejecutivo / Productor', year: 'En producción' },
      { format: 'Serie', role: 'Productor Ejecutivo / Productor', year: 'En desarrollo' },
      { format: 'Serie', role: 'Productor', year: '2025' },
      { format: 'Documental', role: 'Productor Ejecutivo', year: '2024' },
      { format: 'Documental', role: 'Productor Ejecutivo', year: '2023' },
      { format: 'Largometraje', role: 'Productor, Guionista, Fotografía, Color', year: '2017' },
      { format: 'Largometraje', role: 'Productor, Fotografía, Montaje, Color', year: '2013' },
      { format: 'Serie', role: 'Productor Ejecutivo', year: 'En desarrollo' },
      { format: 'Documental', role: 'Productor Ejecutivo', year: 'En desarrollo' },
      { format: 'Cortometraje', role: 'Productor Ejecutivo', year: 'En financiación' },
    ],
    companiesLabel: 'Empresas',
    companiesIntro:
      'Tres empresas, cada una en su frente: ficción en España, ficción internacional y documental, y corporativo en Suiza.',
    companies: [
      { place: 'Madrid', body: 'Producción de cine y televisión: contenidos creativos en largometraje, serie y documental.' },
      { place: 'Zúrich · Madrid', body: 'Producción internacional de ficción y documental con una mirada multicultural.' },
      { place: 'Zúrich', body: 'Films corporativos y de marca que trabajan de verdad, con el estándar narrativo de un cineasta.' },
    ],
    clientsLabel: 'Clientes',
    educationLabel: 'Formación',
    education: [
      { degree: 'Máster en Producción Ejecutiva de Cine y Series', detail: '' },
      { degree: 'BA (Hons) Filmmaking Arts', detail: 'En colaboración con SAE Zúrich — Zúrich, Suiza' },
    ],
    contactLabel: 'Contacto',
    contact: {
      headline: 'Hagamos algo que valga la pena ver.',
      intro: '¿Tenés un proyecto, un guion o simplemente una idea que valga la pena? Me encantaría escucharla.',
    },
    privacy: {
      title: 'Privacidad y datos',
      updated: 'Última actualización: julio de 2026',
      lead: 'Este sitio está hecho para respetar tu privacidad. No usa cookies, no muestra anuncios y nunca intenta identificarte ni seguirte por la web. Esto es exactamente lo que pasa cuando lo visitás.',
      sections: [
        { h: 'Analítica', body: 'Uso Cloudflare Web Analytics, un servicio respetuoso con la privacidad y sin cookies. Solo mide información anónima y agregada —como páginas vistas, el país desde el que llega una visita y desde qué sitio te derivaron—. No usa cookies, no genera una huella de tu dispositivo y no puede identificarte ni seguirte por otras webs.' },
        { h: 'Cookies', body: 'Este sitio no almacena ninguna cookie en tu dispositivo. Por eso no ves ningún banner de cookies: no hay nada que consentir.' },
        { h: 'Si me escribís', body: 'Si me contactás a cepeda.sebastian@gmail.com, uso tu mensaje y tus datos solo para responderte. No te agrego a ninguna lista de correo ni comparto tu información con nadie.' },
        { h: 'Alojamiento', body: 'El sitio está alojado en Netlify que, como cualquier hosting, puede procesar registros técnicos estándar (como direcciones IP) para servir las páginas y mantener el sitio seguro. Esos registros no se usan para perfilar a los visitantes.' },
        { h: 'Tus derechos', body: 'Según la ley suiza (nLPD) y de la UE (RGPD), tenés derechos sobre cualquier dato personal que te concierna. Como este sitio no crea perfiles de visitantes, hay muy poco sobre lo que actuar, pero si tenés cualquier duda sobre privacidad, escribime a cepeda.sebastian@gmail.com y con gusto te ayudo.' },
      ],
      back: '← Volver al inicio',
    },
  },
} as const;
