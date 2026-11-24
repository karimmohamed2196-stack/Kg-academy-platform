import { useState } from 'react'

type Lang = 'ar' | 'en'
type Page =
  | 'home'
  | 'barista'
  | 'roasting'
  | 'bartender'
  | 'mixology'
  | 'recipes'
  | 'management'
  | 'career'
  | 'business'
  | 'founder'

const content = {
  ar: {
    tagline: 'أكاديمية المعرفة والتطبيق المهني',
    headline: 'حوّل شغفك إلى خبرة واحتراف.',
    intro: 'من القهوة والمشروبات إلى الضيافة وإدارة الأعمال. تعلّم بمهارة، وتدرّب بثقة، واصنع مستقبلك المهني.',
    explore: 'اكتشف الأكاديميات',
    about: 'قصة المؤسس',
    academies: 'الأكاديميات والتخصصات',
    academiesIntro: 'مسارات تعليمية متخصصة تجمع بين المعرفة النظرية والتطبيق العملي.',
    learn: 'اكتشف المسار',
    curriculum: 'المحتوى التعليمي',
    founder: 'المؤسس',
    founderTitle: 'خبرة مهنية بُنيت على الشغف والتطبيق المستمر',
    founderIntro: 'كريم محمد، متخصص في القهوة والمشروبات والضيافة، بدأت رحلته المهنية عام 2013، وتطورت خبرته عبر العمل والتعلم والتطبيق في بيئات تشغيل مختلفة.',
    timeline: 'سنوات من الخبرة والتعلم المستمر',
    experience: 'الخبرات المهنية',
    uae: 'الخبرات المهنية في الإمارات',
    expertise: 'مجالات الخبرة',
    recipes: 'مكتبة المشروبات والوصفات',
    career: 'المركز المهني',
    careerText: 'استعد لسوق العمل من خلال تطوير مهاراتك المهنية، وإعداد سيرتك الذاتية، والاستعداد للمقابلات.',
    business: 'بوابة المؤسسات والأعمال',
    businessText: 'حلول تدريب وتطوير مخصصة للمقاهي والمطاعم والفنادق والمؤسسات.',
    contact: 'تواصل معنا',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    back: 'العودة للرئيسية',
    practical: 'تطبيق عملي',
    professional: 'تطوير مهني',
    language: 'English',
    footer: 'المعرفة تصنع الفرق، والتطبيق يصنع الاحتراف.',
    coming: 'المحتوى التفصيلي لهذا المسار قيد الإعداد'
  },
  en: {
    tagline: 'Professional Knowledge & Practical Learning',
    headline: 'Turn your passion into expertise.',
    intro: 'From coffee and beverages to hospitality and business management. Learn with purpose, train with confidence, and build your professional future.',
    explore: 'Explore Academies',
    about: 'Meet the Founder',
    academies: 'Academies & Specializations',
    academiesIntro: 'Specialized learning paths combining professional knowledge with practical application.',
    learn: 'Explore Path',
    curriculum: 'Learning Curriculum',
    founder: 'Founder',
    founderTitle: 'Professional experience built through passion and continuous practice',
    founderIntro: 'Karim Mohamed is a coffee, beverage and hospitality professional whose journey began in 2013 and developed through hands-on experience and continuous learning.',
    timeline: 'Years of Experience & Continuous Learning',
    experience: 'Professional Experience',
    uae: 'UAE Professional Experience',
    expertise: 'Areas of Expertise',
    recipes: 'Drinks & Recipes Library',
    career: 'Career Center',
    careerText: 'Prepare for the job market through professional development, CV preparation and interview skills.',
    business: 'Business & Institution Portal',
    businessText: 'Customized training and development solutions for cafes, restaurants, hotels and institutions.',
    contact: 'Contact Us',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    back: 'Back to Home',
    practical: 'Practical Learning',
    professional: 'Professional Development',
    language: 'العربية',
    footer: 'Knowledge makes the difference. Practice builds expertise.',
    coming: 'Detailed learning content is being developed'
  }
}

const academies: {
  id: Page
  icon: string
  ar: string
  en: string
  descAr: string
  descEn: string
}[] = [
  {
    id: 'barista',
    icon: '☕',
    ar: 'أكاديمية الباريستا',
    en: 'Barista Academy',
    descAr: 'من أساسيات القهوة إلى الاحتراف والإدارة والتدريب.',
    descEn: 'From coffee fundamentals to professional skills and leadership.'
  },
  {
    id: 'roasting',
    icon: '◉',
    ar: 'أكاديمية تحميص القهوة',
    en: 'Coffee Roasting Academy',
    descAr: 'البن الأخضر والتحميص وتطوير النكهات والتقييم الحسي.',
    descEn: 'Green coffee, roasting, flavor development and sensory evaluation.'
  },
  {
    id: 'bartender',
    icon: '◇',
    ar: 'أكاديمية البارتندر',
    en: 'Bartender Academy',
    descAr: 'مهارات البار والخدمة وإدارة محطة المشروبات.',
    descEn: 'Bar skills, beverage service and station management.'
  },
  {
    id: 'mixology',
    icon: '✳',
    ar: 'أكاديمية الميكسولوجي',
    en: 'Mixology Academy',
    descAr: 'تقنيات المزج وبناء النكهات وابتكار المشروبات.',
    descEn: 'Mixing techniques, flavor building and drink creation.'
  },
  {
    id: 'recipes',
    icon: '▤',
    ar: 'مكتبة المشروبات والوصفات',
    en: 'Drinks & Recipes Library',
    descAr: 'مرجع عملي للوصفات والمكونات وتقنيات التحضير.',
    descEn: 'A practical reference for recipes, ingredients and methods.'
  },
  {
    id: 'management',
    icon: '▦',
    ar: 'إدارة الكافيهات والبارات',
    en: 'Cafe & Bar Management',
    descAr: 'التشغيل والتكاليف والمخزون والموارد البشرية والجودة.',
    descEn: 'Operations, costing, inventory, people and quality.'
  },
  {
    id: 'career',
    icon: '↗',
    ar: 'المركز المهني',
    en: 'Career Center',
    descAr: 'السيرة الذاتية والمقابلات والتطوير والمسار الوظيفي.',
    descEn: 'CVs, interviews, development and career pathways.'
  },
  {
    id: 'business',
    icon: '▣',
    ar: 'بوابة المؤسسات والأعمال',
    en: 'Business & Institution Portal',
    descAr: 'برامج تدريب وتطوير مخصصة للفرق والمؤسسات.',
    descEn: 'Customized training and development for organizations.'
  }
]

const baristaCurriculum = [
  {
    ar: 'المستوى الأول | Foundation',
    en: 'Level 1 | Foundation',
    descAr: 'التأسيس المهني وفهم القهوة ومعدات التحضير.',
    descEn: 'Professional foundations and coffee preparation equipment.',
    units: [
      ['مدخل إلى عالم القهوة', 'Introduction to Coffee', 'تاريخ القهوة ورحلتها من المزرعة إلى الكوب.', 'Coffee history and its journey from farm to cup.'],
      ['أنواع البن ومصادره', 'Coffee Types & Origins', 'التعرف على Arabica وRobusta والعوامل المؤثرة في الجودة.', 'Arabica, Robusta and coffee quality factors.'],
      ['معدات الباريستا', 'Barista Equipment', 'ماكينات الإسبريسو والمطاحن والأدوات الأساسية.', 'Espresso machines, grinders and essential tools.'],
      ['سلامة الغذاء والنظافة', 'Food Safety & Hygiene', 'النظافة الشخصية وسلامة تداول الأغذية.', 'Personal hygiene and safe food handling.'],
      ['أساسيات الإسبريسو', 'Espresso Fundamentals', 'مكونات الإسبريسو ومبادئ الاستخلاص.', 'Espresso components and extraction principles.'],
      ['أساسيات الحليب', 'Milk Fundamentals', 'خصائص الحليب والتبخير والتحكم في الحرارة.', 'Milk properties, steaming and temperature control.']
    ]
  },
  {
    ar: 'المستوى الثاني | Intermediate',
    en: 'Level 2 | Intermediate',
    descAr: 'تطوير المهارات الفنية والتحكم في جودة المشروبات.',
    descEn: 'Develop technical skills and beverage quality control.',
    units: [
      ['معايرة الإسبريسو', 'Espresso Calibration', 'ضبط الطحن والجرعة ووقت الاستخلاص.', 'Adjust grind, dose and extraction time.'],
      ['قراءة وصفة الإسبريسو', 'Espresso Recipe', 'Dose وYield وRatio وتطبيقاتها.', 'Dose, yield and brew ratio.'],
      ['تبخير الحليب باحتراف', 'Professional Milk Steaming', 'التحكم في الهواء والقوام والحرارة.', 'Control aeration, texture and temperature.'],
      ['مشروبات الإسبريسو', 'Espresso Beverages', 'تحضير المشروبات الأساسية ونسب مكوناتها.', 'Prepare core espresso drinks and recipes.'],
      ['مقدمة في Latte Art', 'Introduction to Latte Art', 'أساسيات الصب والتحكم في تدفق الحليب.', 'Pouring fundamentals and milk control.'],
      ['خدمة العملاء وسير العمل', 'Customer Service & Workflow', 'تنظيم المحطة والعمل أثناء ضغط التشغيل.', 'Station organization and busy service.']
    ]
  },
  {
    ar: 'المستوى الثالث | Advanced',
    en: 'Level 3 | Advanced',
    descAr: 'تطوير التذوق الحسي والتحكم في الجودة.',
    descEn: 'Develop sensory skills and quality control.',
    units: [
      ['التذوق الحسي للقهوة', 'Coffee Sensory Skills', 'الحموضة والحلاوة والمرارة والقوام والنكهات.', 'Acidity, sweetness, bitterness, body and flavors.'],
      ['استخلاص القهوة اليدوي', 'Manual Brewing', 'V60 وFrench Press وتقنيات التحضير.', 'V60, French Press and brewing techniques.'],
      ['معالجة البن', 'Coffee Processing', 'Natural وWashed وHoney وتأثيرها على النكهة.', 'Natural, Washed and Honey processing.'],
      ['ضبط جودة القهوة', 'Coffee Quality', 'تقييم ثبات المشروبات وتحديد أسباب الاختلاف.', 'Consistency and quality evaluation.'],
      ['تطوير Latte Art', 'Advanced Latte Art', 'تقنيات الصب وتحسين دقة التنفيذ.', 'Pouring techniques and accuracy.']
    ]
  },
  {
    ar: 'المستوى الرابع | Professional',
    en: 'Level 4 | Professional',
    descAr: 'التأهيل للقيادة والتدريب وإدارة عمليات القهوة.',
    descEn: 'Prepare for leadership, training and coffee operations.',
    units: [
      ['إدارة محطة الباريستا', 'Bar Station Management', 'توزيع المهام وإدارة المعدات والمخزون.', 'Tasks, equipment and inventory management.'],
      ['إدارة الجودة والتشغيل', 'Quality & Operations', 'إجراءات التشغيل ومعايير الجودة.', 'Operating procedures and quality standards.'],
      ['تدريب وتقييم الباريستا', 'Barista Training & Assessment', 'تصميم برامج التدريب والتقييم العملي.', 'Training programs and practical evaluation.'],
      ['حل المشكلات الفنية', 'Technical Problem Solving', 'تشخيص مشكلات الاستخلاص والمعدات.', 'Diagnose extraction and equipment issues.'],
      ['إدارة تجربة العميل', 'Customer Experience', 'معايير الضيافة وتحسين تجربة الضيف.', 'Hospitality standards and guest experience.'],
      ['مشروع التخرج', 'Graduation Project', 'تقييم عملي يحاكي بيئة العمل الحقيقية.', 'Practical assessment in a simulated workplace.']
    ]
  }
]

const details: Record<string, { ar: string[]; en: string[] }> = {
  roasting: {
    ar: ['مدخل إلى البن الأخضر ومصادره', 'خصائص البن وكثافته ورطوبته', 'مبادئ انتقال الحرارة', 'مراحل عملية التحميص', 'قراءة منحنى التحميص Roast Profile', 'تطوير النكهة والتحكم في النتائج', 'التذوق الحسي وتقييم التحميص', 'تخزين البن وإدارة الجودة'],
    en: ['Green Coffee & Origins', 'Coffee Density and Moisture', 'Heat Transfer Fundamentals', 'Roasting Process Stages', 'Reading Roast Profiles', 'Flavor Development', 'Sensory Evaluation', 'Coffee Storage & Quality']
  },
  bartender: {
    ar: ['أساسيات العمل داخل البار', 'الأدوات والمعدات المهنية', 'عائلات المشروبات ومكوناتها', 'تقنيات البناء والتحريك والرج', 'التعامل مع الثلج والتخفيف', 'خدمة الضيوف وآداب المهنة', 'سلامة الغذاء وإدارة المحطة', 'التقييم العملي'],
    en: ['Bar Fundamentals', 'Professional Tools & Equipment', 'Beverage Families', 'Building, Stirring & Shaking', 'Ice and Dilution', 'Guest Service & Professional Conduct', 'Food Safety & Station Management', 'Practical Assessment']
  },
  mixology: {
    ar: ['علم النكهات وتوازنها', 'الحموضة والحلاوة والمرارة', 'تقنيات المزج والخلط', 'الشراب المركز والخلطات', 'المكونات الطازجة والمستخلصات', 'تصميم وصفة مشروب جديدة', 'التقديم والتزيين', 'مشروع ابتكار مشروب'],
    en: ['Flavor Science & Balance', 'Acidity, Sweetness & Bitterness', 'Mixing Techniques', 'Syrups and Mixes', 'Fresh Ingredients & Extracts', 'Drink Recipe Development', 'Presentation & Garnishing', 'Signature Drink Project']
  },
  management: {
    ar: ['تأسيس وتشغيل الكافيه والبار', 'إدارة التكاليف والميزانيات', 'حساب تكلفة الوصفات', 'إدارة المخزون والمشتريات', 'إدارة فريق العمل والورديات', 'معايير الجودة والتشغيل', 'خدمة العملاء وتجربة الضيف', 'مؤشرات الأداء والربحية'],
    en: ['Cafe & Bar Operations', 'Cost and Budget Management', 'Recipe Costing', 'Inventory & Purchasing', 'Team and Shift Management', 'Quality & Operating Standards', 'Customer Experience', 'Performance and Profitability']
  }
}

const venues = [
  'Starbucks',
  'Casper & Gambini’s',
  'The Lemon Tree & Co',
  'Villa Coconut – El Gouna'
]

const expertise = [
  ['الباريستا والقهوة', 'Barista & Coffee'],
  ['تحميص القهوة', 'Coffee Roasting'],
  ['التقييم الحسي', 'Sensory Evaluation'],
  ['جودة القهوة', 'Coffee Quality'],
  ['البار والكوكتيلات', 'Bartending & Cocktails'],
  ['التدريب والتطوير', 'Training & Development'],
  ['التشغيل والإدارة', 'Operations & Management'],
  ['القيادة وبناء الفرق', 'Leadership & Team Building']
]

const recipes = [
  { name: 'Espresso', ar: 'إسبريسو', category: 'Coffee', desc: 'قهوة مركزة تُحضّر تحت الضغط.' },
  { name: 'Cappuccino', ar: 'كابتشينو', category: 'Coffee', desc: 'إسبريسو مع الحليب المبخر والرغوة.' },
  { name: 'Flat White', ar: 'فلات وايت', category: 'Coffee', desc: 'مشروب متوازن بقوام حليب ناعم.' },
  { name: 'V60', ar: 'V60', category: 'Coffee', desc: 'تحضير يدوي يبرز خصائص البن.' },
  { name: 'Classic Mojito', ar: 'موهيتو كلاسيك', category: 'Mocktail', desc: 'نعناع ولايم وصودا وسكر.' },
  { name: 'Hibiscus Cooler', ar: 'كركديه بارد', category: 'Mocktail', desc: 'كركديه منعش مع الحمضيات.' },
  { name: 'Iced Spanish Latte', ar: 'آيس سبانيش لاتيه', category: 'Coffee', desc: 'إسبريسو مع الحليب والحليب المكثف.' },
  { name: 'Passion Fruit Cooler', ar: 'باشن فروت', category: 'Mocktail', desc: 'مشروب استوائي منعش بنكهة الباشن فروت.' }
]

export default function App() {
  const [lang, setLang] = useState<Lang>('ar')
  const [page, setPage] = useState<Page>('home')
  const [recipeFilter, setRecipeFilter] = useState('All')
  const [search, setSearch] = useState('')

  const t = content[lang]
  const isArabic = lang === 'ar'

  const go = (next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const academy = academies.find(item => item.id === page)
  const curriculumPage = page === 'barista'
  const otherAcademy = ['roasting', 'bartender', 'mixology', 'management'].includes(page)

  const filteredRecipes = recipes.filter(item => {
    const matchesCategory = recipeFilter === 'All' || item.category === recipeFilter
    const matchesSearch = `${item.name} ${item.ar}`.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="app" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="topbar">
        <button className="brand" onClick={() => go('home')}>
          KG <span>ACADEMY</span>
        </button>

        <nav>
          <button onClick={() => go('home')}>{isArabic ? 'الرئيسية' : 'Home'}</button>
          <button onClick={() => go('home')}>{t.academies}</button>
          <button onClick={() => go('founder')}>{t.founder}</button>
          <button onClick={() => go('career')}>{t.career}</button>
        </nav>

        <button className="lang" onClick={() => setLang(isArabic ? 'en' : 'ar')}>
          {t.language}
        </button>
      </header>

      {page === 'home' && (
        <main>
          <section className="hero">
            <div className="hero-content">
              <span className="eyebrow">KG ACADEMY · {t.tagline}</span>
              <h1>{t.headline}</h1>
              <p>{t.intro}</p>
              <button
                className="primary"
                onClick={() => document.getElementById('academies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.explore} <span>←</span>
              </button>
              <button className="secondary" onClick={() => go('founder')}>
                {t.about}
              </button>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit" />
              <div className="orbit orbit-two" />
              <div className="bean" />
            </div>

            <div className="hero-foot">
              <span>KNOWLEDGE</span>
              <span>·</span>
              <span>CRAFT</span>
              <span>·</span>
              <span>PROFESSIONALISM</span>
            </div>
          </section>

          <section className="section" id="academies">
            <div className="section-heading">
              <span className="section-kicker">LEARN · PRACTICE · GROW</span>
              <h2>{t.academies}</h2>
              <p>{t.academiesIntro}</p>
            </div>

            <div className="academy-grid">
              {academies.map(item => (
                <button className="academy-card" key={item.id} onClick={() => go(item.id)}>
                  <div className="academy-icon">{item.icon}</div>
                  <h3>{isArabic ? item.ar : item.en}</h3>
                  <p>{isArabic ? item.descAr : item.descEn}</p>
                  <span className="card-arrow">{t.learn} ↗</span>
                </button>
              ))}
            </div>
          </section>

          <section className="feature-band">
            <div>
              <span className="section-kicker">OUR APPROACH</span>
              <h2>{isArabic ? 'التعلم الحقيقي يبدأ من التطبيق' : 'Real learning begins with practice'}</h2>
              <p>
                {isArabic
                  ? 'نربط المعرفة بالمهارة، ونحوّل الخبرة إلى خطوات تعليمية واضحة قابلة للتطبيق.'
                  : 'We connect knowledge with skill and turn experience into practical learning paths.'}
              </p>
            </div>
            <div className="feature-points">
              <span>01 / {t.practical}</span>
              <span>02 / {t.professional}</span>
              <span>03 / {isArabic ? 'التطوير المستمر' : 'Continuous Growth'}</span>
            </div>
          </section>

          <section className="founder-preview">
            <div className="founder-preview-copy">
              <span className="section-kicker">{t.founder}</span>
              <h2>{t.founderTitle}</h2>
              <p>{t.founderIntro}</p>
              <button className="primary" onClick={() => go('founder')}>
                {t.about} ↗
              </button>
            </div>
            <div className="timeline-preview">
              <strong>2013 → 2026</strong>
              <span>13+</span>
              <p>{t.timeline}</p>
            </div>
          </section>
        </main>
      )}

      {academy && !['recipes', 'career', 'business'].includes(page) && (
        <main className="inner-page">
          <button className="back-link" onClick={() => go('home')}>← {t.back}</button>
          <span className="section-kicker">KG ACADEMY / LEARNING PATH</span>

          <div className="inner-heading">
            <span className="large-icon">{academy.icon}</span>
            <h1>{isArabic ? academy.ar : academy.en}</h1>
            <p>{isArabic ? academy.descAr : academy.descEn}</p>
          </div>

          <section className="section curriculum-section">
            <h2>{t.curriculum}</h2>

            {curriculumPage && baristaCurriculum.map((level, index) => (
              <article className="level-card" key={level.en}>
                <div className="level-number">0{index + 1}</div>
                <div className="level-content">
                  <h3>{isArabic ? level.ar : level.en}</h3>
                  <p>{isArabic ? level.descAr : level.descEn}</p>

                  <div className="unit-grid">
                    {level.units.map((unit, unitIndex) => (
                      <div className="unit-card" key={unit[1]}>
                        <span>UNIT {String(unitIndex + 1).padStart(2, '0')}</span>
                        <h4>{isArabic ? unit[0] : unit[1]}</h4>
                        <p>{isArabic ? unit[2] : unit[3]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {otherAcademy && (
              <div className="unit-grid">
                {(details[page]?.[isArabic ? 'ar' : 'en'] || []).map((item, index) => (
                  <article className="unit-card" key={item}>
                    <span>MODULE {String(index + 1).padStart(2, '0')}</span>
                    <h3>{item}</h3>
                    <p>{t.practical} · {t.professional}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      )}

      {page === 'recipes' && (
        <main className="inner-page">
          <button className="back-link" onClick={() => go('home')}>← {t.back}</button>
          <span className="section-kicker">KG ACADEMY / KNOWLEDGE LIBRARY</span>
          <h1>{t.recipes}</h1>
          <p className="page-intro">
            {isArabic ? 'اكتشف مجموعة من المشروبات والوصفات الأساسية.' : 'Explore a collection of essential beverages and recipes.'}
          </p>

          <div className="recipe-tools">
            <input
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder={isArabic ? 'ابحث عن مشروب...' : 'Search drinks...'}
            />

            <div className="filter-buttons">
              {['All', 'Coffee', 'Mocktail'].map(filter => (
                <button
                  key={filter}
                  className={recipeFilter === filter ? 'active' : ''}
                  onClick={() => setRecipeFilter(filter)}
                >
                  {filter === 'All' ? (isArabic ? 'الكل' : 'All') : filter}
                </button>
              ))}
            </div>
          </div>

          <div className="unit-grid">
            {filteredRecipes.map(item => (
              <article className="unit-card recipe-card" key={item.name}>
                <span>{item.category}</span>
                <h3>{isArabic ? item.ar : item.name}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </main>
      )}

      {page === 'career' && (
        <main className="inner-page">
          <button className="back-link" onClick={() => go('home')}>← {t.back}</button>
          <span className="section-kicker">KG ACADEMY / CAREER DEVELOPMENT</span>
          <h1>{t.career}</h1>
          <p className="page-intro">{t.careerText}</p>

          <div className="unit-grid">
            {(isArabic
              ? ['إعداد السيرة الذاتية الاحترافية', 'مهارات المقابلات الشخصية', 'بناء ملف مهني قوي', 'التطوير والترقي الوظيفي', 'مهارات القيادة والتواصل', 'الاستعداد لسوق العمل']
              : ['Professional CV Preparation', 'Interview Skills', 'Building a Strong Professional Profile', 'Career Growth & Promotion', 'Leadership & Communication', 'Job Market Preparation']
            ).map((item, index) => (
              <article className="unit-card" key={item}>
                <span>CAREER / 0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </main>
      )}

      {page === 'business' && (
        <main className="inner-page">
          <button className="back-link" onClick={() => go('home')}>← {t.back}</button>
          <span className="section-kicker">KG ACADEMY / CORPORATE SOLUTIONS</span>
          <h1>{t.business}</h1>
          <p className="page-intro">{t.businessText}</p>

          <div className="unit-grid">
            {(isArabic
              ? ['تقييم احتياجات التدريب', 'برامج تدريب فرق العمل', 'تطوير معايير التشغيل', 'رفع جودة الخدمة', 'تطوير القيادات', 'متابعة الأداء والتقييم']
              : ['Training Needs Assessment', 'Team Training Programs', 'Operating Standards Development', 'Service Quality Improvement', 'Leadership Development', 'Performance Follow-up & Assessment']
            ).map((item, index) => (
              <article className="unit-card" key={item}>
                <span>BUSINESS / 0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>

          <a className="primary contact-link" href="mailto:Karimmohamed2196@gmail.com">
            {t.contact} ↗
          </a>
        </main>
      )}

      {page === 'founder' && (
        <main className="inner-page founder-page">
          <button className="back-link" onClick={() => go('home')}>← {t.back}</button>
          <span className="section-kicker">THE STORY BEHIND KG ACADEMY</span>

          <section className="founder-hero founder-no-photo">
            <div className="founder-bio">
              <span className="section-kicker">{t.founder}</span>
              <h1>Karim Mohamed</h1>
              <h2>{t.founderTitle}</h2>
              <p>{t.founderIntro}</p>

              <div className="founder-years">
                <strong>2013 → 2026</strong>
                <span>13+</span>
                <p>{t.timeline}</p>
              </div>
            </div>
          </section>

          <section className="section founder-experience">
            <h2>{t.experience}</h2>

            <h3>{isArabic ? 'الخبرات المهنية' : 'Professional Experience'}</h3>
            <div className="venue-grid">
              {venues.map(place => (
                <div className="venue-card" key={place}>{place}</div>
              ))}
            </div>

            <h3 className="uae-heading">{t.uae}</h3>
            <div className="venue-grid">
              <div className="venue-card">Princi – UAE</div>
              <div className="venue-card">SOMEWHERE – UAE</div>
            </div>
          </section>

          <section className="section expertise-section">
            <h2>{t.expertise}</h2>
            <div className="expertise-grid">
              {expertise.map(item => (
                <div className="expertise-item" key={item[1]}>
                  {isArabic ? item[0] : item[1]}
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      <footer>
        <div className="footer-brand">
          <div className="brand">KG <span>ACADEMY</span></div>
          <p>{t.footer}</p>
        </div>

        <div className="footer-contact">
          <h3>{t.contact}</h3>
          <p>{t.email}: Karimmohamed2196@gmail.com</p>
          <p>{t.phone}: +201121075421</p>
          <p>{t.whatsapp}: +201097010757</p>
        </div>

        <small>© 2026 KG ACADEMY. All rights reserved.</small>
      </footer>
    </div>
  )
    }
