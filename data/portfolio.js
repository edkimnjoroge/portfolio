(function () {
  var archive = "assets/archive/";

  function image(path, title, caption) {
    return {
      type: "image",
      src: archive + path,
      alt: { en: title },
      caption: { en: caption || title },
    };
  }

  function video(path, poster, title, caption) {
    return {
      type: "video",
      src: archive + path,
      poster: poster ? archive + poster : "",
      alt: { en: title },
      caption: { en: caption || title },
    };
  }

  function embed(url, poster, title, caption) {
    return {
      type: "embed",
      src: url,
      poster: poster ? archive + poster : "",
      alt: { en: title },
      caption: { en: caption || title },
    };
  }

  function file(path, title, caption) {
    return {
      type: "file",
      src: archive + path,
      alt: { en: title },
      caption: { en: caption || title },
    };
  }

  var doshiGallery = [
    "binding1.jpg",
    "binding2.jpg",
    "binding3.jpg",
    "binding4.jpg",
    "binding5.jpg",
    "binding6.jpg",
    "binding7.jpg",
    "binding8.jpg",
    "binding9.jpg",
    "binding10.jpg",
    "binding11.jpg",
    "binding12.jpg",
    "binding13.jpg",
    "black-casing-1.jpg",
    "black-casing-2.jpg",
    "black-casing-3.jpg",
    "black-casing-4.jpg",
    "black-casing-5.jpg",
    "chequered-plate1.jpg",
    "chequered-plate2.jpg",
    "chequered-plate3.jpg",
    "expanded-metal-1.jpg",
    "expanded-metal-2.jpg",
    "expanded-metal-3.jpg",
    "expanded-metal-var1.jpg",
    "expanded-metal-var2.jpg",
    "expanded-metal-var3.jpg",
    "galavanized-round-green1.jpg",
    "galavanized-round-green2.jpg",
    "galavanized-round-green3.jpg",
    "galavanized-round-red1.jpg",
    "galavanized-round-red2.jpg",
    "galavanized-round-red3.jpg",
    "galavanized-round1.jpg",
    "galavanized-round2.jpg",
    "galvanized-sheet1.jpg",
    "galvanized-sheet2.jpg",
    "Gi-Pipes-1.jpg",
    "Gi-Pipes-2.jpg",
    "Gi-Pipes-3.jpg",
    "Gi-Pipes-4.jpg",
    "Gi-Pipes-5.jpg",
    "Gi-Pipes-6.jpg",
    "Gi-Pipes-var1.jpg",
    "Gi-Pipes-var2.jpg",
    "Gi-Pipes-var3.jpg",
    "Gi-Pipes-var4.jpg",
    "Gi-Pipes-var5.jpg",
    "Gi-Pipes-var6.jpg",
    "Gi-Pipes-var7.jpg",
    "gi1.jpg",
    "gi2.jpg",
    "gi3.jpg",
    "round1.jpg",
    "round2.jpg",
    "roundgrouped1.jpg",
    "roundgrouped2.jpg",
    "roundgrouped3.jpg",
    "roundgrouped4.jpg",
    "roundgrouped5.jpg",
    "slotted-black-pipe-1.jpg",
    "slotted-black-pipe-2.jpg",
    "slotted-black-pipe-3.jpg",
    "slotted-black-pipe-4.jpg",
    "square1.jpg",
    "square2.jpg",
    "square3.jpg",
    "T-bars-1.jpg",
    "T-bars-2.jpg",
    "T-bars-3.jpg",
  ].map(function (name) {
    return image("2020/01/" + name, "Doshi product render - " + name.replace(/\.[^.]+$/, "").replace(/-/g, " "), "Catalogue render prepared for Doshi product presentation.");
  });

  window.portfolioData = {
    filters: [
      { key: "all", label: { en: "All", de: "Alle" } },
      { key: "website-apps", label: { en: "Website & Apps", de: "Websites & Apps" } },
      { key: "three-d-motion", label: { en: "3D & Motion Graphics", de: "3D & Motion Graphics" } },
    ],
    labels: {
      browse: { en: "Browse portfolio", de: "Portfolio durchsuchen" },
      viewDetails: { en: "View details", de: "Details ansehen" },
      role: { en: "Role", de: "Rolle" },
      stackOrTools: { en: "Stack / Tools", de: "Stack / Tools" },
      outcome: { en: "Outcome", de: "Ergebnis" },
      year: { en: "Year", de: "Jahr" },
      gallery: { en: "Gallery and media", de: "Galerie und Medien" },
      links: { en: "Links", de: "Links" },
      related: { en: "Related work", de: "Aehnliche Arbeiten" },
      mediaCount: { en: "media items", de: "Medien" },
      watch: { en: "Open media", de: "Medium oeffnen" },
      download: { en: "Download file", de: "Datei herunterladen" },
      close: { en: "Close", de: "Schliessen" },
      previous: { en: "Previous", de: "Zurueck" },
      next: { en: "Next", de: "Weiter" },
    },
    items: [
      {
        slug: "marketpulse-os-saas-product-architecture-and-operations",
        section: "projects",
        categories: ["website-apps"],
        year: "2025",
        coverImage: archive + "2025/10/Screenshot_21-10-2025_185219_marketpulseos.com_.jpeg",
        title: { en: "MarketpulseOS: SaaS Product Architecture and Operations", de: "MarketpulseOS: SaaS-Produktarchitektur und Betrieb" },
        kicker: { en: "SaaS platform architecture", de: "SaaS-Plattform-Architektur" },
        summary: {
          en: "SaaS Platform Architecture - PHP/CodeIgniter - MySQL - Flutter - Linux - AWS",
          de: "SaaS-Plattform-Architektur - PHP/CodeIgniter - MySQL - Flutter - Linux - AWS",
        },
        fullDescription: {
          en: [
            "I supported and helped build MarketpulseOS from the founding stage: a multi-tenant SaaS platform with ERP, CRM, HRM, and POS modules.",
            "The work covered full lifecycle delivery: application development, client onboarding, deployment, SSL/DNS configuration, database administration, and ongoing support. I also built the companion Flutter app for mobile access.",
            "Key outcome: Migrated Wideoptions Melamine from its internal ERP/CRM setup to MarketpulseOS with zero data loss across customer, supplier, product, and inventory records."
          ],
          de: [
            "Ich habe MarketpulseOS ab der Gruendungsphase unterstuetzt und mit aufgebaut: eine Multi-Tenant-SaaS-Plattform mit ERP-, CRM-, HRM- und POS-Modulen.",
            "Die Arbeit umfasste den kompletten Lebenszyklus: Anwendungs-Entwicklung, Kunden-Onboarding, Deployment, SSL/DNS-Konfiguration, Datenbank-Administration und laufenden Support. Ich habe auch die begleitende Flutter-App fuer mobilen Zugriff entwickelt.",
            "Wichtigstes Ergebnis: Migration von Wideoptions Melamine von internem ERP/CRM auf MarketpulseOS ohne Datenverlust bei Kunden-, Lieferanten-, Produkt- und Inventardaten."
          ],
        },
        role: {
          en: "SaaS architecture, full-stack development, Flutter app delivery, deployment, client onboarding, database administration, and support.",
          de: "SaaS-Architektur, Full-Stack-Entwicklung, Flutter-App, Deployment, Kunden-Onboarding, Datenbank-Administration und Support.",
        },
        stackOrTools: { en: "PHP/CodeIgniter, MySQL, Flutter, Linux, AWS, DNS, SSL, monitoring", de: "PHP/CodeIgniter, MySQL, Flutter, Linux, AWS, DNS, SSL, Monitoring" },
        outcome: {
          en: "Supported a production SaaS platform and migrated Wideoptions business data to MarketpulseOS with zero data loss.",
          de: "Produktive SaaS-Plattform unterstuetzt und Wideoptions-Geschaeftsdaten ohne Datenverlust zu MarketpulseOS migriert.",
        },
        links: [
          { label: { en: "Qodesystems" }, url: "https://qodesystems.com" },
          { label: { en: "Live demo" }, url: "https://demo.marketpulseos.com" },
        ],
        gallery: [
          image("2025/10/Screenshot_21-10-2025_185219_marketpulseos.com_.jpeg", "MarketpulseOS public product screen", "Public-facing screen from the MarketpulseOS product site."),
          image("2025/10/Screenshot_21-10-2025_195633_demo.marketpulseos.com_.jpeg", "MarketpulseOS demo screen", "Demo environment screen showing the working product."),
          image("2025/10/Screenshot_21-10-2025_195524_demo.marketpulseos.com_.jpeg", "MarketpulseOS module screen", "Operational module screen from the platform workflow."),
          image("2025/10/Screenshot_21-10-2025_195432_demo.marketpulseos.com_.jpeg", "MarketpulseOS dashboard screen", "Dashboard view of the live platform."),
        ],
        relatedItems: ["wideoptions-erp-hrm-crm", "barabara-alerts"],
      },
      {
        slug: "wideoptions-erp-hrm-crm",
        section: "projects",
        categories: ["website-apps"],
        year: "2025",
        coverImage: archive + "2025/06/Screenshot-2025-06-24-014136.jpg",
        title: { en: "WideOptions ERP/HRM/CRM", de: "WideOptions ERP/HRM/CRM" },
        kicker: { en: "Internal ERP/CRM platform", de: "Interne ERP/CRM-Plattform" },
        summary: { en: "Internal ERP/CRM Platform - Node.js - React - MySQL", de: "Interne ERP/CRM-Plattform - Node.js - React - MySQL" },
        fullDescription: {
          en: [
            "I built Wideoptions' first ERP/CRM from scratch to replace fragmented operations: customer management, sales, inventory, manufacturing workflows, and HR modules.",
            "The React frontend handled daily operations for 50+ staff. The Node.js backend managed business logic, data processing, and integrations. I also deployed and maintained the production environment.",
            "Key outcomes: 700+ customer records, supplier records, 600+ product records, and inventory data migrated from manual and legacy processes with zero data loss."
          ],
          de: [
            "Ich habe die erste ERP/CRM von Wideoptions von Grund auf aufgebaut, um fragmentierte Ablaeufe zu ersetzen: Kunden-Management, Vertrieb, Inventar, Fertigungs-Workflows und HR-Module.",
            "Das React-Frontend bediente den taeglichen Betrieb fuer 50+ Mitarbeiter. Das Node.js-Backend verwaltete Business-Logik, Datenverarbeitung und Integrationen. Ich habe auch die Produktions-Umgebung deployed und betrieben.",
            "Wichtigste Ergebnisse: 700+ Kundendatensaetze, Lieferantendaten, 600+ Produktdatensaetze und Inventardaten aus manuellen und alten Prozessen ohne Datenverlust migriert."
          ],
        },
        role: {
          en: "Full-stack development, production deployment, staff workflow setup, documentation, data migration, and maintenance.",
          de: "Full-Stack-Entwicklung, Production Deployment, Mitarbeiter-Workflows, Dokumentation, Datenmigration und Wartung.",
        },
        stackOrTools: { en: "Node.js, React, MySQL, ERP, CRM, HRM, production support", de: "Node.js, React, MySQL, ERP, CRM, HRM, Produktions-Support" },
        outcome: {
          en: "Built and supported the internal ERP/CRM platform, then supported the transition to MarketpulseOS while preserving data and workflows.",
          de: "Interne ERP/CRM-Plattform aufgebaut und betreut, danach die Transition zu MarketpulseOS mit Daten- und Workflow-Erhalt unterstuetzt.",
        },
        links: [
          { label: { en: "Brand guide PDF" }, url: archive + "2025/06/WIDE-OPTIONS-BRANDGUIDE.pdf" },
        ],
        gallery: [
          image("2025/06/Screenshot-2025-06-24-014136.jpg", "WideOptions ERP overview screen", "Overview screen introducing the ERP platform."),
          image("2025/06/Screenshot_24-6-2025_14656_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP module screenshot", "Archived ERP system screenshot."),
          image("2025/06/Screenshot_24-6-2025_14641_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP dashboard screenshot", "Archived dashboard view."),
          image("2025/06/Screenshot_24-6-2025_14629_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP workflow screenshot", "Workflow screen from the ERP platform."),
          image("2025/06/Screenshot_24-6-2025_14616_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP management screenshot", "Management module screenshot."),
          image("2025/06/Screenshot_24-6-2025_1461_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP records screenshot", "Business records view."),
          image("2025/06/Screenshot_24-6-2025_14546_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP operations screenshot", "Additional operations screen from the live platform."),
          image("2025/06/Screenshot_24-6-2025_14519_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP list screenshot", "List and record management screen."),
          image("2025/06/Screenshot_24-6-2025_1454_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP settings screenshot", "Additional ERP interface detail."),
          image("2025/06/Screenshot_24-6-2025_14446_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP secondary screenshot", "Secondary module view from the ERP platform."),
          image("2025/06/Screenshot_24-6-2025_14426_erp.wideoptions.co_.ke_.jpeg", "WideOptions ERP records screen", "Records screen from the ERP workflow."),
          file("2025/06/WIDE-OPTIONS-BRANDGUIDE.pdf", "WideOptions brand guide", "Downloadable brand guide prepared for client-facing use."),
        ],
        relatedItems: ["marketpulse-os-saas-product-architecture-and-operations", "barabara-alerts"],
      },
      {
        slug: "barabara-alerts",
        section: "projects",
        categories: ["website-apps"],
        year: "2026",
        coverImage: "assets/images/barabara-alerts-cover.svg",
        title: { en: "Barabara Alerts" },
        kicker: { en: "Mobile app", de: "Mobile App" },
        summary: { en: "Mobile App - Flutter - Laravel - Next.js", de: "Mobile App - Flutter - Laravel - Next.js" },
        fullDescription: {
          en: [
            "Rebuilt a road-safety concept from basic HTML to full product: Android and iOS apps using Flutter, Laravel backend for reporting workflows, and Next.js web frontend.",
            "Published to app stores. The live backend handles operational coordination and the API layer."
          ],
          de: [
            "Neubau eines Road-Safety-Konzepts von einfacher HTML-Seite zu vollstaendigem Produkt: Android- und iOS-Apps mit Flutter, Laravel-Backend fuer Reporting-Workflows und Next.js-Web-Frontend.",
            "Veroeffentlicht in den App Stores. Das Live-Backend verwaltet operative Koordination und API-Layer."
          ],
        },
        role: { en: "Mobile app delivery, Laravel backend, API workflow, and Next.js frontend.", de: "Mobile-App-Entwicklung, Laravel-Backend, API-Workflow und Next.js-Frontend." },
        stackOrTools: { en: "Flutter, Laravel, Next.js, REST APIs", de: "Flutter, Laravel, Next.js, REST APIs" },
        outcome: { en: "Turned an early web concept into a published mobile product with a live backend.", de: "Fruehes Web-Konzept in ein veroeffentlichtes Mobile-Produkt mit Live-Backend verwandelt." },
        links: [
          { label: { en: "Google Play" }, url: "https://play.google.com/store/search?q=barabara%20alerts&c=apps" },
        ],
        gallery: [],
        relatedItems: ["marketpulse-os-saas-product-architecture-and-operations", "lockdown-ice-online-shop"],
      },
      {
        slug: "lockdown-ice-online-shop",
        section: "projects",
        categories: ["website-apps"],
        year: "2023",
        coverImage: archive + "2025/06/slider2.jpg",
        title: { en: "Lockdown Ice Online Shop" },
        kicker: { en: "E-commerce platform", de: "E-Commerce-Plattform" },
        summary: { en: "E-Commerce Platform - Laravel - Flutter - REST API", de: "E-Commerce-Plattform - Laravel - Flutter - REST API" },
        fullDescription: {
          en: [
            "API-driven commerce platform for beverage retail: Laravel backend with Flutter companion apps for Android and iOS.",
            "I built this in 2023 and continue to maintain it. The backend provides a stable API surface for the mobile apps; the storefront handles direct customer ordering."
          ],
          de: [
            "API-gesteuerte Commerce-Plattform fuer Getraenke-Retail: Laravel-Backend mit Flutter-Begleit-Apps fuer Android und iOS.",
            "Ich habe dies 2023 aufgebaut und betreue es weiter. Das Backend liefert eine stabile API-Oberflaeche fuer die Mobile Apps; der Storefront verwaltet direkte Kunden-Bestellungen."
          ],
        },
        role: { en: "Laravel backend, Flutter mobile apps, REST API, storefront delivery, hosting, and maintenance.", de: "Laravel-Backend, Flutter-Mobile-Apps, REST API, Storefront, Hosting und Wartung." },
        stackOrTools: { en: "Laravel, Flutter, REST API, e-commerce, hosting", de: "Laravel, Flutter, REST API, E-Commerce, Hosting" },
        outcome: { en: "Built and maintain an API-backed commerce platform with web and mobile ordering paths.", de: "API-gestuetzte Commerce-Plattform mit Web- und Mobile-Bestellwegen gebaut und betreut." },
        links: [
          { label: { en: "Visit website" }, url: "https://lockdownice.com/" },
          { label: { en: "Android app" }, url: "https://play.google.com/store/apps/details?id=com.studio360.lockdownice" },
          { label: { en: "iOS app" }, url: "https://apps.apple.com/us/app/lockdownice/id6447322560" },
        ],
        gallery: [
          image("2025/06/slider2.jpg", "Lockdown Ice homepage screenshot", "Homepage view of the Lockdown Ice online shop."),
          image("2025/06/Screenshot_24-6-2025_2029_lockdownice.com_-scaled.jpeg", "Lockdown Ice website screenshot", "Archived screenshot from the online shop."),
          image("2023/06/slider1.jpg", "Lockdown Ice storefront banner", "Storefront banner used in the Lockdown Ice website."),
        ],
        relatedItems: ["kritiplacejoint", "marketpulse-os-saas-product-architecture-and-operations"],
      },
      {
        slug: "kritiplacejoint",
        section: "projects",
        categories: ["website-apps"],
        year: "2020",
        coverImage: archive + "2020/01/Screenshot-2025-06-24-004309.jpg",
        title: { en: "Kritiplacejoint Website" },
        kicker: { en: "WordPress website", de: "WordPress-Website" },
        summary: { en: "WordPress Website - Custom Calculator", de: "WordPress-Website - Custom Calculator" },
        fullDescription: {
          en: [
            "Boutique bakery website with interactive cake cost calculator: guest count, layers, occasion, flavor, and optional toppers.",
            "The calculator directly supports enquiries and sales, making the site more useful than a static brochure."
          ],
          de: [
            "Boutique-Baeckerei-Website mit interaktivem Kuchen-Kosten-Rechner: Gaeste-Anzahl, Etagen, Anlass, Geschmack und optionale Toppings.",
            "Der Rechner unterstuetzt Anfragen und Verkaeufe direkt und macht die Website nuetzlicher als eine statische Broschuere."
          ],
        },
        role: { en: "WordPress development, calculator implementation, responsive front-end support, and client delivery.", de: "WordPress-Entwicklung, Rechner-Implementierung, responsives Frontend und Kundenlieferung." },
        stackOrTools: { en: "WordPress, PHP, front-end implementation, custom calculator workflow", de: "WordPress, PHP, Frontend, Custom-Calculator-Workflow" },
        outcome: { en: "Delivered a business website with an interactive pricing workflow for customer enquiries.", de: "Business-Website mit interaktivem Preis-Workflow fuer Kundenanfragen geliefert." },
        links: [
          { label: { en: "Live website" }, url: "https://kritiplacejoint.com/" },
          { label: { en: "Project archive" }, url: "https://edkimfx.com/portfolio-archive/kritiplacejoint/" },
        ],
        gallery: [
          image("2020/01/Screenshot-2025-06-24-004309.jpg", "Kritiplacejoint website screenshot", "Homepage screenshot of the bakery website."),
          image("2020/01/frederick-medina-J8uTXtVbEbw-unsplash-scaled-1.jpg", "Kritiplacejoint bakery background", "Supporting bakery background image used in the site design."),
        ],
        relatedItems: ["lockdown-ice-online-shop", "barabara-alerts"],
      },
      {
        slug: "demo-reel",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2020",
        coverImage: archive + "2020/01/Screenshot-2024-06-10-014248-e1749761686309.jpg",
        previewType: "video",
        title: { en: "Demo Reel" },
        kicker: { en: "3D and motion compilation" },
        summary: { en: "A compilation of 3D and motion graphics work across hobby and client projects including ETG Fertilizers, Maudhui House, Mojitos Lounge, Newborn Entertainment, and Light Bulb Entertainment." },
        fullDescription: {
          en: [
            "The demo reel is the fastest visual overview of the broader creative work. It pulls together 3D, motion graphics, campaign work, and selected personal experiments.",
            "It belongs in the portfolio as a creative review path for studios, agencies, and TVC-related opportunities where a single visual reel communicates range faster than separate case studies."
          ],
        },
        role: { en: "Selection, editing, motion presentation, and visual curation." },
        stackOrTools: { en: "3D, motion graphics, editing, compositing, reel assembly" },
        outcome: { en: "Created a compact reel that summarizes a broader range of motion and 3D work." },
        links: [{ label: { en: "Watch on YouTube" }, url: "https://www.youtube.com/watch?v=KG_wsk5jjYQ" }],
        gallery: [
          embed("https://www.youtube.com/watch?v=KG_wsk5jjYQ", "2020/01/Screenshot-2024-06-10-014248-e1749761686309.jpg", "Demo Reel on YouTube", "External YouTube release of the demo reel."),
          video("2020/01/edkim-demo-reel.mp4", "2020/01/Screenshot-2024-06-10-014248-e1749761686309.jpg", "Demo reel MP4 export", "MP4 export of the full demo reel."),
        ],
        relatedItems: ["etg-fertilizer-tvc", "business-partners-limited-video"],
      },
      {
        slug: "doshi",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2020",
        coverImage: archive + "2020/01/roundgrouped3.jpg",
        title: { en: "Doshi Product Catalogue" },
        kicker: { en: "3D product rendering" },
        summary: { en: "3D models and renders of metal products produced by Doshi Group for use in advertisements, booklets, catalogues, and website product material." },
        fullDescription: {
          en: [
            "I created 3D models of various metal products produced by Doshi Group and rendered them for use across advertisements, product catalogues, booklets, and the website.",
            "The work involved Cinema 4D modelling and Redshift rendering, with a focus on clean hard-surface presentation, material finish, and catalogue-ready consistency.",
            "This gallery uses a broad image set so the case study shows the range of the catalogue work rather than only a few stills."
          ],
        },
        role: { en: "3D modelling, product rendering, material setup, and catalogue visual production." },
        stackOrTools: { en: "Maxon Cinema 4D, Redshift Renderer, hard-surface product visualization" },
        outcome: { en: "Produced a large catalogue-ready render library for Doshi's product presentation." },
        links: [
          { label: { en: "Doshi products" }, url: "https://www.doshigroup.com/#/products" },
          { label: { en: "Product catalogue PDF" }, url: "https://doshigroup.s3.amazonaws.com/media/Doshi_Steel_Catalogue__2021_-_Email_Copy_zfwGeGw.pdf" },
          { label: { en: "Project files" }, url: "https://edkimfx.com/wp-content/uploads/2020/01/Models.zip" },
        ],
        gallery: doshiGallery,
        relatedItems: ["solar-panel-holder-model", "etg-fertilizer-tvc"],
      },
      {
        slug: "solar-panel-holder-model",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2025",
        coverImage: archive + "2025/06/render2.jpg",
        title: { en: "Solar Panel Holder Model" },
        kicker: { en: "Technical pre-visualization" },
        summary: { en: "A Cinema 4D and Redshift pre-visualization model later used as reference for building the actual solar panel holder frame." },
        fullDescription: {
          en: [
            "This project was modelled in Cinema 4D and rendered with Redshift as a pre-visualization study.",
            "Unlike the more cinematic 3D pieces, the emphasis here was practical: proportion, frame structure, object clarity, and a model that could guide the later physical build.",
            "The modal includes both preview studies and final renders so the project reads from concept to presentation."
          ],
        },
        role: { en: "Hard-surface modelling, technical form development, and render presentation." },
        stackOrTools: { en: "Cinema 4D, Redshift Renderer, technical modelling, pre-visualization" },
        outcome: { en: "Created a visualization model that informed the physical solar panel holder frame." },
        gallery: [
          image("2025/06/preview1.jpg", "Solar holder preview 1", "Preview study of the solar holder model."),
          image("2025/06/preview2.jpg", "Solar holder preview 2", "Preview study of the solar holder model."),
          image("2025/06/preview3.jpg", "Solar holder preview 3", "Preview study of the solar holder model."),
          image("2025/06/preview4.jpg", "Solar holder preview 4", "Preview study of the solar holder model."),
          image("2025/06/render1.jpg", "Solar holder render 1", "Rendered view of the solar holder model."),
          image("2025/06/render2.jpg", "Solar holder render 2", "Lead render of the solar holder model."),
          image("2025/06/render3.jpg", "Solar holder render 3", "Additional rendered angle of the solar holder model."),
          image("2025/06/render4.jpg", "Solar holder render 4", "Additional rendered angle of the solar holder model."),
        ],
        relatedItems: ["doshi", "maya-3d-concept-house"],
      },
      {
        slug: "business-partners-limited-video",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2025",
        coverImage: archive + "2025/06/vlcsnap-2025-06-24-02h35m03s342.png",
        previewType: "video",
        title: { en: "Business Partners Limited Video" },
        kicker: { en: "Online advertisement video" },
        summary: { en: "A professional online advertisement video for Business Partners Limited, a South African SME finance company." },
        fullDescription: {
          en: [
            "I created a professional online advertisement video for Business Partners Limited, a leading financier for small and medium enterprises in South Africa.",
            "The work was designed for digital marketing and social media use, so message clarity, pacing, brand polish, and video readability mattered as much as the visual finish."
          ],
        },
        role: { en: "Video production support, editing, branded assembly, and motion presentation." },
        stackOrTools: { en: "Adobe After Effects, Adobe Premiere, motion graphics, video editing" },
        outcome: { en: "Delivered a business-facing advertisement video for web and YouTube distribution." },
        links: [
          { label: { en: "Client website" }, url: "https://www.businesspartners.co.za/" },
          { label: { en: "Watch on YouTube" }, url: "https://www.youtube.com/watch?v=O-riWJwVS4M" },
        ],
        gallery: [
          embed("https://www.youtube.com/watch?v=O-riWJwVS4M", "2025/06/vlcsnap-2025-06-24-02h35m03s342.png", "Business Partners video on YouTube", "External YouTube version of the final advertisement."),
          video("2025/06/BPL-Logo-Intro-Outro.mp4", "2025/06/vlcsnap-2025-06-24-02h35m03s342.png", "Business Partners MP4 export", "MP4 export of the final advertisement."),
          image("2025/06/vlcsnap-2025-06-24-02h35m03s342.png", "Business Partners video frame", "Video frame from the final advertisement."),
        ],
        relatedItems: ["demo-reel", "etg-fertilizer-tvc"],
      },
      {
        slug: "ooblet",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2025",
        coverImage: archive + "2025/06/Screenshot-2023-08-28-033245.jpg",
        title: { en: "Maya 3D Ooblet" },
        kicker: { en: "Freelance character modelling" },
        summary: { en: "A freelance 3D modelling, texturing, and rendering project in Maya, based on client-provided concept images." },
        fullDescription: {
          en: [
            "This freelance project involved creating 3D models from client concept images, then texturing and rendering the final assets in Maya.",
            "The gallery includes the concept images alongside modelling, material, and render views from the project.",
            "It works as a compact example of translating reference art into production-ready 3D presentation."
          ],
        },
        role: { en: "3D modelling, texturing, rendering, and concept-to-model translation." },
        stackOrTools: { en: "Maya 3D, Arnold Renderer, Unreal Engine, client concept references" },
        outcome: { en: "Produced a 3D model set and downloadable project files from concept art." },
        links: [{ label: { en: "Project files" }, url: archive + "2025/06/Assignment_ooblet.zip" }],
        gallery: [
          image("2025/06/Screenshot-2023-08-29-031302.jpg", "Ooblet render screenshot", "Project image showing a modelling, material, or render view."),
          image("2025/06/Screenshot-2023-08-29-031207.jpg", "Ooblet render angle", "Project image showing a modelling, material, or render view."),
          image("2025/06/Screenshot-2023-08-29-031116.jpg", "Ooblet material preview", "Project image showing a modelling, material, or render view."),
          image("2025/06/Screenshot-2023-08-29-031009.jpg", "Ooblet model view", "Project image showing a modelling, material, or render view."),
          image("2025/06/Screenshot-2023-08-29-025724.jpg", "Ooblet textured model", "Project image showing a modelling, material, or render view."),
          image("2025/06/Screenshot-2023-08-28-054619.jpg", "Ooblet scene preview", "Project image showing a modelling, material, or render view."),
          image("2025/06/Screenshot-2023-08-28-033245.jpg", "Ooblet featured render", "Lead image used for the project presentation."),
          image("2025/06/Screenshot-2023-08-28-032631.jpg", "Ooblet viewport preview", "Project image showing a modelling, material, or render view."),
          image("2025/06/ooblet_concept_rotated.png", "Ooblet rotated concept art", "Client concept reference used for the model."),
          image("2025/06/ooblet_concept.jpg", "Ooblet concept art", "Client concept reference used for the model."),
          file("2025/06/Assignment_ooblet.zip", "Ooblet project files", "Downloadable project files for this case study."),
        ],
        relatedItems: ["maya-3d-concept-house", "game-development"],
      },
      {
        slug: "maya-3d-concept-house",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2025",
        coverImage: archive + "2025/06/Render2-1.jpg",
        title: { en: "Maya 3D Concept House" },
        kicker: { en: "Concept environment modelling" },
        summary: { en: "A Maya 3D concept-house model, textured and rendered from concept images, with project files preserved." },
        fullDescription: {
          en: [
            "I created a 3D model of a concept house from reference imagery, then textured and rendered the scene in Maya.",
            "The project combines reference interpretation, environmental modelling, material setup, and final render presentation.",
            "The modal brings together screenshots, final renders, concept reference, and the downloadable project files."
          ],
        },
        role: { en: "3D modelling, texturing, environment rendering, and reference translation." },
        stackOrTools: { en: "Maya 3D, rendering workflow, concept references" },
        outcome: { en: "Delivered a modelled and rendered concept-house scene with supporting project files." },
        links: [{ label: { en: "Project files" }, url: archive + "2025/06/House-Concept.zip" }],
        gallery: [
          image("2025/06/Screenshot-2023-07-28-025756.jpg", "Concept house viewport screenshot", "Viewport screenshot from the modelling process."),
          image("2025/06/Screenshot-2023-07-28-025846.jpg", "Concept house modelling screenshot", "Viewport screenshot from the modelling process."),
          image("2025/06/Screenshot-2023-07-28-025907.jpg", "Concept house viewport detail", "Viewport screenshot from the modelling process."),
          image("2025/06/Render1-1.jpg", "Concept house render 1", "Rendered view of the concept house study."),
          image("2025/06/Render2-1.jpg", "Concept house render 2", "Lead render of the concept house study."),
          image("2025/06/Render3-1.jpg", "Concept house render 3", "Additional rendered view of the concept house study."),
          image("2025/06/jesse-riggle-home.jpg", "Concept house reference image", "Reference image stored with the project."),
          file("2025/06/House-Concept.zip", "House concept project files", "Downloadable project files for this case study."),
        ],
        relatedItems: ["ooblet", "solar-panel-holder-model"],
      },
      {
        slug: "game-development",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2025",
        coverImage: archive + "2025/06/Screenshot-2025-06-24-035511.jpg",
        previewType: "video",
        title: { en: "Game Development" },
        kicker: { en: "Personal Unreal Engine project" },
        summary: { en: "A work-in-progress hobby game project created while learning game engines and Unreal Engine workflows." },
        fullDescription: {
          en: [
            "This item represents a work-in-progress game project developed while learning newer game-engine workflows.",
            "It is intentionally presented as exploratory work: useful for showing realtime interest and technical curiosity, without overstating it as a shipped game."
          ],
        },
        role: { en: "Realtime experimentation, game-engine learning, and prototype development." },
        stackOrTools: { en: "Unreal Engine, realtime prototyping, 3D assets" },
        outcome: { en: "Preserved an example of my interactive and realtime experimentation." },
        links: [{ label: { en: "Vimeo preview" }, url: "https://vimeo.com/555761268" }],
        gallery: [
          embed("https://vimeo.com/555761268", "2025/06/Screenshot-2025-06-24-035511.jpg", "Game development Vimeo preview", "External Vimeo preview of the prototype gameplay."),
          image("2025/06/Screenshot-2025-06-24-035343.jpg", "Game development screenshot", "Archived project screenshot."),
          image("2025/06/Screenshot-2025-06-24-035511.jpg", "Game development cover frame", "Lead image used for the project presentation."),
        ],
        relatedItems: ["ooblet", "demo-reel"],
      },
      {
        slug: "etg-fertilizer-tvc",
        section: "creative",
        categories: ["three-d-motion"],
        year: "2025",
        coverImage: archive + "2025/06/images.jpg",
        previewType: "video",
        title: { en: "ETG Fertilizer TVC" },
        kicker: { en: "Commercial TVC" },
        summary: { en: "A TV commercial for ETG Fertilizer, modelled, textured, and rendered in Cinema 4D with post-production in After Effects." },
        fullDescription: {
          en: [
            "I produced a TVC for ETG Fertilizer. The scene was modelled, textured, and rendered in Cinema 4D, with additional post-processing in After Effects.",
            "This entry brings together the final video, downloadable MP4, and supporting campaign image for a fuller project view."
          ],
        },
        role: { en: "Commercial visual development, 3D scene production, rendering, and post-processing." },
        stackOrTools: { en: "Maxon Cinema 4D, After Effects, rendering, compositing, TVC production" },
        outcome: { en: "Delivered a client-facing fertilizer TVC with 3D and motion production." },
        links: [
          { label: { en: "YouTube video" }, url: "https://youtu.be/H0Fyo5lf6jw" },
          { label: { en: "MP4 download" }, url: archive + "2025/06/etg-1.mp4" },
        ],
        gallery: [
          embed("https://youtu.be/H0Fyo5lf6jw", "2025/06/images.jpg", "ETG Fertilizer TVC on YouTube", "External YouTube release of the final TVC."),
          video("2025/06/etg-1.mp4", "2025/06/etg-agri-inputs-zambia.webp", "ETG Fertilizer MP4 export", "MP4 export of the final TVC."),
          image("2025/06/etg-agri-inputs-zambia.webp", "ETG Agri Inputs Zambia image", "Supporting campaign image for the ETG Fertilizer project."),
          image("2025/06/images.jpg", "ETG Fertilizer cover image", "Lead image used for the project presentation."),
        ],
        relatedItems: ["demo-reel", "business-partners-limited-video"],
      },
    ],
  };
})();
