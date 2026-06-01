const translations = {
  en: {
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.expertise": "Expertise",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "hero.eyebrow": "Hi, I am",
    "hero.role": "Team Lead | Atlassian Administrator | Project Management",
    "hero.text": "IT Operations and Service Management professional focused on reliable services, clear processes and automation-supported delivery.",
    "hero.work": "View Experience",
    "hero.contact": "Get in Touch",
    "hero.cv": "View CV",
    "hero.cardTitle": "Operational Focus",
    "hero.cardText": "continuity, incidents, SLAs and reporting",
    "metrics.experience": "Years experience",
    "metrics.projects": "Jira projects supported",
    "metrics.apps": "Application management",
    "metrics.users": "Users supported",
    "about.kicker": "About me",
    "about.title": "I connect operations, people and systems so work moves with less friction.",
    "about.copy": "I am an IT Operations and Service Management professional with hands-on experience in team leadership, project coordination, business continuity, Service Desk and Atlassian Cloud administration.",
    "about.copy2": "My strongest zone is where structure meets execution: designing Jira and JSM workflows, improving SLAs, building automations, creating dashboards, coordinating incidents and helping teams make clearer decisions with better data.",
    "about.copy3": "I like practical solutions: fewer unclear handovers, better ownership, useful reporting and service processes that people can actually follow under pressure.",
    "about.card1Title": "Operational calm",
    "about.card1Text": "Team leadership, incident priorities, escalations and business continuity work handled with structure and clear ownership.",
    "about.card2Title": "Atlassian in scale",
    "about.card2Text": "Organization administration for Jira, Jira Service Management and Confluence, including permissions, workflows, automations, SLAs, dashboards and apps.",
    "about.card3Title": "Practical delivery",
    "about.card3Text": "Projects delivered with business and technical stakeholders, from requirements and testing to rollout, reporting and continuous improvement.",
    "skills.kicker": "Skills",
    "skills.title": "Core capabilities",
    "experience.kicker": "Timeline",
    "experience.title": "Professional experience",
    "experience.role1": "Business Continuity Team Lead",
    "experience.role1a": "Led operational coordination for 50+ business-critical applications, ERP systems and server infrastructure.",
    "experience.role1b": "Managed incidents, escalations, service risks and reporting for management visibility.",
    "experience.role1c": "Delivered technical and process improvement projects across business and technical teams.",
    "experience.role2": "Atlassian Administrator",
    "experience.role2a": "Administered Jira, JSM and Confluence Cloud for 50+ projects and 4,700+ users.",
    "experience.role2b": "Designed ITSM-aligned workflows, request types, forms, permissions, approvals, SLAs and automations.",
    "experience.role2c": "Improved visibility through reporting, dashboards, integrations and Power BI-supported analysis.",
    "experience.role3": "Legal Assistant",
    "experience.role3a": "Supported documentation, compliance-related tasks, internal coordination and professional communication.",
    "expertise.kicker": "Expertise",
    "expertise.card1Title": "Service Desk & Atlassian",
    "expertise.card1Text": "Large-scale Atlassian Cloud administration, service lifecycle optimization, issue ownership, traceability, permissions, forms and dashboards.",
    "expertise.card2Title": "Project Management & AI",
    "expertise.card2Text": "Research, planning, stakeholder alignment, testing, rollout and continuous improvement with automation and AI-supported tools.",
    "expertise.card3Title": "Business Continuity",
    "expertise.card3Text": "Incident response, escalation handling, preventive procedures, operational risk monitoring and long-term service reliability.",
    "certs.kicker": "Certifications",
    "certs.title": "Validated foundations in data, QA and analytics.",
    "certs.copy": "A practical base that supports service management work: structured testing, relational data thinking and analytics-driven reporting.",
    "certs.pbiTitle": "Power BI Desktop",
    "certs.pbiText": "Analytics and reporting certification completed in 2023.",
    "certs.openPdf": "Open certificate",
    "certs.sqlTitle": "Relational Databases",
    "certs.sqlText": "SQL and database fundamentals for structured operational data.",
    "certs.qaTitle": "Software Testing",
    "certs.qaText": "QA mindset for reliable processes, validation and careful rollout.",
    "projects.kicker": "Projects",
    "projects.label": "Project signal",
    "projects.title": "Humand product rollout",
    "projects.copy": "A dedicated project section is ready for the next stage. For now, this area highlights verified external feedback from a company-wide product rollout for 4,500+ people, where Stefan acted as stakeholder and project manager from kickoff to adoption.",
    "projects.stat1": "4,500+ users",
    "projects.stat2": "Stakeholder ownership",
    "projects.stat3": "End-to-end project management",
    "projects.scopeLabel": "Scope delivered",
    "projects.scope1": "Assessed the current social communication platform and business needs.",
    "projects.scope2": "Led alternative product research, selection, testing and risk analysis.",
    "projects.scope3": "Prepared implementation, migration and integration reproduction plans.",
    "projects.scope4": "Supported contract alignment to protect the client's interests.",
    "projects.scope5": "Built the communication strategy and acted as main contact point.",
    "projects.scope6": "Delivered a successful migration with no loss of data or user accounts.",
    "projects.area1Label": "Jira integrations",
    "projects.area1Title": "Connected service ecosystem",
    "projects.area1Item1": "ERP integration for account management similar to Active Directory processes.",
    "projects.area1Item2": "Jira integration with ServiceNow for service coordination and visibility.",
    "projects.area1Item3": "Jira and Power BI integration for operational analytics and reporting.",
    "projects.area1Item4": "Jira and Gemini integration for AI-supported service workflows.",
    "projects.area2Label": "ITSM operating model",
    "projects.area2Title": "High-control Jira service management",
    "projects.area2Item1": "High-level Jira governance across projects, roles and service processes.",
    "projects.area2Item2": "Structured projects with clear goals, tasks, workflows and SLA logic.",
    "projects.area2Item3": "Standardized request channel designed for maximum handling efficiency.",
    "projects.area2Item4": "Automations across process steps and cross-team communication.",
    "projects.area3Label": "AI mini-project",
    "projects.area3Title": "PDF to Jira field automation",
    "projects.area3Item1": "Mini-project for sending PDF documents to Gemini for extraction and interpretation.",
    "projects.area3Item2": "Automatic population of structured Jira fields from document content.",
    "projects.area3Item3": "Reduced manual entry and improved traceability for document-based requests.",
    "projects.quote": "\"Stefan was excellent at managing the migration from their previous tool, handling a complex change process with organisation, clarity, and real attention to detail.\"",
    "education.kicker": "Education",
    "education.title": "Education timeline",
    "education.law": "Master's Degree in Law",
    "education.unwe": "University of National and World Economy - Sofia",
    "education.cert": "QA, Relational Databases, Power BI Analytics",
    "education.training": "Professional certification",
    "education.school": "High School of Mathematics \"Baba Tonka\" Ruse",
    "education.focus": "Analytical foundation",
    "contact.kicker": "Contact",
    "contact.title": "Let us build clearer operations.",
    "contact.copy": "Open to roles and projects around IT operations, Atlassian Cloud, service management, automation and business continuity.",
    "footer.text": "IT Operations | Atlassian Cloud | Business Continuity"
  },
  bg: {
    "nav.about": "За мен",
    "nav.skills": "Умения",
    "nav.experience": "Опит",
    "nav.certifications": "Сертификати",
    "nav.projects": "Проекти",
    "nav.expertise": "Експертиза",
    "nav.contact": "Контакт",
    "nav.cv": "CV",
    "hero.eyebrow": "Здравей, аз съм",
    "hero.role": "Team Lead | Atlassian Administrator | Project Management",
    "hero.text": "Професионалист в IT Operations и Service Management с фокус върху надеждни услуги, ясни процеси и автоматизация.",
    "hero.work": "Виж опит",
    "hero.contact": "Контакт",
    "hero.cv": "Виж CV",
    "hero.cardTitle": "Оперативен фокус",
    "hero.cardText": "continuity, incidents, SLAs and reporting",
    "metrics.experience": "Години опит",
    "metrics.projects": "Jira projects supported",
    "metrics.apps": "Application management",
    "metrics.users": "Поддържани потребители",
    "about.kicker": "About me",
    "about.title": "Свързвам операции, хора и системи, за да се движи работата с по-малко триене.",
    "about.copy": "Аз съм IT Operations и Service Management професионалист с практически опит в team leadership, project coordination, business continuity, Service Desk и Atlassian Cloud администрация.",
    "about.copy2": "Най-силната ми зона е там, където структурата среща изпълнението: Jira и JSM workflows, SLA логика, автоматизации, dashboards, incident coordination и по-добри решения чрез по-добри данни.",
    "about.copy3": "Харесвам практични решения: по-малко неясни handover-и, по-добра ownership култура, полезен reporting и service процеси, които хората могат реално да следват под напрежение.",
    "about.card1Title": "Оперативно спокойствие",
    "about.card1Text": "Team leadership, incident priorities, escalations и business continuity работа със структура и ясна ownership логика.",
    "about.card2Title": "Atlassian в мащаб",
    "about.card2Text": "Организационна администрация на Jira, Jira Service Management и Confluence, включително permissions, workflows, automations, SLAs, dashboards и apps.",
    "about.card3Title": "Практична реализация",
    "about.card3Text": "Проекти с business и technical stakeholders - от requirements и testing до rollout, reporting и continuous improvement.",
    "skills.kicker": "Умения",
    "skills.title": "Основни компетенции",
    "experience.kicker": "Timeline",
    "experience.title": "Професионален опит",
    "experience.role1": "Business Continuity Team Lead",
    "experience.role1a": "Координиране на оперативната стабилност на 50+ бизнес критични приложения, ERP системи и server инфраструктура.",
    "experience.role1b": "Управление на incidents, escalations, service risks и reporting за management видимост.",
    "experience.role1c": "Доставка на технически и процесни подобрения между бизнес и технически екипи.",
    "experience.role2": "Atlassian Administrator",
    "experience.role2a": "Администриране на Jira, JSM и Confluence Cloud за 50+ проекта и 4,700+ потребители.",
    "experience.role2b": "Дизайн на ITSM процеси, request types, forms, permissions, approvals, SLAs и automations.",
    "experience.role2c": "Подобрена видимост чрез reporting, dashboards, integrations и Power BI анализ.",
    "experience.role3": "Legal Assistant",
    "experience.role3a": "Подкрепа на документация, compliance-related задачи, вътрешна координация и професионална комуникация.",
    "expertise.kicker": "Експертиза",
    "expertise.card1Title": "Service Desk & Atlassian",
    "expertise.card1Text": "Atlassian Cloud администрация в мащаб, service lifecycle optimization, ownership, traceability, permissions, forms и dashboards.",
    "expertise.card2Title": "Project Management & AI",
    "expertise.card2Text": "Research, planning, stakeholder alignment, testing, rollout и continuous improvement с automation и AI-supported tools.",
    "expertise.card3Title": "Business Continuity",
    "expertise.card3Text": "Incident response, escalation handling, preventive procedures, operational risk monitoring и дългосрочна надеждност на услугите.",
    "certs.kicker": "Сертификати",
    "certs.title": "Потвърдена основа в data, QA и analytics.",
    "certs.copy": "Практична база за service management: структурирано тестване, relational data мислене и analytics-driven reporting.",
    "certs.pbiTitle": "Power BI Desktop",
    "certs.pbiText": "Сертификация по analytics и reporting, завършена през 2023.",
    "certs.openPdf": "Отвори сертификат",
    "certs.sqlTitle": "Relational Databases",
    "certs.sqlText": "SQL и database fundamentals за структурирани оперативни данни.",
    "certs.qaTitle": "Software Testing",
    "certs.qaText": "QA mindset за надеждни процеси, validation и внимателен rollout.",
    "projects.kicker": "Проекти",
    "projects.label": "Project signal",
    "projects.title": "Humand product rollout",
    "projects.copy": "Отделната секция за проекти е подготвена за следващия етап. Засега показва външна препоръка от company-wide product rollout за 4,500+ души, в който Stefan е stakeholder и project manager от kickoff до adoption.",
    "projects.stat1": "4,500+ users",
    "projects.stat2": "Stakeholder ownership",
    "projects.stat3": "End-to-end project management",
    "projects.scopeLabel": "Scope delivered",
    "projects.scope1": "Оценка на текущото състояние на социалната комуникационна платформа и бизнес нуждите.",
    "projects.scope2": "Проучване и подбор на алтернативен продукт, тестване и risk analysis.",
    "projects.scope3": "Изготвяне на план за имплементация, миграция и възпроизвеждане на интеграции.",
    "projects.scope4": "Подкрепа при договорни условия, защитаващи интересите на възложителя.",
    "projects.scope5": "Комуникационна стратегия и роля на main contact point.",
    "projects.scope6": "Успешна миграция без загуба на данни и потребителски акаунти.",
    "projects.area1Label": "Jira integrations",
    "projects.area1Title": "Connected service ecosystem",
    "projects.area1Item1": "Интеграция с ERP система за управление на акаунти тип Active Directory процеси.",
    "projects.area1Item2": "Интеграция Jira със ServiceNow за service coordination и visibility.",
    "projects.area1Item3": "Интеграция Jira - Power BI за operational analytics и reporting.",
    "projects.area1Item4": "Интеграция Jira - Gemini за AI-supported service workflows.",
    "projects.area2Label": "ITSM operating model",
    "projects.area2Title": "High-control Jira service management",
    "projects.area2Item1": "Високо ниво на Jira governance през проекти, роли и service processes.",
    "projects.area2Item2": "Структуриране на проекти с ясни цели, задачи, workflows и SLA логика.",
    "projects.area2Item3": "Стандартизиран канал за подаване на заявки с максимална ефективност.",
    "projects.area2Item4": "Автоматизации в процесите и комуникацията между екипите.",
    "projects.area3Label": "AI mini-project",
    "projects.area3Title": "PDF to Jira field automation",
    "projects.area3Item1": "Мини проект за изпращане на PDF документи към Gemini за извличане и интерпретация.",
    "projects.area3Item2": "Автоматично попълване на структурирани Jira полета от съдържанието на документа.",
    "projects.area3Item3": "Намаляване на ръчното въвеждане и по-добра проследимост на document-based заявки.",
    "projects.quote": "\"Stefan was excellent at managing the migration from their previous tool, handling a complex change process with organisation, clarity, and real attention to detail.\"",
    "education.kicker": "Образование",
    "education.title": "Хронология на образованието",
    "education.law": "Магистър по Право",
    "education.unwe": "Университет за национално и световно стопанство - София",
    "education.cert": "QA, Relational Databases, Power BI Analytics",
    "education.training": "Професионална сертификация",
    "education.school": "Математическа гимназия \"Баба Тонка\" Русе",
    "education.focus": "Аналитична основа",
    "contact.kicker": "Контакт",
    "contact.title": "Да изградим по-ясни операции.",
    "contact.copy": "Отворен към роли и проекти в IT operations, Atlassian Cloud, service management, automation и business continuity.",
    "footer.text": "IT Operations | Atlassian Cloud | Business Continuity"
  }
};

const langSwitch = document.querySelector("#langSwitch");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");
const mediaModal = document.querySelector("#mediaModal");
const modalImage = document.querySelector("#modalImage");
const modalFrame = document.querySelector("#modalFrame");
const modalTitle = document.querySelector("#modalTitle");
const modalClose = document.querySelector(".modal-close");
const meshCanvas = document.querySelector("#meshBackground");

let currentLang = localStorage.getItem("siteLang") || "en";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("siteLang", lang);
  langSwitch.textContent = lang === "en" ? "BG" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
}

langSwitch.addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "bg" : "en");
});

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  document.querySelector("#navbar").classList.toggle("scrolled", window.scrollY > 12);
});

document.querySelectorAll(".section, .hero-visual, .impact-board, .signal-strip").forEach((node) => {
  node.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
}, 900);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.querySelectorAll("a").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-42% 0px -48% 0px", threshold: 0.01 });

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

const educationTimeline = document.querySelector(".education-timeline");
if (educationTimeline) {
  const educationSteps = [...educationTimeline.querySelectorAll("article")];
  const setEducationStep = (index) => {
    educationTimeline.dataset.active = String(index);
    educationSteps.forEach((step, stepIndex) => {
      step.classList.toggle("is-active", stepIndex === index);
    });
  };

  educationSteps.forEach((step, index) => {
    step.addEventListener("mouseenter", () => setEducationStep(index));
    step.addEventListener("focus", () => setEducationStep(index));
  });
}

document.querySelectorAll("[data-modal-image]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    mediaModal.classList.remove("pdf-mode");
    modalFrame.src = "";
    modalImage.src = trigger.dataset.modalImage;
    modalImage.alt = trigger.querySelector("img")?.alt || trigger.dataset.modalTitle || "Preview";
    modalTitle.textContent = trigger.dataset.modalTitle || "";
    if (typeof mediaModal.showModal === "function") {
      mediaModal.showModal();
    } else {
      mediaModal.setAttribute("open", "");
    }
  });
});

document.querySelectorAll("[data-modal-pdf]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalFrame.src = `${trigger.dataset.modalPdf}#toolbar=0&navpanes=0`;
    modalTitle.textContent = trigger.dataset.modalTitle || "Document preview";
    mediaModal.classList.add("pdf-mode");
    if (typeof mediaModal.showModal === "function") {
      mediaModal.showModal();
    } else {
      mediaModal.setAttribute("open", "");
    }
  });
});

function closeModal() {
  if (typeof mediaModal.close === "function") {
    mediaModal.close();
  } else {
    mediaModal.removeAttribute("open");
  }
  modalFrame.src = "";
  mediaModal.classList.remove("pdf-mode");
}

modalClose.addEventListener("click", closeModal);

mediaModal.addEventListener("click", (event) => {
  if (event.target === mediaModal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mediaModal.hasAttribute("open")) closeModal();
});

function initMeshBackground() {
  if (!meshCanvas) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const context = meshCanvas.getContext("2d", { alpha: true });
  let width = 0;
  let height = 0;
  let ratio = 1;
  let frame = 0;
  const pointer = { x: 0, y: 0, active: false, power: 0 };

  function resize() {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    meshCanvas.width = Math.floor(width * ratio);
    meshCanvas.height = Math.floor(height * ratio);
    meshCanvas.style.width = `${width}px`;
    meshCanvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(timestamp = 0) {
    context.clearRect(0, 0, width, height);

    const time = reducedMotion ? 0 : timestamp * 0.00018;
    pointer.power += ((pointer.active ? 1 : 0) - pointer.power) * 0.055;

    const rows = Math.max(9, Math.floor(height / 68));
    const columns = Math.max(14, Math.floor(width / 68));
    const gapX = width / (columns - 1);
    const gapY = height / (rows - 1);
    const centerY = height * 0.42;
    const points = [];

    for (let row = 0; row < rows; row += 1) {
      const line = [];
      for (let col = 0; col < columns; col += 1) {
        const x = col * gapX;
        const baseY = row * gapY;
        const falloff = Math.exp(-Math.abs(baseY - centerY) / Math.max(height * 0.32, 1));
        const wave =
          Math.sin(col * 0.72 + time * 3.1) * 16 * falloff +
          Math.cos(row * 0.95 + col * 0.28 + time * 2.2) * 9 * falloff;
        const dx = x - pointer.x;
        const dy = baseY - pointer.y;
        const distance = Math.hypot(dx, dy);
        const pointerField = pointer.power * Math.exp(-(distance * distance) / 52000);
        const lift = pointerField * Math.sin(distance * 0.045 - time * 10) * 18;
        line.push({ x, y: baseY + wave + lift, strength: Math.max(falloff, pointerField), pointerField });
      }
      points.push(line);
    }

    const glow = context.createLinearGradient(0, 0, width, height);
    glow.addColorStop(0, "rgba(59, 130, 246, 0.055)");
    glow.addColorStop(0.48, "rgba(14, 165, 233, 0.16)");
    glow.addColorStop(1, "rgba(15, 118, 110, 0.055)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    context.lineWidth = 1;
    for (let row = 0; row < rows; row += 1) {
      context.beginPath();
      points[row].forEach((point, index) => {
        if (index === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      });
      context.strokeStyle = `rgba(37, 99, 235, ${0.06 + points[row][0].strength * 0.12})`;
      context.stroke();
    }

    for (let col = 0; col < columns; col += 1) {
      context.beginPath();
      for (let row = 0; row < rows; row += 1) {
        const point = points[row][col];
        if (row === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.strokeStyle = "rgba(14, 165, 233, 0.075)";
      context.stroke();
    }

    points.flat().forEach((point) => {
      const radius = 1.1 + point.strength * 1.2;
      context.beginPath();
      context.arc(point.x, point.y, radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(37, 99, 235, ${0.12 + point.strength * 0.22})`;
      context.fill();
    });

    if (pointer.power > 0.01) {
      const pulse = 0.5 + Math.sin(time * 24) * 0.5;
      const electric = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
      electric.addColorStop(0, `rgba(14, 165, 233, ${0.18 * pointer.power})`);
      electric.addColorStop(0.22, `rgba(37, 99, 235, ${0.085 * pointer.power + pulse * 0.025})`);
      electric.addColorStop(1, "rgba(37, 99, 235, 0)");
      context.fillStyle = electric;
      context.beginPath();
      context.arc(pointer.x, pointer.y, 260, 0, Math.PI * 2);
      context.fill();

      context.lineWidth = 1.4;
      for (let i = 0; i < 5; i += 1) {
        const angle = time * 4 + i * 1.256;
        const length = 44 + pulse * 18;
        context.beginPath();
        context.moveTo(pointer.x + Math.cos(angle) * 18, pointer.y + Math.sin(angle) * 18);
        context.lineTo(pointer.x + Math.cos(angle + 0.18) * length, pointer.y + Math.sin(angle + 0.18) * length);
        context.strokeStyle = `rgba(14, 165, 233, ${0.12 * pointer.power})`;
        context.stroke();
      }
    }

    const ribbonY = centerY + Math.sin(time * 2) * 18;
    const ribbon = context.createLinearGradient(0, ribbonY - 80, width, ribbonY + 80);
    ribbon.addColorStop(0, "rgba(37, 99, 235, 0)");
    ribbon.addColorStop(0.5, "rgba(14, 165, 233, 0.18)");
    ribbon.addColorStop(1, "rgba(37, 99, 235, 0)");
    context.beginPath();
    for (let x = 0; x <= width; x += 18) {
      const y = ribbonY + Math.sin(x * 0.008 + time * 4.2) * 34 + Math.cos(x * 0.014 + time) * 10;
      if (x === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.strokeStyle = ribbon;
    context.lineWidth = 2;
    context.stroke();

    if (!reducedMotion) frame = window.requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
  window.addEventListener("blur", () => {
    pointer.active = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    } else if (!document.hidden && !reducedMotion) {
      frame = window.requestAnimationFrame(draw);
    }
  });
}

initMeshBackground();

setLanguage(currentLang);
