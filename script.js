const sections = document.querySelectorAll(".section");

const translations = {
  he: {
    hero_about: "אודות",
    hero_skills: "כישורים",
    hero_projects: "פרויקטים",
    hero_contact: "יצירת קשר",
    hero_title: "מפתח Frontend עם התמחות ב-React",
    hero_description:
      "מפתח אפליקציות Web עם לוגיקה דינמית וניהול state מורכב.<br>עובד עם React, JavaScript וארכיטקטורה נקייה ליצירת מערכות אמינות ונוחות לשימוש.",

    about_title: "אודותיי",
    about_education: "השכלה והכשרה",

    about_fullstack: "תכנית Fullstack – TESI (האוניברסיטה הפתוחה)",
    about_fullstack_description: "הכשרה מעשית",
    about_fullstack_details:
      "הכשרה ממוקדת בפיתוח Web מודרני עם דגש על React ו־JavaScript, " +
      "עבודה עם APIs, ניהול state, ארכיטקטורת רכיבים וקוד נקי. " +
      "התכנית כללה בניית פרויקטים מלאים מקצה לקצה ויישום עקרונות עבודה הנהוגים בתעשייה.",

    about_game_dev: "עיצוב ופיתוח משחקים – שנקר",
    about_game_dev_description: "פרויקטים עצמאיים וצוותיים",
    about_game_dev_details:
      "פיתוח משחקים ב־Unity עם דגש על תכנון מונחה־אובייקטים, " +
      "חלוקת אחריות בין מערכות, שימוש ב־ScriptableObjects, " +
      "אופטימיזציה ו־Profiling. כולל עבודה על פרויקט עצמאי (Beavermania) " +
      "ופרויקט צוותי במסגרת סטארט־אפ.",

    about_me: "גישה לפיתוח",
    about_me_paragraph_1:
      "מפתח Frontend שבונה מערכות Web אמיתיות עם React, JavaScript וניהול state מסודר. " +
      "בפרויקטים כמו Audio Dojo ומערכות תזמון פיתחתי לוגיקה אינטראקטיבית, זרימת נתונים ומבני ממשק סביב צרכים מוצריים אמיתיים. " +
      "אני מתמקד בממשקים אמינים, מערכות ניתנות לתחזוקה ופתרון בעיות מעשי משלב הארכיטקטורה ועד לפרטי חוויית המשתמש.",

    about_me_paragraph_2:
      "לצד הפיתוח, עבדתי גם בהדרכה – מ־Unity ועד Kodu – מה שחידד את היכולת שלי לפשט מורכבויות, להסביר תהליכים ולבנות קוד יציב לאורך זמן. " +
      "אני לומד עצמאית, קורא דוקומנטציה, לא מפחד לקפוץ למים, ולא מחכה שמישהו יגיד לי מה לעשות.",

    about_me_paragraph_3:
      "עם הזמן למדתי ששלב ההכנה – הגדרת מטרות, הבנת הצרכים, ומחשבה מערכתית – חוסך שעות של פיתוח חוזר ומונע טעויות יקרות. היום אני ניגש לכל פרויקט עם תהליך ברור, שמתחיל מהשאלות הנכונות לפני שורה אחת של JavaScript.",

    about_me_paragraph_4:
      "בין אם מדובר במערכת תרגול סאונד, דאשבורד לתיאום שיעורים או משחקים אינטראקטיביים – המטרה שלי היא תמיד זהה: לבנות משהו שעובד, נוח לתחזוקה, ונותן ערך אמיתי למשתמש.",

    skills_title: "כישורים וטכנולוגיות",
    what_i_bring_title: "שירותים שאני מציע",
    what_i_bring_frontend_title: "פיתוח Frontend / Fullstack",
    what_i_bring_frontend_desc:
      "פיתוח אפליקציות ווב מודרניות עם React ו-JavaScript, עם דגש על קוד נקי, ארכיטקטורה מודולרית וניהול state ברור.",
    what_i_bring_unity_title: "פיתוח Unity ו־C#",
    what_i_bring_unity_desc:
      "פיתוח לוגיקה ומערכות משחק ב־Unity תוך שימוש בארכיטקטורה מודולרית, אירועים וקוד מסודר שקל לתחזק.",
    what_i_bring_problem_title: "פתרון בעיות",
    what_i_bring_problem_desc:
      "יכולת חזקה לניתוח קוד קיים, הבנת מערכות מורכבות ומתן פתרונות יציבים וסקיילביליים.",

    projects_title: "פרויקטים",
    projects_audio_dojo_tagline:
      "אפליקציית Web אינטראקטיבית לאימון שמיעה המבוססת על עיבוד אודיו בזמן אמת",
    projects_audio_dojo_problem_label: "בעיה:",
    projects_audio_dojo_problem:
      "למוזיקאים קשה לזהות בצורה עקבית שינויים בעיבוד אודיו כמו EQ, קומפרסיה ואפקטים.",
    projects_audio_dojo_solution_label: "פתרון:",
    projects_audio_dojo_solution:
      "פיתחתי מערכת חידונים דינמית שמאפשרת להשוות בין אודיו מעובד ולא מעובד, לענות על שאלות שמיעה מובנות, ולקבל פידבק מיידי.",
    projects_audio_dojo_highlights_label: "יכולות מרכזיות:",
    projects_audio_dojo_highlight_1:
      "יצירת שאלות דינמית על בסיס נתוני שאלות והגדרות",
    projects_audio_dojo_highlight_2:
      "השוואת האזנה בזמן אמת עם ניגון לפני ואחרי עיבוד",
    projects_audio_dojo_highlight_3:
      "שמירת תוצאות והיסטוריית שימוש באמצעות Firebase ו-localStorage",
    projects_audio_dojo_stack_label: "טכנולוגיות:",

    projects_audio_dojo_description:
      "למוזיקאים קשה לזהות בצורה עקבית שינויים בעיבוד אודיו כמו EQ, קומפרסיה ואפקטים. " +
      "המערכת פותחה ב־React וכוללת ניהול state מורכב, צריכת APIs, שמירה ושליפה מ־Firebase, " +
      "מסכי סיכום והיסטוריית נסיונות, וייצוא דוחות PDF / Excel. " +
      "הפרויקט מדגים בנייה מודולרית, חשיבה מערכתית ודגש חזק על UX נגיש.",

    projects_lingua_schedule_description:
      "LinguaSchedule היא מערכת Dashboard לניהול שיעורים בין מורים לתלמידים לפי רמות לימוד. " +
      "כוללת מנגנון מנויים, בקרת זמינות, תיאום אוטומטי ומעקב היסטורי. " +
      "המערכת פותחה ב־React ו־TypeScript עם Tailwind, לוגיקת זמן אמת ומניעת התנגשויות, " +
      "ונועדה להחליף את הפלטפורמה הקיימת של Jerusalem Post LiteTalk.",
    projects_lingua_schedule_tagline:
      "מערכת תזמון וזמינות לניהול שיעורים, משבצות זמן וזרימת עבודה תפעולית.",
    projects_lingua_schedule_bullet_1:
      "תכננתי לוגיקת משבצות זמן להתאמת שיעורים, זמינות מורים ואילוצי תזמון בתוך dashboard משותף.",
    projects_lingua_schedule_bullet_2:
      "מימשתי מנגנוני מניעת התנגשויות שחוסמים חפיפות ביומן ושומרים על זרימת תיאום צפויה.",
    projects_lingua_schedule_bullet_3:
      "בניתי את הממשק סביב workflow תפעולי אמיתי, עם ניהול state ב-React ו-TypeScript לעדכוני זמינות, סינון ותיאום שוטף.",

    projects_litetalk_description:
      "\u05DB\u05DC\u05D9 \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05DC\u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05D5\u05D7\u05D5\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD \u05DE\u05E7\u05D1\u05E6\u05D9 Excel \u05DC\u05EA\u05E6\u05D5\u05D2\u05EA RTL \u05E2\u05DD \u05E1\u05D9\u05E0\u05D5\u05DF \u05DB\u05DC\u05DC\u05D9 \u05E2\u05E1\u05E7 \u05D5\u05D9\u05D9\u05E6\u05D5\u05D0 PNG \u05DC-WhatsApp. " +
      "\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E2\u05D1\u05D3\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D2\u05D9\u05DC\u05D9\u05D5\u05DF, \u05D1\u05D5\u05D7\u05E8\u05EA \u05D0\u05EA \u05D4\u05E9\u05E2\u05D4 \u05D4\u05DE\u05D5\u05E7\u05D3\u05DE\u05EA \u05D1\u05DB\u05DC \u05EA\u05D0\u05E8\u05D9\u05DA, \u05D5\u05DE\u05E6\u05D9\u05D2\u05D4 \u05EA\u05E6\u05D5\u05D2\u05D4 \u05EA\u05E4\u05E2\u05D5\u05DC\u05D9\u05EA \u05E0\u05E7\u05D9\u05D9\u05D4 \u05D5\u05E0\u05D5\u05D7\u05D4 \u05DC\u05E9\u05D9\u05EA\u05D5\u05E3.",
    projects_litetalk_cta:
      "\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8",
    projects_beavermania_description:
      "משחק Rogue-like שפיתחתי במסגרת פרויקט גמר בשנקר",
    projects_beavermania_tagline:
      "משחק 3D בסגנון פלטפורמר ואקשן שפותח ב-Unity עם דגש על מערכות gameplay ומימוש שניתן לתחזוקה.",
    projects_beavermania_bullet_1:
      "מימשתי מערכות gameplay ולוגיקת אינטראקציה מרכזית ב-Unity וב-C# עבור משחק 3D playable בסגנון פלטפורמה ואקשן.",
    projects_beavermania_bullet_2:
      "בניית הפרויקט בצורה שמאפשרת איטרציה ותחזוקה, עם גבולות מערכת ברורים וקוד gameplay שניתן לשימוש חוזר.",
    projects_beavermania_bullet_3:
      "הכנתי ותחזקתי build דמו playable להפצה חיצונית, לצד חומרי וידאו ומדיה של המשחק.",
    projects_beavermania_status:
      "דמו playable זמין, והפרויקט נמצא כעת בתהליך Steam onboarding.",

    about_youtube_updates: "צפו בערוץ היוטיוב שלי לעדכונים",

    projects_todo_list_description:
      "אפליקציית ניהול משימות מתקדמת שנבנתה עם React בצד הלקוח ו-Node.js + MongoDB בצד השרת.",

    projects_nda_game_title: "משחק מובייל דו־ממדי",
    projects_nda_game_tagline:
      "משחק מובייל דו־ממדי שפותח בצוות קטן, עם מערכת אפקטים אלמנטליים מודולרית בליבת המשחק.",
    projects_nda_game_bullet_1:
      "תכננתי ומימשתי מערכת אפקטים אלמנטליים ב-Unity וב-C# עבור אינטראקציות של אש, מים, אדמה ואוויר.",
    projects_nda_game_bullet_2:
      "בניית ארכיטקטורת runtime מודולרית עם ScriptableObjects, Interfaces, Events ו-Coroutines להגדרת התנהגויות, טריגרים וסינרגיות בין אפקטים.",
    projects_nda_game_bullet_3:
      "שילבתי את המערכת בתוך זרימות המשחק, עם דגש על תחזוקתיות, הרחבה עתידית וסדר הרצה צפוי של אפקטים.",

    projects_elemental_heroes_description:
      "פרויקט צוותי בסטארט־אפ למשחק מובייל. פיתחתי מערכת אפקטים אלמנטליים " +
      "(אש, מים, אדמה, אוויר) בארכיטקטורה מודולרית עם Events, Interfaces וסינרגיות בין אפקטים.",

    projects_more_projects: "עוד פרויקטים בתהליך פיתוח – בקרוב!",
    download_cv_title: "קורות חיים",
    contact_title: "יצירת קשר",
    contact_placeholder_name: "שם מלא",
    contact_placeholder_email: "אימייל",
    contact_placeholder_message: "הודעה",
    contact_submit_button: "שלח",
  },

  en: {
    hero_about: "About",
    hero_skills: "Skills",
    hero_projects: "Projects",
    hero_contact: "Contact",
    hero_title: "Frontend Developer specializing in React",
    hero_description:
      "Building web applications with dynamic logic and complex state management.<br>Working with React, JavaScript, and clean architecture to deliver reliable and usable systems.",

    about_title: "About Me",
    about_education: "Education & Training",

    about_fullstack: "Fullstack Program – TESI (Open University)",
    about_fullstack_description: "Practical Training",
    about_fullstack_details:
      "Hands-on training in modern Web development with a focus on React and JavaScript, " +
      "working with APIs, state management, component architecture, and clean code practices. " +
      "The program included building full end-to-end projects and applying industry standards.",

    about_game_dev: "Game Development – Unity & C#",
    about_game_dev_description: "Independent & Team Projects",
    about_game_dev_details:
      "Game development in Unity with an emphasis on object-oriented design, " +
      "system responsibility separation, ScriptableObjects usage, optimization, " +
      "and profiling. Includes an independent project (Beavermania) and a team-based startup project.",

    about_me: "Development Approach",
    about_me_paragraph_1:
      "Frontend developer building real web systems with React, JavaScript, and clear state architecture. " +
      "Across projects like Audio Dojo and scheduling tools, I design interaction logic, data flow, and UI structure around real product constraints. " +
      "I focus on reliable interfaces, maintainable systems, and practical problem-solving from architecture to UX details.",

    about_me_paragraph_2:
      "In my flagship project, Audio Dojo, I built a complete Web system including complex state management, " +
      "Firebase and localStorage integration, summary and history screens, and PDF/Excel report exports. " +
      "The project combines accessible UX with strong system thinking and data handling.",

    about_me_paragraph_3:
      "I have worked on both independent and team-based projects, including within a mobile game startup. " +
      "My experience includes entering existing codebases, reading documentation, and integrating new solutions into live systems.",

    about_me_paragraph_4:
      "Alongside development, I also served as a teaching assistant in Unity courses, " +
      "which strengthened my ability to explain concepts clearly, write readable code, " +
      "and work in a structured and organized manner.",

    skills_title: "Skills & Technologies",
    what_i_bring_title: "My Services and Strengths",
    what_i_bring_frontend_title: "Frontend / Fullstack",
    what_i_bring_frontend_desc:
      "Building modern Web applications with React and JavaScript, focusing on clean code, modular architecture, and clear state management.",
    what_i_bring_unity_title: "Unity & C#",
    what_i_bring_unity_desc:
      "Developing gameplay logic and systems in Unity using modular design, events and clear architecture.",
    what_i_bring_problem_title: "Problem Solving",
    what_i_bring_problem_desc:
      "Strong ability to understand existing codebases, analyze systems, and deliver stable, scalable solutions.",

    projects_title: "Projects",
    projects_audio_dojo_tagline:
      "Interactive ear-training web application built with real-time audio processing",
    projects_audio_dojo_problem_label: "Problem:",
    projects_audio_dojo_problem:
      "Musicians struggle to reliably identify changes in audio processing such as EQ, compression, and effects.",
    projects_audio_dojo_solution_label: "Solution:",
    projects_audio_dojo_solution:
      "Built a dynamic quiz engine with real-time audio processing that allows users to compare processed and unprocessed audio, answer structured listening questions, and receive instant feedback.",
    projects_audio_dojo_highlights_label: "System Highlights:",
    projects_audio_dojo_highlight_1:
      "Dynamic quiz generation based on configurable question data",
    projects_audio_dojo_highlight_2:
      "Real-time audio comparison flow with pre/post playback",
    projects_audio_dojo_highlight_3:
      "Persistent quiz state and session tracking using Firebase and local storage",
    projects_audio_dojo_stack_label: "Tech Stack:",

    projects_audio_dojo_description:
      "Musicians struggle to reliably identify changes in audio processing such as EQ, compression, and effects. " +
      "Built with React, it features complex state management, API consumption, Firebase integration, " +
      "attempt history and summary screens, and PDF/Excel report exports. " +
      "The project demonstrates modular architecture, system thinking, and strong UX focus.",

    projects_lingua_schedule_description:
      "LinguaSchedule is a scheduling dashboard for managing lessons between teachers and students by level. " +
      "It includes subscriptions, availability control, automated scheduling, and historical tracking. " +
      "Built with React and TypeScript using Tailwind, with real-time logic and collision prevention, " +
      "designed to replace the existing Jerusalem Post LiteTalk platform.",
    projects_lingua_schedule_tagline:
      "Scheduling and availability system for coordinating lessons, time slots, and day-to-day operations.",
    projects_lingua_schedule_bullet_1:
      "Designed time-slot logic for matching lessons, teacher availability, and scheduling constraints within a shared dashboard.",
    projects_lingua_schedule_bullet_2:
      "Implemented conflict-prevention rules that block overlapping bookings and keep scheduling flows predictable.",
    projects_lingua_schedule_bullet_3:
      "Structured the interface around real operational workflow, using React and TypeScript state handling for availability updates, filtering, and coordination.",

    projects_litetalk_description:
      "Internal scheduling automation tool that transforms raw Excel lesson schedules into structured RTL timetables with business-rule filtering and WhatsApp-ready PNG export. " +
      "The system parses spreadsheet data, applies logic such as earliest-hour-per-date selection, and renders a clean, shareable operational view.",
    projects_litetalk_cta: "View Project",
    projects_beavermania_description:
      "A Rogue-like game developed as my final project at Shenkar",
    projects_beavermania_tagline:
      "3D platformer/action game built in Unity with a focus on gameplay systems and maintainable implementation.",
    projects_beavermania_bullet_1:
      "Implemented gameplay systems and core interaction logic in Unity and C# for a playable 3D platformer/action experience.",
    projects_beavermania_bullet_2:
      "Structured the project for iteration and maintainability, with clear system boundaries and reusable gameplay code.",
    projects_beavermania_bullet_3:
      "Built and maintained a publicly playable demo build, supported by gameplay footage and external demo distribution.",
    projects_beavermania_status:
      "Playable demo available, currently in Steam onboarding process.",

    about_youtube_updates: "Watch my YouTube channel for updates",

    projects_todo_list_description:
      "An advanced task management application built with React on the client side and Node.js + MongoDB on the server.",

    projects_nda_game_title: "2D Mobile Game",
    projects_nda_game_tagline:
      "Small-team 2D mobile game centered on a modular elemental effects system.",
    projects_nda_game_bullet_1:
      "Designed and implemented an elemental effects system in Unity and C# for fire, water, earth, and air interactions.",
    projects_nda_game_bullet_2:
      "Built a modular runtime architecture using ScriptableObjects, Interfaces, Events, and Coroutines to define behaviors, triggers, and effect synergies.",
    projects_nda_game_bullet_3:
      "Integrated the system into gameplay flows with a focus on maintainability, extensibility, and predictable effect sequencing.",

    projects_elemental_heroes_description:
      "A team-based mobile game startup project. I developed a modular elemental effects system " +
      "(fire, water, earth, air) using Events, Interfaces, and effect synergies.",

    projects_more_projects:
      "More projects currently in development – coming soon!",
    download_cv_title: "Download CV",
    contact_title: "Contact",
    contact_placeholder_name: "Full Name",
    contact_placeholder_email: "Email",
    contact_placeholder_message: "Message",
    contact_submit_button: "Submit",
  },
};

function toggleCVButtons(lang) {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    if (button.getAttribute("data-lang") === lang) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

window.SharedI18n.init({
  translations,
  defaultLang: "en",
  afterSetLanguage: toggleCVButtons,
});
