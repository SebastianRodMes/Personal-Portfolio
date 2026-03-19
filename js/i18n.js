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
    proj1_title: "Sistémica Dashboard",
    proj1_cat: "Data Analysis · Automation",
    proj2_title: "Texas Trailers",
    proj2_cat: "Web Development",

    // Experience page
    exp_title: "Experience",
    exp_role: "Data Analytics Intern",
    exp_company: "Pops Helados — Costa Rica",
    exp_period: "Oct 2024 – Present",
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
    proj1_title: "Dashboard Sistémica",
    proj1_cat: "Análisis de Datos · Automatización",
    proj2_title: "Texas Trailers",
    proj2_cat: "Desarrollo Web",

    // Experience page
    exp_title: "Experiencia",
    exp_role: "Pasante de Analítica de Datos",
    exp_company: "Pops Helados — Costa Rica",
    exp_period: "Oct 2024 – Presente",
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
