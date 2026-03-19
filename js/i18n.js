// ===== i18n — Language Toggle (EN / ES) =====

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact Me",

    // Index — Hero
    hero_greeting: "Hi, I'm",
    hero_description:
      "Junior Developer & Data Analyst passionate about turning data into actionable insights. I specialize in automation, AI, and building complex workflows to solve business problems efficiently.",
    hero_btn: "View My Projects",

    // Index — About snippet
    about_title: "About Me",
    about_desc:
      "Dedicated to data analysis, process automation, and AI integration. Experienced with Power BI, SQL, Python, n8n, and UiPath. Skilled in Google Workspace and Apps Script for efficient, scalable automations.",
    about_stakeholders: "Stakeholders",
    about_automations: "Automations",
    about_data: "Data Processing",

    // Skills
    skills_title: "Technical Skills",
    skills_data: "Data & Analytics",
    skills_web: "Web Development",
    skills_auto: "Automation & AI",
    skills_cloud: "Cloud & Tools",

    // Projects section
    projects_title: "Projects",
    projects_desc:
      "Data analysis, automation, and web development projects I have built to solve real problems.",
    filter_all: "All",
    filter_auto: "Automation",
    filter_data: "Data Analysis",
    filter_web: "Web Dev",

    // Project cards
    proj1_title: "Systematic Dashboard",
    proj1_cat: "Data Analysis · Automation",
    proj1_btn: "View Project",
    proj2_title: "Texas Trailers",
    proj2_cat: "Web Development",

    // Experience page
    exp_title: "Experience",
    exp_role: "Data Analytics Intern",
    exp_company: "Pops Helados — Costa Rica",
    exp_period: "Jan 2026 – Present",
    exp_desc:
      "Refactoring and improving internal web platforms used across Costa Rica and Colombia. Developing a quality audits module with automated email reports. Building dashboards and automating daily data distribution via Google Apps Script.",

    // Contact page
    contact_title: "Contact Me",
    contact_location: "Costa Rica",
    contact_email_label: "Email",
    contact_available: "Available for freelance & opportunities",
    contact_name_ph: "Your name",
    contact_email_ph: "Your email",
    contact_subject_ph: "Subject",
    contact_msg_ph: "Your message",
    contact_send: "Send Message",

    // Sistémica Detail Page
    sist_banner_title: "Project Details",
    sist_back: "Back to Projects",
    sist_summary:
      "An end-to-end business intelligence solution built for Pops Costa Rica to measure and visualize the impact of their Commercial Systematic strategy on sales performance. From raw SAP data to automated, self-refreshing dashboards — this project transformed how stakeholders track growth across the entire retail network.",
    sist_step1_title: "Requirements Definition",
    sist_step1_desc:
      "The project started with a series of meetings with key stakeholders to understand the core business question: how is the Commercial Systematic strategy impacting sales? We mapped out the KPIs that mattered most — total sales, transaction count, average ticket, growth percentages, and portfolio segmentation — and defined how each metric should be sliced by country, cluster, point of sale, coordinator, product line, and material.",
    sist_step2_title: "Data Collection",
    sist_step2_desc:
      "With the requirements clearly defined, the next challenge was sourcing the data. Sales transactions lived in SAP, so we built a UiPath automation to extract the necessary datasets — sales volumes, transaction records, and product catalogs. The extracted data was initially staged in Excel workbooks, providing a structured but raw foundation for the next phase.",
    sist_step3_title: "Data Cleaning & Transformation",
    sist_step3_desc:
      "Raw data is never ready for analysis. Using Power Query inside Power BI, we cleaned and transformed the datasets — removing duplicates, standardizing product names, handling null values, and building calculated columns for metrics like growth percentage and portfolio participation. This phase ensured that every number in the final dashboard would be accurate and trustworthy.",
    sist_step4_title: "Data Visualization",
    sist_step4_desc:
      "The cleaned data came to life in Power BI. We designed multiple dashboard views tailored to what stakeholders needed: a high-level executive summary comparing current vs. previous periods, a detailed sales breakdown by portfolio type, and a statistical analysis page featuring measures of central tendency, dispersion, and a distribution curve. Every visual was built to answer a specific business question, not just to look good.",
    sist_step5_title: "Automation & Validation",
    sist_step5_desc:
      "A dashboard is only as good as the data behind it — and stale data is useless data. We automated the entire refresh pipeline: the semantic model in Power BI updates on a scheduled basis, ensuring stakeholders always see the latest numbers without manual intervention. Additionally, Python scripts were developed to cross-validate the Power BI outputs against the source data, guaranteeing data integrity across the entire pipeline.",
    sist_auto_caption: "Automated refresh pipeline<br>ensuring real-time accuracy",

    // Footer
    footer_about_title: "About Me",
    footer_about_desc:
      "Junior Developer & Data Analyst. Passionate about automation, AI, and building things that matter.",
    footer_connect: "Connect",
  },

  es: {
    // Navbar
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_contact: "Contáctame",

    // Index — Hero
    hero_greeting: "Hola, soy",
    hero_description:
      "Desarrollador Junior y Analista de Datos apasionado por convertir datos en insights accionables. Me especializo en automatización, IA y construcción de flujos de trabajo complejos para resolver problemas de negocio.",
    hero_btn: "Ver mis proyectos",

    // Index — About snippet
    about_title: "Sobre Mí",
    about_desc:
      "Dedicado al análisis de datos, automatización de procesos e integración de IA. Experiencia con Power BI, SQL, Python, n8n y UiPath. Habilidades en Google Workspace y Apps Script para automatizaciones eficientes y escalables.",
    about_stakeholders: "Stakeholders",
    about_automations: "Automatizaciones",
    about_data: "Procesamiento de Datos",

    // Skills
    skills_title: "Habilidades Técnicas",
    skills_data: "Datos & Analítica",
    skills_web: "Desarrollo Web",
    skills_auto: "Automatización & IA",
    skills_cloud: "Cloud & Herramientas",

    // Projects section
    projects_title: "Proyectos",
    projects_desc:
      "Proyectos de análisis de datos, automatización y desarrollo web que he construido para resolver problemas reales.",
    filter_all: "Todos",
    filter_auto: "Automatización",
    filter_data: "Análisis de Datos",
    filter_web: "Desarrollo Web",

    // Project cards
    proj1_title: "Dashboard Sistemática",
    proj1_cat: "Análisis de Datos · Automatización",
    proj1_btn: "Ver Proyecto",
    proj2_title: "Texas Trailers",
    proj2_cat: "Desarrollo Web",

    // Experience page
    exp_title: "Experiencia",
    exp_role: "Pasante de Analítica de Datos",
    exp_company: "Pops Helados — Costa Rica",
    exp_period: "Ene 2026 – Presente",
    exp_desc:
      "Refactorización y mejora de plataformas web internas usadas en Costa Rica y Colombia. Desarrollo de un módulo de auditorías de calidad con envío automático de reportes por correo. Construcción de dashboards y automatización de distribución diaria de datos con Google Apps Script.",

    // Contact page
    contact_title: "Contáctame",
    contact_location: "Costa Rica",
    contact_email_label: "Correo",
    contact_available: "Disponible para freelance y oportunidades",
    contact_name_ph: "Tu nombre",
    contact_email_ph: "Tu correo",
    contact_subject_ph: "Asunto",
    contact_msg_ph: "Tu mensaje",
    contact_send: "Enviar Mensaje",

    // Sistémica Detail Page
    sist_banner_title: "Detalles del Proyecto",
    sist_back: "Volver a Proyectos",
    sist_summary:
      "Una solución integral de inteligencia de negocios desarrollada para Pops Costa Rica para medir y visualizar el impacto de su estrategia de Sistemática Comercial en el rendimiento de ventas. Desde datos crudos en SAP hasta dashboards automatizados y auto-actualizables — este proyecto transformó la forma en que los stakeholders monitorean el crecimiento en toda la red de puntos de venta.",
    sist_step1_title: "Definición de Requerimientos",
    sist_step1_desc:
      "El proyecto inició con una serie de reuniones con stakeholders clave para entender la pregunta central del negocio: ¿cómo está impactando la estrategia de Sistemática Comercial en las ventas? Mapeamos los KPIs más importantes — venta total, cantidad de transacciones, ticket promedio, porcentajes de crecimiento y segmentación de portafolio — y definimos cómo cada métrica debía segmentarse por país, clúster, punto de venta, coordinador, línea de producto y material.",
    sist_step2_title: "Recolección de Datos",
    sist_step2_desc:
      "Con los requerimientos claramente definidos, el siguiente reto fue obtener los datos. Las transacciones de venta residían en SAP, así que construimos una automatización en UiPath para extraer los datasets necesarios — volúmenes de ventas, registros de transacciones y catálogos de productos. Los datos extraídos se organizaron inicialmente en libros de Excel, proporcionando una base estructurada pero cruda para la siguiente fase.",
    sist_step3_title: "Limpieza y Transformación de Datos",
    sist_step3_desc:
      "Los datos crudos nunca están listos para análisis. Usando Power Query dentro de Power BI, limpiamos y transformamos los datasets — eliminando duplicados, estandarizando nombres de productos, manejando valores nulos y construyendo columnas calculadas para métricas como porcentaje de crecimiento y participación de portafolio. Esta fase aseguró que cada número en el dashboard final fuera preciso y confiable.",
    sist_step4_title: "Visualización de Datos",
    sist_step4_desc:
      "Los datos limpios cobraron vida en Power BI. Diseñamos múltiples vistas de dashboard adaptadas a lo que los stakeholders necesitaban: un resumen ejecutivo de alto nivel comparando períodos actuales vs. anteriores, un desglose detallado de ventas por tipo de portafolio, y una página de análisis estadístico con medidas de tendencia central, dispersión y una curva de distribución. Cada visual fue construido para responder una pregunta de negocio específica, no solo para verse bien.",
    sist_step5_title: "Automatización y Validación",
    sist_step5_desc:
      "Un dashboard es tan bueno como los datos detrás de él — y datos desactualizados son datos inútiles. Automatizamos todo el pipeline de actualización: el modelo semántico en Power BI se actualiza de forma programada, asegurando que los stakeholders siempre vean los números más recientes sin intervención manual. Además, se desarrollaron scripts en Python para validar cruzadamente las salidas de Power BI contra los datos fuente, garantizando la integridad de datos en todo el pipeline.",
    sist_auto_caption: "Pipeline de actualización automatizado<br>garantizando precisión en tiempo real",

    // Footer
    footer_about_title: "Sobre Mí",
    footer_about_desc:
      "Desarrollador Junior y Analista de Datos. Apasionado por la automatización, la IA y construir cosas que importen.",
    footer_connect: "Conectar",
  },
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", translations[lang][key]);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Toggle button label: show opposite language
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "en" ? "ES" : "EN";

  // Update html lang attribute
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  applyLanguage(currentLang === "en" ? "es" : "en");
}

// Apply on load
document.addEventListener("DOMContentLoaded", () => applyLanguage(currentLang));
