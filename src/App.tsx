import { useState } from 'react'
import { content } from './locales/content'

const academies = [
  ['☕', 'Barista Academy', 'إتقان الإسبريسو والحليب والتقييم الحسي'],
  ['🔥', 'Coffee Roasting Lab', 'أساسيات التحميص وقراءة منحنيات التحميص'],
  ['🍸', 'Bartender Academy', 'تقنيات البار والخدمة وإدارة المحطة'],
  ['🧪', 'Mixology Lab', 'تطوير النكهات والمشروبات المبتكرة'],
  ['📖', 'Beverage Recipe Library', 'مكتبة وصفات منظمة وقابلة للبحث'],
  ['📊', 'Cafe & Bar Management', 'التشغيل والتكلفة وإدارة الجودة'],
  ['🚀', 'Career Center', 'مسارات مهارية للتطور المهني'],
  ['🏢', 'Business & Institution Portal', 'حلول تدريبية للأفراد والمؤسسات'],
]

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar')
  const t = content[lang]

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <header className="topbar">
        <a className="brand" href="#">KG <span>ACADEMY</span></a>
        <nav>
          <a href="#academies">{t.sections}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </nav>
        <button className="lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
          {lang === 'ar' ? 'EN' : 'عربي'}
        </button>
      </header>

      <section className="hero">
        <div className="eyebrow">{t.tagline}</div>
        <h1>{t.headline}</h1>
        <p>{t.intro}</p>
        <a className="primary" href="#academies">{t.explore} <span aria-hidden="true">←</span></a>
        <div className="hero-art" aria-hidden="true">
          <div className="bean" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
        <div className="hero-foot">
          <span>COFFEE</span><span>BEVERAGES</span><span>HOSPITALITY</span>
        </div>
      </section>

      <section className="section" id="academies">
        <div className="section-kicker">KG LEARNING SYSTEM</div>
        <h2>{t.sections}</h2>
        <div className="academy-grid">
          {academies.map(([icon, title, desc]) => (
            <article className="academy-card" key={title}>
              <div className="academy-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="founder" id="about">
        <div className="section-kicker">{t.about}</div>
        <h2>{t.founder}</h2>
        <p className="timeline">{t.years}</p>
        <p className="muted">KG ACADEMY تجمع المعرفة المهنية والتطبيق العملي في تجربة تعليمية واحدة.</p>
      </section>

      <footer id="contact">
        <div>
          <a className="brand" href="#">KG <span>ACADEMY</span></a>
          <p>{t.tagline}</p>
        </div>
        <div>
          <strong>{t.contact}</strong>
          <p>Karimmohamed2196@gmail.com</p>
          <p>+201121075421</p>
          <p>WhatsApp: +201097010757</p>
        </div>
        <small>© {new Date().getFullYear()} KG ACADEMY. Foundation preview V0.1</small>
      </footer>
    </main>
  )
}
