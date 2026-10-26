/**
 * Celebrity guests of the practice — transcribed from the live
 * drnasimgholami.com gallery (/the-presence-of-celebrities/).
 * Images live in public/images/celebs and keep their original names.
 */

export type Celeb = {
  /** File name inside /images/celebs (extension included). */
  image: string;
  /** Visible caption — the guest's name, per locale. */
  name: { fa: string; en: string; de: string };
  /** Descriptive alt text (Persian, as on the live site). */
  alt: string;
};

export const celebs: Celeb[] = [
  {
    image: "karim-bagheri-1.webp",
    name: { fa: "کریم باقری", en: "Karim Bagheri", de: "Karim Bagheri" },
    alt: "حضور کریم باقری برای افتتاحیه مطب"
  },
  {
    image: "saed-sohaili.webp",
    name: {
      fa: "ساعد سهیلی و گلوریا هاردی",
      en: "Saed Sohaili & Gloria Hardy",
      de: "Saed Sohaili & Gloria Hardy",
    },
    alt: "ساعد سهیلی و گلوریا هاردی در مطب"
  },
  {
    image: "majid-mozafari2.webp",
    name: { fa: "مجید مظفری", en: "Majid Mozaffari", de: "Majid Mozaffari" },
    alt: "مجید مظفری در مطب دکتر نسیم غلامی"
  },
  {
    image: "shabnam.webp",
    name: {
      fa: "شبنم مقدمی",
      en: "Shabnam Moghadammi",
      de: "Shabnam Moghadammi",
    },
    alt: "حضور شبنم مقدمی در مطب"
  },
  {
    image: "zeynali.webp",
    name: { fa: "ناصر زینعلی", en: "Nasser Zeynali", de: "Nasser Zeynali" },
    alt: "ناصر زینعلی در حال انجام خدمات زیبایی در مطب دکتر نسیم غلامی"
  },
  {
    image: "farshad.webp",
    name: {
      fa: "کمال کامیاب‌نیا، ناصر زینعلی و فرشاد احمدزاده",
      en: "Kamal Kamiab-Nia, Nasser Zeynali & Farshad Ahmadi",
      de: "Kamal Kamiab-Nia, Nasser Zeynali & Farshad Ahmadi",
    },
    alt: "دکتر نسیم غلامی، کمال کامیابی نیا، ناصر زینعلی و فرشاد احمد زاده"
  },
  {
    image: "barbod-1.webp",
    name: { fa: "باربد بابایی", en: "Barbod Babayi", de: "Barbod Babayi" },
    alt: "باربد بابایی در مطب دکتر نسیم غلامی"
  },
  {
    image: "elnaz-habibi.webp",
    name: { fa: "الناز حبیبی", en: "Elnaz Habibi", de: "Elnaz Habibi" },
    alt: "الناز حبیبی در مطب دکتر نسیم غلامی"
  },
  {
    image: "maryam.webp",
    name: { fa: "مریم کاویانی", en: "Maryam Kaviany", de: "Maryam Kaviany" },
    alt: "مریم کاویانی در مطب دکتر غلامی"
  },
  {
    image: "hossein-karimpour2.webp",
    name: {
      fa: "حسین پورکریمی",
      en: "Hossein Pourkarimi",
      de: "Hossein Pourkarimi",
    },
    alt: "حسین پورکریمی در مطب"
  },
  {
    image: "farzad-hassani.webp",
    name: { fa: "فرزاد حسنی", en: "Farzad Hassani", de: "Farzad Hassani" },
    alt: "فرزاد حسنی و دکتر نسیم غلامی"
  },
  {
    image: "nasim-adabi.webp",
    name: { fa: "نسیم ادبی", en: "Nasim Adabi", de: "Nasim Adabi" },
    alt: "حضور نسیم ادبی در مطب"
  },
  {
    image: "baggheri.webp",
    name: { fa: "کریم باقری", en: "Karim Bagheri", de: "Karim Bagheri" },
    alt: "کریم باقری در مطب دکتر نسیم غلامی"
  },
  {
    image: "gloria.webp",
    name: { fa: "گلوریا هاردی", en: "Gloria Hardy", de: "Gloria Hardy" },
    alt: "گلوریا هاردی در کنار دکتر نسیم غلامی"
  },
  {
    image: "karimpour.webp",
    name: {
      fa: "حسین پورکریمی",
      en: "Hossein Pourkarimi",
      de: "Hossein Pourkarimi",
    },
    alt: "حضور حسین پورکریمی در مطب دکتر غلامی"
  },
  {
    image: "majid-mozaffari.webp",
    name: { fa: "مجید مظفری", en: "Majid Mozaffari", de: "Majid Mozaffari" },
    alt: "مجید مظفری در مراسم افتتاحیه مطب"
  },
  {
    image: "mostafa-abedini.webp",
    name: {
      fa: "مصطفی عابدینی",
      en: "Mostafa Abedini",
      de: "Mostafa Abedini",
    },
    alt: "حضور مصطفی عابدینی در مطب"
  },
  {
    image: "naser-zeynali3.webp",
    name: { fa: "ناصر زینعلی", en: "Nasser Zeynali", de: "Nasser Zeynali" },
    alt: "حضور ناصر زینعلی در مطب"
  },
  {
    image: "niki-mozaffari.webp",
    name: { fa: "نیکی مظفری", en: "Niki Mozaffari", de: "Niki Mozaffari" },
    alt: "تولد نیکی مظفری در مطب"
  },
  {
    image: "saba.webp",
    name: { fa: "صبا سهیلی", en: "Saba Sohaili", de: "Saba Sohaili" },
    alt: "صبا سهیلی در مطب"
  },
  {
    image: "saed.webp",
    name: { fa: "ساعد سهیلی", en: "Saed Sohaili", de: "Saed Sohaili" },
    alt: "ساعد سهیلی و همسرش در کنار دکتر نسیم غلامی"
  },
  {
    image: "elham-shabani.webp",
    name: { fa: "الهام شعبانی", en: "Elham Shabani", de: "Elham Shabani" },
    alt: "الهام شعبانی در مطب"
  },
  {
    image: "karimpour-hossein.webp",
    name: {
      fa: "حسین پورکریمی",
      en: "Hossein Pourkarimi",
      de: "Hossein Pourkarimi",
    },
    alt: "حسین پورکریمی در مطب دکتر نسیم غلامی"
  },
  {
    image: "saed-gloria.webp",
    name: {
      fa: "ساعد سهیلی و گلوریا هاردی",
      en: "Saed Sohaili & Gloria Hardy",
      de: "Saed Sohaili & Gloria Hardy",
    },
    alt: "ساعد سهیلی و گلوریا هاردی در مطب"
  },
  {
    image: "sahar-jafari-jozani.webp",
    name: {
      fa: "سحر جعفری جوزانی",
      en: "Sahar Jafari Jozani",
      de: "Sahar Jafari Jozani",
    },
    alt: "سحر جعفری جوزانی در مطب"
  },
  {
    image: "sara.webp",
    name: {
      fa: "سارا منجزی‌پور",
      en: "Sara Manjezipour",
      de: "Sara Manjezipour",
    },
    alt: "سارا منجزی پور در مطب"
  },
  {
    image: "ashkan-orojian.webp",
    name: { fa: "اشکان اروجیان", en: "Ashkan Orojian", de: "Ashkan Orojian" },
    alt: "اشکان اروجیان، مدیر برنامه ناصر زینعلی"
  },
  {
    image: "gloria-hardy.webp",
    name: { fa: "گلوریا هاردی", en: "Gloria Hardy", de: "Gloria Hardy" },
    alt: "گلوریا هاردی در مطب"
  },
  {
    image: "farahbakhsh.webp",
    name: {
      fa: "محمدحسین فرح‌بخش",
      en: "Mohammad Hossein Farahbakhsh",
      de: "Mohammad Hossein Farahbakhsh",
    },
    alt: "محمد حسین فرح بخش، کارگردان سینما"
  },
  {
    image: "faranak.webp",
    name: { fa: "فرانک یوسفی", en: "Faranak Yousefi", de: "Faranak Yousefi" },
    alt: "فرانک یوسفی، مجری"
  },
  {
    image: "masud.webp",
    name: { fa: "مسعود اطیابی", en: "Masoud Atiabi", de: "Masoud Atiabi" },
    alt: "مسعود اطیابی، کارگردان سینما"
  },
  {
    image: "mehdi-vadadi.webp",
    name: { fa: "مهدی ودادی", en: "Mehdi Vadadi", de: "Mehdi Vadadi" },
    alt: "مهدی ودادی، تهیه‌کننده سینما"
  },
  {
    image: "alireza.webp",
    name: {
      fa: "علیرضا جعفرزاده",
      en: "Alireza Jafarzadeh",
      de: "Alireza Jafarzadeh",
    },
    alt: "علیرضا جعفرزاده، ادیتور"
  },
  {
    image: "ashkan.webp",
    name: { fa: "اشکان اروجیان", en: "Ashkan Orojian", de: "Ashkan Orojian" },
    alt: "اشکان اروجیان، مدیر برنامه ناصر زینعلی"
  },
  {
    image: "babak.webp",
    name: { fa: "بابک افشاری", en: "Babak Afshari", de: "Babak Afshari" },
    alt: "بابک افشاری در مطب"
  },
  {
    image: "barbod.webp",
    name: { fa: "باربد بابایی", en: "Barbod Babayi", de: "Barbod Babayi" },
    alt: "باربد بابایی در مطب دکتر نسیم غلامی"
  },
  {
    image: "behrang.webp",
    name: { fa: "بهرنگ توفیقی", en: "Behrang Tavakoli", de: "Behrang Tavakoli" },
    alt: "بهرنگ توفیقی و دکتر نسیم غلامی"
  },
  {
    image: "img_9736.webp",
    name: { fa: "سولماز حسینی", en: "Soulmas Hosseini", de: "Soulmas Hosseini" },
    alt: "سولماز حسینی، بازیگر سریال شغال"
  },
  {
    image: "kamand.webp",
    name: {
      fa: "کمند امیرسلیمانی",
      en: "Kamand Amirsoleymani",
      de: "Kamand Amirsoleymani",
    },
    alt: "کمند امیر سلیمانی و دکتر نسیم غلامی"
  },
  {
    image: "mina.webp",
    name: { fa: "مینا مختاری", en: "Mina Mokhtari", de: "Mina Mokhtari" },
    alt: "مینا مختاری و دکتر نسیم غلامی"
  },
  {
    image: "mona.webp",
    name: { fa: "مونا فائزپور", en: "Mona Faezpour", de: "Mona Faezpour" },
    alt: "مونا فائز پور و دکتر نسیم غلامی"
  },
  {
    image: "sahra.webp",
    name: {
      fa: "صحرا اسدالهی",
      en: "Sahra Asadollahi",
      de: "Sahra Asadollahi",
    },
    alt: "صحرا اسدالهی و دکتر نسیم غلامی"
  },
  {
    image: "sajad.webp",
    name: { fa: "سجاد بابایی", en: "Sajjad Babayi", de: "Sajjad Babayi" },
    alt: "سجاد بابایی در کنار دکتر نسیم غلامی"
  },
];
