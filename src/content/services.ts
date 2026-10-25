import type { Locale } from "./clinic";

/**
 * Treatment catalogue.
 *
 * Slugs mirror the live drnasimgholami.com treatment pages so existing
 * inbound links and SEO copy stay recognisable. Copy is written per locale
 * (not machine-translated) because tone matters more here than word count.
 */

export type ServiceCopy = {
  title: string;
  category: string;
  tagline: string;
  intro: string[];
  facts: { label: string; value: string }[];
  benefits: string[];
  suitableFor: string[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  priceNote: string;
};

export type Service = {
  slug: string;
  image: string;
  copy: Record<Locale, ServiceCopy>;
};

export const services: Service[] = [
  {
    slug: "fraxel-laser",
    image: "/images/services/fraxel.jpg",
    copy: {
      fa: {
        title: "لیزر فرکسل",
        category: "جوان‌سازی",
        tagline: "بازسازی عمقی پوست با فناوری فرکشنال",
        intro: [
          "لیزر فرکسل با ستون‌های لیزری میکروسکوپی تا عمق پوست نفوذ می‌کند و بازسازی کلاژن را تسریع می‌کند. هدف این درمان، آسیب‌هایی است که سایر روش‌ها توان رفع آن‌ها را ندارند: جای جوش، جای سوختگی قدیمی، لک، کک‌ومک و چین‌وچروک.",
          "دستگاه Fraxel DUAL با دو طول موج ۱۵۵۰ و ۱۹۲۷ روی لایه‌های مختلف پوست کار می‌کند؛ بنابراین هم بافت و هم رنگ پوست در یک دوره درمانی اصلاح می‌شوند.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۳ تا ۵ جلسه" },
          { label: "مدت هر جلسه", value: "۳۰ تا ۴۵ دقیقه" },
          { label: "دوره نقاهت", value: "۳ تا ۵ روز" },
          { label: "بی‌حسی", value: "کرم موضعی" },
          { label: "شروع نتیجه", value: "از هفته ششم" },
        ],
        benefits: [
          "بهبود چشمگیر جای جوش و اسکارهای قدیمی",
          "یکدست شدن رنگ و بافت پوست",
          "کاهش منافذ باز و چین‌وچروک ریز",
          "تحریک کلاژن‌سازی تا ماه‌ها پس از درمان",
          "قابل انجام روی صورت، گردن، دست و بدن",
        ],
        suitableFor: [
          "جای جوش و اسکار آکنه",
          "جای سوختگی و زخم‌های قدیمی",
          "لک، کک‌ومک و تیرگی ناشی از آفتاب",
          "پوست کدر و ناهموار",
        ],
        process: [
          {
            title: "مشاوره و بررسی نوع پوست",
            description:
              "پیش از هر چیز نوع و رنگ پوست، عمیق‌ترین آسیب و تعداد جلسات مورد نیاز تعیین می‌شود.",
          },
          {
            title: "بی‌حسی موضعی",
            description:
              "کرم بی‌حسی حدود ۳۰ دقیقه روی ناحیه می‌ماند تا درمان کاملاً آرام باشد.",
          },
          {
            title: "درمان با Fraxel DUAL",
            description:
              "ستون‌های لیزری میکروسکوپی روی پوست پخش می‌شوند؛ گرما کلاژن را تحریک و بافت را بازسازی می‌کند.",
          },
          {
            title: "مراقبت و جلسه بعدی",
            description:
              "قرمزی چند روزه طبیعی است؛ با ضدآفتاب، آبرسان و برنامه‌ریزی جلسه بعد همراهتان هستیم.",
          },
        ],
        faq: [
          {
            question: "لیزر فرکسل چیست؟",
            answer:
              "درمانی فرکشنال است که با ستون‌های لیزری میکروسکوپی، پوست آسیب‌دیده را هدف می‌گیرد و بازسازی کلاژن را تسریع می‌کند؛ لایه‌های سالم پوست دست‌نخورده باقی می‌مانند.",
          },
          {
            question: "فرکسل با فرکشنال چه تفاوتی دارد؟",
            answer:
              "فرکشنال نام کلی روش است و فرکسل نام یک دستگاه خاص با دو طول موج. در مطب از دستگاه Fraxel DUAL استفاده می‌شود که هم عمق و هم سطح پوست را پوشش می‌دهد.",
          },
          {
            question: "آیا درد دارد؟",
            answer:
              "با کرم بی‌حسی موضعی، بیشتر مراجعین تنها گرمی و سوزن‌خوردگی خفیف را حس می‌کنند. درد آن در حدی نیست که نیاز به بی‌حسی تزریقی باشد.",
          },
          {
            question: "چند جلسه برای نتیجه لازم است؟",
            answer:
              "بسته به شدت آسیب بین ۳ تا ۵ جلسه با فاصله چهار هفتگی توصیه می‌شود. نتیجه نهایی تا چند ماه پس از آخرین جلسه ادامه دارد.",
          },
        ],
        priceNote: "هزینه بر اساس ناحیه درمان و تعداد جلسات در جلسه مشاوره اعلام می‌شود.",
      },

      en: {
        title: "Fraxel Laser",
        category: "Rejuvenation",
        tagline: "Deep skin resurfacing with fractional technology",
        intro: [
          "Fraxel delivers microscopic laser columns deep into the skin and speeds up your own collagen remodelling. It targets damage other treatments cannot reach: acne scars, old burn marks, pigmentation, freckles and fine lines.",
          "The Fraxel DUAL platform works with two wavelengths, 1550 and 1927, on different depths of the skin — so texture and tone are corrected within the same course of treatment.",
        ],
        facts: [
          { label: "Sessions", value: "3 – 5" },
          { label: "Session time", value: "30 – 45 min" },
          { label: "Downtime", value: "3 – 5 days" },
          { label: "Anaesthesia", value: "Topical cream" },
          { label: "Results appear", value: "From week 6" },
        ],
        benefits: [
          "Visible improvement in old acne and burn scars",
          "Even skin tone and smoother texture",
          "Refined pores and softened fine lines",
          "Collagen stimulation continuing for months",
          "Face, neck, hands and body",
        ],
        suitableFor: [
          "Acne scarring",
          "Old burns and long-standing scars",
          "Sun damage, pigmentation and freckles",
          "Dull, uneven complexion",
        ],
        process: [
          {
            title: "Consultation and skin analysis",
            description:
              "We assess skin type, depth of damage and the number of sessions you actually need.",
          },
          {
            title: "Topical anaesthesia",
            description:
              "Numbing cream is applied for about 30 minutes so the treatment stays comfortable.",
          },
          {
            title: "Fraxel DUAL treatment",
            description:
              "Microscopic laser columns are passed over the skin; the heat rebuilds collagen from within.",
          },
          {
            title: "Aftercare and follow-up",
            description:
              "A few days of redness is normal. We guide you through SPF, hydration and your next session.",
          },
        ],
        faq: [
          {
            question: "What is Fraxel laser?",
            answer:
              "A fractional treatment that targets damaged skin with microscopic laser columns and accelerates collagen remodelling, while healthy tissue stays intact.",
          },
          {
            question: "What is the difference between Fraxel and fractional?",
            answer:
              "“Fractional” describes the method; “Fraxel” is a specific device with two wavelengths. We use Fraxel DUAL, which treats both deeper layers and the surface.",
          },
          {
            question: "Does it hurt?",
            answer:
              "With topical numbing cream most patients feel warmth and mild prickling only — no injectable anaesthesia is needed.",
          },
          {
            question: "How many sessions will I need?",
            answer:
              "Typically 3 to 5 sessions, four weeks apart, depending on the severity of the damage. Results keep developing for months afterwards.",
          },
        ],
        priceNote: "Pricing depends on the area treated and the number of sessions, and is confirmed at your consultation.",
      },

      de: {
        title: "Fraxel-Laser",
        category: "Verjüngung",
        tagline: "Tiefe Hauterneuerung mit Fractional-Technologie",
        intro: [
          "Fraxel schickt mikroskopische Lasersäulen tief in die Haut und beschleunigt den körpereigenen Kollagenaufbau. Behandelt wird, was andere Therapien nicht erreichen: Aknenarben, alte Verbrennungsmale, Pigmentflecken, Sommersprossen und feine Falten.",
          "Die Fraxel DUAL-Plattform arbeitet mit zwei Wellenlängen (1550 und 1927) auf unterschiedlichen Hautschichten — dadurch werden Struktur und Ton in einer Behandlungsserie korrigiert.",
        ],
        facts: [
          { label: "Sitzungen", value: "3 – 5" },
          { label: "Dauer pro Sitzung", value: "30 – 45 Min." },
          { label: "Ausfallzeit", value: "3 – 5 Tage" },
          { label: "Betäubung", value: "Creme topisch" },
          { label: "Ergebnis sichtbar", value: "Ab Woche 6" },
        ],
        benefits: [
          "Sichtbare Besserung alter Akne- und Verbrennungsnarben",
          "Gleichmäßiger Hautton und glattere Struktur",
          "Feinere Poren und geminderte feine Falten",
          "Monatelang anhaltende Kollagenstimulation",
          "Gesicht, Hals, Hände und Körper",
        ],
        suitableFor: [
          "Aknenarben",
          "Alte Verbrennungen und langjährige Narben",
          "Sonnen- und Pigmentflecken",
          "Matter, ungleichmäßiger Teint",
        ],
        process: [
          {
            title: "Beratung und Hautanalyse",
            description:
              "Wir bestimmen Hauttyp, Schadensstiefe und die tatsächlich nötige Anzahl an Sitzungen.",
          },
          {
            title: "Lokale Betäubung",
            description:
              "Die Betäubungscreme wirkt etwa 30 Minuten, damit die Behandlung angenehm bleibt.",
          },
          {
            title: "Fraxel-DUAL-Behandlung",
            description:
              "Mikroskopische Lasersäulen ziehen über die Haut; die Wärme baut Kollagen von innen auf.",
          },
          {
            title: "Nachsorge und Folgetermin",
            description:
              "Einige Tage Rötung sind normal. Wir begleiten Sie mit Sonnenschutz, Pflege und dem nächsten Termin.",
          },
        ],
        faq: [
          {
            question: "Was ist ein Fraxel-Laser?",
            answer:
              "Eine Behandlung nach dem Fractional-Prinzip: Mikroskopische Lasersäulen treffen geschädigte Haut und beschleunigen den Kollagenaufbau, während gesundes Gewebe erhalten bleibt.",
          },
          {
            question: "Welcher Unterschied besteht zwischen Fraxel und Fractional?",
            answer:
              "„Fractional“ ist die Methode, „Fraxel“ ein konkretes Gerät mit zwei Wellenlängen. Wir arbeiten mit Fraxel DUAL, das tiefere Schichten und die Oberfläche gleichzeitig behandelt.",
          },
          {
            question: " tut die Behandlung weh?",
            answer:
              "Mit Betäubungscreme spüren die meisten Patienten nur Wärme und ein leichtes Kribbeln — eine Injektionsbetäubung ist nicht nötig.",
          },
          {
            question: "Wie viele Sitzungen sind nötig?",
            answer:
              "In der Regel 3 bis 5 Sitzungen im Abstand von vier Wochen, je nach Schwere des Schadens. Das Ergebnis entwickelt sich danach noch monatelang weiter.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Behandlungszone und Sitzungszahl und wird bei der Beratung festgelegt.",
      },
    },
  },

  {
    slug: "thermage",
    image: "/images/services/thermage.jpg",
    copy: {
      fa: {
        title: "ترماژ",
        category: "جوان‌سازی",
        tagline: "لیفت غیرتهاجمی با امواج رادیویی",
        intro: [
          "ترماژ بدون جراحی، بدون خونریزی و بدون نقاهت، علائم پیری را از چهره شما می‌زداید. در این روش انرژی فرکانس رادیویی به لایه‌های عمیق پوست می‌رسد، کلاژن موجود را سفت می‌کند و ساخت کلاژن جدید را تحریک می‌نماید.",
          "نتیجه یک لیفت کاملاً طبیعی است: پوست محکم‌تر، چین‌وچروک کمتر و ظاهری یکدست‌تر — بدون آنکه کسی متوجه درمان شود.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۱ جلسه" },
          { label: "مدت هر جلسه", value: "۴۵ تا ۹۰ دقیقه" },
          { label: "دوره نقاهت", value: "ندارد" },
          { label: "شروع نتیجه", value: "بلافاصله تا ۶ ماه" },
          { label: "ماندگاری", value: "۱ تا ۲ سال" },
        ],
        benefits: [
          "لیفت طبیعی بدون جراحی و بدون بخیه",
          "سفت شدن کلاژن و تحریک کلاژن جدید",
          "کاهش چین‌وچروک و شلی پوست",
          "بدون درد، خونریزی و دوره نقاهت",
          "قابل انجام روی صورت، گردن، شکم و بازو",
        ],
        suitableFor: [
          "افتادگی خفیف تا متوسط پوست",
          "چین‌وچروک دور چشم، گونه و فک",
          "شلی پوست پس از کاهش وزن",
          "افرادی که جراحی را نمی‌پذیرند",
        ],
        process: [
          {
            title: "ارزیابی و تعیین نقشه درمان",
            description:
              "پزشک نواحی مورد نیاز و شدت افتادگی را بررسی و برنامه درمان را مشخص می‌کند.",
          },
          {
            title: "درمان با امواج رادیویی",
            description:
              "انرژی RF به‌صورت یکنواخت و کنترل‌شده وارد درم می‌شود؛ احساس گرمای ملایم طبیعی است.",
          },
          {
            title: "القا کلاژن‌سازی",
            description:
              "کلاژن موجود سفت و کلاژن تازه ساخته می‌شود؛ نتیجه تا شش ماه ادامه دارد.",
          },
          {
            title: "پیگیری",
            description:
              "جلسه بعدی تنها در صورت نیاز و پس از ارزیابی نتیجه برنامه‌ریزی می‌شود.",
          },
        ],
        faq: [
          {
            question: "ترماژ چیست؟",
            answer:
              "روشی کاملاً غیرتهاجمی برای جوان‌سازی است که با امواج فرکانس رادیویی، کلاژن عمق پوست را سفت و بازسازی می‌کند.",
          },
          {
            question: "ترماژ چند جلسه است؟",
            answer:
              "معمولاً یک جلسه کافی است. در موارد نیاز، فاصله یک‌ساله برای جلسه بعدی در نظر گرفته می‌شود.",
          },
          {
            question: "ترماژ بهتر است یا هایفو؟",
            answer:
              "هر دو لیفت غیرتهاجمی هستند؛ ترماژ با RF کلاژن را گرم می‌کند و هایفو با اولتراسوند متمرکز روی عمق دقیقی متمرکز می‌شود. انتخاب بسته به میزان افتادگی و بافت پوست در جلسه مشاوره انجام می‌شود.",
          },
          {
            question: "عوارض ترماژ چیست؟",
            answer:
              "قرمزی و گرمای گذرا شایع‌ترین حالت است که چند ساعت می‌ماند. عوارض جدی با رعایت پروتکل تقریباً دیده نمی‌شود.",
          },
        ],
        priceNote: "هزینه ترماژ بر اساس ناحیه درمان تعیین می‌شود؛ در جلسه مشاوره شفاف اعلام خواهد شد.",
      },

      en: {
        title: "Thermage",
        category: "Rejuvenation",
        tagline: "Non-invasive lifting with radiofrequency",
        intro: [
          "Thermage removes the visible signs of ageing without surgery, without bleeding and without downtime. Radiofrequency energy reaches the deeper layers of the skin, tightens existing collagen and stimulates new collagen production.",
          "The result is a genuinely natural lift: firmer skin, fewer lines and a more even appearance — without anyone noticing you had anything done.",
        ],
        facts: [
          { label: "Sessions", value: "1" },
          { label: "Session time", value: "45 – 90 min" },
          { label: "Downtime", value: "None" },
          { label: "Results appear", value: "Immediately – 6 months" },
          { label: "Longevity", value: "1 – 2 years" },
        ],
        benefits: [
          "Natural lift without surgery or stitches",
          "Existing collagen tightened, new collagen built",
          "Fewer lines and firmer skin",
          "No pain, no bleeding, no recovery time",
          "Face, neck, abdomen and arms",
        ],
        suitableFor: [
          "Mild to moderate skin laxity",
          "Lines around the eyes, cheeks and jawline",
          "Loose skin after weight loss",
          "Anyone who prefers to avoid surgery",
        ],
        process: [
          {
            title: "Assessment and treatment map",
            description:
              "We evaluate the degree of laxity and define exactly which areas will be treated.",
          },
          {
            title: "Radiofrequency delivery",
            description:
              "Controlled RF energy warms the dermis evenly; a comfortable warmth is normal.",
          },
          {
            title: "Collagen activation",
            description:
              "Existing collagen contracts and new collagen is built over the following months.",
          },
          {
            title: "Follow-up",
            description:
              "A second session is only scheduled if the result assessment calls for it.",
          },
        ],
        faq: [
          {
            question: "What is Thermage?",
            answer:
              "A completely non-invasive rejuvenation method that tightens and rebuilds deep collagen using radiofrequency energy.",
          },
          {
            question: "How many sessions does it take?",
            answer:
              "Usually one session is enough. If a second is needed, it is planned roughly a year later.",
          },
          {
            question: "Thermage or HIFU?",
            answer:
              "Both are non-invasive lifts. Thermage heats collagen with radiofrequency; HIFU focuses ultrasound at a precise depth. We choose based on your degree of laxity and skin texture.",
          },
          {
            question: "Are there side effects?",
            answer:
              "Temporary redness and warmth are the most common effect and settle within hours. With a correct protocol, serious side effects are rarely seen.",
          },
        ],
        priceNote: "Pricing is based on the area treated and is confirmed clearly at your consultation.",
      },

      de: {
        title: "Thermage",
        category: "Verjüngung",
        tagline: "Nicht-invasive Straffung mit Radiofrequenz",
        intro: [
          "Thermage beseitigt sichtbare Alterungszeichen ohne Operation, ohne Blutung und ohne Ausfallzeit. Radiofrequenzenergie erreicht die tieferen Hautschichten, strafft bestehendes Kollagen und regt die Neubildung von Kollagen an.",
          "Das Ergebnis ist ein echter, natürlicher Lift: festere Haut, weniger Linien und ein ebenmäßigeres Erscheinungsbild — ohne dass jemand etwas bemerkt.",
        ],
        facts: [
          { label: "Sitzungen", value: "1" },
          { label: "Dauer pro Sitzung", value: "45 – 90 Min." },
          { label: "Ausfallzeit", value: "Keine" },
          { label: "Ergebnis sichtbar", value: "Sofort – 6 Monate" },
          { label: "Haltbarkeit", value: "1 – 2 Jahre" },
        ],
        benefits: [
          "Natürlicher Lift ohne Operation und ohne Naht",
          "Bestehendes Kollagen strafft sich, neues Kollagen entsteht",
          "Weniger Linien, festere Haut",
          "Kein Schmerz, keine Blutung, keine Erholungszeit",
          "Gesicht, Hals, Bauch und Arme",
        ],
        suitableFor: [
          "Leichter bis mäßiger Hautüberschuss",
          "Linien um Augen, Wangen und Kieferlinie",
          "Lockere Haut nach Gewichtsabnahme",
          "Alle, die eine Operation vermeiden möchten",
        ],
        process: [
          {
            title: "Analyse und Behandlungsplan",
            description:
              "Wir prüfen den Grad der Erschlaffung und legen die zu behandelnden Zonen fest.",
          },
          {
            title: "Radiofrequenz-Behandlung",
            description:
              "Kontrollierte RF-Energie erwärmt die Dermis gleichmäßig; eine angenehme Wärme ist normal.",
          },
          {
            title: "Kollagenaktivierung",
            description:
              "Bestehendes Kollagen zieht sich zusammen, neues Kollagen entsteht in den Folgemonaten.",
          },
          {
            title: "Nachsorge",
            description:
              "Eine zweite Sitzung wird nur angesetzt, wenn die Ergebniskontrolle dies erforderlich macht.",
          },
        ],
        faq: [
          {
            question: "Was ist Thermage?",
            answer:
              "Eine vollständig nicht-invasive Verjünungsmethode, die tiefes Kollagen mit Radiofrequenzenergie strafft und aufbaut.",
          },
          {
            question: "Wie viele Sitzungen sind nötig?",
            answer:
              "In der Regel genügt eine Sitzung. Falls eine weitere nötig ist, wird sie etwa ein Jahr später geplant.",
          },
          {
            question: "Thermage oder HIFU?",
            answer:
              "Beides sind nicht-invasive Lifts. Thermage erwärmt Kollagen mit Radiofrequenz, HIFU bündelt Ultraschall auf einer exakten Tiefe. Die Wahl richtet sich nach Hauterschlaffung und Gewebe.",
          },
          {
            question: "Gibt es Nebenwirkungen?",
            answer:
              "Vorübergehende Rötung und Wärme sind am häufigsten und klingen innerhalb weniger Stunden ab. Bei korrektem Protokoll sind schwere Nebenwirkungen selten.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach der Behandlungszone und wird bei der Beratung transparent bestätigt.",
      },
    },
  },

  {
    slug: "laser-hair-removal",
    image: "/images/services/laser-hair-removal.jpg",
    copy: {
      fa: {
        title: "لیزر موهای زائد",
        category: "لیزر",
        tagline: "پوستی صاف برای همیشه، بدون اصلاح مکرر",
        intro: [
          "در لیزر موهای زائد، پالس کوتاه نور به فولیکول مو می‌رسد و به گرما تبدیل می‌شود؛ گرمای ایجادشده فولیکول را از کار می‌اندازد و رشد مو برای همیشه متوقف می‌شود.",
          "با دستگاه‌های نسل جدید، درمان برای انواع پوست و مو ایمن است و برخلاف اصلاح یا وکس، دیگر خبری از جوش زیرپوستی، بریدگی و موهای زیرپوستی نیست.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۶ تا ۸ جلسه" },
          { label: "مدت هر جلسه", value: "۱۵ تا ۴۵ دقیقه" },
          { label: "دوره نقاهت", value: "ندارد" },
          { label: "فاصله جلسات", value: "۴ تا ۶ هفته" },
          { label: "ماندگاری", value: "بلندمدت" },
        ],
        benefits: [
          "حذف بلندمدت موهای زائد در تمام نواحی بدن",
          "رفع جوش و موهای زیرپوستی",
          "صاف و یکدست شدن پوست",
          "سریع، ایمن و بدون درد جدی",
          "مناسب خانم‌ها و آقایان",
        ],
        suitableFor: [
          "صورت، زیربغل، بیکینی و پاها",
          "کمر و سینه آقایان",
          "موهای زیرپوستی و التهاب ناشی از اصلاح",
          "پوست تیره و روشن با تنظیم دستگاه",
        ],
        process: [
          {
            title: "تعیین تنظیمات دستگاه",
            description:
              "رنگ پوست، ضخامت و رنگ مو تعیین‌کننده طول موج و شدت مناسب هستند.",
          },
          {
            title: "آماده‌سازی ناحیه",
            description:
              "ناحیه تمیز و اصلاح می‌شود؛ پیش از جلسه نباید موهای ریشه‌دار برداشته شوند.",
          },
          {
            title: "درمان",
            description:
              "پالس‌های لیزر به فولیکول می‌رسند؛ احساس سوزن‌خوردگی خفیف طبیعی است.",
          },
          {
            title: "مراقبت بعد از جلسه",
            description:
              "از ضدآفتاب استفاده کنید و تا ۲۴ ساعت از سونا و استخر دوری کنید.",
          },
        ],
        faq: [
          {
            question: "لیزر موهای زائد چیست؟",
            answer:
              "روشی دائمی است که با هدایت پالس نور به فولیکول مو، آن را گرم و غیرفعال می‌کند تا رشد مو متوقف شود.",
          },
          {
            question: "چند جلسه لازم است؟",
            answer:
              "به دلیل چرخه رشد مو معمولاً ۶ تا ۸ جلسه با فاصله ۴ تا ۶ هفته نیاز است.",
          },
          {
            question: "آیا درد دارد؟",
            answer:
              "بیشتر مراجعین آن را به ضربه‌های ملایم یک کش لاستیکی تشبیه می‌کنند؛ در نواحی حساس از کرم بی‌حسی استفاده می‌شود.",
          },
          {
            question: "برای چه افرادی مناسب نیست؟",
            answer:
              "در دوران بارداری، با عفونت فعال پوستی یا مصرف برخی داروها توصیه نمی‌شود. وضعیت شما در جلسه مشاوره بررسی می‌شود.",
          },
        ],
        priceNote: "قیمت بر اساس ناحیه و پکیج جلسات اعلام می‌شود؛ پیشنهادهای ویژه پکیج در مطب وجود دارد.",
      },

      en: {
        title: "Laser Hair Removal",
        category: "Laser",
        tagline: "Permanently smooth skin, without constant shaving",
        intro: [
          "A short pulse of light travels into the hair follicle and turns into heat. That heat disables the follicle, and hair growth stops for good.",
          "With current-generation devices the treatment is safe for every skin and hair type — and unlike shaving or waxing, there are no ingrown hairs, nicks or irritation.",
        ],
        facts: [
          { label: "Sessions", value: "6 – 8" },
          { label: "Session time", value: "15 – 45 min" },
          { label: "Downtime", value: "None" },
          { label: "Interval", value: "4 – 6 weeks" },
          { label: "Longevity", value: "Long lasting" },
        ],
        benefits: [
          "Long-term hair reduction across the whole body",
          "No more ingrown hairs or shaving rash",
          "Smoother, more even skin",
          "Fast, safe and comfortable",
          "For women and men",
        ],
        suitableFor: [
          "Face, underarms, bikini line and legs",
          "Back and chest for men",
          "Ingrown hairs caused by shaving",
          "Both light and dark skin, with calibrated settings",
        ],
        process: [
          {
            title: "Device calibration",
            description:
              "Skin tone, hair thickness and colour determine the right wavelength and intensity.",
          },
          {
            title: "Preparing the area",
            description:
              "The area is cleansed and shaved; rooted hairs must not be removed before the session.",
          },
          {
            title: "Treatment",
            description:
              "Laser pulses reach the follicle. A light snapping sensation is normal.",
          },
          {
            title: "After the session",
            description:
              "Use SPF and avoid saunas and pools for 24 hours.",
          },
        ],
        faq: [
          {
            question: "What is laser hair removal?",
            answer:
              "A permanent method that directs a light pulse into the hair follicle, heating and disabling it so growth stops.",
          },
          {
            question: "How many sessions are needed?",
            answer:
              "Because hair grows in cycles, 6 to 8 sessions spaced 4 to 6 weeks apart are usually required.",
          },
          {
            question: "Is it painful?",
            answer:
              "Most patients describe it as light rubber-band snaps. Numbing cream is used on sensitive areas.",
          },
          {
            question: "Who should not have it?",
            answer:
              "Not during pregnancy, over active skin infections, or with certain medications. We review your situation at the consultation.",
          },
        ],
        priceNote: "Pricing follows the area and session package; package offers are available at the practice.",
      },

      de: {
        title: "Laser Haarentfernung",
        category: "Laser",
        tagline: "Dauerhaft glatte Haut ohne ständiges Rasieren",
        intro: [
          "Ein kurzer Lichtpuls gelangt in den Haarfollikel und wird zu Wärme. Diese Wärme schaltet den Follikel außer Kraft — das Haarwachstum bleibt dauerhaft aus.",
          "Mit Geräten der neuesten Generation ist die Behandlung für jeden Haut- und Haartyp sicher. Anders als Rasieren oder Wachsen gibt es keine eingewachsenen Haare, Schnitte oder Reizungen.",
        ],
        facts: [
          { label: "Sitzungen", value: "6 – 8" },
          { label: "Dauer pro Sitzung", value: "15 – 45 Min." },
          { label: "Ausfallzeit", value: "Keine" },
          { label: "Abstand", value: "4 – 6 Wochen" },
          { label: "Haltbarkeit", value: "Lang anhaltend" },
        ],
        benefits: [
          "Langanhaltende Haarentfernung am gesamten Körper",
          "Keine eingewachsenen Haare, kein Rasurhautausschlag",
          "Glattere, ebenmäßigere Haut",
          "Schnell, sicher und angenehm",
          "Für Frauen und Männer",
        ],
        suitableFor: [
          "Gesicht, Achseln, Bikinizone und Beine",
          "Rücken und Brust bei Männern",
          "Eingewachsene Haare durch Rasur",
          "Helle und dunkle Haut mit angepassten Einstellungen",
        ],
        process: [
          {
            title: "Geräteeinstellung",
            description:
              "Hautton, Haardicke und -farbe bestimmen Wellenlänge und Intensität.",
          },
          {
            title: "Vorbereitung der Zone",
            description:
              "Die Zone wird gereinigt und rasiert; verwurzelte Haare dürfen vorher nicht entfernt werden.",
          },
          {
            title: "Behandlung",
            description:
              "Die Laserpulse erreichen den Follikel. Ein leichtes Schnappen ist normal.",
          },
          {
            title: "Nach der Sitzung",
            description:
              "Sonnenschutz verwenden und 24 Stunden Sauna und Pool meiden.",
          },
        ],
        faq: [
          {
            question: "Was ist Laser Haarentfernung?",
            answer:
              "Eine dauerhafte Methode, die einen Lichtpuls in den Haarfollikel lenkt, ihn erhitzt und so außer Kraft setzt.",
          },
          {
            question: "Wie viele Sitzungen sind nötig?",
            answer:
              "Da Haare im Zyklus wachsen, sind meist 6 bis 8 Sitzungen im Abstand von 4 bis 6 Wochen nötig.",
          },
          {
            question: "Tut es weh?",
            answer:
              "Die meisten beschreiben ein leichtes Klicken wie ein Gummiband. In empfindlichen Zonen wird Betäubungscreme verwendet.",
          },
          {
            question: "Für wen ist die Behandlung nicht geeignet?",
            answer:
              "Nicht in der Schwangerschaft, bei aktiven Hautinfektionen oder unter bestimmten Medikamenten. Wir klären das in der Beratung.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Zone und Paket; Sonderangebote für Pakete gibt es in der Praxis.",
      },
    },
  },

  {
    slug: "lip-filler",
    image: "/images/services/lip-filler.jpg",
    copy: {
      fa: {
        title: "تزریق ژل لب",
        category: "تزریق",
        tagline: "حجم و فرم طبیعی، بدون ظاهر مصنوعی",
        intro: [
          "ژل‌های هیالورونیک اسید به لب‌ها حجم می‌دهند، فرم آن‌ها را اصلاح می‌کنند و در عین حال آبرسانی طبیعی را به لب بازمی‌گردانند. روشی کم‌تهاجمی است که در چند دقیقه انجام می‌شود و نتیجه آن بلافاصله دیده می‌شود.",
          "نکته اصلی در ژل لب، تعادل است: فرمی که با سایر اجزای چهره هماهنگ باشد و لبخندی طبیعی بسازد، نه لبی حجیم و مصنوعی.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۱ جلسه" },
          { label: "مدت هر جلسه", value: "۲۰ تا ۳۰ دقیقه" },
          { label: "دوره نقاهت", value: "۲ تا ۵ روز ورم" },
          { label: "نتیجه نهایی", value: "پس از ۱ ماه" },
          { label: "ماندگاری", value: "۹ تا ۱۲ ماه" },
        ],
        benefits: [
          "حجم‌دهی و فرم‌دهی متناسب با آناتومی صورت",
          "نتیجه فوری و قابل کنترل",
          "قابل بازگشت با آنزیم در صورت عدم رضایت",
          "برندهای معتبر و دارای مجوز",
          "بهبود قرینگی و تقارن لب‌ها",
        ],
        suitableFor: [
          "لب‌های باریک یا نامتقارن",
          "از دست رفتن حجم با افزایش سن",
          "خط‌های عمودی دور لب",
          "کسانی که نتیجه‌ای طبیعی می‌خواهند",
        ],
        process: [
          {
            title: "طراحی فرم",
            description:
              "پزشک نسبت‌های صورت را می‌سنجد و فرم دلخواه را با شما هماهنگ می‌کند.",
          },
          {
            title: "بی‌حسی و تزریق",
            description:
              "پس از بی‌حسی موضعی، ژل با سوزن ظریف یا کانولا در لایه مناسب تزریق می‌شود.",
          },
          {
            title: "ماساژ و فرم‌دهی نهایی",
            description:
              "ژل به‌آرامی شکل داده می‌شود تا قرینگی کامل برقرار شود.",
          },
          {
            title: "مراقبت بعد",
            description:
              "تا ۴۸ ساعت از گرمای شدید و فعالیت سنگین پرهیز کنید؛ ورم طی چند روز می‌نشیند.",
          },
        ],
        faq: [
          {
            question: "ژل لب چیست؟",
            answer:
              "نوعی پرکننده هیالورونیک اسید است که حجم لب را افزایش می‌دهد، فرم را اصلاح می‌کند و آبرسانی طبیعی به همراه دارد.",
          },
          {
            question: "ماندگاری ژل لب چقدر است؟",
            answer:
              "بین ۹ تا ۱۲ ماه، بسته به متابولیسم بدن و برند استفاده‌شده. پس از تحلیل رفتن، تزریق مجدد ممکن است.",
          },
          {
            question: "آیا تزریق ژل درد دارد؟",
            answer:
              "با بی‌حسی موضعی درد بسیار کم است. ممکن است بعد از تزریق کمی سوزش و ورم داشته باشید که طبیعی است.",
          },
          {
            question: "اگر از نتیجه راضی نباشم چه کنم؟",
            answer:
              "ژل هیالورونیک اسید با آنزیم هیالورونیداز قابل تحلیل است؛ بنابراین نتیجه کاملاً کنترل‌پذیر و برگشت‌پذیر است.",
          },
        ],
        priceNote: "هزینه بر اساس برند ژل و میزان حجم تزریق‌شده محاسبه می‌شود.",
      },

      en: {
        title: "Lip Filler",
        category: "Injection",
        tagline: "Natural volume and shape, never artificial",
        intro: [
          "Hyaluronic acid fillers add volume to the lips, refine their shape and restore natural hydration. It is a minimally invasive treatment completed in minutes, with the result visible immediately.",
          "The key to good lip filler is balance: a shape that harmonises with the rest of your face and creates a natural smile, rather than an inflated, artificial look.",
        ],
        facts: [
          { label: "Sessions", value: "1" },
          { label: "Session time", value: "20 – 30 min" },
          { label: "Downtime", value: "2 – 5 days swelling" },
          { label: "Final result", value: "After 1 month" },
          { label: "Longevity", value: "9 – 12 months" },
        ],
        benefits: [
          "Volume and shape matched to your facial anatomy",
          "Immediate, controllable result",
          "Reversible with hyaluronidase if you change your mind",
          "Licensed, certified brands only",
          "Improved symmetry and proportion",
        ],
        suitableFor: [
          "Thin or asymmetrical lips",
          "Volume loss with age",
          "Vertical lines around the mouth",
          "Anyone wanting a natural outcome",
        ],
        process: [
          {
            title: "Designing the shape",
            description:
              "We measure facial proportions and agree on the shape you want before anything is injected.",
          },
          {
            title: "Anaesthesia and injection",
            description:
              "After numbing, the filler is placed in the correct layer with a fine needle or cannula.",
          },
          {
            title: "Modelling",
            description:
              "The filler is gently shaped to restore full symmetry.",
          },
          {
            title: "Aftercare",
            description:
              "Avoid intense heat and heavy exercise for 48 hours; swelling settles within a few days.",
          },
        ],
        faq: [
          {
            question: "What is lip filler?",
            answer:
              "A hyaluronic acid filler that adds lip volume, refines the shape and brings natural hydration with it.",
          },
          {
            question: "How long does it last?",
            answer:
              "Between 9 and 12 months, depending on your metabolism and the product used. Top-ups are possible once it fades.",
          },
          {
            question: "Does it hurt?",
            answer:
              "With topical anaesthesia the discomfort is minimal. Some soreness and swelling afterwards is normal.",
          },
          {
            question: "What if I do not like the result?",
            answer:
              "Hyaluronic acid fillers can be dissolved with hyaluronidase, so the outcome is fully controllable and reversible.",
          },
        ],
        priceNote: "Pricing is calculated from the brand used and the volume injected.",
      },

      de: {
        title: "Lippen-Filler",
        category: "Injektion",
        tagline: "Natürliches Volumen und eine harmonische Form",
        intro: [
          "Hyaluronsäure-Filler geben den Lippen Volumen, korrigieren ihre Form und bringen die natürliche Feuchtigkeit zurück. Die Behandlung ist minimalinvasiv, dauert nur wenige Minuten und das Ergebnis ist sofort sichtbar.",
          "Entscheidend ist das Gleichgewicht: eine Form, die zum Gesicht passt und ein natürliches Lächeln schafft — kein aufgeblähtes, künstliches Ergebnis.",
        ],
        facts: [
          { label: "Sitzungen", value: "1" },
          { label: "Dauer pro Sitzung", value: "20 – 30 Min." },
          { label: "Ausfallzeit", value: "2 – 5 Tage Schwellung" },
          { label: "Endergebnis", value: "Nach 1 Monat" },
          { label: "Haltbarkeit", value: "9 – 12 Monate" },
        ],
        benefits: [
          "Volumen und Form passend zur Anatomie",
          "Sofortiges, kontrollierbares Ergebnis",
          "Bei Bedarf mit Hyaluronidase auflösbar",
          "Nur zugelassene, zertifizierte Marken",
          "Bessere Symmetrie und Proportion",
        ],
        suitableFor: [
          "Dünne oder asymmetrische Lippen",
          "Volumenverlust durch das Alter",
          "Senkrechte Linien um den Mund",
          "Alle, die ein natürliches Ergebnis wünschen",
        ],
        process: [
          {
            title: "Formgestaltung",
            description:
              "Wir messen die Gesichtsproportionen und stimmen die Wunschform ab, bevor injiziert wird.",
          },
          {
            title: "Betäubung und Injektion",
            description:
              "Nach der Betäubung wird der Filler mit feiner Nadel oder Kanüle in die richtige Schicht gesetzt.",
          },
          {
            title: "Modellierung",
            description:
              "Der Filler wird sanft geformt, damit die Symmetrie stimmt.",
          },
          {
            title: "Nachsorge",
            description:
              "48 Stunden auf starke Wärme und Sport verzichten; die Schwellung klingt in wenigen Tagen ab.",
          },
        ],
        faq: [
          {
            question: "Was sind Lippen-Filler?",
            answer:
              "Ein Hyaluronsäure-Filler, der Lippenvolumen gibt, die Form korrigiert und natürliche Feuchtigkeit zurückbringt.",
          },
          {
            question: "Wie lange hält das Ergebnis?",
            answer:
              "Zwischen 9 und 12 Monaten, je nach Stoffwechsel und verwendetem Produkt. Nach dem Abbau ist eine Auffrischung möglich.",
          },
          {
            question: "Tut die Injektion weh?",
            answer:
              "Mit Betäubungscreme ist die Belastung gering. Leichte Empfindlichkeit und Schwellung danach sind normal.",
          },
          {
            question: "Und wenn mir das Ergebnis nicht gefällt?",
            answer:
              "Hyaluronsäure-Filler lassen sich mit Hyaluronidase auflösen — das Ergebnis ist vollständig steuerbar und reversibel.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Marke und injiziertem Volumen.",
      },
    },
  },

  {
    slug: "skin-laser",
    image: "/images/services/skin-laser.jpg",
    copy: {
      fa: {
        title: "لیزر لک صورت",
        category: "لیزر",
        tagline: "پاکسازی لک‌های قدیمی و عمیق",
        intro: [
          "لیزر لک، رنگدانه‌های اضافی پوست را هدف می‌گیرد و آن‌ها را تجزیه می‌کند تا پوست به تدریج یکدست و شفاف شود. برخلاف کرم‌ها و آرایش که فقط لک را می‌پوشانند، این روش منشأ تیرگی را از بین می‌برد.",
          "لک‌های قدیمی، آفتابی و هورمونی با این درمان بهبود می‌یابند و پوست به دوران شاداب‌تر خود بازمی‌گردد.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۳ تا ۵ جلسه" },
          { label: "مدت هر جلسه", value: "۲۰ تا ۴۰ دقیقه" },
          { label: "دوره نقاهت", value: "۱ تا ۳ روز" },
          { label: "فاصله جلسات", value: "۳ تا ۴ هفته" },
          { label: "ماندگاری", value: "بلندمدت با مراقبت" },
        ],
        benefits: [
          "کاهش لک‌های آفتابی، هورمونی و قدیمی",
          "روشن‌تر و شفاف‌تر شدن پوست",
          "یکدست شدن رنگ صورت",
          "بهبود کک‌ومک و تیرگی زیرچشم",
          "قابل ترکیب با مزوتراپی و PRP",
        ],
        suitableFor: [
          "لک‌های ناشی از آفتاب و افزایش سن",
          "ملاسما و تیرگی هورمونی",
          "کک‌ومک",
          "پوست کدر و ناهموار",
        ],
        process: [
          {
            title: "بررسی نوع لک",
            description:
              "نوع و عمق لک تعیین می‌کند که کدام طول موج لیزر مناسب شماست.",
          },
          {
            title: "آماده‌سازی پوست",
            description:
              "پوست پاک‌سازی و در صورت نیاز با کرم بی‌حسی آماده می‌شود.",
          },
          {
            title: "درمان لیزری",
            description:
              "پالس‌های لیزر رنگدانه را می‌شکنند؛ ممکن است لک تیره‌تر و سپس پوسته‌پوسته شود.",
          },
          {
            title: "مراقبت بعد",
            description:
              "ضدآفتاب قوی و پرهیز از نور خورشید مهم‌ترین بخش نتیجه است.",
          },
        ],
        faq: [
          {
            question: "لیزر لک چگونه عمل می‌کند؟",
            answer:
              "رنگدانه اضافی پوست را هدف می‌گیرد و با گرما تجزیه می‌کند تا بدن به‌طور طبیعی آن را دفع کند.",
          },
          {
            question: "چند جلسه لازم است؟",
            answer:
              "بین ۳ تا ۵ جلسه با فاصله ۳ تا ۴ هفتگی، بسته به نوع و عمق لک.",
          },
          {
            question: "بعد از لیزر چه اتفاقی می‌افتد؟",
            answer:
              "لک‌ها موقتاً تیره می‌شوند و ظرف چند روز پوسته‌پوسته می‌شوند؛ رعایت ضدآفتاب نتیجه را تثبیت می‌کند.",
          },
          {
            question: "آیا لک برنمی‌گردد؟",
            answer:
              "اگر مراقبت بعد از درمان و ضدآفتاب رعایت شود، نتیجه بلندمدت است. در ملاسما ممکن است جلسات نگهدارنده توصیه شود.",
          },
        ],
        priceNote: "هزینه بر اساس تعداد نواحی و جلسات در جلسه مشاوره اعلام می‌شود.",
      },

      en: {
        title: "Pigmentation Laser",
        category: "Laser",
        tagline: "Clearing deep and long-standing pigmentation",
        intro: [
          "A pigmentation laser targets excess melanin and breaks it down so the skin gradually evens out and brightens. Unlike creams and makeup, which only cover a spot, this treats the source of the discolouration.",
          "Sun spots, age spots and hormonal pigmentation all respond, and skin returns to a fresher, clearer state.",
        ],
        facts: [
          { label: "Sessions", value: "3 – 5" },
          { label: "Session time", value: "20 – 40 min" },
          { label: "Downtime", value: "1 – 3 days" },
          { label: "Interval", value: "3 – 4 weeks" },
          { label: "Longevity", value: "Long lasting with care" },
        ],
        benefits: [
          "Reduced sun, hormonal and long-standing pigmentation",
          "Brighter, more transparent skin",
          "Even facial tone",
          "Improved freckles and under-eye darkness",
          "Combines well with mesotherapy and PRP",
        ],
        suitableFor: [
          "Sun and age-related spots",
          "Melasma and hormonal discolouration",
          "Freckles",
          "Dull, uneven skin",
        ],
        process: [
          {
            title: "Identifying the pigment",
            description:
              "The type and depth of the pigment determines which laser wavelength is right for you.",
          },
          {
            title: "Preparing the skin",
            description:
              "The skin is cleansed and, where needed, numbed before treatment.",
          },
          {
            title: "Laser treatment",
            description:
              "Pulses shatter the pigment; spots may darken briefly before flaking away.",
          },
          {
            title: "Aftercare",
            description:
              "Strong SPF and sun avoidance are the most important part of the result.",
          },
        ],
        faq: [
          {
            question: "How does a pigmentation laser work?",
            answer:
              "It targets excess pigment and breaks it down with heat so your body can clear it naturally.",
          },
          {
            question: "How many sessions are needed?",
            answer:
              "Three to five sessions, three to four weeks apart, depending on type and depth.",
          },
          {
            question: "What happens after treatment?",
            answer:
              "Spots darken temporarily and flake off within a few days. Consistent SPF keeps the result stable.",
          },
          {
            question: "Will the pigment return?",
            answer:
              "With proper aftercare and sun protection the result is long lasting. For melasma, maintenance sessions may be advised.",
          },
        ],
        priceNote: "Pricing follows the number of areas and sessions and is confirmed at your consultation.",
      },

      de: {
        title: "Pigmentlaser",
        category: "Laser",
        tagline: "Behandlung tiefer und alter Pigmentflecken",
        intro: [
          "Der Pigmentlaser zielt auf überschüssiges Melanin und zerlegt es, sodass die Haut nach und nach ebenmäßiger und heller wird. Anders als Cremes und Make-up, die Flecken nur abdecken, behandelt diese Methode die Ursache der Verfärbung.",
          "Altersflecken, Sonnenflecken und hormonelle Pigmentierung sprechen gut an — die Haut gewinnt wieder an Frische.",
        ],
        facts: [
          { label: "Sitzungen", value: "3 – 5" },
          { label: "Dauer pro Sitzung", value: "20 – 40 Min." },
          { label: "Ausfallzeit", value: "1 – 3 Tage" },
          { label: "Abstand", value: "3 – 4 Wochen" },
          { label: "Haltbarkeit", value: "Langanhaltend bei Pflege" },
        ],
        benefits: [
          "Weniger Sonnen-, Hormon- und Altersflecken",
          "Hellerere, klarere Haut",
          "Ebenmäßigerer Hautton",
          "Bessere Sommersprossen und Augenringe",
          "Gut kombinierbar mit Mesotherapie und PRP",
        ],
        suitableFor: [
          "Sonnen- und Altersflecken",
          "Melasma und hormonelle Verfärbungen",
          "Sommersprossen",
          "Matter, ungleichmäßiger Teint",
        ],
        process: [
          {
            title: "Bestimmung des Pigments",
            description:
              "Art und Tiefe des Pigments entscheiden über die passende Wellenlänge.",
          },
          {
            title: "Vorbereitung der Haut",
            description:
              "Die Haut wird gereinigt und bei Bedarf betäubt.",
          },
          {
            title: "Laserbehandlung",
            description:
              "Die Pulse zertrümmern das Pigment; Flecken verdunkeln sich kurz und schuppen dann ab.",
          },
          {
            title: "Nachsorge",
            description:
              "Hochwertiger Sonnenschutz und Sonnenmeiden sind der wichtigste Teil des Ergebnisses.",
          },
        ],
        faq: [
          {
            question: "Wie wirkt ein Pigmentlaser?",
            answer:
              "Er zielt auf überschüssiges Pigment, zerlegt es mit Wärme und der Körper baut es natürlich ab.",
          },
          {
            question: "Wie viele Sitzungen sind nötig?",
            answer:
              "Drei bis fünf Sitzungen im Abstand von drei bis vier Wochen, je nach Art und Tiefe.",
          },
          {
            question: "Was passiert nach der Behandlung?",
            answer:
              "Flecken verdunkeln sich kurz und schuppen innerhalb weniger Tage ab. Konsequenter Sonnenschutz stabilisiert das Ergebnis.",
          },
          {
            question: "Kommen die Flecken zurück?",
            answer:
              "Mit guter Nachsorge und Sonnenschutz ist das Ergebnis dauerhaft. Bei Melasma empfehlen wir gelegentlich Auffrischungssitzungen.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Anzahl der Zonen und Sitzungen und wird in der Beratung bestätigt.",
      },
    },
  },

  {
    slug: "microneedling",
    image: "/images/services/microneedling.jpg",
    copy: {
      fa: {
        title: "میکرونیدلینگ",
        category: "جوان‌سازی",
        tagline: "کلاژن‌سازی طبیعی با سوزن‌های ریز",
        intro: [
          "میکرونیدلینگ با سوزن‌های ریز و استریل، کانال‌های بسیار ظریفی در پوست ایجاد می‌کند و بدن را به تولید کلاژن و الاستین تحریک می‌کند. نتیجه پوستی صاف، محکم و لطیف است.",
          "این روش کم‌تهاجمی، جای زخم، آکنه و چین‌وچروک را به‌مرور کاهش می‌دهد و در درمان علمی پوست هم کاربرد دارد.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۳ تا ۶ جلسه" },
          { label: "مدت هر جلسه", value: "۳۰ تا ۴۵ دقیقه" },
          { label: "دوره نقاهت", value: "۱ تا ۲ روز" },
          { label: "فاصله جلسات", value: "۴ هفته" },
          { label: "شروع نتیجه", value: "از هفته چهارم" },
        ],
        benefits: [
          "کاهش جای جوش و اسکارهای سطحی",
          "محکم‌تر و لطیف‌تر شدن پوست",
          "کاهش چین‌وچروک و منافذ باز",
          "افزایش جذب سرم‌ها و مزودرم‌ها",
          "مناسب صورت، گردن و بدن",
        ],
        suitableFor: [
          "جای جوش و اسکار سطحی",
          "پوست شل و بی‌کیفیت",
          "چین‌وچروک ریز",
          "کسانی که به دنبال روش کم‌تهاجمی هستند",
        ],
        process: [
          {
            title: "پاک‌سازی و بی‌حسی",
            description:
              "پوست تمیز و با کرم موضعی بی‌حس می‌شود.",
          },
          {
            title: "میکرونیدلینگ",
            description:
              "سوزن‌های ریز با عمق تنظیم‌شده کانال‌های کلاژن‌ساز ایجاد می‌کنند.",
          },
          {
            title: "سرم‌درمانی",
            description:
              "سرم متناسب با مشکل پوست وارد کانال‌های تازه می‌شود تا اثر چند برابر شود.",
          },
          {
            title: "مراقبت بعد",
            description:
              "قرمزی خفیف یک روزه طبیعی است؛ تا ۴۸ ساعت آرایش نکنید و ضدآفتاب بزنید.",
          },
        ],
        faq: [
          {
            question: "میکرونیدلینگ چیست؟",
            answer:
              "روشی کم‌تهاجمی با سوزن‌های ریز و استریل است که با تحریک کلاژن‌سازی، پوستی صاف و محکم ایجاد می‌کند.",
          },
          {
            question: "آیا درد دارد؟",
            answer:
              "با بی‌حسی موضعی درد بسیار کم است. بعد از جلسه قرمزی خفیفی می‌ماند که معمولاً تا ۲۴ ساعت برطرف می‌شود.",
          },
          {
            question: "میکرونیدلینگ چه فرقی با فیشال دارد؟",
            answer:
              "فیشال سطح پوست را پاک‌سازی و آبرسانی می‌کند؛ میکرونیدلینگ به عمق پوست نفوذ کرده و کلاژن‌سازی را فعال می‌کند.",
          },
          {
            question: "چند جلسه لازم است؟",
            answer:
              "بین ۳ تا ۶ جلسه با فاصله چهار هفتگی، بسته به مشکل پوستی شما.",
          },
        ],
        priceNote: "هزینه بر اساس ناحیه درمان و ترکیب با سرم‌ها محاسبه می‌شود.",
      },

      en: {
        title: "Microneedling",
        category: "Rejuvenation",
        tagline: "Natural collagen induction with fine needles",
        intro: [
          "Microneedling creates thousands of ultra-fine channels in the skin with sterile needles, prompting your body to produce collagen and elastin. The result is smoother, firmer, softer skin.",
          "This minimally invasive method gradually reduces scarring, acne marks and fine lines, and is used in medical dermatology as well as aesthetics.",
        ],
        facts: [
          { label: "Sessions", value: "3 – 6" },
          { label: "Session time", value: "30 – 45 min" },
          { label: "Downtime", value: "1 – 2 days" },
          { label: "Interval", value: "4 weeks" },
          { label: "Results appear", value: "From week 4" },
        ],
        benefits: [
          "Reduced acne marks and superficial scarring",
          "Firmer, softer skin",
          "Fewer fine lines and refined pores",
          "Better absorption of serums and meso cocktails",
          "Face, neck and body",
        ],
        suitableFor: [
          "Acne marks and superficial scarring",
          "Loss of firmness",
          "Fine lines",
          "Anyone looking for a minimally invasive option",
        ],
        process: [
          {
            title: "Cleansing and numbing",
            description:
              "The skin is cleansed and numbed with a topical cream.",
          },
          {
            title: "Microneedling",
            description:
              "Fine needles at a calibrated depth create collagen-inducing channels.",
          },
          {
            title: "Serum infusion",
            description:
              "A serum matched to your concern is worked into the fresh channels for a stronger effect.",
          },
          {
            title: "Aftercare",
            description:
              "Mild redness for a day is normal. No makeup for 48 hours, and always SPF.",
          },
        ],
        faq: [
          {
            question: "What is microneedling?",
            answer:
              "A minimally invasive treatment with fine, sterile needles that stimulates collagen and leaves skin smoother and firmer.",
          },
          {
            question: "Does it hurt?",
            answer:
              "With topical anaesthesia the discomfort is very low. Mild redness afterwards usually settles within 24 hours.",
          },
          {
            question: "How is it different from a facial?",
            answer:
            "A facial cleanses and hydrates the surface; microneedling reaches into the skin and activates collagen production.",
          },
          {
            question: "How many sessions are needed?",
            answer:
              "Between 3 and 6 sessions, four weeks apart, depending on your skin concern.",
          },
        ],
        priceNote: "Pricing is based on the area treated and any serum combination used.",
      },

      de: {
        title: "Microneedling",
        category: "Verjüngung",
        tagline: "Natürliche Kollageninduktion mit feinen Nadeln",
        intro: [
          "Microneedling erzeugt mit sterilen Nadeln tausende feinste Kanäle in der Haut und bringt den Körper dazu, Kollagen und Elastin zu bilden. Das Ergebnis ist glattere, festere, weichere Haut.",
          "Diese minimalinvasive Methode mindert nach und nach Narben, Akneflecken und feine Falten — und wird auch in der medizinischen Dermatologie eingesetzt.",
        ],
        facts: [
          { label: "Sitzungen", value: "3 – 6" },
          { label: "Dauer pro Sitzung", value: "30 – 45 Min." },
          { label: "Ausfallzeit", value: "1 – 2 Tage" },
          { label: "Abstand", value: "4 Wochen" },
          { label: "Ergebnis sichtbar", value: "Ab Woche 4" },
        ],
        benefits: [
          "Weniger Akneflecken und oberflächliche Narben",
          "Festere, weichere Haut",
          "Weniger feine Falten, feinere Poren",
          "Bessere Aufnahme von Seren und Meso-Wirkstoffen",
          "Gesicht, Hals und Körper",
        ],
        suitableFor: [
          "Akneflecken und oberflächliche Narben",
          "Verlust der Straffheit",
          "Feine Falten",
          "Alle, die eine minimalinvasive Option suchen",
        ],
        process: [
          {
            title: "Reinigung und Betäubung",
            description:
              "Die Haut wird gereinigt und mit einer Creme betäubt.",
          },
          {
            title: "Microneedling",
            description:
              "Feine Nadeln erzeugen in justierter Tiefe Kollagen-auslösende Kanäle.",
          },
          {
            title: "Serum-Behandlung",
            description:
              "Ein auf Ihr Anliegen abgestimmtes Serum gelangt in die frischen Kanäle und wirkt stärker.",
          },
          {
            title: "Nachsorge",
            description:
              "Leichte Rötung für einen Tag ist normal. 48 Stunden kein Make-up, immer Sonnenschutz.",
          },
        ],
        faq: [
          {
            question: "Was ist Microneedling?",
            answer:
              "Eine miniminvasive Behandlung mit feinen, sterilen Nadeln, die Kollagen anregt und die Haut glatter und fester macht.",
          },
          {
            question: "Tut es weh?",
            answer:
              "Mit Betäubungscreme ist die Belastung gering. Die leichte Rötung klingt meist innerhalb von 24 Stunden ab.",
          },
          {
            question: "Welcher Unterschied besteht zu einem Facial?",
            answer:
              "Ein Facial reinigt und befeuchtet die Oberfläche; Microneedling arbeitet in der Haut und aktiviert die Kollagenproduktion.",
          },
          {
            question: "Wie viele Sitzungen sind nötig?",
            answer:
              "Zwischen 3 und 6 Sitzungen im Abstand von vier Wochen, je nach Hautproblem.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Behandlungszone und gewählter Serum-Kombination.",
      },
    },
  },

  {
    slug: "botox",
    image: "/images/services/botox.jpg",
    copy: {
      fa: {
        title: "تزریق بوتاکس",
        category: "تزریق",
        tagline: "خط‌های فعال را محو کنید، حالت طبیعی را حفظ کنید",
        intro: [
          "بوتاکس عضلاتی که باعث خط‌های پیشانی، اخم و دور چشم می‌شوند را آرام می‌کند تا پوست روی آن‌ها صاف شود. نتیجه یک چهره استراحت‌کرده و طبیعی است، نه چهره‌ای بی‌حرکت.",
          "تزریق چند دقیقه طول می‌کشد، نیازی به استراحت ندارد و اثر آن پس از چند روز شروع و تا چهار ماه ماندگار می‌ماند.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۱ جلسه" },
          { label: "مدت هر جلسه", value: "۱۰ تا ۲۰ دقیقه" },
          { label: "دوره نقاهت", value: "ندارد" },
          { label: "شروع نتیجه", value: "۳ تا ۷ روز" },
          { label: "ماندگاری", value: "۴ تا ۶ ماه" },
        ],
        benefits: [
          "محو خط‌های پیشانی، اخم و دور چشم",
          "حفظ حرکات طبیعی صورت",
          "پیشگیری از عمیق‌تر شدن خط‌ها",
          "درمان تعریق زیربغل و کف دست",
          "بدون نیاز به استراحت پس از تزریق",
        ],
        suitableFor: [
          "خط‌های دینامیک پیشانی و بین ابرو",
          "خط‌های دور چشم",
          "پیشگیری از پیری زودرس",
          "تعریق بیش از حد",
        ],
        process: [
          {
            title: "ارزیابی حرکت عضلات",
            description:
              "پزشک حرکت عضلات را بررسی و نقاط تزریق را دقیق مشخص می‌کند.",
          },
          {
            title: "تزریق با سوزن بسیار ریز",
            description:
              "دوز محاسبه‌شده با سوزن ظریف و در نقاط مشخص تزریق می‌شود.",
          },
          {
            title: "دستور بعد از تزریق",
            description:
              "تا چهار ساعت دراز نکشید و ناحیه را ماساژ ندهید.",
          },
          {
            title: "بررسی نتیجه",
            description:
              "نتیجه نهایی پس از دو هفته ارزیابی و در صورت نیاز تنظیم می‌شود.",
          },
        ],
        faq: [
          {
            question: "بوتاکس چیست؟",
            answer:
              "پروتئینی است که با آرام کردن موقت عضلات، خطوط پوستی را کاهش می‌دهد و از عمیق‌تر شدن آن‌ها جلوگیری می‌کند.",
          },
          {
            question: "نتیجه چه زمانی مشخص می‌شود؟",
            answer:
              "اثر از ۳ تا ۷ روز شروع می‌شود و در هفته دوم به اوج می‌رسد.",
          },
          {
            question: "آیا چهره بی‌حرکت می‌شود؟",
            answer:
              "خیر؛ با دوز و نقاط تزریق مناسب، حرکات طبیعی حفظ می‌شوند و فقط خطوط محو می‌شوند.",
          },
          {
            question: "ماندگاری بوتاکس چقدر است؟",
            answer:
              "معمولاً ۴ تا ۶ ماه. با تکرار منظم، ماندگاری هر جلسه بیشتر می‌شود.",
          },
        ],
        priceNote: "هزینه بر اساس تعداد نواحی و واحد تزریق‌شده محاسبه می‌شود.",
      },

      en: {
        title: "Botox Injection",
        category: "Injection",
        tagline: "Soften dynamic lines while keeping your expression",
        intro: [
          "Botox relaxes the muscles that create forehead lines, frowning and crow's feet, allowing the skin above them to smooth out. The result is a rested, natural face — not a frozen one.",
          "The injection takes a few minutes, needs no recovery time, and starts working within days, lasting around four months.",
        ],
        facts: [
          { label: "Sessions", value: "1" },
          { label: "Session time", value: "10 – 20 min" },
          { label: "Downtime", value: "None" },
          { label: "Results appear", value: "3 – 7 days" },
          { label: "Longevity", value: "4 – 6 months" },
        ],
        benefits: [
          "Softened forehead, frown and eye-area lines",
          "Natural facial movement preserved",
          "Prevents lines from deepening",
          "Also treats excessive sweating",
          "No recovery time after injection",
        ],
        suitableFor: [
          "Dynamic forehead and frown lines",
          "Crow's feet",
          "Prevention of premature ageing",
          "Excessive sweating",
        ],
        process: [
          {
            title: "Muscle assessment",
            description:
              "We study how your muscles move and mark the exact injection points.",
          },
          {
            title: "Injection",
            description:
              "A calculated dose is placed with a very fine needle at the marked points.",
          },
          {
            title: "Aftercare instructions",
            description:
              "Stay upright for four hours and do not massage the area.",
          },
          {
            title: "Review",
            description:
              "The final result is assessed at two weeks and adjusted if needed.",
          },
        ],
        faq: [
          {
            question: "What is Botox?",
            answer:
              "A protein that temporarily relaxes muscles, softening skin lines and preventing them from deepening.",
          },
          {
            question: "When will I see the result?",
            answer:
              "It starts working within 3 to 7 days and peaks around the second week.",
          },
          {
            question: "Will my face look frozen?",
            answer:
              "No. With the right dose and injection points, natural movement is preserved and only the lines soften.",
          },
          {
            question: "How long does it last?",
            answer:
              "Typically 4 to 6 months. With regular treatments each session tends to last longer.",
          },
        ],
        priceNote: "Pricing is based on the number of areas and the units injected.",
      },

      de: {
        title: "Botox-Injektion",
        category: "Injektion",
        tagline: "Aktive Linien mildern, Ausdruck erhalten",
        intro: [
          "Botox entspannt die Muskeln, die Stirnfalten, Zornesfältchen und Krähenfüße verursachen, sodass die darüberliegende Haut glatter wird. Das Ergebnis ist ein ausgeruhtes, natürliches Gesicht — kein eingefrorenes.",
          "Die Injektion dauert wenige Minuten, benötigt keine Erholungszeit und wirkt innerhalb weniger Tage, etwa vier Monate lang.",
        ],
        facts: [
          { label: "Sitzungen", value: "1" },
          { label: "Dauer pro Sitzung", value: "10 – 20 Min." },
          { label: "Ausfallzeit", value: "Keine" },
          { label: "Ergebnis sichtbar", value: "3 – 7 Tage" },
          { label: "Haltbarkeit", value: "4 – 6 Monate" },
        ],
        benefits: [
          "Geminderte Stirn-, Zornes- und Augenlinien",
          "Natürliche Mimik bleibt erhalten",
          "Verhindert das Vertiefen der Falten",
          "Auch bei starkem Schwitzen wirksam",
          "Keine Erholungszeit nach der Injektion",
        ],
        suitableFor: [
          "Aktive Stirn- und Zornesfalten",
          "Krähenfüße",
          "Vorbeugung gegen vorzeitige Alterung",
          "Starkes Schwitzen",
        ],
        process: [
          {
            title: "Mimikanalyse",
            description:
              "Wir beobachten die Muskelbewegung und markieren die genauen Injektionspunkte.",
          },
          {
            title: "Injektion",
            description:
              "Eine berechnete Dosis wird mit sehr feiner Nadel an den Punkten gesetzt.",
          },
          {
            title: "Nachsorgehinweise",
            description:
              "Vier Stunden aufrecht bleiben und die Zone nicht massieren.",
          },
          {
            title: "Kontrolle",
            description:
              "Das Endergebnis wird nach zwei Wochen geprüft und bei Bedarf nachjustiert.",
          },
        ],
        faq: [
          {
            question: "Was ist Botox?",
            answer:
              "Ein Protein, das Muskeln vorübergehend entspannt, Falten mildert und ihre Vertiefung verhindert.",
          },
          {
            question: "Wann sehe ich das Ergebnis?",
            answer:
              "Die Wirkung setzt nach 3 bis 7 Tagen ein und erreicht um die zweite Woche ihren Höhepunkt.",
          },
          {
            question: "Wird mein Gesicht starr?",
            answer:
              "Nein. Mit der richtigen Dosis und Punktwahl bleibt die Mimik natürlich erhalten und nur die Falten werden weicher.",
          },
          {
            question: "Wie lange hält die Wirkung?",
            answer:
              "In der Regel 4 bis 6 Monate. Bei regelmäßiger Behandlung hält jede Sitzung oft länger.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Anzahl der Zonen und injizierten Einheiten.",
      },
    },
  },

  {
    slug: "hifu",
    image: "/images/services/hifu.jpg",
    copy: {
      fa: {
        title: "هایفوتراپی",
        category: "جوان‌سازی",
        tagline: "لیفت با اولتراسوند متمرکز، بدون جراحی",
        intro: [
          "هایفو با تمرکز امواج اولتراسوند در عمق دقیقی از پوست، انرژی آزاد می‌کند و کلاژن‌سازی را آغاز می‌کند. بسیاری هایفو را جایگزینی غیرتهاجمی و بدون درد برای لیفت صورت می‌دانند.",
          "نتیجه تدریجی و طبیعی است: چند ماه پس از درمان، پوست محکم‌تر و چهره جوان‌تر به نظر می‌رسد — بدون خطرات جراحی.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۱ جلسه" },
          { label: "مدت هر جلسه", value: "۶۰ تا ۹۰ دقیقه" },
          { label: "دوره نقاهت", value: "ندارد" },
          { label: "شروع نتیجه", value: "۲ تا ۶ ماه" },
          { label: "ماندگاری", value: "۱ تا ۱٫۵ سال" },
        ],
        benefits: [
          "لیفت غیرتهاجمی صورت، گردن و ابرو",
          "سفت شدن پوست و کاهش افتادگی",
          "بهبود خط فک و چانه",
          "بدون جراحی، بخیه و دوره نقاهت",
          "قابل انجام روی دست و بدن",
        ],
        suitableFor: [
          "افتادگی خفیف تا متوسط",
          "شلی پوست صورت و گردن",
          "کسانی که جراحی را نمی‌پذیرند",
          "بهبود نتیجه سایر روش‌ها",
        ],
        process: [
          {
            title: "ارزیابی افتادگی",
            description:
              "پزشک میزان افتادگی و عمق هدف را مشخص می‌کند.",
          },
          {
            title: "تعیین خطوط درمان",
            description:
              "نقاط درمان روی پوست علامت‌گذاری می‌شوند تا انرژی دقیقاً به عمق درست برسد.",
          },
          {
            title: "درمان با اولتراسوند",
            description:
              "کارتریج‌های دستگاه انرژی را در عمق مشخص آزاد می‌کنند؛ احساس گرمای شدید موقتی طبیعی است.",
          },
          {
            title: "نتیجه تدریجی",
            description:
              "کلاژن تازه طی ماه‌های بعد ساخته می‌شود و نتیجه تا شش ماه بهتر می‌شود.",
          },
        ],
        faq: [
          {
            question: "هایفوتراپی چیست؟",
            answer:
              "سونوگرافی متمرکز با شدت بالا؛ امواج اولتراسوند را روی عمق دقیقی از پوست متمرکز می‌کند و کلاژن‌سازی را تحریک می‌کند.",
          },
          {
            question: "نتیجه چه زمانی مشخص می‌شود؟",
            answer:
              "بهبود تدریجی است: بخشی بلافاصله و نتیجه نهایی تا ۶ ماه پس از درمان ادامه دارد.",
          },
          {
            question: "هایفو برای چه کسانی کافی نیست؟",
            answer:
              "در افتادگی شدید پوست به‌تنهایی کافی نیست و باید با مشورت پزشک یا همراه با سایر روش‌ها انجام شود.",
          },
          {
            question: "ترماژ بهتر است یا هایفو؟",
            answer:
              "ترماژ با امواج رادیویی و هایفو با اولتراسوند کار می‌کنند. انتخاب بر اساس بافت پوست و میزان افتادگی در جلسه مشاوره انجام می‌شود.",
          },
        ],
        priceNote: "هزینه بر اساس ناحیه درمان و کارتریج مورد استفاده محاسبه می‌شود.",
      },

      en: {
        title: "HIFU Therapy",
        category: "Rejuvenation",
        tagline: "Focused ultrasound lifting, no surgery",
        intro: [
          "HIFU concentrates ultrasound energy at a precise depth in the skin and starts a collagen-building response. Many people consider it a non-invasive, pain-free alternative to a surgical facelift.",
          "The result develops gradually and naturally: over the following months the skin firms up and the face looks younger — without the risks of surgery.",
        ],
        facts: [
          { label: "Sessions", value: "1" },
          { label: "Session time", value: "60 – 90 min" },
          { label: "Downtime", value: "None" },
          { label: "Results appear", value: "2 – 6 months" },
          { label: "Longevity", value: "1 – 1.5 years" },
        ],
        benefits: [
          "Non-surgical lift for face, neck and brows",
          "Firmer skin with less sagging",
          "Improved jawline and chin definition",
          "No surgery, no stitches, no downtime",
          "Also suitable for hands and body",
        ],
        suitableFor: [
          "Mild to moderate laxity",
          "Loose skin on face and neck",
          "Anyone avoiding surgery",
          "Enhancing results of other treatments",
        ],
        process: [
          {
            title: "Assessment",
            description:
              "We measure the degree of laxity and decide the target depth.",
          },
          {
            title: "Mapping the lines",
            description:
              "Treatment lines are marked so the energy reaches exactly the right depth.",
          },
          {
            title: "Ultrasound delivery",
            description:
              "Cartridges release energy at the planned depth; brief intense warmth is normal.",
          },
          {
            title: "Gradual result",
            description:
              "New collagen forms over the following months and the result keeps improving for six.",
          },
        ],
        faq: [
          {
            question: "What is HIFU therapy?",
            answer:
              "High-intensity focused ultrasound: it concentrates ultrasound energy at a precise skin depth and stimulates collagen production.",
          },
          {
            question: "When do results appear?",
            answer:
              "Improvement is gradual — some immediately, with the final result developing up to 6 months later.",
          },
          {
            question: "When is HIFU not enough?",
            answer:
              "For significant laxity it is not sufficient on its own and should be combined with other methods after medical advice.",
          },
          {
            question: "Thermage or HIFU?",
            answer:
              "Thermage uses radiofrequency, HIFU uses focused ultrasound. The choice depends on skin texture and degree of laxity, decided at your consultation.",
          },
        ],
        priceNote: "Pricing is based on the area treated and the cartridges used.",
      },

      de: {
        title: "HIFU-Therapie",
        category: "Verjüngung",
        tagline: "Lifting mit fokussiertem Ultraschall, ohne Operation",
        intro: [
          "HIFU bündelt Ultraschallenergie in exakter Hauttiefe und löst eine Kollagenneubildung aus. Viele sehen darin eine nicht-invasive, schmerzfreie Alternative zum Gesichtslifting.",
          "Das Ergebnis entsteht schrittweise und natürlich: In den Folgemonaten wird die Haut fester und das Gesicht sieht jünger aus — ohne die Risiken einer Operation.",
        ],
        facts: [
          { label: "Sitzungen", value: "1" },
          { label: "Dauer pro Sitzung", value: "60 – 90 Min." },
          { label: "Ausfallzeit", value: "Keine" },
          { label: "Ergebnis sichtbar", value: "2 – 6 Monate" },
          { label: "Haltbarkeit", value: "1 – 1,5 Jahre" },
        ],
        benefits: [
          "Nicht-invasives Lifting für Gesicht, Hals und Brauen",
          "Festere Haut, weniger Erschlaffung",
          "Definiertere Kieferlinie und Kinnpartie",
          "Keine Operation, keine Naht, keine Ausfallzeit",
          "Auch für Hände und Körper geeignet",
        ],
        suitableFor: [
          "Leichter bis mäßiger Hautüberschuss",
          "Lockere Haut im Gesicht und am Hals",
          "Alle, die eine Operation vermeiden möchten",
          "Zur Verstärkung anderer Behandlungen",
        ],
        process: [
          {
            title: "Analyse",
            description:
              "Wir bestimmen den Grad der Erschlaffung und die Zieltiefe.",
          },
          {
            title: "Markierung der Linien",
            description:
              "Die Behandlungslinien werden markiert, damit die Energie exakt die richtige Tiefe erreicht.",
          },
          {
            title: "Ultraschall-Behandlung",
            description:
              "Kartuschen geben die Energie in der geplanten Tiefe ab; kurze starke Wärme ist normal.",
          },
          {
            title: "Schrittweises Ergebnis",
            description:
              "Neues Kollagen entsteht in den Folgemonaten und das Ergebnis bessert sich bis zum sechsten Monat.",
          },
        ],
        faq: [
          {
            question: "Was ist HIFU-Therapie?",
            answer:
              "Hochintensiver fokussierter Ultraschall: Er bündelt die Energie in exakter Hauttiefe und regt die Kollagenneubildung an.",
          },
          {
            question: "Wann ist das Ergebnis sichtbar?",
            answer:
              "Die Besserung verläuft schrittweise — teilweise sofort, das Endergebnis entwickelt sich bis zu 6 Monate später.",
          },
          {
            question: "Wann reicht HIFU nicht aus?",
            answer:
              "Bei deutlicher Erschlaffung genügt es allein nicht und sollte nach ärztlicher Abklärung kombiniert werden.",
          },
          {
            question: "Thermage oder HIFU?",
            answer:
              "Thermage arbeitet mit Radiofrequenz, HIFU mit fokussiertem Ultraschall. Die Wahl richtet sich nach Hautstruktur und Erschlaffung.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Behandlungszone und eingesetzten Kartuschen.",
      },
    },
  },

  {
    slug: "mesotherapy",
    image: "/images/services/mesotherapy.jpg",
    copy: {
      fa: {
        title: "مزوتراپی و PRP",
        category: "جوان‌سازی",
        tagline: "تغذیه عمقی پوست و تحریک کلاژن",
        intro: [
          "مزوتراپی کوکتل‌های ویتامین، اسید هیالورونیک و مواد مغذی را به عمق پوست می‌رساند و پوست را از درون تغذیه می‌کند. در روش PRP از پلاسمای غنی از پلاکت خود شما استفاده می‌شود تا ترمیم و کلاژن‌سازی تسریع شود.",
          "این دو روش مکمل هم هستند و برای شفافیت، آبرسانی، تیرگی زیر چشم و تقویت مو کاربرد گسترده‌ای دارند.",
        ],
        facts: [
          { label: "تعداد جلسات", value: "۳ تا ۶ جلسه" },
          { label: "مدت هر جلسه", value: "۲۰ تا ۴۰ دقیقه" },
          { label: "دوره نقاهت", value: "۱ روز" },
          { label: "فاصله جلسات", value: "۲ تا ۴ هفته" },
          { label: "شروع نتیجه", value: "از جلسه دوم" },
        ],
        benefits: [
          "آبرسانی و تغذیه عمیق پوست",
          "افزایش شفافیت و درخشندگی",
          "بهبود تیرگی و گودی زیر چشم",
          "تقویت رشد مو و کاهش ریزش",
          "ترمیم سریع‌تر با PRP",
        ],
        suitableFor: [
          "پوست خسته و کم‌آب",
          "تیرگی زیر چشم",
          "ریزش مو و ضعف فولیکول",
          "آماده‌سازی پوست قبل از عروسی و مجالس",
        ],
        process: [
          {
            title: "مشاوره و انتخاب کوکتل",
            description:
              "بر اساس مشکل پوست یا مو، ترکیب مناسب انتخاب می‌شود.",
          },
          {
            title: "استخراج PRP",
            description:
              "در روش PRP، خون گرفته و پلاسمای غنی از پلاکت جدا می‌شود.",
          },
          {
            title: "تزریق",
            description:
              "با سوزن‌های بسیار ریز و در عمق مناسب، مواد به پوست می‌رسند.",
          },
          {
            title: "مراقبت بعد",
            description:
              "قرمزی خفیف چند ساعته طبیعی است؛ فردا می‌توانید به روال عادی بازگردید.",
          },
        ],
        faq: [
          {
            question: "مزوتراپی چیست؟",
            answer:
              "روشی است که ویتامین‌ها، اسید هیالورونیک و مواد مغذی را مستقیماً به عمق پوست می‌رساند تا تغذیه و کلاژن‌سازی انجام شود.",
          },
          {
            question: "PRP چه تفاوتی با مزوتراپی دارد؟",
            answer:
              "در PRP از پلاسمای غنی از پلاکت خود بیمار استفاده می‌شود؛ بنابراین قدرت ترمیمی بالاتری دارد.",
          },
          {
            question: "برای مو هم مناسب است؟",
            answer:
              "بله؛ مزوتراپی و PRP مو با تغذیه فولیکول‌ها ریزش را کاهش و رشد مو را تقویت می‌کنند.",
          },
          {
            question: "چند جلسه لازم است؟",
            answer:
              "بین ۳ تا ۶ جلسه با فاصله ۲ تا ۴ هفتگی، و سپس جلسات نگهدارنده در صورت نیاز.",
          },
        ],
        priceNote: "هزینه بر اساس نوع کوکتل، PRP یا ترکیب آن‌ها و ناحیه درمان تعیین می‌شود.",
      },

      en: {
        title: "Mesotherapy & PRP",
        category: "Rejuvenation",
        tagline: "Deep skin nourishment and collagen stimulation",
        intro: [
          "Mesotherapy delivers cocktails of vitamins, hyaluronic acid and nutrients deep into the skin, feeding it from within. In PRP, your own platelet-rich plasma is used to speed up repair and collagen production.",
          "The two complement each other and are widely used for radiance, hydration, under-eye darkness and hair strengthening.",
        ],
        facts: [
          { label: "Sessions", value: "3 – 6" },
          { label: "Session time", value: "20 – 40 min" },
          { label: "Downtime", value: "1 day" },
          { label: "Interval", value: "2 – 4 weeks" },
          { label: "Results appear", value: "From session 2" },
        ],
        benefits: [
          "Deep hydration and nourishment",
          "Improved radiance and clarity",
          "Reduced under-eye darkness",
          "Stronger hair growth, less shedding",
          "Faster repair with PRP",
        ],
        suitableFor: [
          "Tired, dehydrated skin",
          "Under-eye pigmentation",
          "Hair loss and weak follicles",
          "Skin preparation before a wedding or event",
        ],
        process: [
          {
            title: "Consultation and cocktail choice",
            description:
              "The blend is selected according to your specific skin or hair concern.",
          },
          {
            title: "PRP extraction",
            description:
              "For PRP, a blood sample is drawn and the platelet-rich plasma is separated.",
          },
          {
            title: "Injection",
            description:
              "Very fine needles deliver the product at the correct depth.",
          },
          {
            title: "Aftercare",
            description:
              "Slight redness for a few hours is normal; you can return to your routine the next day.",
          },
        ],
        faq: [
          {
            question: "What is mesotherapy?",
            answer:
              "A method that delivers vitamins, hyaluronic acid and nutrients directly into the deeper skin to nourish it and stimulate collagen.",
          },
          {
            question: "How does PRP differ?",
            answer:
              "PRP uses your own platelet-rich plasma, which gives it a stronger regenerative effect.",
          },
          {
            question: "Can it be used for hair?",
            answer:
              "Yes. Mesotherapy and PRP for hair nourish the follicles, reduce shedding and strengthen growth.",
          },
          {
            question: "How many sessions are needed?",
            answer:
              "Between 3 and 6 sessions, 2 to 4 weeks apart, followed by maintenance if required.",
          },
        ],
        priceNote:
          "Pricing depends on the cocktail, PRP or a combination, and on the area treated.",
      },

      de: {
        title: "Mesotherapie & PRP",
        category: "Verjüngung",
        tagline: "Tiefe Hautpflege und Kollagenstimulation",
        intro: [
          "Die Mesotherapie bringt Cocktails aus Vitaminen, Hyaluronsäure und Nährstoffen tief in die Haut und nährt sie von innen. Bei PRP wird körpereigenes thrombozytenreiches Plasma eingesetzt, um Regeneration und Kollagenaufbau zu beschleunigen.",
          "Beide Methoden ergänzen sich und werden für Ausstrahlung, Feuchtigkeit, dunkle Augenringe und Haarstärkung eingesetzt.",
        ],
        facts: [
          { label: "Sitzungen", value: "3 – 6" },
          { label: "Dauer pro Sitzung", value: "20 – 40 Min." },
          { label: "Ausfallzeit", value: "1 Tag" },
          { label: "Abstand", value: "2 – 4 Wochen" },
          { label: "Ergebnis sichtbar", value: "Ab Sitzung 2" },
        ],
        benefits: [
          "Tiefe Feuchtigkeit und Pflege",
          "Mehr Ausstrahlung und Klarheit",
          "Weniger dunkle Augenringe",
          "Stärkeres Haarwachstum, weniger Haarausfall",
          "Schnellere Regeneration mit PRP",
        ],
        suitableFor: [
          "Müde, dehydrierte Haut",
          "Pigmentierung unter den Augen",
          "Haarausfall und schwache Follikel",
          "Hautvorbereitung vor Hochzeit oder Anlass",
        ],
        process: [
          {
            title: "Beratung und Cocktailwahl",
            description:
              "Die Mischung richtet sich nach Ihrem konkreten Haut- oder Haarproblem.",
          },
          {
            title: "PRP-Gewinnung",
            description:
              "Für PRP wird Blut abgenommen und das thrombozytenreiche Plasma abgetrennt.",
          },
          {
            title: "Injektion",
            description:
              "Sehr feine Nadeln bringen den Wirkstoff in die richtige Tiefe.",
          },
          {
            title: "Nachsorge",
            description:
              "Leichte Rötung für einige Stunden ist normal; am nächsten Tag geht es im Alltag weiter.",
          },
        ],
        faq: [
          {
            question: "Was ist Mesotherapie?",
            answer:
              "Eine Methode, die Vitamine, Hyaluronsäure und Nährstoffe direkt in die tieferen Hautschichten bringt und die Kollagenbildung anregt.",
          },
          {
            question: "Welcher Unterschied besteht zu PRP?",
            answer:
              "PRP nutzt körpereigenes thrombozytenreiches Plasma und hat dadurch eine stärkere regenerative Wirkung.",
          },
          {
            question: "Ist die Behandlung auch für Haare geeignet?",
            answer:
              "Ja. Mesotherapie und PRP für Haare nähren die Follikel, mindern Haarausfall und stärken das Wachstum.",
          },
          {
            question: "Wie viele Sitzungen sind nötig?",
            answer:
              "Zwischen 3 und 6 Sitzungen im Abstand von 2 bis 4 Wochen, danach bei Bedarf Erhaltungssitzungen.",
          },
        ],
        priceNote:
          "Der Preis richtet sich nach Cocktail, PRP oder Kombination sowie der behandelten Zone.",
      },
    },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
