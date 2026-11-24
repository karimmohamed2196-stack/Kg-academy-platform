
import React, { useMemo, useState } from "react";

type Lang = "ar" | "en";
type Page =
  | "home"
  | "barista"
  | "roasting"
  | "bartender"
  | "mixology"
  | "recipes"
  | "management"
  | "career"
  | "business"
  | "founder";

const courses = [
  {
    id: "barista" as Page,
    icon: "☕",
    ar: "أكاديمية الباريستا",
    en: "Barista Academy",
    level: "Beginner → Professional",
    duration: "8 Weeks",
    descriptionAr: "من أساسيات القهوة إلى الاحتراف في إعداد الإسبريسو والمشروبات واستخلاص القهوة.",
    descriptionEn: "From coffee fundamentals to professional espresso preparation, brewing and beverage service.",
    skills: ["Coffee Fundamentals", "Espresso Extraction", "Grinder Calibration", "Milk Texturing", "Latte Art", "Manual Brewing"],
    lessons: [
      ["مدخل إلى عالم القهوة", "أنواع البن، المعالجة، درجات التحميص، ومراحل انتقال القهوة من المزرعة إلى الكوب."],
      ["أساسيات الإسبريسو", "فهم الجرعة، الناتج، زمن الاستخلاص، ونسبة التحضير."],
      ["معايرة المطحنة", "ضبط الطحن وقراءة الاستخلاص وتصحيح العيوب."],
      ["تبخير الحليب", "التحكم في الحرارة والقوام والـ Microfoam."],
      ["فن اللاتيه آرت", "التدريب على القلب والوردة والتوليب."],
      ["طرق التحضير اليدوي", "V60 وFrench Press وطرق التحكم في الاستخلاص."],
      ["خدمة العملاء", "التواصل، سرعة الخدمة، وإدارة محطة العمل."],
      ["التقييم العملي", "اختبار إعداد مشروبات متكامل وتقييم جودة المنتج."]
    ]
  },
  {
    id: "roasting" as Page,
    icon: "🔥",
    ar: "أكاديمية تحميص القهوة",
    en: "Coffee Roasting Academy",
    level: "Foundation → Advanced",
    duration: "6 Weeks",
    descriptionAr: "افهم سلوك حبوب البن أثناء التحميص، وابنِ بروفايلات تحميص متوازنة وقابلة للتكرار.",
    descriptionEn: "Understand bean behavior and develop balanced, repeatable roast profiles.",
    skills: ["Green Coffee", "Roast Stages", "Roast Profiles", "Heat & Airflow", "Development Time", "Quality Control"],
    lessons: [
      ["فهم البن الأخضر", "الكثافة والرطوبة والمعالجة وتأثيرها على سلوك التحميص."],
      ["مراحل التحميص", "Drying وMaillard وFirst Crack وDevelopment."],
      ["مصادر الحرارة وتدفق الهواء", "فهم انتقال الحرارة والتحكم في الطاقة والهواء."],
      ["قراءة منحنى التحميص", "متابعة الوقت ودرجة الحرارة ومعدل ارتفاعها."],
      ["بناء بروفايل التحميص", "تطوير بروفايل يناسب خصائص البن والنتيجة المستهدفة."],
      ["التذوق وضبط الجودة", "ربط نتائج الكوب بقرارات التحميص وتحسين البروفايل."]
    ]
  },
  {
    id: "bartender" as Page,
    icon: "🍸",
    ar: "أكاديمية البارتندر",
    en: "Bartender Academy",
    level: "Beginner → Professional",
    duration: "6 Weeks",
    descriptionAr: "تعلّم أساسيات البار، الأدوات، تقنيات التحضير، الخدمة، وإدارة محطة المشروبات.",
    descriptionEn: "Learn bar fundamentals, equipment, preparation techniques and professional service.",
    skills: ["Bar Setup", "Tools & Equipment", "Build & Shake", "Garnishing", "Service Standards", "Bar Operations"],
    lessons: [
      ["مقدمة في مهنة البارتندر", "مسؤوليات البار ومعايير النظافة والسلامة."],
      ["الأدوات والمعدات", "استخدام الشيكَر والجيجر والسترينر وأدوات البار."],
      ["تقنيات التحضير", "Build وStir وShake وLayering."],
      ["المكونات والنكهات", "التوازن بين الحلاوة والحموضة والمرارة."],
      ["التقديم والتزيين", "اختيار الكأس والتزيين وتناسق الشكل."],
      ["تشغيل البار", "إدارة المخزون والتحضير المسبق وسرعة الخدمة."]
    ]
  },
  {
    id: "mixology" as Page,
    icon: "🧪",
    ar: "أكاديمية الميكسولوجي",
    en: "Mixology Academy",
    level: "Intermediate → Advanced",
    duration: "5 Weeks",
    descriptionAr: "تطوير المشروبات والوصفات وفهم النكهات والتوازن وبناء تجارب مبتكرة.",
    descriptionEn: "Develop original beverages through flavor science, balance and creative techniques.",
    skills: ["Flavor Theory", "Syrups & Infusions", "Acidity", "Texture", "Recipe Design", "Presentation"],
    lessons: [
      ["علم النكهات", "العائلات العطرية والتوافق والتباين بين المكونات."],
      ["الشرابات والمنقوعات", "إعداد Syrups وInfusions واستخداماتها."],
      ["التوازن والحموضة", "ضبط الحلاوة والحموضة والقوام."],
      ["تقنيات متقدمة", "Clarification وFoams وLayering."],
      ["تصميم وصفة أصلية", "ابتكار وصفة وتوثيق المقادير وطريقة التحضير."]
    ]
  },
  {
    id: "management" as Page,
    icon: "📊",
    ar: "إدارة الكافيهات والبارات",
    en: "Cafe & Bar Management",
    level: "Professional",
    duration: "6 Weeks",
    descriptionAr: "إدارة التشغيل والتكاليف والفريق والجودة وتحسين ربحية مشروع الضيافة.",
    descriptionEn: "Manage operations, costs, teams, quality and profitability in hospitality businesses.",
    skills: ["Operations", "Cost Control", "Inventory", "Team Leadership", "Menu Engineering", "Guest Experience"],
    lessons: [
      ["أساسيات التشغيل", "بناء إجراءات تشغيل يومية واضحة."],
      ["التكاليف والتسعير", "حساب تكلفة المنتج وهامش الربح ونقطة التعادل."],
      ["إدارة المخزون", "الشراء والاستلام والهالك ومراقبة المخزون."],
      ["قيادة الفريق", "التوظيف والتدريب وتوزيع المسؤوليات."],
      ["هندسة القائمة", "تحليل المبيعات والربحية وتطوير المنيو."],
      ["مؤشرات الأداء", "متابعة المبيعات والجودة ورضا العملاء."]
    ]
  }
];

const recipes = [
  { name: "Classic Iced Latte", category: "Coffee", ingredients: "Espresso · Milk · Ice", method: "Prepare espresso, fill a glass with ice, add milk and pour espresso over it." },
  { name: "Vanilla Cold Brew", category: "Coffee", ingredients: "Cold Brew · Vanilla Syrup · Ice", method: "Combine cold brew and vanilla syrup. Serve over ice." },
  { name: "Spanish Latte", category: "Coffee", ingredients: "Espresso · Milk · Condensed Milk", method: "Mix condensed milk with espresso, add cold milk and ice." },
  { name: "Hibiscus Anise Cooler", category: "Mocktail", ingredients: "Hibiscus · Anise · Citrus · Ice", method: "Prepare a chilled hibiscus and anise infusion, balance with citrus and serve over ice." },
  { name: "Citrus Garden", category: "Mocktail", ingredients: "Orange · Lemon · Mint · Soda", method: "Muddle mint gently, add citrus juices and ice, then top with soda." },
  { name: "Berry Fizz", category: "Mocktail", ingredients: "Mixed Berries · Lime · Soda", method: "Muddle berries, add lime and ice, then top with soda." }
];

const copy = {
  ar: {
    tagline: "أكاديمية المعرفة والتطبيق المهني",
    headline: "حوّل شغفك إلى خبرة واحتراف.",
    intro: "من القهوة والمشروبات إلى الضيافة وإدارة الأعمال. تعلّم بمهارة، وتدرّب بثقة، واصنع مستقبلك المهني.",
    explore: "اكتشف الأكاديميات",
    programs: "البرامج التعليمية",
    programsSub: "مسارات تعليمية تجمع بين المعرفة والتطبيق العملي.",
    learn: "اكتشف البرنامج",
    back: "العودة للرئيسية",
    curriculum: "المحتوى التعليمي",
    outcomes: "المهارات التي ستكتسبها",
    duration: "المدة",
    level: "المستوى",
    lessons: "الدروس",
    practical: "التطبيق العملي",
    practicalText: "طبّق ما تعلمته من خلال مهام عملية تحاكي بيئة العمل الحقيقية.",
    enroll: "ابدأ رحلتك التعليمية",
    founder: "عن المؤسس",
    founderTitle: "خبرة مهنية تُبنى بالتعلم والممارسة.",
    founderText: "كريم محمد، متخصص في القهوة والمشروبات والضيافة، بدأ رحلته المهنية عام 2013، واستمر في تطوير خبرته من خلال العمل والتعلم والتطبيق في بيئات ضيافة مختلفة.",
    experience: "13+ سنة من الخبرة والتعلم المستمر",
    career: "المركز المهني",
    careerText: "استعد لسوق العمل من خلال تطوير مهاراتك المهنية وبناء سيرتك الذاتية والاستعداد للمقابلات.",
    business: "بوابة المؤسسات",
    businessText: "برامج تدريب وتطوير مخصصة للمقاهي والفنادق وشركات الضيافة.",
    recipes: "مكتبة المشروبات والوصفات",
    search: "ابحث عن وصفة...",
    all: "الكل",
    contact: "تواصل معنا",
    footer: "المعرفة تصنع الفرق. والتطبيق يصنع الاحتراف.",
    noLessons: "اختر أحد الدروس لاستكشاف محتواه.",
    lessonLabel: "محاور الدرس",
    lessonTask: "التطبيق المطلوب",
    taskText: "اكتب ملاحظاتك، وطبّق الخطوات على منتج حقيقي، ثم قيّم النتيجة وفق معايير الجودة."
  },
  en: {
    tagline: "Professional Knowledge & Practical Learning",
    headline: "Turn your passion into expertise.",
    intro: "From coffee and beverages to hospitality and business management. Learn with purpose, practice with confidence and build your career.",
    explore: "Explore Academies",
    programs: "Learning Programs",
    programsSub: "Structured learning paths that combine knowledge with practical application.",
    learn: "Explore Program",
    back: "Back to Home",
    curriculum: "Learning Curriculum",
    outcomes: "Skills You Will Develop",
    duration: "Duration",
    level: "Level",
    lessons: "Lessons",
    practical: "Practical Application",
    practicalText: "Apply what you learn through assignments inspired by real workplace situations.",
    enroll: "Start Your Learning Journey",
    founder: "About the Founder",
    founderTitle: "Professional experience built through learning and practice.",
    founderText: "Karim Mohamed is a coffee, beverage and hospitality professional whose journey began in 2013 and has continued through hands-on experience, learning and development across hospitality environments.",
    experience: "13+ Years of Experience & Continuous Learning",
    career: "Career Center",
    careerText: "Prepare for the workplace by developing professional skills, improving your CV and preparing for interviews.",
    business: "Institution Portal",
    businessText: "Customized training and development programs for cafes, hotels and hospitality companies.",
    recipes: "Drinks & Recipes Library",
    search: "Search recipes...",
    all: "All",
    contact: "Contact Us",
    footer: "Knowledge makes a difference. Practice builds expertise.",
    noLessons: "Select a lesson to explore its content.",
    lessonLabel: "Lesson Topics",
    lessonTask: "Practical Assignment",
    taskText: "Take notes, apply the steps to a real product and evaluate the result against quality standards."
  }
};

const navItems: { id: Page; ar: string; en: string }[] = [
  { id: "barista", ar: "الباريستا", en: "Barista" },
  { id: "roasting", ar: "التحميص", en: "Roasting" },
  { id: "bartender", ar: "البارتندر", en: "Bartender" },
  { id: "mixology", ar: "الميكسولوجي", en: "Mixology" },
  { id: "recipes", ar: "الوصفات", en: "Recipes" },
  { id: "management", ar: "الإدارة", en: "Management" }
];

export default function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [page, setPage] = useState<Page>("home");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const t = copy[lang];
  const isAr = lang === "ar";

  const activeCourse = courses.find(c => c.id === page);
  const filteredRecipes = useMemo(() => recipes.filter(r =>
    (category === "All" || r.category === category) &&
    (r.name.toLowerCase().includes(search.toLowerCase()) ||
     r.ingredients.toLowerCase().includes(search.toLowerCase()))
  ), [search, category]);

  const go = (next: Page) => {
    setPage(next);
    setLessonIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app ${isAr ? "rtl" : "ltr"}`} dir={isAr ? "rtl" : "ltr"}>
      <header className="site-header">
        <button className="brand" onClick={() => go("home")} aria-label="KG Academy home">
          <span className="brand-mark">KG</span>
          <span className="brand-name">KG <b>ACADEMY</b><small>{t.tagline}</small></span>
        </button>
        <nav className="desktop-nav">
          {navItems.map(item => (
            <button key={item.id} onClick={() => go(item.id)} className={page === item.id ? "active" : ""}>
              {isAr ? item.ar : item.en}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="language-btn" onClick={() => setLang(isAr ? "en" : "ar")}>
            {isAr ? "EN" : "عربي"}
          </button>
          <button className="header-cta" onClick={() => go("business")}>{isAr ? "للمؤسسات" : "For Institutions"}</button>
        </div>
      </header>

      <main>
        {page === "home" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow">KG ACADEMY · LEARN · PRACTICE · GROW</span>
                <h1>{t.headline}</h1>
                <p>{t.intro}</p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => document.getElementById("academies")?.scrollIntoView({ behavior: "smooth" })}>{t.explore} <span>↗</span></button>
                  <button className="text-btn" onClick={() => go("founder")}>{t.founder} ↗</button>
                </div>
                <div className="hero-stats">
                  <div><strong>2013—2026</strong><span>{isAr ? "رحلة مهنية مستمرة" : "A continuing professional journey"}</span></div>
                  <div><strong>08</strong><span>{isAr ? "مسارات تعليمية" : "Learning pathways"}</span></div>
                  <div><strong>AR / EN</strong><span>{isAr ? "تعلم بلغتك" : "Learn in your language"}</span></div>
                </div>
              </div>
              <div className="hero-art">
                <div className="hero-orbit orbit-one"></div>
                <div className="hero-orbit orbit-two"></div>
                <div className="hero-monogram">KG</div>
                <div className="hero-note">{isAr ? "المعرفة × التطبيق" : "KNOWLEDGE × PRACTICE"}</div>
                <div className="hero-stamp">EST. 2013</div>
              </div>
            </section>

            <section className="section" id="academies">
              <div className="section-heading">
                <div><span className="eyebrow">01 / LEARNING PATHWAYS</span><h2>{t.programs}</h2><p>{t.programsSub}</p></div>
                <span className="section-number">01—08</span>
              </div>
              <div className="course-grid">
                {courses.map((course, i) => (
                  <button className="course-card" key={course.id} onClick={() => go(course.id)}>
                    <span className="course-index">0{i + 1}</span>
                    <span className="course-icon">{course.icon}</span>
                    <h3>{isAr ? course.ar : course.en}</h3>
                    <p>{isAr ? course.descriptionAr : course.descriptionEn}</p>
                    <span className="course-meta">{course.duration} · {course.level}</span>
                    <span className="card-link">{t.learn} ↗</span>
                  </button>
                ))}
                <button className="feature-card recipe-feature" onClick={() => go("recipes")}>
                  <span className="feature-symbol">✳</span><span className="eyebrow">07 / REFERENCE LIBRARY</span>
                  <h3>{t.recipes}</h3><p>{isAr ? "مرجع عملي للوصفات والمكونات وطرق التحضير." : "A practical reference for recipes, ingredients and preparation methods."}</p><span className="card-link">{t.learn} ↗</span>
                </button>
                <button className="feature-card career-feature" onClick={() => go("career")}>
                  <span className="feature-symbol">↗</span><span className="eyebrow">08 / CAREER DEVELOPMENT</span>
                  <h3>{t.career}</h3><p>{t.careerText}</p><span className="card-link">{t.learn} ↗</span>
                </button>
              </div>
            </section>

            <section className="founder-strip">
              <div><span className="eyebrow">THE FOUNDER</span><h2>{t.founderTitle}</h2><p>{t.founderText}</p><button className="text-btn" onClick={() => go("founder")}>{t.founder} ↗</button></div>
              <strong>2013<br/><span>↓</span><br/>2026</strong>
            </section>

            <section className="institution-band">
              <div><span className="eyebrow">KG ACADEMY · B2B</span><h2>{t.business}</h2><p>{t.businessText}</p></div>
              <button className="primary-btn" onClick={() => go("business")}>{isAr ? "اكتشف خدمات المؤسسات" : "Explore Institutional Services"} ↗</button>
            </section>
          </>
        )}

        {activeCourse && (
          <section className="detail-page">
            <button className="back-btn" onClick={() => go("home")}>← {t.back}</button>
            <div className="detail-hero">
              <span className="eyebrow">KG ACADEMY / LEARNING PROGRAM</span>
              <span className="detail-icon">{activeCourse.icon}</span>
              <h1>{isAr ? activeCourse.ar : activeCourse.en}</h1>
              <p>{isAr ? activeCourse.descriptionAr : activeCourse.descriptionEn}</p>
              <div className="detail-meta"><span>{t.level}: {activeCourse.level}</span><span>{t.duration}: {activeCourse.duration}</span><span>{activeCourse.lessons.length} {t.lessons}</span></div>
            </div>
            <div className="detail-columns">
              <div className="curriculum">
                <span className="eyebrow">LEARNING STRUCTURE</span><h2>{t.curriculum}</h2>
                {activeCourse.lessons.map((lesson, i) => (
                  <button key={lesson[0]} className={`lesson-row ${lessonIndex === i ? "selected" : ""}`} onClick={() => setLessonIndex(i)}>
                    <span className="lesson-number">{String(i + 1).padStart(2, "0")}</span>
                    <span><strong>{lesson[0]}</strong><small>{lesson[1]}</small></span>
                    <span className="lesson-arrow">↗</span>
                  </button>
                ))}
              </div>
              <aside className="lesson-panel">
                <span className="eyebrow">{t.lessons} / {String(lessonIndex + 1).padStart(2, "0")}</span>
                <h3>{activeCourse.lessons[lessonIndex][0]}</h3>
                <p>{activeCourse.lessons[lessonIndex][1]}</p>
                <div className="lesson-block"><strong>{t.lessonLabel}</strong><p>{activeCourse.lessons[lessonIndex][1]}</p></div>
                <div className="lesson-block"><strong>{t.lessonTask}</strong><p>{t.taskText}</p></div>
                <span className="panel-note">{isAr ? "محتوى تعليمي تمهيدي — ستُضاف المواد التفصيلية والاختبارات ضمن تطوير المنصة." : "Course outline — detailed learning materials and assessments are part of the next development stage."}</span>
              </aside>
            </div>
            <div className="outcomes">
              <span className="eyebrow">YOUR PROFESSIONAL TOOLKIT</span><h2>{t.outcomes}</h2>
              <div className="skill-list">{activeCourse.skills.map((skill, i) => <span key={skill}><b>0{i + 1}</b>{skill}</span>)}</div>
            </div>
            <div className="practice-band"><div><span className="eyebrow">LEARN BY DOING</span><h2>{t.practical}</h2><p>{t.practicalText}</p></div><span className="practice-mark">KG.</span></div>
          </section>
        )}

        {page === "recipes" && (
          <section className="section standalone">
            <span className="eyebrow">KG ACADEMY / REFERENCE LIBRARY</span><h1>{t.recipes}</h1>
            <p className="page-intro">{isAr ? "اكتشف وصفات المشروبات ومكوناتها وطرق تحضيرها." : "Explore beverage recipes, ingredients and preparation methods."}</p>
            <div className="recipe-tools"><input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search}/><div>{["All", "Coffee", "Mocktail"].map(c => <button key={c} className={category === c ? "filter-active" : ""} onClick={() => setCategory(c)}>{c === "All" ? t.all : c}</button>)}</div></div>
            <div className="recipe-grid">{filteredRecipes.map((r, i) => <article className="recipe-card" key={r.name}><span className="recipe-number">RECIPE / 0{i + 1}</span><span className="recipe-illustration">{r.category === "Coffee" ? "☕" : "🍹"}</span><small>{r.category}</small><h3>{r.name}</h3><p><b>{isAr ? "المكونات" : "Ingredients"}</b><br/>{r.ingredients}</p><p><b>{isAr ? "طريقة التحضير" : "Method"}</b><br/>{r.method}</p></article>)}</div>
          </section>
        )}

        {page === "founder" && (
          <section className="founder-page">
            <span className="eyebrow">THE STORY BEHIND KG ACADEMY</span>
            <h1>{t.founderTitle}</h1><p className="founder-intro">{t.founderText}</p>
            <div className="timeline-title"><strong>2013 → 2026</strong><span>{t.experience}</span></div>
            <div className="timeline">
              {[
                ["Starbucks", "Professional coffee service and operational experience."],
                ["Casper & Gambini’s", "Hospitality standards and guest experience."],
                ["The Lemon Tree & Co", "Service, beverages and team collaboration."],
                ["Princi – UAE", "UAE PROFESSIONAL EXPERIENCE"],
                ["SOMEWHERE – UAE", "UAE PROFESSIONAL EXPERIENCE"],
                ["Villa Coconut – El Gouna", "Bar and beverage operations."]
              ].map((v, i) => <div className="timeline-item" key={v[0]}><span>0{i + 1}</span><div><h3>{v[0]}</h3><p>{v[1]}</p></div></div>)}
            </div>
            <div className="expertise"><span className="eyebrow">AREAS OF EXPERIENCE</span><h2>{isAr ? "مجالات الخبرة" : "Professional Expertise"}</h2><div className="skill-list">{["Barista", "Head Barista", "Bartender", "Coffee Roasting", "Sensory Evaluation", "Coffee Quality", "Training", "Operations", "Leadership"].map(s => <span key={s}>{s}</span>)}</div></div>
          </section>
        )}

        {page === "career" && (
          <section className="section standalone"><span className="eyebrow">CAREER DEVELOPMENT</span><h1>{t.career}</h1><p className="page-intro">{t.careerText}</p><div className="info-grid">{[
            ["01", "CV & Portfolio", "Build a professional CV that communicates your experience and practical skills."],
            ["02", "Interview Preparation", "Practice professional interview questions and structured answers."],
            ["03", "Workplace Skills", "Develop communication, teamwork, problem solving and service standards."],
            ["04", "Career Roadmap", "Set clear career goals and identify the skills needed for your next role."]
          ].map(x => <article className="info-card" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
        )}

        {page === "business" && (
          <section className="section standalone"><span className="eyebrow">KG ACADEMY / INSTITUTIONS</span><h1>{t.business}</h1><p className="page-intro">{t.businessText}</p><div className="info-grid">{[
            ["01", "Team Training", "Role-based training pathways for baristas, bartenders and service teams."],
            ["02", "Operational Development", "Improve workflows, service consistency and daily operating standards."],
            ["03", "Bespoke Programs", "Training programs designed around your business goals and team needs."],
            ["04", "Quality & Assessment", "Practical skills assessment and development recommendations."]
          ].map(x => <article className="info-card" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><div className="contact-panel"><h2>{t.contact}</h2><p>Karimmohamed2196@gmail.com</p><p>+201121075421</p><p>WhatsApp: +201097010757</p></div></section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">KG</span><div><strong>KG ACADEMY</strong><small>{t.tagline}</small></div></div>
        <p>{t.footer}</p>
        <div className="footer-links"><button onClick={() => go("founder")}>{t.founder}</button><button onClick={() => go("career")}>{t.career}</button><button onClick={() => go("business")}>{t.business}</button></div>
        <small>© 2026 KG ACADEMY · {isAr ? "جميع الحقوق محفوظة" : "All rights reserved"}</small>
      </footer>
    </div>
  );
}
