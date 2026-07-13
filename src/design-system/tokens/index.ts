/**
 * Design-system tokens exported as runtime constants.
 *
 * Keep this file in sync with `src/app/globals.css` `:root` block.
 * These constants are intended for use inside JS/TSX where you need
 * the literal value (e.g. dynamic SVG fills, metadata generation).
 */

export const brand = {
  name: "Dr. Nasim Gholami",
  tagline: {
    fa: "پزشکی زیبایی و سلامت پوست",
    en: "Aesthetic Medicine & Skin Health",
    de: "Ästhetische Medizin & Hautgesundheit",
  },
  phone: {
    display: "021-12345678",
    tel: "+982112345678",
  },
  socials: {
    telegram: "https://t.me/drnasim",
    whatsapp: "https://wa.me/989121234567",
    instagram: "https://instagram.com/drnasim",
  },
} as const;

export const palette = {
  cream: "#f8f4ef",
  creamSoft: "#fbf7f2",
  creamLight: "#f1ebe2",
  gold: "#b4874f",
  goldSoft: "#d4af7f",
  goldDeep: "#8e6932",
  eyebrow: "#b8763e",
  sage: "#8aa68e",
  sageDeep: "#6f8a73",
  ink: "#2b2622",
  inkSoft: "#3a342f",
  body: "#6f6358",
  muted: "#9b8e80",
  line: "#e8ddd0",
  surface: "#ffffff",
} as const;
