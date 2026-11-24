import { useState } from 'react'

type Lang = 'ar' | 'en'
type Page =
  | 'home'
  | 'academy'
  | 'recipes'
  | 'career'
  | 'business'
  | 'founder'

type Unit = {
  title: string
  description: string
  outcome: string
}

type Level = {
  level: string
  description: string
  units: Unit[]
}

const curriculum: Record<Lang, Level[]> = {
  ar: [
    {
      level: 'المستوى الأول | Foundation',
      description: 'التأسيس المهني وفهم القهوة ومعدات التحضير.',
      units: [
        {
          title: 'مدخل إلى عالم القهوة',
          description: 'تاريخ القهوة ورحلتها من المزرعة إلى الكوب.',
          outcome: 'فهم سلسلة إنتاج القهوة ومراحل إعدادها.'
        },
        {
          title: 'أنواع البن ومصادره',
          description: 'التعرف على Arabica وRobusta والعوامل المؤثرة في الجودة.',
          outcome: 'التمييز بين أنواع البن وخصائصها.'
        },
        {
          title: 'معدات الباريستا',
          description: 'ماكينات الإسبريسو والمطاحن والأدوات الأساسية.',
          outcome: 'التعرف على المعدات واستخداماتها.'
        },
        {
          title: 'سلامة الغذاء والنظافة',
          description: 'النظافة الشخصية وسلامة تداول الأغذية.',
          outcome: 'تطبيق قواعد النظافة والسلامة المهنية.'
        },
        {
          title: 'أساسيات الإسبريسو',
          description: 'مكونات الإسبريسو ومبادئ الاستخلاص.',
          outcome: 'فهم الجرعة ووقت الاستخلاص والناتج.'
        },
        {
          title: 'أساسيات الحليب',
          description: 'خصائص الحليب والتبخير والتحكم في الحرارة.',
          outcome: 'إنتاج قوام حليب مناسب للمشروبات.'
        }
      ]
    },
    {
      level: 'المستوى الثاني | Intermediate',
      description: 'تطوير المهارات الفنية والتحكم في جودة المشروبات.',
      units: [
        {
          title: 'معايرة الإسبريسو',
          description: 'ضبط الطحن والجرعة ووقت الاستخلاص.',
          outcome: 'الوصول إلى وصفة استخلاص متوازنة.'
        },
        {
          title: 'قراءة وصفة الإسبريسو',
          description: 'Dose وYield وRatio وتطبيقاتها.',
          outcome: 'بناء وصفة قابلة للتكرار.'
        },
        {
          title: 'تبخير الحليب باحتراف',
          description: 'التحكم في الهواء والقوام والحرارة.',
          outcome: 'تحضير Microfoam بجودة ثابتة.'
        },
        {
          title: 'مشروبات الإسبريسو',
          description: 'تحضير المشروبات الأساسية ونسب مكوناتها.',
          outcome: 'تنفيذ وصفات المشروبات بدقة.'
        },
        {
          title: 'مقدمة في Latte Art',
          description: 'أساسيات الصب والتحكم في تدفق الحليب.',
          outcome: 'تنفيذ الأشكال الأساسية.'
        },
        {
          title: 'خدمة العملاء وسير العمل',
          description: 'تنظيم المحطة والعمل أثناء ضغط التشغيل.',
          outcome: 'تقديم خدمة سريعة ومنظمة.'
        }
      ]
    },
    {
      level: 'المستوى الثالث | Advanced',
      description: 'تطوير التذوق الحسي والتحكم في الجودة.',
      units: [
        {
          title: 'التذوق الحسي للقهوة',
          description: 'الحموضة والحلاوة والمرارة والقوام والنكهات.',
          outcome: 'تقييم الخصائص الحسية للقهوة.'
        },
        {
          title: 'استخلاص القهوة اليدوي',
          description: 'V60 وFrench Press وتقنيات التحضير.',
          outcome: 'تنفيذ طرق تحضير يدوية مختلفة.'
        },
        {
          title: 'معالجة البن',
          description: 'Natural وWashed وHoney وتأثيرها على النكهة.',
          outcome: 'ربط المعالجة بالخصائص الحسية.'
        },
        {
          title: 'ضبط جودة القهوة',
          description: 'تقييم ثبات المشروبات وتحديد أسباب الاختلاف.',
          outcome: 'تطبيق مبادئ مراقبة الجودة.'
        },
        {
          title: 'تطوير Latte Art',
          description: 'تقنيات الصب وتحسين دقة التنفيذ.',
          outcome: 'تطوير مهارات الرسم بالحليب.'
        }
      ]
    },
    {
      level: 'المستوى الرابع | Professional',
      description: 'التأهيل للقيادة والتدريب وإدارة عمليات القهوة.',
      units: [
        {
          title: 'إدارة محطة الباريستا',
          description: 'توزيع المهام وإدارة المعدات والمخزون.',
          outcome: 'إدارة محطة عمل متكاملة.'
        },
        {
          title: 'إدارة الجودة والتشغيل',
          description: 'إجراءات التشغيل ومعايير الجودة.',
          outcome: 'إنشاء نظام تشغيل ومراقبة.'
        },
        {
          title: 'تدريب وتقييم الباريستا',
          description: 'تصميم برامج التدريب والتقييم العملي.',
          outcome: 'إعداد وتنفيذ جلسات تدريب.'
        },
        {
          title: 'حل المشكلات الفنية',
          description: 'تشخيص مشكلات الاستخلاص والمعدات.',
          outcome: 'تحليل المشكلات وتطبيق الحلول.'
        },
        {
          title: 'إدارة تجربة العميل',
          description: 'معايير الضيافة وتحسين تجربة الضيف.',
          outcome: 'بناء تجربة خدمة احترافية.'
        },
        {
          title: 'مشروع التخرج',
          description: 'تقييم عملي يحاكي بيئة العمل الحقيقية.',
          outcome: 'إثبات الجاهزية المهنية.'
        }
      ]
    }
  ],
  en: [
    {
      level: 'Level 1 | Foundation',
      description: 'Professional foundations and coffee preparation equipment.',
      units: [
        { title: 'Introduction to Coffee', description: 'Coffee history and its journey from farm to cup.', outcome: 'Understand the coffee production chain.' },
        { title: 'Coffee Types & Origins', description: 'Arabica, Robusta and quality factors.', outcome: 'Identify coffee varieties and characteristics.' },
        { title: 'Barista Equipment', description: 'Espresso machines, grinders and essential tools.', outcome: 'Understand professional equipment.' },
        { title: 'Food Safety & Hygiene', description: 'Personal hygiene and safe food handling.', outcome: 'Apply professional safety standards.' },
        { title: 'Espresso Fundamentals', description: 'Espresso components and extraction principles.', outcome: 'Understand dose, yield and extraction time.' },
        { title: 'Milk Fundamentals', description: 'Milk properties, steaming and temperature.', outcome: 'Produce suitable milk texture.' }
      ]
    },
    {
      level: 'Level 2 | Intermediate',
      description: 'Develop technical skills and beverage quality control.',
      units: [
        { title: 'Espresso Calibration', description: 'Adjust grind, dose and extraction time.', outcome: 'Build a balanced espresso recipe.' },
        { title: 'Espresso Recipe', description: 'Dose, yield and brew ratio.', outcome: 'Create repeatable recipes.' },
        { title: 'Professional Milk Steaming', description: 'Control aeration, texture and temperature.', outcome: 'Produce consistent microfoam.' },
        { title: 'Espresso Beverages', description: 'Prepare core drinks and recipes.', outcome: 'Execute beverage recipes accurately.' },
        { title: 'Introduction to Latte Art', description: 'Pouring fundamentals and milk control.', outcome: 'Create basic patterns.' },
        { title: 'Customer Service & Workflow', description: 'Station organization and busy service.', outcome: 'Deliver efficient service.' }
      ]
    },
    {
      level: 'Level 3 | Advanced',
      description: 'Develop sensory skills and quality control.',
      units: [
        { title: 'Coffee Sensory Skills', description: 'Acidity, sweetness, bitterness, body and flavors.', outcome: 'Evaluate coffee sensory characteristics.' },
        { title: 'Manual Brewing', description: 'V60, French Press and brewing techniques.', outcome: 'Execute different brewing methods.' },
        { title: 'Coffee Processing', description: 'Natural, Washed and Honey processing.', outcome: 'Connect processing with flavor.' },
        { title: 'Coffee Quality', description: 'Consistency and quality evaluation.', outcome: 'Apply quality control principles.' },
        { title: 'Advanced Latte Art', description: 'Pouring techniques and accuracy.', outcome: 'Improve latte art skills.' }
      ]
    },
    {
      level: 'Level 4 | Professional',
      description: 'Prepare for leadership, training and coffee operations.',
      units: [
        { title: 'Bar Station Management', description: 'Tasks, equipment and inventory.', outcome: 'Manage a complete work station.' },
        { title: 'Quality & Operations', description: 'Operating procedures and quality standards.', outcome: 'Build an operating control system.' },
        { title: 'Barista Training & Assessment', description: 'Training programs and practical evaluation.', outcome: 'Deliver professional training.' },
        { title: 'Technical Problem Solving', description: 'Diagnose extraction and equipment issues.', outcome: 'Analyze and solve technical problems.' },
        { title: 'Customer Experience', description: 'Hospitality standards and guest experience.', outcome: 'Build professional service experiences.' },
        { title: 'Graduation Project', description: 'Practical assessment in a simulated workplace.', outcome: 'Demonstrate professional readiness.' }
      ]
    }
  ]
}

const academies = [
  { id: 'barista', icon: '☕', ar: 'أكاديمية الباريستا', en: 'Barista Academy', descAr: 'من أساسيات القهوة إلى الاحتراف والإدارة والتدريب.', descEn: 'From coffee fundamentals to professional skills and leadership.' },
  { id: 'roasting', icon: '◉', ar: 'أكاديمية تحميص القهوة', en: 'Coffee Roasting Academy', descAr: 'البن الأخضر والتحميص وتطوير النكهات والتقييم الحسي.', descEn: 'Green coffee, roasting, flavor development and sensory evaluation.' },
  { id: 'bartender', icon: '◇', ar: 'أكاديمية البارتندر', en: 'Bartender Academy', descAr: 'مهارات البار والخدمة وإدارة محطة المشروبات.', descEn: 'Bar skills, beverage service and station management.' },
  { id: 'mixology', icon: '✳', ar: 'أكاديمية الميكسولوجي', en: 'Mixology Academy', descAr: 'تقنيات المزج وبناء النكهات وابتكار المشروبات.', descEn: 'Mixing techniques, flavor building and drink creation.' },
  { id: 'recipes', icon: '▤', ar: 'مكتبة المشروبات والوصفات', en: 'Drinks & Recipes Library', descAr: 'مرجع عملي للوصفات والمكونات وتقنيات التحضير.', descEn: 'A practical reference for recipes, ingredients and methods.' },
  { id: 'management', icon: '▦', ar: 'إدارة الكافيهات والبارات', en: 'Cafe & Bar Management', descAr: 'التشغيل والتكاليف والمخزون والموارد البشرية والجودة.', descEn: 'Operations, costing, inventory, people and quality.' },
  { id: 'career', icon: '↗', ar: 'المركز المهني', en: 'Career Center', descAr: 'السيرة الذاتية والمقابلات والتطوير والمسار الوظيفي.', descEn: 'CVs, interviews, development and career pathways.' },
  { id: 'business', icon: '▣', ar: 'بوابة المؤسسات والأعمال', en: 'Business & Institution Portal', descAr: 'برامج تدريب وتطوير مخصصة للفرق والمؤسسات.', descEn: 'Customized training and development for organizations.' }
]

const venues = [
  { name: 'Starbucks', type: 'Professional Experience' },
  { name: 'Casper & Gambini’s', type: 'Professional Experience' },
  { name: 'The Lemon Tree & Co', type: 'Professional Experience' },
  { name: 'Princi', type: 'UAE Professional Experience' },
  { name: 'SOMEWHERE', type: 'UAE Professional Experience' },
  { name: 'Villa Coconut – El Gouna', type: 'Professional Experience' }
]

const recipes = [
  { name: 'Espresso', category: 'Coffee', ar: 'إسبريسو', desc: 'قهوة مركزة تُحضّر تحت الضغط.' },
  { name: 'Cappuccino', category: 'Coffee', ar: 'كابتشينو', desc: 'إسبريسو مع الحليب المبخر والرغوة.' },
  { name: 'Flat White', category: 'Coffee', ar: 'فلات وايت', desc: 'مشروب متوازن بقوام حليب ناعم.' },
  { name: 'V60', category: 'Manual Brew', ar: 'V60', desc: 'تحضير يدوي يبرز خصائص البن.' },
  { name: 'Classic Mojito', category: 'Mocktail', ar: 'موهيتو كلاسيك', desc: 'نعناع ولايم وصودا وسكر.' },
  { name: 'Hibiscus Cooler', category: 'Mocktail', ar: 'كركديه بارد', desc: 'كركديه منعش مع الحمضيات.' }
]
