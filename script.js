        const scrollUpBtn = document.getElementById('scrollUpBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollUpBtn.classList.remove('hidden');
            } else {
                scrollUpBtn.classList.add('hidden');
            }
        });

        scrollUpBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        const sections = document.querySelectorAll('.section');
        
        const translations = {
            he: {
                hero_skills: 'כישורים',
                hero_projects: 'פרויקטים',
                hero_contact: 'יצירת קשר',
                hero_title: 'היי, אני יונתן',
                hero_description:
                'אני מפתח אפליקציות, אתרים ומשחקים משום שאני נהנה לראות רעיון נהפך למשהו שאפשר לגעת בו. מעבר למסך אני מנגן בגיטרה, אוהב להוציא אנרגיה באימונים, ומדי פעם מתנדב בעבודות הדרכה – אז יש בי גם את הצד שאוהב לעבוד עם אנשים. אני בעיקר אוהב שילוב של יצירה, טכנולוגיה וחיבור אנושי, ומעריך שיחות טובות לא פחות מקוד טוב.',
                hero_contact: 'צור קשר',

                about_title: 'אודותיי',
                about_education: 'השכלה והכשרה',

                about_fullstack: 'תכנית Fullstack – TESI (האוניברסיטה הפתוחה)',
                about_fullstack_description: 'הכשרה מעשית',
                about_fullstack_details:
                'הכשרה ממוקדת בפיתוח Web מודרני עם דגש על React ו־JavaScript, ' +
                'עבודה עם APIs, ניהול state, ארכיטקטורת רכיבים וקוד נקי. ' +
                'התכנית כללה בניית פרויקטים מלאים מקצה לקצה ויישום עקרונות עבודה הנהוגים בתעשייה.',

                about_game_dev: 'עיצוב ופיתוח משחקים – שנקר',
                about_game_dev_description: 'פרויקטים עצמאיים וצוותיים',
                about_game_dev_details:
                'פיתוח משחקים ב־Unity עם דגש על תכנון מונחה־אובייקטים, ' +
                'חלוקת אחריות בין מערכות, שימוש ב־ScriptableObjects, ' +
                'אופטימיזציה ו־Profiling. כולל עבודה על פרויקט עצמאי (Beavermania) ' +
                'ופרויקט צוותי במסגרת סטארט־אפ.',

                about_me: 'צורת עבודה וניסיון מקצועי',
                about_me_paragraph_1:
                'לצד כתיבת קוד אני יודע להבין מערכת, להסביר אותה לאחרים, ולבנות אותה נכון מהיסוד. ' +
                'במהלך פרויקטים שפיתחתי עצמאית (ולעתים גם בשיתוף פעולה עם לקוח), שילבתי יכולות פיתוח עם תכנון מערכת, אפיון, תיעוד, ייצוא דוחות, ממשקים, ניהול state, ארכיטקטורה ועוד – גם כשלא הייתה לי היכרות מוקדמת עם התחום (כמו באודיו מקצועי).',

                about_me_paragraph_2:
                'לצד הפיתוח, עבדתי גם בהדרכה – מ־Unity ועד Kodu – מה שחידד את היכולת שלי לפשט מורכבויות, להסביר תהליכים ולבנות קוד יציב לאורך זמן. ' +
                'אני לומד עצמאית, קורא דוקומנטציה, לא מפחד לקפוץ למים, ולא מחכה שמישהו יגיד לי מה לעשות.',

                about_me_paragraph_3:
                'עם הזמן למדתי ששלב ההכנה – הגדרת מטרות, הבנת הצרכים, ומחשבה מערכתית – חוסך שעות של פיתוח חוזר ומונע טעויות יקרות. היום אני ניגש לכל פרויקט עם תהליך ברור, שמתחיל מהשאלות הנכונות לפני שורה אחת של JavaScript.',

                about_me_paragraph_4:
                'בין אם מדובר במערכת תרגול סאונד, דאשבורד לתיאום שיעורים או משחקים אינטראקטיביים – המטרה שלי היא תמיד זהה: לבנות משהו שעובד, נוח לתחזוקה, ונותן ערך אמיתי למשתמש.',

                skills_title: 'כישורים וטכנולוגיות',
                what_i_bring_title: "שירותים שאני מציע",
                what_i_bring_frontend_title: "פיתוח Frontend / Fullstack",
                what_i_bring_frontend_desc: "פיתוח אפליקציות ווב מודרניות עם React ו-JavaScript, עם דגש על קוד נקי, ארכיטקטורה מודולרית וניהול state ברור.",
                what_i_bring_unity_title: "פיתוח Unity ו־C#",
                what_i_bring_unity_desc: "פיתוח לוגיקה ומערכות משחק ב־Unity תוך שימוש בארכיטקטורה מודולרית, אירועים וקוד מסודר שקל לתחזק.",
                what_i_bring_problem_title: "פתרון בעיות",
                what_i_bring_problem_desc: "יכולת חזקה לניתוח קוד קיים, הבנת מערכות מורכבות ומתן פתרונות יציבים וסקיילביליים.",


                projects_title: 'פרויקטים',

                projects_audio_dojo_description:
                'Audio Dojo היא אפליקציית Web לתרגול שמיעה מוזיקלית, המיועדת לסטודנטים בקורסי סאונד. ' +
                'המערכת פותחה ב־React וכוללת ניהול state מורכב, צריכת APIs, שמירה ושליפה מ־Firebase, ' +
                'מסכי סיכום והיסטוריית נסיונות, וייצוא דוחות PDF / Excel. ' +
                'הפרויקט מדגים בנייה מודולרית, חשיבה מערכתית ודגש חזק על UX נגיש.',

                projects_lingua_schedule_description:
                'LinguaSchedule היא מערכת Dashboard לניהול שיעורים בין מורים לתלמידים לפי רמות לימוד. ' +
                'כוללת מנגנון מנויים, בקרת זמינות, תיאום אוטומטי ומעקב היסטורי. ' +
                'המערכת פותחה ב־React ו־TypeScript עם Tailwind, לוגיקת זמן אמת ומניעת התנגשויות, ' +
                'ונועדה להחליף את הפלטפורמה הקיימת של Jerusalem Post LiteTalk.',

                projects_beavermania_description:
                'משחק Rogue-like שפיתחתי במסגרת פרויקט גמר בשנקר',

                about_youtube_updates: 'צפו בערוץ היוטיוב שלי לעדכונים',

                projects_todo_list_description:
                'אפליקציית ניהול משימות מתקדמת שנבנתה עם React בצד הלקוח ו-Node.js + MongoDB בצד השרת.',

                projects_elemental_heroes_description:
                'פרויקט צוותי בסטארט־אפ למשחק מובייל. פיתחתי מערכת אפקטים אלמנטליים ' +
                '(אש, מים, אדמה, אוויר) בארכיטקטורה מודולרית עם Events, Interfaces וסינרגיות בין אפקטים.',

                projects_more_projects: 'עוד פרויקטים בתהליך פיתוח – בקרוב!',

                contact_title: 'יצירת קשר',
                contact_placeholder_name: 'שם מלא',
                contact_placeholder_email: 'אימייל',
                contact_placeholder_message: 'הודעה',
                contact_submit_button: 'שלח',
            },

            en: {
                hero_skills: 'Skills',
                hero_projects: 'Projects',
                hero_contact: 'Contact',
                hero_title: 'Hi, I’m Yonatan',
                hero_description:
                'Software developer specializing in Unity game development and modern Web applications ' +
                'using React and JavaScript. I bring a systems-oriented mindset, strong technical curiosity, ' +
                'and hands-on experience from both independent and team-based projects. ' +
                'I’m looking to join an innovative development team where I can grow, contribute, and deliver value from day one.',
                hero_contact: 'Contact Me',

                about_title: 'About Me',
                about_education: 'Education & Training',

                about_fullstack: 'Fullstack Program – TESI (Open University)',
                about_fullstack_description: 'Practical Training',
                about_fullstack_details:
                'Hands-on training in modern Web development with a focus on React and JavaScript, ' +
                'working with APIs, state management, component architecture, and clean code practices. ' +
                'The program included building full end-to-end projects and applying industry standards.',

                about_game_dev: 'Game Development – Unity & C#',
                about_game_dev_description: 'Independent & Team Projects',
                about_game_dev_details:
                'Game development in Unity with an emphasis on object-oriented design, ' +
                'system responsibility separation, ScriptableObjects usage, optimization, ' +
                'and profiling. Includes an independent project (Beavermania) and a team-based startup project.',

                about_me: 'Who Am I?',
                about_me_paragraph_1:
                'I’m Yonatan, a software developer with a system-oriented mindset and a passion ' +
                'for building real products. I started with game development and interactive experiences ' +
                'and later specialized in Web development with a focus on React, JavaScript, and clean, modular architecture.',

                about_me_paragraph_2:
                'In my flagship project, Audio Dojo, I built a complete Web system including complex state management, ' +
                'Firebase and localStorage integration, summary and history screens, and PDF/Excel report exports. ' +
                'The project combines accessible UX with strong system thinking and data handling.',

                about_me_paragraph_3:
                'I have worked on both independent and team-based projects, including within a mobile game startup. ' +
                'My experience includes entering existing codebases, reading documentation, and integrating new solutions into live systems.',

                about_me_paragraph_4:
                'Alongside development, I also served as a teaching assistant in Unity courses, ' +
                'which strengthened my ability to explain concepts clearly, write readable code, ' +
                'and work in a structured and organized manner.',

                skills_title: 'Skills & Technologies',
                what_i_bring_title: "My Services and Strengths",
                what_i_bring_frontend_title: "Frontend / Fullstack",
                what_i_bring_frontend_desc: "Building modern Web applications with React and JavaScript, focusing on clean code, modular architecture, and clear state management.",
                what_i_bring_unity_title: "Unity & C#",
                what_i_bring_unity_desc: "Developing gameplay logic and systems in Unity using modular design, events and clear architecture.",
                what_i_bring_problem_title: "Problem Solving",
                what_i_bring_problem_desc: "Strong ability to understand existing codebases, analyze systems, and deliver stable, scalable solutions.",

                projects_title: 'Projects',

                projects_audio_dojo_description:
                'Audio Dojo is a Web application for ear training, designed for sound and audio students. ' +
                'Built with React, it features complex state management, API consumption, Firebase integration, ' +
                'attempt history and summary screens, and PDF/Excel report exports. ' +
                'The project demonstrates modular architecture, system thinking, and strong UX focus.',

                projects_lingua_schedule_description:
                'LinguaSchedule is a scheduling dashboard for managing lessons between teachers and students by level. ' +
                'It includes subscriptions, availability control, automated scheduling, and historical tracking. ' +
                'Built with React and TypeScript using Tailwind, with real-time logic and collision prevention, ' +
                'designed to replace the existing Jerusalem Post LiteTalk platform.',

                projects_beavermania_description:
                'A Rogue-like game developed as my final project at Shenkar',

                about_youtube_updates: 'Watch my YouTube channel for updates',

                projects_todo_list_description:
                'An advanced task management application built with React on the client side and Node.js + MongoDB on the server.',

                projects_elemental_heroes_description:
                'A team-based mobile game startup project. I developed a modular elemental effects system ' +
                '(fire, water, earth, air) using Events, Interfaces, and effect synergies.',

                projects_more_projects: 'More projects currently in development – coming soon!',

                contact_title: 'Contact',
                contact_placeholder_name: 'Full Name',
                contact_placeholder_email: 'Email',
                contact_placeholder_message: 'Message',
                contact_submit_button: 'Submit',
            }
            };

            function setLanguage(lang) {
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

                document.querySelectorAll('[data-i18n]').forEach(el => {
                    if (el.closest('[data-no-translate]')) return;

                    const key = el.getAttribute('data-i18n');
                    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                        if (el.closest('[data-no-translate]')) return;

                        const key = el.getAttribute('data-i18n-placeholder');
                        if (translations[lang][key]) {
                            el.setAttribute('placeholder', translations[lang][key]);
                        }
                    });

                    if (translations[lang][key]) {
                        el.innerHTML = translations[lang][key];
                    }
                });

                localStorage.setItem('lang', lang);
                document.getElementById('langToggle').innerText = lang === 'he' ? 'EN' : 'HE';
                if (document.getElementById('langToggleMobile')) {
                    document.getElementById('langToggleMobile').innerText = lang === 'he' ? 'EN' : 'HE';
                }

                document.body.style.transition = 'transform 0.1s';
                document.body.style.transform = 'scaleX(0)';
                setTimeout(() => {
                    document.body.style.transform = 'scaleX(1)';
                }, 50);
            }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileToggleBtn = document.querySelector('button.md\\:hidden');

        mobileToggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        });

        document.getElementById('langToggleMobile').addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'he' ? 'en' : 'he';
        setLanguage(newLang);
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        const langToggle = document.getElementById('langToggle');
        const savedLang = localStorage.getItem('lang') || 'he';

        setLanguage(savedLang);

        langToggle.addEventListener('click', () => {
            const newLang = document.documentElement.lang === 'he' ? 'en' : 'he';
            setLanguage(newLang);
        });