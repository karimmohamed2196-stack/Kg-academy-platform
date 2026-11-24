
import { useState } from 'react'

type Lang = 'ar' | 'en'

const curriculum = {
  ar: [
    {
      level: 'المستوى الأول | Foundation',
      description: 'تأسيس قوي لفهم القهوة والعمل داخل بيئة احترافية.',
      units: [
        ['مدخل إلى عالم القهوة', 'التعرف على تاريخ القهوة وأنواعها ومراحل انتقالها من المزرعة إلى الكوب.'],
        ['أنواع البن ومصادره', 'فهم أنواع Arabica وRobusta والعوامل المؤثرة في جودة البن.'],
        ['أساسيات معدات الباريستا', 'التعرف على ماكينة الإسبريسو والمطاحن والأدوات الأساسية.'],
        ['سلامة الغذاء والنظافة', 'تطبيق قواعد النظافة الشخصية وسلامة تداول الأغذية.'],
        ['أساسيات الإسبريسو', 'فهم مكونات الإسبريسو واستخلاص الجرعة بصورة صحيحة.'],
        ['أساسيات الحليب', 'التعرف على خصائص الحليب والتبخير ودرجة الحرارة المناسبة.']
      ]
    },
    {
      level: 'المستوى الثاني | Intermediate',
      description: 'الانتقال من المعرفة الأساسية إلى التحكم في جودة المشروبات.',
      units: [
        ['معايرة الإسبريسو', 'ضبط الطحن والجرعة ووقت الاستخلاص للوصول إلى نتيجة متوازنة.'],
        ['قراءة وصفة الإسبريسو', 'فهم Dose وYield وRatio وتطبيقها عملياً.'],
        ['تبخير الحليب باحتراف', 'التحكم في الهواء والقوام ودرجة الحرارة.'],
        ['مشروبات الإسبريسو', 'تحضير المشروبات الأساسية وفهم نسب مكوناتها.'],
        ['مقدمة في فن اللاتيه آرت', 'تعلم أساسيات الصب والتحكم في تدفق الحليب.'],
        ['خدمة العملاء وسير العمل', 'تنظيم محطة العمل والتواصل مع العملاء أثناء ضغط التشغيل.']
      ]
    },
    {
      level: 'المستوى الثالث | Advanced',
      description: 'تطوير الحس الحسي والمهارات الفنية والتحكم في الجودة.',
      units: [
        ['التذوق الحسي للقهوة', 'التعرف على الحموضة والحلاوة والمرارة والقوام والنكهات.'],
        ['استخلاص القهوة اليدوي', 'التعرف على أدوات V60 وFrench Press وطرق التحضير اليدوي.'],
        ['مقدمة في معالجة البن', 'فهم طرق المعالجة وتأثيرها على النكهة.'],
        ['مبادئ ضبط جودة القهوة', 'تقييم ثبات المشروبات وتحديد أسباب اختلاف النتائج.'],
        ['تطوير اللاتيه آرت', 'التدريب على أشكال الصب وتحسين دقة التنفيذ.']
      ]
    },
    {
      level: 'المستوى الرابع | Professional',
      description: 'الاستعداد للعمل القيادي والتدريب والإدارة داخل قطاع القهوة.',
      units: [
        ['إدارة محطة الباريستا', 'توزيع المهام وإدارة المعدات والمخزون اليومي.'],
        ['إدارة الجودة والتشغيل', 'إنشاء إجراءات تشغيل ومتابعة ثبات جودة المنتجات.'],
        ['تدريب وتقييم الباريستا', 'تصميم جلسات تدريب وتقييم الأداء العملي.'],
        ['حل المشكلات الفنية', 'تشخيص مشكلات الاستخلاص والمعدات والتعامل معها.'],
        ['إدارة تجربة العميل', 'تحسين تجربة الضيف وبناء معايير خدمة احترافية.'],
        ['مشروع التخرج والتقييم العملي', 'تنفيذ اختبار عملي متكامل يحاكي بيئة العمل الحقيقية.']
      ]
    }
  ],
  en: [
    {
      level: 'Level 1 | Foundation',
      description: 'Build a strong foundation in coffee and professional service.',
      units: [
        ['Introduction to Coffee', 'Explore coffee history and its journey from farm to cup.'],
        ['Coffee Types & Origins', 'Understand Arabica, Robusta and coffee quality factors.'],
        ['Barista Equipment Essentials', 'Learn espresso machines, grinders and essential tools.'],
        ['Food Safety & Hygiene', 'Apply personal hygiene and safe food handling practices.'],
        ['Espresso Fundamentals', 'Understand espresso components and proper extraction.'],
        ['Milk Fundamentals', 'Learn milk properties, steaming and temperature control.']
      ]
    },
    {
      level: 'Level 2 | Intermediate',
      description: 'Move from basic knowledge to beverage quality control.',
      units: [
        ['Espresso Calibration', 'Adjust grind size, dose and extraction time.'],
        ['Understanding Espresso Recipes', 'Apply dose, yield and brew ratio in practice.'],
        ['Professional Milk Steaming', 'Control aeration, texture and temperature.'],
        ['Espresso-Based Beverages', 'Prepare core espresso drinks and understand recipes.'],
        ['Introduction to Latte Art', 'Develop pouring fundamentals and milk control.'],
        ['Customer Service & Workflow', 'Organize the station and serve during busy shifts.']
      ]
    },
    {
      level: 'Level 3 | Advanced',
      description: 'Develop sensory skills, technical ability and quality control.',
      units: [
        ['Coffee Sensory Skills', 'Recognize acidity, sweetness, bitterness, body and flavors.'],
        ['Manual Brewing Methods', 'Explore V60, French Press and manual brewing.'],
        ['Introduction to Coffee Processing', 'Understand processing methods and their flavor impact.'],
        ['Coffee Quality Fundamentals', 'Evaluate consistency and identify quality issues.'],
        ['Advanced Latte Art', 'Improve pouring technique and pattern accuracy.']
      ]
    },
    {
      level: 'Level 4 | Professional',
      description: 'Prepare for leadership, training and coffee operations.',
      units: [
        ['Bar Station Management', 'Manage tasks, equipment and daily stock.'],
        ['Quality & Operations Management', 'Build operating procedures and quality standards.'],
        ['Barista Training & Assessment', 'Design training sessions and evaluate performance.'],
        ['Technical Problem Solving', 'Diagnose extraction and equipment problems.'],
        ['Customer Experience Management', 'Build professional hospitality service standards.'],
        ['Final Project & Practical Assessment', 'Complete a practical assessment based on real operations.']
      ]
    }
  ]
}

const academies = [
  { icon: '☕', ar: 'أكاديمية الباريستا', en: 'Barista Academy', descAr: 'من الأساسيات إلى الاحتراف في تحضير القهوة.', descEn: 'From coffee fundamentals to professional barista skills.', active: true },
  { icon: '🔥', ar: 'أكاديمية تحميص القهوة', en: 'Coffee Roasting Academy', descAr: 'افهم البن والتحميص وتطوير النكهات.', descEn: 'Understand green coffee, roasting and flavor development.' },
  { icon: '🍸', ar: 'أكاديمية البارتندر', en: 'Bartender Academy', descAr: 'تعلم مهارات البار والعمل الاحترافي.', descEn: 'Learn professional bar skills and service.' },
  { icon: '🍹', ar: 'أكاديمية الميكسولوجي', en: 'Mixology Academy', descAr: 'ابتكر المشروبات وتعلم تقنيات المزج.', descEn: 'Create drinks and master mixing techniques.' },
  { icon: '📖', ar: 'مكتبة المشروبات والوصفات', en: 'Drinks & Recipes Library', descAr: 'مكتبة معرفية للوصفات وتقنيات التحضير.', descEn: 'A knowledge library of recipes and techniques.' },
  { icon: '🏪', ar: 'إدارة الكافيهات والبارات', en: 'Cafe & Bar Management', descAr: 'التشغيل والإدارة والتكاليف والجودة.', descEn: 'Operations, management, costing and quality.' },
  { icon: '💼', ar: 'المركز المهني', en: 'Career Center', descAr: 'طور مهاراتك واستعد لفرص العمل.', descEn: 'Build your skills and prepare for career opportunities.' },
  { icon: '🏢', ar: 'بوابة المؤسسات والأعمال', en: 'Business & Institution Portal', descAr: 'حلول تدريب وتطوير للفرق والمؤسسات.', descEn: 'Training and development solutions for organizations.' }
]

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
:root{font-family:'Cairo','DM Sans',sans-serif;color:#302d27;background:#f7f4ed}
*{box-sizing:border-box}
body{margin:0;background:#f7f4ed}
button{font:inherit;cursor:pointer}
.site{min-height:100vh;background:#f7f4ed}
.topbar{height:76px;padding:0 clamp(18px,6vw,90px);display:flex;align-items:center;justify-content:space-between;background:#fbfaf6;border-bottom:1px solid #e9e2d5;position:sticky;top:0;z-index:5}
.brand{font-family:'DM Sans',sans-serif;font-size:21px;font-weight:800;letter-spacing:1.5px;color:#34342b}
.brand span{color:#a47c4d}
.nav{display:flex;align-items:center;gap:24px}
.nav button,.lang{border:0;background:transparent;color:#625d51;font-weight:600;font-size:13px}
.lang{border:1px solid #d9cdb9;padding:8px 15px;border-radius:30px;color:#8c6944}
.hero{padding:78px clamp(20px,9vw,130px) 85px;background:linear-gradient(120deg,#eee8da,#f8f5ed 65%,#e9e2d3);position:relative;overflow:hidden}
.hero:after{content:'KG';position:absolute;right:5%;top:0;font:800 230px 'DM Sans';color:#ffffff42;pointer-events:none}
.eyebrow{font-size:12px;letter-spacing:2px;color:#9a7448;font-weight:800;margin-bottom:20px}
.hero h1{font-size:clamp(34px,5vw,58px);line-height:1.35;max-width:720px;margin:0 0 20px;font-weight:800;color:#33352d}
.hero p{max-width:650px;color:#716b5e;line-height:2;font-size:16px;margin:0 0 30px}
.primary{background:#8b704d;color:#fff;border:0;border-radius:5px;padding:14px 25px;font-weight:700;box-shadow:0 7px 20px #8b704d25}
.primary:hover{background:#70583b}
.section{padding:68px clamp(20px,7vw,100px)}
.section-head{text-align:center;margin:0 auto 36px;max-width:650px}
.kicker{color:#a27c4d;font-size:12px;font-weight:800;letter-spacing:2px}
.section h2{font-size:clamp(26px,3vw,36px);margin:8px 0;color:#34342c}
.section-head p{color:#817a6c;line-height:1.9;margin:0}
.academy-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.academy-card{background:#fffdf8;border:1px solid #e9e1d3;padding:25px 21px;min-height:225px;border-radius:8px;text-align:start;transition:.2s;display:flex;flex-direction:column;align-items:flex-start}
.academy-card:hover{transform:translateY(-4px);border-color:#b99a70;box-shadow:0 12px 28px #40341c0d}
.academy-icon{width:47px;height:47px;border-radius:50%;display:grid;place-items:center;background:#f0eadf;font-size:23px;margin-bottom:18px}
.academy-card h3{font-size:17px;margin:0 0 9px;color:#3b392f}
.academy-card p{font-size:13px;line-height:1.8;color:#817a6d;margin:0 0 18px}
.card-link{font-size:12px;color:#9a754b;font-weight:800;margin-top:auto}
.card-link.muted{color:#aaa397}
.band{background:#eae4d8;padding:48px clamp(20px,7vw,100px);display:flex;align-items:center;justify-content:space-between;gap:25px}
.band h2{font-size:25px;margin:0 0 8px}.band p{margin:0;color:#756e61;line-height:1.8}
.footer{padding:32px clamp(20px,7vw,100px);background:#34342d;color:#eae4d8;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:13px}
.footer a{color:#d5b88e;text-decoration:none}
.page-head{padding:48px clamp(20px,7vw,100px);background:#eee8dc;border-bottom:1px solid #e2d9c9}
.back{border:0;background:transparent;color:#8e6c45;font-weight:700;padding:0 0 18px}
.page-head h1{margin:0 0 10px;font-size:clamp(27px,4vw,40px)}
.page-head p{margin:0;color:#766e60;line-height:1.8}
.progress{display:flex;gap:9px;flex-wrap:wrap;margin:0 0 25px}
.level-btn{border:1px solid #dfd5c5;background:#fffdf8;color:#61594c;padding:11px 16px;border-radius:5px;font-size:13px;font-weight:700}
.level-btn.selected{background:#88704f;color:white;border-color:#88704f}
.level-intro{margin-bottom:20px;color:#797163}
.unit-list{display:grid;gap:11px}
.unit{background:#fffdf8;border:1px solid #e8e0d3;border-radius:6px;overflow:hidden}
.unit-toggle{width:100%;border:0;background:transparent;padding:18px 20px;display:flex;justify-content:space-between;gap:15px;text-align:start;color:#37352d;font-weight:700}
.unit-toggle span:last-child{color:#a27d50}
.unit-detail{padding:0 20px 18px;color:#797264;font-size:14px;line-height:1.9}
.unit-detail strong{display:block;color:#8b704d;margin-top:8px}
.status{display:inline-block;margin-top:12px;padding:5px 10px;border-radius:20px;background:#f1eadf;color:#92714b;font-size:11px;font-weight:700}
.contact-grid{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
.contact-chip{padding:10px 14px;background:#fffdf8;border:1px solid #e4d9c8;border-radius:5px;color:#665d50;font-size:13px}
@media(max-width:900px){.academy-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.nav{gap:10px}.nav button{font-size:12px}}
@media(max-width:560px){.topbar{height:65px}.nav button{display:none}.brand{font-size:18px}.hero{padding-top:60px;padding-bottom:65px}.hero:after{font-size:140px;right:0;top:20px}.academy-grid{grid-template-columns:1fr}.academy-card{min-height:190px}.band{align-items:flex-start;flex-direction:column}.section{padding-top:52px;padding-bottom:52px}.footer{flex-direction:column}}
`

export default function App() {
  const [lang, setLang] = useState<Lang>('ar')
  const [page, setPage] = useState('home')
  const [selectedLevel, setSelectedLevel] = useState(0)
  const [openUnit, setOpenUnit] = useState<number | null>(0)
  const rtl = lang === 'ar'
  const t = (ar: string, en: string) => rtl ? ar : en
  const levels = curriculum[lang]

  function openBarista() {
    setPage('barista')
    setSelectedLevel(0)
    setOpenUnit(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goHome() {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site" dir={rtl ? 'rtl' : 'ltr'}>
      <style>{styles}</style>
      <header className="topbar">
        <div className="brand">KG <span>ACADEMY</span></div>
        <nav className="nav">
          <button onClick={goHome}>{t('الرئيسية','Home')}</button>
          <button onClick={() => document.getElementById('academies')?.scrollIntoView({ behavior: 'smooth' })}>{t('الأكاديميات','Academies')}</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t('تواصل معنا','Contact')}</button>
        </nav>
        <button className="lang" onClick={() => setLang(rtl ? 'en' : 'ar')}>{rtl ? 'English' : 'العربية'}</button>
      </header>

      {page === 'home' ? (
        <>
          <section className="hero">
            <div className="eyebrow">KG ACADEMY · LEARN · PRACTICE · GROW</div>
            <h1>{t('حوّل شغفك إلى خبرة واحتراف.','Turn your passion into professional expertise.')}</h1>
            <p>{t('أكاديمية المعرفة والتطبيق المهني. من القهوة والمشروبات إلى الضيافة وإدارة الأعمال. تعلّم بمهارة، وتدرّب بثقة، واصنع مستقبلك المهني.','A professional learning platform covering coffee, beverages, hospitality and business management. Learn with skill, practice with confidence and build your career.')}</p>
            <button className="primary" onClick={() => document.getElementById('academies')?.scrollIntoView({ behavior: 'smooth' })}>{t('اكتشف الأكاديميات','Explore Academies')} ↙</button>
          </section>

          <section className="section" id="academies">
            <div className="section-head">
              <div className="kicker">OUR LEARNING PATHS</div>
              <h2>{t('الأكاديميات والمسارات التعليمية','Academies & Learning Paths')}</h2>
              <p>{t('مسارات متخصصة تجمع بين المعرفة النظرية والتطبيق العملي، لتطوير مهاراتك خطوة بخطوة.','Specialized learning paths combining knowledge and practical application to develop your skills step by step.')}</p>
            </div>
            <div className="academy-grid">
              {academies.map((academy, index) => (
                <button className="academy-card" key={academy.en} onClick={academy.active ? openBarista : undefined} style={{ cursor: academy.active ? 'pointer' : 'default' }}>
                  <div className="academy-icon">{academy.icon}</div>
                  <h3>{rtl ? academy.ar : academy.en}</h3>
                  <p>{rtl ? academy.descAr : academy.descEn}</p>
                  <span className={academy.active ? 'card-link' : 'card-link muted'}>
                    {academy.active ? t('استكشف المسار ←','Explore path →') : t('قريباً','Coming Soon')}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="band">
            <div>
              <h2>{t('التعلم الحقيقي يبدأ بالتطبيق.','Real learning begins with practice.')}</h2>
              <p>{t('ابدأ رحلتك المهنية مع KG ACADEMY.','Start your professional journey with KG ACADEMY.')}</p>
            </div>
            <button className="primary" onClick={openBarista}>{t('ابدأ بأكاديمية الباريستا','Start Barista Academy')}</button>
          </section>
        </>
      ) : (
        <>
          <section className="page-head">
            <button className="back" onClick={goHome}>← {t('العودة للرئيسية','Back to Home')}</button>
            <div className="eyebrow">KG ACADEMY / BARISTA</div>
            <h1>{t('أكاديمية الباريستا','Barista Academy')}</h1>
            <p>{t('رحلة تعليمية منظمة من أساسيات القهوة إلى المهارات الاحترافية والإدارة والتدريب.','A structured learning journey from coffee fundamentals to professional skills, management and training.')}</p>
            <span className="status">{t('4 مستويات تعليمية · 23 وحدة','4 Learning Levels · 23 Units')}</span>
          </section>

          <section className="section">
            <div className="section-head" style={{ textAlign: rtl ? 'right' : 'left', margin: '0 0 28px' }}>
              <div className="kicker">YOUR LEARNING JOURNEY</div>
              <h2>{t('المناهج التعليمية','Learning Curriculum')}</h2>
              <p>{t('اختر المستوى لعرض الوحدات التعليمية ومخرجات التعلم.','Select a level to explore its units and learning outcomes.')}</p>
            </div>
            <div className="progress">
              {levels.map((level, index) => (
                <button key={level.level} className={`level-btn ${selectedLevel === index ? 'selected' : ''}`} onClick={() => { setSelectedLevel(index); setOpenUnit(0) }}>
                  {level.level}
                </button>
              ))}
            </div>
            <div className="level-intro">{levels[selectedLevel].description}</div>
            <div className="unit-list">
              {levels[selectedLevel].units.map((unit, index) => (
                <div className="unit" key={unit[0]}>
                  <button className="unit-toggle" onClick={() => setOpenUnit(openUnit === index ? null : index)}>
                    <span>{String(index + 1).padStart(2, '0')} — {unit[0]}</span>
                    <span>{openUnit === index ? '−' : '+'}</span>
                  </button>
                  {openUnit === index && (
                    <div className="unit-detail">
                      {unit[1]}
                      <strong>{t('مخرج التعلم:','Learning outcome:')}</strong>
                      {t('اكتساب المعرفة والقدرة على تطبيق المهارة عملياً ضمن بيئة عمل احترافية.','Gain the knowledge and ability to apply this skill in a professional working environment.')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section className="band">
            <div>
              <h2>{t('خطوتك التالية نحو الاحتراف','Your Next Step Toward Professionalism')}</h2>
              <p>{t('استكشف باقي مسارات KG ACADEMY التعليمية.','Explore the other KG ACADEMY learning paths.')}</p>
            </div>
            <button className="primary" onClick={goHome}>{t('كل الأكاديميات','All Academies')}</button>
          </section>
        </>
      )}

      <footer className="footer" id="contact">
        <div>
          <div className="brand" style={{ color: '#f4eee3' }}>KG <span>ACADEMY</span></div>
          <p>{t('أكاديمية المعرفة والتطبيق المهني','Academy of Knowledge & Professional Practice')}</p>
        </div>
        <div>
          <strong>{t('تواصل معنا','Contact Us')}</strong>
          <div className="contact-grid">
            <span className="contact-chip">Karimmohamed2196@gmail.com</span>
            <span className="contact-chip">+201121075421</span>
            <span className="contact-chip">WhatsApp: +201097010757</span>
          </div>
        </div>
        <div>© {new Date().getFullYear()} KG ACADEMY</div>
      </footer>
    </div>
  )
}
