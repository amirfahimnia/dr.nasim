import { setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/marquee/Marquee";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { Guests } from "@/components/guests/Guests";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { CallToAction } from "@/components/cta/CallToAction";
import { Footer } from "@/components/footer/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Guests />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
