/**
 * Clinic facts — transcribed from the live drnasimgholami.com practice site.
 * Keep in sync when the practice changes address, phone or opening hours.
 */

export const clinic = {
  doctor: {
    fullName: {
      fa: "دکتر نسیم غلامی قراب",
      en: "Dr. Nasim Gholami",
      de: "Dr. Nasim Gholami",
    },
    short: {
      fa: "دکتر نسیم غلامی",
      en: "Dr. Nasim Gholami",
      de: "Dr. Nasim Gholami",
    },
    title: {
      fa: "عضو آکادمی پوست آمریکا",
      en: "Member of the American Academy of Dermatology",
      de: "Mitglied der American Academy of Dermatology",
    },
    license: {
      fa: "شماره نظام پزشکی: ۱۳۷۳۰۰",
      en: "Medical Council No. 137300",
      de: "Ärztekammer-Nr. 137300",
    },
  },

  address: {
    fa: "تهران، الهیه، مجتمع مدرن الهیه، طبقه دوم اداری، واحد ۱۲",
    en: "Modern Elahiyeh Complex, 2nd floor, unit 12, Elahiyeh, Tehran",
    de: "Modern-Elahiyeh-Komplex, 2. OG, Einheit 12, Elahiyeh, Teheran",
  },

  phone: { display: "021-22663800", tel: "+982122663800" },
  mobile: { display: "09129055950", tel: "+989129055950" },

  hours: {
    fa: "شنبه تا پنجشنبه • ۱۰:۰۰ تا ۲۰:۰۰",
    en: "Saturday to Thursday • 10:00 – 20:00",
    de: "Samstag bis Donnerstag • 10:00 – 20:00",
  },

  socials: {
    instagram: "https://instagram.com/drnasim",
    telegram: "https://t.me/drnasim",
    whatsapp: "https://wa.me/989129055950",
  },

  team: [
    {
      name: { fa: "سپیده حمیدزاده", en: "Sepideh Hamidzadeh", de: "Sepideh Hamidzadeh" },
      role: { fa: "مدیر داخلی", en: "Practice Manager", de: "Praxismanagerin" },
      photo: "/images/team/sepideh.webp",
    },
    {
      name: { fa: "فاطمه آقایی", en: "Fatemeh Aghaei", de: "Fatemeh Aghaei" },
      role: { fa: "اپراتور لیزر", en: "Laser Technician", de: "Laser-Technikerin" },
      photo: "/images/team/fatemeh.webp",
    },
    {
      name: { fa: "اعظم لرستانی", en: "Azam Lorastani", de: "Azam Lorastani" },
      role: { fa: "اپراتور لیزر", en: "Laser Technician", de: "Laser-Technikerin" },
      photo: "/images/team/azam.webp",
    },
    {
      name: { fa: "الناز اسدی", en: "ElNaz Asadi", de: "ElNaz Asadi" },
      role: { fa: "امور مالی", en: "Finance", de: "Finanzen" },
      photo: "/images/team/elnaz.webp",
    },
    {
      name: { fa: "سوگل صالحی", en: "Sogol Salehi", de: "Sogol Salehi" },
      role: { fa: "فیشالیست", en: "Facialist", de: "Facialistin" },
      photo: "/images/team/sogol.webp",
    },
  ],
} as const;

export type Locale = "fa" | "en" | "de";
