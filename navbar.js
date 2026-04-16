(() => {
  const sharedLinks = [
    { id: "about", i18n: "hero_about", label: "About" },
    { id: "projects", i18n: "hero_projects", label: "Projects" },
    { id: "skills", i18n: "hero_skills", label: "Skills" },
    { id: "contact", i18n: "hero_contact", label: "Contact" },
  ];

  const pageTargets = {
    home: {
      logoHref: "#top",
      links: {
        about: "#about",
        projects: "#projects",
        skills: "#skills",
        contact: "#contact",
      },
    },
    "case-study": {
      logoHref: "./Index.html#top",
      links: {
        about: "./Index.html#about",
        projects: "./Index.html#projects",
        skills: "./Index.html#skills",
        contact: "./Index.html#contact",
      },
    },
  };

  function getPageConfig(page) {
    const targets = pageTargets[page] || pageTargets.home;
    return {
      logoHref: targets.logoHref,
      links: sharedLinks.map((link) => ({
        href: targets.links[link.id],
        i18n: link.i18n,
        label: link.label,
      })),
    };
  }

  function renderLinks(config, className) {
    return config.links
      .map(
        (link) =>
          `<a href="${link.href}" class="${className}" data-i18n="${link.i18n}" dir="auto">${link.label}</a>`,
      )
      .join("");
  }

  function renderNavbar(config) {
    const desktopLinkClass = "text-slate-300 hover:text-white transition mx-4";
    const mobileLinkClass = "block text-slate-300 hover:text-white py-2";

    return `
<nav class="fixed top-0 right-0 w-full z-[9999] bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/70" dir="ltr">
    <div class="max-w-6xl mx-auto px-6 relative">
        <div class="flex items-center py-3 justify-between">
            <div id="desktopNavbar" class="hidden md:flex w-full items-center justify-between gap-8">
                <div class="flex items-center justify-start gap-6 shrink-0">
                    <button id="langToggle" class="inline-flex bg-slate-900/60 border border-cyan-200/70 text-white font-medium px-3 py-1 rounded-full text-sm transition hover:border-cyan-300 items-center justify-center text-center lang-glow">EN</button>
                    <div class="border-l border-slate-700 pl-4 flex items-center" data-no-translate dir="ltr">
                        <a href="https://www.linkedin.com/in/yg93"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Open LinkedIn profile"
                           class="text-slate-400 hover:text-blue-400 transition inline-flex items-center justify-center leading-none">
                            <i class="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <span class="h-6 border-l border-slate-700 mx-3"></span>
                        <a class="text-slate-400 hover:text-slate-300 transition inline-flex items-center justify-center leading-none"
                           href="mailto:yongolan93@gmail.com?subject=I%20would%20like%20to%20keep%20in%20touch&body=Hi%20Yonatan,%0A%0AI%20saw%20your%20portfolio%20and%20..."
                           aria-label="Send email"
                           onclick="event.stopPropagation()">
                            <i class="fas fa-envelope text-xl"></i>
                        </a>
                    </div>
                    <a href="https://github.com/ygolan93"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="text-slate-300 hover:text-white transition mx-4"
                       data-no-translate>
                        <span class="inline-flex items-center gap-2" dir="ltr">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </span>
                    </a>
                </div>
                <div class="flex items-center justify-center gap-6 mx-auto">
                    ${renderLinks(config, desktopLinkClass)}
                </div>
                <div class="flex justify-end shrink-0">
                    <a href="${config.logoHref}" class="text-2xl font-bold name-text">YG</a>
                </div>
            </div>
            <a href="${config.logoHref}" class="md:hidden text-2xl font-bold name-text">YG</a>
            <button id="mobileMenuToggle" class="md:hidden text-white" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle mobile menu">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>

        <div id="mobileMenu" class="md:hidden hidden bg-slate-900/90 backdrop-blur-md px-4 py-6 absolute top-full right-0 w-full border-t border-slate-800 z-50 text-center">
            ${renderLinks(config, mobileLinkClass)}
            <a href="https://github.com/ygolan93"
               target="_blank"
               rel="noopener noreferrer"
               class="block text-slate-300 hover:text-white py-2"
               data-no-translate>
                <span class="inline-flex items-center gap-2" dir="ltr">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/yg93"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Open LinkedIn profile"
               class="text-slate-400 hover:text-blue-400 transition inline-flex items-center justify-center leading-none">
                <i class="fab fa-linkedin-in text-xl"></i>
            </a>
            <span class="h-6 border-l border-slate-700 mx-3"></span>
            <a class="text-slate-400 hover:text-slate-300 transition inline-flex items-center justify-center leading-none"
               href="mailto:yongolan93@gmail.com?subject=I%20would%20like%20to%20keep%20in%20touch&body=Hi%20Yonatan,%0A%0AI%20saw%20your%20portfolio%20and%20..."
               aria-label="Send email"
               onclick="event.stopPropagation()">
                <i class="fas fa-envelope text-xl"></i>
            </a>
            <button id="langToggleMobile" class="mt-4 text-slate-300 hover:text-white border border-slate-700 px-3 py-1 rounded-full text-sm transition w-full lang-glow">EN</button>
        </div>
    </div>
</nav>`;
  }

  let mobileMenuCloseTimer;

  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileToggleBtn = document.getElementById("mobileMenuToggle");

    if (!mobileMenu || !mobileToggleBtn) return;

    mobileMenu.classList.remove("is-open");
    mobileToggleBtn.setAttribute("aria-expanded", "false");
    mobileMenuCloseTimer = window.setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }

  function setupMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileToggleBtn = document.getElementById("mobileMenuToggle");

    if (!mobileMenu || !mobileToggleBtn) return;

    mobileToggleBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");

      if (isHidden) {
        if (mobileMenuCloseTimer) {
          clearTimeout(mobileMenuCloseTimer);
          mobileMenuCloseTimer = null;
        }

        mobileMenu.classList.remove("hidden");
        requestAnimationFrame(() => {
          mobileMenu.classList.add("is-open");
          mobileToggleBtn.setAttribute("aria-expanded", "true");
        });
        return;
      }

      closeMobileMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      });
    });
  }

  function renderNavbars() {
    document.querySelectorAll("[data-navbar-page]").forEach((placeholder) => {
      const page = placeholder.getAttribute("data-navbar-page");
      const config = getPageConfig(page);
      placeholder.innerHTML = renderNavbar(config);
    });

    setupMobileMenu();
    setupSmoothScrolling();
  }

  function setLanguage(lang, options = {}) {
    const translations = options.translations || {};
    const dictionary = translations[lang] || translations.he || translations.en || {};

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";

    if (dictionary.page_title) {
      document.title = dictionary.page_title;
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      if (element.closest("[data-no-translate]")) return;

      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      if (element.closest("[data-no-translate]")) return;

      const key = element.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    const nextLabel = lang === "he" ? "EN" : "HE";
    const desktopToggle = document.getElementById("langToggle");
    const mobileToggle = document.getElementById("langToggleMobile");

    if (desktopToggle) desktopToggle.innerText = nextLabel;
    if (mobileToggle) mobileToggle.innerText = nextLabel;

    localStorage.setItem("lang", lang);

    if (typeof options.afterSetLanguage === "function") {
      options.afterSetLanguage(lang);
    }
  }

  window.SharedI18n = {
    init({ translations = {}, defaultLang = "en", afterSetLanguage } = {}) {
      const options = { translations, afterSetLanguage };
      const savedLang = localStorage.getItem("lang") || defaultLang;

      setLanguage(savedLang, options);

      document.getElementById("langToggle")?.addEventListener("click", () => {
        const nextLang = document.documentElement.lang === "he" ? "en" : "he";
        setLanguage(nextLang, options);
      });

      document
        .getElementById("langToggleMobile")
        ?.addEventListener("click", () => {
          const nextLang = document.documentElement.lang === "he" ? "en" : "he";
          setLanguage(nextLang, options);
        });
    },
    setLanguage,
  };

  renderNavbars();
})();
