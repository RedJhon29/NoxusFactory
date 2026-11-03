/*====================ENCABEZADO====================
SCRIPT: Noxus Factory — idiomas, cotizador y validación
ARCHIVO: main.js
==================================================*/

/*=====================DETALLES=====================
QUÉ HACE: aplica EN/ES con diccionario en memoria, calcula el rango del
    cotizador y valida el formulario de contacto en el cliente.
VINCULADO A: index.html (atributos data-i18n* e ids de formularios) y
    styles.css (estados is-scrolled, is-active, is-hidden, is-invalid).
SI SE ALTERA: cada clave nueva debe existir en MESSAGES en ambos idiomas;
    renombrar un estado o un id rompe el efecto sin lanzar error.
FECHA: 2026-11-02 | LUGAR: Ocotal, Nueva Segovia
ESCRITO POR: ING. DENIS MANUEL LÓPEZ MOLINA.
==================================================*/

/*================CUERPO DEL CÓDIGO=================*/

(function () {
  'use strict';

  /* ============ Diccionarios ============ */
  const MESSAGES = {
    en: {
      'meta.title': 'Noxus Factory — Software & IT infrastructure engineering | Miami, FL',
      'meta.description': 'Noxus Factory designs and builds software, networks and critical IT infrastructure for enterprises in Miami, Florida and Latin America.',

      'a11y.skip': 'Skip to content',
      'a11y.mainNav': 'Main navigation',
      'a11y.mobileNav': 'Mobile navigation',
      'a11y.menu': 'Open menu',
      'a11y.close': 'Close menu',
      'a11y.lang': 'Language',

      'nav.home': 'Home',
      'nav.solutions': 'Solutions',
      'nav.infrastructure': 'Infrastructure',
      'nav.cases': 'Case studies',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.cta': 'Schedule a meeting',
      'nav.menu': 'Menu',

      'hero.eyebrow': 'Engineering firm · Miami, FL',
      'hero.title': 'Software architecture and <span class="accent">critical IT infrastructure</span> for modern enterprises',
      'hero.lead': 'We design, build and operate web platforms, mobile applications and physical network infrastructure for companies that cannot afford downtime. One accountable engineering partner, from the first line of code to the last certified cable.',
      'hero.cta1': 'Explore solutions',
      'hero.cta2': 'Request a quote',
      'hero.stat1.value': '99.99%',
      'hero.stat1.label': 'Availability SLA',
      'hero.stat2.value': '120+',
      'hero.stat2.label': 'Projects delivered',
      'hero.stat3.value': '< 15 min',
      'hero.stat3.label': 'Incident response',
      'hero.stat4.value': 'Miami · LATAM',
      'hero.stat4.label': 'Operating coverage',

      'console.live': 'live',
      'console.logTitle': 'Deploy log',
      'console.region': 'Region',
      'console.latency': 'Latency',

      'trust.1': 'TIA/EIA-568 certified cabling',
      'trust.2': 'ISO/IEC 11801 aligned',
      'trust.3': '99.99% uptime SLA',
      'trust.4': '24/7 NOC monitoring',

      'services.eyebrow': '01 — Digital solutions',
      'services.title': 'Software and digital ecosystems, engineered to scale',
      'services.lead': 'From corporate platforms to internal dashboards and mobile apps: architecture, delivery and maintenance under one senior team.',
      'services.cta': 'Request proposal',
      'services.spec.stack': 'Stack',
      'services.spec.time': 'Timeline',
      'services.spec.deliverables': 'Deliverables',
      'services.web.title': 'Web development',
      'services.web.desc': 'Corporate sites and enterprise web applications built on maintainable, secure architectures.',
      'services.web.stack': 'HTML5 · CSS3 · JavaScript · PHP · Laravel',
      'services.web.time': '4–8 weeks',
      'services.web.deliverables': 'Design system, documented API, QA report',
      'services.sys.title': 'Web systems & dashboards',
      'services.sys.desc': 'Real-time control panels, operational monitoring and reporting with interactive data visualization.',
      'services.sys.stack': 'React · Node.js · Python · PostgreSQL',
      'services.sys.time': '6–12 weeks',
      'services.sys.deliverables': 'Live dashboard, REST API, user documentation',
      'services.mobile.title': 'Mobile applications',
      'services.mobile.desc': 'Native and cross-platform apps for iOS and Android, optimized for store release and daily use.',
      'services.mobile.stack': 'Swift · Kotlin · React Native · Flutter',
      'services.mobile.time': '8–16 weeks',
      'services.mobile.deliverables': 'Store-ready build, clean architecture, CI/CD',
      'services.desktop.title': 'Desktop systems',
      'services.desktop.desc': 'Desktop software for operations, intensive calculation and workflow automation on Windows and macOS.',
      'services.desktop.stack': 'Electron · C# · WPF · Python',
      'services.desktop.time': '6–14 weeks',
      'services.desktop.deliverables': 'Installer, user manual, auto-update channel',

      'infra.eyebrow': '02 — Physical infrastructure',
      'infra.title': 'Networks, security and server rooms built to standard',
      'infra.lead': 'Design, installation and certification of the physical layer that supports your operation, with as-built documentation and traceable acceptance tests.',
      'infra.cta': 'Request site survey',
      'infra.spec.standards': 'Standards',
      'infra.spec.categories': 'Categories',
      'infra.spec.certification': 'Certification',
      'infra.spec.resolution': 'Resolution',
      'infra.spec.features': 'Features',
      'infra.spec.platforms': 'Platforms',
      'infra.spec.format': 'Format',
      'infra.spec.redundancy': 'Redundancy',
      'infra.spec.management': 'Management',
      'infra.cabling.title': 'Structured cabling',
      'infra.cabling.desc': 'Certified copper and fiber infrastructure for offices, campuses and data rooms.',
      'infra.cabling.standards': 'TIA/EIA-568 · ISO/IEC 11801',
      'infra.cabling.categories': 'Cat5e, Cat6, Cat6a, OS2 single-mode fiber',
      'infra.cabling.certification': 'Fluke test report per link',
      'infra.cctv.title': 'CCTV & IP video',
      'infra.cctv.desc': 'Commercial video surveillance with high-definition IP cameras and centralized recording.',
      'infra.cctv.resolution': '2 MP, 4 MP, 4K',
      'infra.cctv.features': 'Night vision, motion analytics, remote access',
      'infra.cctv.platforms': 'Hikvision · Dahua · Axis',
      'infra.servers.title': 'Servers & racks',
      'infra.servers.desc': 'Physical and virtual server infrastructure, racks and power protection for critical workloads.',
      'infra.servers.format': '19" rack, tower, micro-server',
      'infra.servers.redundancy': 'Dual PSU, UPS, RAID',
      'infra.servers.management': 'IPMI, iDRAC, iLO, Proxmox',

      'cases.eyebrow': '03 — Case studies',
      'cases.title': 'Measured outcomes, not promises',
      'cases.lead': 'A selection of recent engagements across retail, logistics and healthcare in South Florida.',
      'cases.1.sector': 'Retail · Miami',
      'cases.1.title': 'POS latency reduction',
      'cases.1.desc': 'Network redesign and local edge caching across 24 stores, with a zero-downtime rollout.',
      'cases.1.tags': 'Cat6A · Edge caching · Monitoring',
      'cases.2.sector': 'Logistics · Doral',
      'cases.2.title': 'Warehouse uptime',
      'cases.2.desc': 'Redundant rack, UPS and failover for a 24/7 distribution center.',
      'cases.2.tags': 'Servers · UPS · Failover',
      'cases.3.sector': 'Healthcare · Broward',
      'cases.3.title': 'IP cameras deployed',
      'cases.3.desc': 'Multi-site video surveillance with centralized recording and role-based access.',
      'cases.3.tags': 'CCTV · VMS · Access control',

      'about.eyebrow': '04 — About us',
      'about.title': 'Swiss standard engineering, Miami operations',
      'about.p1': 'Noxus Factory is a software and IT infrastructure engineering firm based in Miami, Florida. We work with mid-market and enterprise clients that need a single accountable partner for both the digital product and the physical layer that runs it.',
      'about.p2': 'Our teams are senior-only, bilingual and documentation-first. Every delivery includes architecture decisions, acceptance tests and a maintenance path — no black boxes.',
      'about.tick1': 'Senior engineers on every project',
      'about.tick2': 'English and Spanish delivery teams',
      'about.tick3': 'Documentation and acceptance tests included',
      'about.tick4': 'Security reviewed at every stage',
      'about.stat1.label': 'Founded',
      'about.stat1.value': '2016',
      'about.stat2.label': 'Senior engineers',
      'about.stat2.value': '18',
      'about.stat3.label': 'Projects delivered',
      'about.stat3.value': '120+',
      'about.stat4.label': 'Working languages',
      'about.stat4.value': '2',

      'quote.eyebrow': '05 — Estimator',
      'quote.title': 'Get a preliminary estimate in under a minute',
      'quote.lead': 'Choose the service type, your budget range and the desired timeline. The estimator returns an investment range, a delivery window and the team size we would assign.',
      'quote.serviceLegend': 'Service type',
      'quote.opt.software': 'Software',
      'quote.opt.softwareDesc': 'Web, apps, systems',
      'quote.opt.infrastructure': 'Infrastructure',
      'quote.opt.infrastructureDesc': 'Network, CCTV, servers',
      'quote.opt.both': 'Both',
      'quote.opt.bothDesc': 'End-to-end delivery',
      'quote.needService': 'Select a service type to calculate your estimate.',
      'quote.budgetLabel': 'Estimated budget',
      'quote.budgetHint': 'USD',
      'quote.timelineLabel': 'Desired timeline',
      'quote.time.1': '1–3 months',
      'quote.time.2': '3–6 months',
      'quote.time.3': '6–12 months',
      'quote.time.4': '12+ months',
      'quote.submit': 'Calculate estimate',
      'quote.reset': 'Reset',
      'quote.placeholderTitle': 'Your estimate will appear here',
      'quote.placeholderText': 'Complete the three fields to see a preliminary range.',
      'quote.result.investment': 'Estimated investment',
      'quote.result.delivery': 'Delivery window',
      'quote.result.team': 'Suggested team',
      'quote.result.coverage': 'Budget coverage',
      'quote.fit.range': 'Budget within the estimated range',
      'quote.fit.tight': 'Adjustable budget: scope to be defined',
      'quote.fit.below': 'Budget below the range: scope adjustment required',
      'quote.note': 'Preliminary estimate based on comparable projects. Not a binding offer.',
      'quote.cta': 'Schedule consultation',
      'quote.unit.weeks': 'weeks',
      'quote.unit.specialists': 'specialists',

      'contact.eyebrow': '06 — Contact',
      'contact.title': 'Let’s talk about your project',
      'contact.lead': 'Tell us what you need. A senior engineer — not a call center — answers within one business day.',
      'contact.name': 'Full name',
      'contact.company': 'Company',
      'contact.phone': 'Phone',
      'contact.email': 'Work email',
      'contact.service': 'Service type',
      'contact.message': 'Project details',
      'contact.namePh': 'Jane Doe',
      'contact.companyPh': 'Company Inc.',
      'contact.phonePh': '+1 (305) 000-0000',
      'contact.emailPh': 'jane@company.com',
      'contact.messagePh': 'Scope, systems involved, timeline…',
      'contact.servicePlaceholder': 'Select a service',
      'contact.opt.software': 'Software development',
      'contact.opt.infrastructure': 'IT infrastructure',
      'contact.opt.cctv': 'CCTV & security',
      'contact.opt.both': 'Software + Infrastructure',
      'contact.opt.other': 'Other',
      'contact.submit': 'Send message',
      'contact.note': 'We reply within one business day. Your information is used only to answer this request.',
      'contact.err.required': 'This field is required.',
      'contact.err.email': 'Enter a valid email address.',
      'contact.err.phone': 'Enter a valid phone number.',
      'contact.err.service': 'Select a service.',
      'contact.status.success': 'Your email client was opened with the message ready to send. If it did not open, write to contacto@noxusfactory.com.',
      'contact.status.error': 'We could not prepare the email. Please write to contacto@noxusfactory.com.',
      'contact.info.title': 'Corporate contact',
      'contact.info.areaLabel': 'Service area',
      'contact.info.areaValue': 'Miami-Dade · Broward · Palm Beach · Remote LATAM',
      'contact.info.hoursLabel': 'Office hours',
      'contact.info.hoursValue': 'Mon–Fri · 9:00–18:00 EST',
      'contact.info.langLabel': 'Languages',
      'contact.info.langValue': 'English · Spanish',
      'contact.info.emailLabel': 'Email',
      'contact.info.phoneLabel': 'Phone',
      'contact.info.responseLabel': 'Response time',
      'contact.info.responseValue': '< 24 business hours',

      'footer.factory': 'Factory',
      'footer.tagline': 'Software engineering and IT infrastructure. Miami, Florida.',
      'footer.solutions': 'Solutions',
      'footer.web': 'Web development',
      'footer.systems': 'Systems & dashboards',
      'footer.mobile': 'Mobile applications',
      'footer.cabling': 'Structured cabling',
      'footer.company': 'Company',
      'footer.cases': 'Case studies',
      'footer.about': 'About',
      'footer.estimator': 'Estimator',
      'footer.contactLink': 'Contact',
      'footer.contact': 'Contact',
      'footer.bilingual': 'English · Spanish',
      'footer.disclaimer': 'Estimates generated by this site are indicative and do not constitute a binding offer.',
      'footer.rights': '© 2026 Noxus Factory. All rights reserved.',
      'footer.legal': 'Legal notice',
      'footer.privacy': 'Privacy',
    },

    es: {
      'meta.title': 'Noxus Factory — Ingeniería de software e infraestructura IT | Miami, FL',
      'meta.description': 'Noxus Factory diseña y construye software, redes e infraestructura IT crítica para empresas en Miami, Florida y Latinoamérica.',

      'a11y.skip': 'Ir al contenido',
      'a11y.mainNav': 'Navegación principal',
      'a11y.mobileNav': 'Navegación móvil',
      'a11y.menu': 'Abrir menú',
      'a11y.close': 'Cerrar menú',
      'a11y.lang': 'Idioma',

      'nav.home': 'Inicio',
      'nav.solutions': 'Soluciones',
      'nav.infrastructure': 'Infraestructura',
      'nav.cases': 'Casos de éxito',
      'nav.about': 'Nosotros',
      'nav.contact': 'Contacto',
      'nav.cta': 'Agendar consulta',
      'nav.menu': 'Menú',

      'hero.eyebrow': 'Firma de ingeniería · Miami, FL',
      'hero.title': 'Arquitectura de software e <span class="accent">infraestructura IT crítica</span> para empresas modernas',
      'hero.lead': 'Diseñamos, construimos y operamos plataformas web, aplicaciones móviles e infraestructura física de red para empresas que no pueden permitirse caídas. Un solo socio de ingeniería responsable, desde la primera línea de código hasta el último cable certificado.',
      'hero.cta1': 'Explorar soluciones',
      'hero.cta2': 'Solicitar cotización',
      'hero.stat1.value': '99.99%',
      'hero.stat1.label': 'SLA de disponibilidad',
      'hero.stat2.value': '120+',
      'hero.stat2.label': 'Proyectos entregados',
      'hero.stat3.value': '< 15 min',
      'hero.stat3.label': 'Respuesta ante incidentes',
      'hero.stat4.value': 'Miami · LATAM',
      'hero.stat4.label': 'Cobertura operativa',

      'console.live': 'en vivo',
      'console.logTitle': 'Registro de despliegues',
      'console.region': 'Región',
      'console.latency': 'Latencia',

      'trust.1': 'Cableado certificado TIA/EIA-568',
      'trust.2': 'Alineado a ISO/IEC 11801',
      'trust.3': 'SLA de disponibilidad 99.99%',
      'trust.4': 'Monitoreo NOC 24/7',

      'services.eyebrow': '01 — Soluciones digitales',
      'services.title': 'Software y ecosistemas digitales, diseñados para escalar',
      'services.lead': 'Desde plataformas corporativas hasta dashboards internos y apps móviles: arquitectura, entrega y mantenimiento con un solo equipo senior.',
      'services.cta': 'Solicitar propuesta',
      'services.spec.stack': 'Stack',
      'services.spec.time': 'Plazo',
      'services.spec.deliverables': 'Entregables',
      'services.web.title': 'Desarrollo web',
      'services.web.desc': 'Sitios corporativos y aplicaciones web empresariales sobre arquitecturas mantenibles y seguras.',
      'services.web.stack': 'HTML5 · CSS3 · JavaScript · PHP · Laravel',
      'services.web.time': '4–8 semanas',
      'services.web.deliverables': 'Sistema de diseño, API documentada, reporte de QA',
      'services.sys.title': 'Sistemas web y dashboards',
      'services.sys.desc': 'Paneles de control en tiempo real, monitoreo operativo y reportería con visualización interactiva de datos.',
      'services.sys.stack': 'React · Node.js · Python · PostgreSQL',
      'services.sys.time': '6–12 semanas',
      'services.sys.deliverables': 'Dashboard en vivo, API REST, documentación de usuario',
      'services.mobile.title': 'Aplicaciones móviles',
      'services.mobile.desc': 'Apps nativas y multiplataforma para iOS y Android, optimizadas para publicación en tiendas y uso diario.',
      'services.mobile.stack': 'Swift · Kotlin · React Native · Flutter',
      'services.mobile.time': '8–16 semanas',
      'services.mobile.deliverables': 'Build listo para tienda, arquitectura limpia, CI/CD',
      'services.desktop.title': 'Sistemas de escritorio',
      'services.desktop.desc': 'Software de escritorio para operaciones, cálculo intensivo y automatización de flujos en Windows y macOS.',
      'services.desktop.stack': 'Electron · C# · WPF · Python',
      'services.desktop.time': '6–14 semanas',
      'services.desktop.deliverables': 'Instalador, manual de usuario, canal de actualización automática',

      'infra.eyebrow': '02 — Infraestructura física',
      'infra.title': 'Redes, seguridad y cuartos de servidores bajo estándar',
      'infra.lead': 'Diseño, instalación y certificación de la capa física que sostiene su operación, con documentación as-built y pruebas de aceptación trazables.',
      'infra.cta': 'Solicitar visita técnica',
      'infra.spec.standards': 'Estándares',
      'infra.spec.categories': 'Categorías',
      'infra.spec.certification': 'Certificación',
      'infra.spec.resolution': 'Resolución',
      'infra.spec.features': 'Funciones',
      'infra.spec.platforms': 'Plataformas',
      'infra.spec.format': 'Formato',
      'infra.spec.redundancy': 'Redundancia',
      'infra.spec.management': 'Gestión',
      'infra.cabling.title': 'Cableado estructurado',
      'infra.cabling.desc': 'Infraestructura certificada de cobre y fibra para oficinas, campus y cuartos de datos.',
      'infra.cabling.standards': 'TIA/EIA-568 · ISO/IEC 11801',
      'infra.cabling.categories': 'Cat5e, Cat6, Cat6a, fibra monomodo OS2',
      'infra.cabling.certification': 'Reporte de pruebas Fluke por enlace',
      'infra.cctv.title': 'CCTV y video IP',
      'infra.cctv.desc': 'Videovigilancia comercial con cámaras IP de alta definición y grabación centralizada.',
      'infra.cctv.resolution': '2 MP, 4 MP, 4K',
      'infra.cctv.features': 'Visión nocturna, analítica de movimiento, acceso remoto',
      'infra.cctv.platforms': 'Hikvision · Dahua · Axis',
      'infra.servers.title': 'Servidores y racks',
      'infra.servers.desc': 'Infraestructura de servidores físicos y virtuales, racks y protección eléctrica para cargas críticas.',
      'infra.servers.format': 'Rack 19", torre, micro-servidor',
      'infra.servers.redundancy': 'PSU dual, UPS, RAID',
      'infra.servers.management': 'IPMI, iDRAC, iLO, Proxmox',

      'cases.eyebrow': '03 — Casos de éxito',
      'cases.title': 'Resultados medidos, no promesas',
      'cases.lead': 'Una selección de proyectos recientes en retail, logística y salud en el sur de Florida.',
      'cases.1.sector': 'Retail · Miami',
      'cases.1.title': 'Reducción de latencia en POS',
      'cases.1.desc': 'Rediseño de red y caché local en el borde para 24 tiendas, con despliegue sin caídas.',
      'cases.1.tags': 'Cat6A · Caché en el borde · Monitoreo',
      'cases.2.sector': 'Logística · Doral',
      'cases.2.title': 'Disponibilidad en almacén',
      'cases.2.desc': 'Rack redundante, UPS y failover para un centro de distribución 24/7.',
      'cases.2.tags': 'Servidores · UPS · Failover',
      'cases.3.sector': 'Salud · Broward',
      'cases.3.title': 'Cámaras IP desplegadas',
      'cases.3.desc': 'Videovigilancia multi-sede con grabación centralizada y acceso por roles.',
      'cases.3.tags': 'CCTV · VMS · Control de acceso',

      'about.eyebrow': '04 — Nosotros',
      'about.title': 'Ingeniería con estándar suizo, operación en Miami',
      'about.p1': 'Noxus Factory es una firma de ingeniería de software e infraestructura IT con sede en Miami, Florida. Trabajamos con empresas medianas y corporativas que necesitan un único socio responsable tanto del producto digital como de la capa física que lo sostiene.',
      'about.p2': 'Nuestros equipos son senior, bilingües y documentan todo desde el inicio. Cada entrega incluye decisiones de arquitectura, pruebas de aceptación y una ruta de mantenimiento: sin cajas negras.',
      'about.tick1': 'Ingenieros senior en cada proyecto',
      'about.tick2': 'Equipos de entrega en inglés y español',
      'about.tick3': 'Documentación y pruebas de aceptación incluidas',
      'about.tick4': 'Seguridad revisada en cada etapa',
      'about.stat1.label': 'Fundación',
      'about.stat1.value': '2016',
      'about.stat2.label': 'Ingenieros senior',
      'about.stat2.value': '18',
      'about.stat3.label': 'Proyectos entregados',
      'about.stat3.value': '120+',
      'about.stat4.label': 'Idiomas de trabajo',
      'about.stat4.value': '2',

      'quote.eyebrow': '05 — Cotizador',
      'quote.title': 'Obtenga una estimación preliminar en menos de un minuto',
      'quote.lead': 'Elija el tipo de servicio, su rango de presupuesto y el plazo deseado. El cotizador devuelve un rango de inversión, una ventana de entrega y el tamaño de equipo que asignaríamos.',
      'quote.serviceLegend': 'Tipo de servicio',
      'quote.opt.software': 'Software',
      'quote.opt.softwareDesc': 'Web, apps, sistemas',
      'quote.opt.infrastructure': 'Infraestructura',
      'quote.opt.infrastructureDesc': 'Red, CCTV, servidores',
      'quote.opt.both': 'Ambos',
      'quote.opt.bothDesc': 'Entrega integral',
      'quote.needService': 'Seleccione un tipo de servicio para calcular su estimación.',
      'quote.budgetLabel': 'Presupuesto estimado',
      'quote.budgetHint': 'USD',
      'quote.timelineLabel': 'Plazo deseado',
      'quote.time.1': '1–3 meses',
      'quote.time.2': '3–6 meses',
      'quote.time.3': '6–12 meses',
      'quote.time.4': '12+ meses',
      'quote.submit': 'Calcular estimación',
      'quote.reset': 'Limpiar',
      'quote.placeholderTitle': 'Su estimación aparecerá aquí',
      'quote.placeholderText': 'Complete los tres campos para ver un rango preliminar.',
      'quote.result.investment': 'Inversión estimada',
      'quote.result.delivery': 'Plazo de entrega',
      'quote.result.team': 'Equipo sugerido',
      'quote.result.coverage': 'Cobertura del presupuesto',
      'quote.fit.range': 'Presupuesto dentro del rango estimado',
      'quote.fit.tight': 'Presupuesto ajustable: alcance a definir',
      'quote.fit.below': 'Presupuesto por debajo del rango: requiere ajuste de alcance',
      'quote.note': 'Estimación preliminar basada en proyectos comparables. No constituye una oferta vinculante.',
      'quote.cta': 'Agendar consulta',
      'quote.unit.weeks': 'semanas',
      'quote.unit.specialists': 'especialistas',

      'contact.eyebrow': '06 — Contacto',
      'contact.title': 'Hablemos de su proyecto',
      'contact.lead': 'Cuéntenos qué necesita. Un ingeniero senior —no un call center— responde dentro del siguiente día hábil.',
      'contact.name': 'Nombre completo',
      'contact.company': 'Empresa',
      'contact.phone': 'Teléfono',
      'contact.email': 'Correo corporativo',
      'contact.service': 'Tipo de servicio',
      'contact.message': 'Detalle del proyecto',
      'contact.namePh': 'Ana Pérez',
      'contact.companyPh': 'Empresa S.A.',
      'contact.phonePh': '+1 (305) 000-0000',
      'contact.emailPh': 'ana@empresa.com',
      'contact.messagePh': 'Alcance, sistemas involucrados, plazos…',
      'contact.servicePlaceholder': 'Seleccione un servicio',
      'contact.opt.software': 'Desarrollo de software',
      'contact.opt.infrastructure': 'Infraestructura IT',
      'contact.opt.cctv': 'CCTV y seguridad',
      'contact.opt.both': 'Software + Infraestructura',
      'contact.opt.other': 'Otro',
      'contact.submit': 'Enviar mensaje',
      'contact.note': 'Respondemos dentro de un día hábil. Su información se usa solo para atender esta solicitud.',
      'contact.err.required': 'Este campo es obligatorio.',
      'contact.err.email': 'Ingrese un correo válido.',
      'contact.err.phone': 'Ingrese un teléfono válido.',
      'contact.err.service': 'Seleccione un servicio.',
      'contact.status.success': 'Abrimos su cliente de correo con el mensaje listo para enviar. Si no se abrió, escriba a contacto@noxusfactory.com.',
      'contact.status.error': 'No pudimos preparar el correo. Escriba a contacto@noxusfactory.com.',
      'contact.info.title': 'Contacto corporativo',
      'contact.info.areaLabel': 'Zona de servicio',
      'contact.info.areaValue': 'Miami-Dade · Broward · Palm Beach · LATAM remoto',
      'contact.info.hoursLabel': 'Horario',
      'contact.info.hoursValue': 'Lun–Vie · 9:00–18:00 EST',
      'contact.info.langLabel': 'Idiomas',
      'contact.info.langValue': 'Inglés · Español',
      'contact.info.emailLabel': 'Correo',
      'contact.info.phoneLabel': 'Teléfono',
      'contact.info.responseLabel': 'Tiempo de respuesta',
      'contact.info.responseValue': '< 24 horas hábiles',

      'footer.factory': 'Factory',
      'footer.tagline': 'Ingeniería de software e infraestructura IT. Miami, Florida.',
      'footer.solutions': 'Soluciones',
      'footer.web': 'Desarrollo web',
      'footer.systems': 'Sistemas y dashboards',
      'footer.mobile': 'Aplicaciones móviles',
      'footer.cabling': 'Cableado estructurado',
      'footer.company': 'Compañía',
      'footer.cases': 'Casos de éxito',
      'footer.about': 'Nosotros',
      'footer.estimator': 'Cotizador',
      'footer.contactLink': 'Contacto',
      'footer.contact': 'Contacto',
      'footer.bilingual': 'Inglés · Español',
      'footer.disclaimer': 'Las estimaciones generadas por este sitio son indicativas y no constituyen una oferta vinculante.',
      'footer.rights': '© 2026 Noxus Factory. Todos los derechos reservados.',
      'footer.legal': 'Aviso legal',
      'footer.privacy': 'Privacidad',
    },
  };

  /* ============ Estado ============ */
  const STORAGE_KEY = 'noxus.lang';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_RE = /^[+()\d\s.\-]{7,20}$/;

  const MODELS = {
    software: { min: 45000, max: 95000, weeksMin: 10, weeksMax: 16, team: [3, 5] },
    infrastructure: { min: 28000, max: 70000, weeksMin: 6, weeksMax: 12, team: [2, 4] },
    both: { min: 72000, max: 165000, weeksMin: 14, weeksMax: 24, team: [4, 7] },
  };
  const URGENCY = {
    '1-3': { cost: 1.25, weeks: 0.6 },
    '3-6': { cost: 1.1, weeks: 0.8 },
    '6-12': { cost: 1, weeks: 1 },
    '12+': { cost: 0.92, weeks: 1.15 },
  };
  const CONTACT_RULES = [
    { id: 'name', required: true },
    { id: 'company' },
    { id: 'phone', phone: true },
    { id: 'email', required: true, email: true },
    { id: 'service', select: true },
    { id: 'message', required: true },
  ];

  let lang = 'en';
  let lastEstimate = null;
  let lastStatusKey = '';

  /* ============ Utilidades ============ */
  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.prototype.slice.call((root || document).querySelectorAll(selector));
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  });

  /* ENCABEZADO — t: traduce una clave con respaldo al inglés. */
  function t(key) {
    const dict = MESSAGES[lang] || MESSAGES.en;
    return dict[key] !== undefined ? dict[key] : (MESSAGES.en[key] || '');
  }

  /* ENCABEZADO — escapeHtml: neutraliza texto antes de inyectarlo. */
  function escapeHtml(value) {
    return String(value === null || value === undefined ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ENCABEZADO — roundTo: redondea importes a un paso comercial. */
  function roundTo(value, step) {
    return Math.round(value / step) * step;
  }

  /* ENCABEZADO — prefersReduced: indica si el usuario reduce movimiento. */
  function prefersReduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ============ Idioma ============ */
  /* ENCABEZADO — initialLanguage: prioriza preferencia guardada o navegador. */
  function initialLanguage() {
    let saved = null;
    try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (error) { saved = null; }
    if (saved === 'en' || saved === 'es') return saved;
    const browser = (navigator.language || 'en').toLowerCase();
    return browser.indexOf('es') === 0 ? 'es' : 'en';
  }

  /* ENCABEZADO — applyLanguage: traduce todo el DOM a un idioma dado. */
  function applyLanguage(next, persist) {
    if (!MESSAGES[next]) return;
    lang = next;

    const root = document.documentElement;
    root.lang = lang;
    root.dataset.lang = lang;

    $$('[data-i18n]').forEach(function (el) {
      const value = t(el.getAttribute('data-i18n'));
      if (value) el.textContent = value;
    });
    $$('[data-i18n-html]').forEach(function (el) {
      const value = t(el.getAttribute('data-i18n-html'));
      if (value) el.innerHTML = value;
    });
    $$('[data-i18n-placeholder]').forEach(function (el) {
      const value = t(el.getAttribute('data-i18n-placeholder'));
      if (value) el.setAttribute('placeholder', value);
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      const value = t(el.getAttribute('data-i18n-aria'));
      if (value) el.setAttribute('aria-label', value);
    });

    document.title = t('meta.title');
    const meta = $('#metaDescription');
    if (meta) meta.setAttribute('content', t('meta.description'));

    $$('[data-set-lang]').forEach(function (button) {
      const active = button.getAttribute('data-set-lang') === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (lastEstimate) renderEstimate();
    if (lastStatusKey) renderStatus(lastStatusKey);

    if (persist) {
      try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* sin almacenamiento */ }
    }
  }

  /* ============ Header y navegación ============ */
  /* ENCABEZADO — initHeader: sombra al desplazar y barra de progreso. */
  function initHeader() {
    const header = $('#siteHeader');
    const progress = $('#scrollProgress');
    if (!header) return;

    const update = function () {
      const y = window.scrollY || window.pageYOffset || 0;
      header.classList.toggle('is-scrolled', y > 8);
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, y / max) : 0;
        progress.style.transform = 'scaleX(' + ratio + ')';
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ENCABEZADO — initActiveNav: resalta la sección visible. */
  function initActiveNav() {
    const sections = $$('main section[id]');
    const links = $$('[data-nav]');
    if (!sections.length || !links.length) return;

    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('data-nav') === id);
        });
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ENCABEZADO — initReveal: aparición progresiva de bloques. */
  function initReveal() {
    const targets = $$('.reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window) || prefersReduced()) return;

    targets.forEach(function (el) { el.classList.add('is-hidden'); });
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-hidden');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ============ Cotizador ============ */
  /* ENCABEZADO — syncBudget: refleja el slider en el monto y la barra. */
  function syncBudget() {
    const input = $('#budget');
    const output = $('#budgetValue');
    if (!input) return;
    const min = Number(input.min) || 0;
    const max = Number(input.max) || 100;
    const value = Number(input.value) || min;
    const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
    input.style.setProperty('--p', pct + '%');
    if (output) output.textContent = currency.format(value);
  }

  /* ENCABEZADO — buildEstimate: calcula rango, plazo y equipo sugerido. */
  function buildEstimate(service, budget, timeline) {
    const model = MODELS[service];
    if (!model) return null;
    const urgency = URGENCY[timeline] || URGENCY['6-12'];

    const min = roundTo(model.min * urgency.cost, 500);
    const max = roundTo(model.max * urgency.cost, 500);
    const weeksMin = Math.max(4, Math.round(model.weeksMin * urgency.weeks));
    const weeksMax = Math.max(weeksMin + 2, Math.round(model.weeksMax * urgency.weeks));

    let fit = 'below';
    if (budget >= max) fit = 'range';
    else if (budget >= min) fit = 'tight';

    const coverage = Math.max(4, Math.min(100, Math.round((budget / max) * 100)));
    return {
      service: service,
      min: min,
      max: max,
      weeksMin: weeksMin,
      weeksMax: weeksMax,
      fit: fit,
      coverage: coverage,
      team: model.team,
    };
  }

  /* ENCABEZADO — renderEstimate: pinta el panel de resultado. */
  function renderEstimate() {
    const empty = $('#estimateEmpty');
    const content = $('#estimateContent');
    if (!empty || !content || !lastEstimate) return;

    const e = lastEstimate;
    const team = e.team[0] + '–' + e.team[1] + ' ' + t('quote.unit.specialists');
    const coverageClass = e.fit === 'range' ? 'is-ok' : (e.fit === 'tight' ? 'is-tight' : 'is-low');

    content.innerHTML =
      '<p class="estimate__kicker">' + escapeHtml(t('quote.opt.' + e.service)) + '</p>' +
      '<div class="estimate__main">' +
        '<span class="estimate__label">' + escapeHtml(t('quote.result.investment')) + '</span>' +
        '<span class="estimate__value">' + currency.format(e.min) + ' – ' + currency.format(e.max) + '</span>' +
      '</div>' +
      '<dl class="estimate__rows">' +
        '<div><dt>' + escapeHtml(t('quote.result.delivery')) + '</dt><dd>' +
          e.weeksMin + '–' + e.weeksMax + ' ' + escapeHtml(t('quote.unit.weeks')) + '</dd></div>' +
        '<div><dt>' + escapeHtml(t('quote.result.team')) + '</dt><dd>' + escapeHtml(team) + '</dd></div>' +
      '</dl>' +
      '<div class="coverage ' + coverageClass + '">' +
        '<div class="coverage__head"><span>' + escapeHtml(t('quote.result.coverage')) +
          '</span><span>' + e.coverage + '%</span></div>' +
        '<div class="coverage__track"><span class="coverage__fill" data-coverage="' +
          e.coverage + '"></span></div>' +
      '</div>' +
      '<p class="fit fit--' + e.fit + '"><span class="fit__dot"></span>' +
        escapeHtml(t('quote.fit.' + e.fit)) + '</p>' +
      '<p class="estimate__note">' + escapeHtml(t('quote.note')) + '</p>' +
      '<a class="btn btn--accent btn--block" href="#contact" data-service="' + e.service + '">' +
        escapeHtml(t('quote.cta')) + '</a>';

    empty.hidden = true;
    content.hidden = false;

    const fill = content.querySelector('[data-coverage]');
    if (fill) {
      const width = fill.getAttribute('data-coverage') + '%';
      window.requestAnimationFrame(function () { fill.style.width = width; });
    }
  }

  /* ENCABEZADO — initEstimator: conecta formulario, slider y resultado. */
  function initEstimator() {
    const form = $('#estimateForm');
    const input = $('#budget');
    const hint = $('#estimateHint');
    if (!form || !input) return;

    syncBudget();
    input.addEventListener('input', syncBudget);

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const serviceField = form.querySelector('input[name="service"]:checked');
      if (!serviceField) {
        if (hint) hint.hidden = false;
        const first = form.querySelector('input[name="service"]');
        if (first) first.focus();
        return;
      }
      if (hint) hint.hidden = true;

      const timelineField = form.querySelector('input[name="timeline"]:checked');
      const timeline = timelineField ? timelineField.value : '6-12';
      lastEstimate = buildEstimate(serviceField.value, Number(input.value), timeline);
      renderEstimate();
    });

    form.addEventListener('change', function (event) {
      if (event.target.name === 'service' && hint) hint.hidden = true;
    });

    form.addEventListener('reset', function () {
      lastEstimate = null;
      const empty = $('#estimateEmpty');
      const content = $('#estimateContent');
      if (empty) empty.hidden = false;
      if (content) {
        content.hidden = true;
        content.innerHTML = '';
      }
      if (hint) hint.hidden = true;
      window.requestAnimationFrame(syncBudget);
    });
  }

  /* ============ Contacto ============ */
  /* ENCABEZADO — setFieldError: aplica o limpia el error de un campo. */
  function setFieldError(field, message) {
    if (!field) return;
    const wrapper = field.closest('.field');
    const error = document.querySelector('[data-error-for="' + field.id + '"]');
    if (!wrapper || !error) return;

    if (message) {
      if (!error.id) error.id = 'error-' + field.id;
      wrapper.classList.add('is-invalid');
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', error.id);
      error.textContent = message;
    } else {
      wrapper.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
      error.textContent = '';
    }
  }

  /* ENCABEZADO — contactMessage: devuelve el error de un campo o vacío. */
  function contactMessage(field, rule) {
    const value = (field.value || '').trim();
    if (rule.select && !value) return t('contact.err.service');
    if (rule.required && !value) return t('contact.err.required');
    if (rule.email && value && !EMAIL_RE.test(value)) return t('contact.err.email');
    if (rule.phone && value && !PHONE_RE.test(value)) return t('contact.err.phone');
    return '';
  }

  /* ENCABEZADO — validateContactField: valida un campo puntual. */
  function validateContactField(field) {
    if (!field || !field.id) return '';
    const rule = CONTACT_RULES.filter(function (item) { return item.id === field.id; })[0];
    if (!rule) return '';
    const message = contactMessage(field, rule);
    setFieldError(field, message);
    return message;
  }

  /* ENCABEZADO — validateContactForm: valida todo y devuelve el primer error. */
  function validateContactForm(form) {
    let firstInvalid = null;
    CONTACT_RULES.forEach(function (rule) {
      const field = document.getElementById(rule.id);
      if (!field || !form.contains(field)) return;
      const message = contactMessage(field, rule);
      setFieldError(field, message);
      if (message && !firstInvalid) firstInvalid = field;
    });
    return firstInvalid;
  }

  /* ENCABEZADO — renderStatus: muestra el aviso de envío del formulario. */
  function renderStatus(key) {
    const status = $('#contactStatus');
    if (!status) return;
    lastStatusKey = key || '';
    if (!key) {
      status.hidden = true;
      status.textContent = '';
      status.className = 'form__status';
      return;
    }
    status.hidden = false;
    status.textContent = t(key);
    status.className = 'form__status ' + (key.indexOf('success') > -1 ? 'is-success' : 'is-error');
  }

  /* ENCABEZADO — initContact: valida y prepara el correo (sin backend). */
  function initContact() {
    const form = $('#contactForm');
    if (!form) return;

    form.addEventListener('input', function (event) {
      if (event.target.classList.contains('input')) setFieldError(event.target, '');
    });
    form.addEventListener('blur', function (event) {
      if (event.target.classList.contains('input')) validateContactField(event.target);
    }, true);
    form.addEventListener('change', function (event) {
      if (event.target.classList.contains('input')) validateContactField(event.target);
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      renderStatus('');
      const invalid = validateContactForm(form);
      if (invalid) { invalid.focus(); return; }

      const data = new FormData(form);
      const labels = {
        software: t('contact.opt.software'),
        infrastructure: t('contact.opt.infrastructure'),
        cctv: t('contact.opt.cctv'),
        both: t('contact.opt.both'),
        other: t('contact.opt.other'),
      };
      const serviceLabel = labels[data.get('service')] || t('contact.opt.other');
      const subject = 'Noxus Factory · ' + serviceLabel;
      const lines = [
        t('contact.name') + ': ' + (data.get('name') || ''),
        t('contact.company') + ': ' + (data.get('company') || '—'),
        t('contact.phone') + ': ' + (data.get('phone') || '—'),
        t('contact.email') + ': ' + (data.get('email') || ''),
        t('contact.service') + ': ' + serviceLabel,
        '',
        t('contact.message') + ':',
        (data.get('message') || ''),
      ];
      const href = 'mailto:contacto@noxusfactory.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));

      try {
        window.location.href = href;
        renderStatus('contact.status.success');
      } catch (error) {
        renderStatus('contact.status.error');
      }
    });
  }

  /* ENCABEZADO — initServiceLinks: preselecciona el servicio de contacto. */
  function initServiceLinks() {
    document.addEventListener('click', function (event) {
      const trigger = event.target.closest('[data-service]');
      if (!trigger) return;
      const service = trigger.getAttribute('data-service');
      const select = $('#service');
      if (!select) return;

      if (['software', 'infrastructure', 'cctv', 'both'].indexOf(service) > -1) {
        select.value = service;
        setFieldError(select, '');
      }
      renderStatus('');

      window.setTimeout(function () {
        const name = $('#name');
        if (name) name.focus({ preventScroll: true });
      }, 450);
    });
  }

  /* ============ Arranque ============ */
  /* ENCABEZADO — init: registra controles y aplica el idioma inicial. */
  function init() {
    $$('[data-set-lang]').forEach(function (button) {
      button.addEventListener('click', function () {
        applyLanguage(button.getAttribute('data-set-lang'), true);
      });
    });

    applyLanguage(initialLanguage(), false);
    /* Cada módulo se aísla: si uno falla, el resto del sitio sigue operativo. */
    [initHeader, initActiveNav, initReveal, initEstimator, initContact, initServiceLinks].forEach(function (task) {
      try {
        task();
      } catch (error) {
        if (window.console) window.console.error('[noxus]', error);
      }
    });
  }

  init();
})();

/*===========FIN DEL FRAGMENTO DE CÓDIGO============*/