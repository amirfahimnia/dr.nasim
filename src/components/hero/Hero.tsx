import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { AvatarStack } from "@/design-system/ui/AvatarStack";
import { ArrowLeftIcon } from "@/design-system/icons";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Full-bleed background photograph with cream gradient for text legibility.
          Gradient direction flips in RTL via the `rtl:` variant so the text side
          (start) stays bright on every locale while the doctor stays visible
          on the end side. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/dr-nasim-hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right flip-rtl"
        />
      </div>

      {/* Decorative warm washes over the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -end-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 start-0 h-[28rem] w-[28rem] rounded-full bg-eyebrow/10 blur-3xl"
      />

      <Container>
        <div className="grid min-h-[460px] items-center sm:min-h-[560px] lg:min-h-[620px]">
          <div className="grid max-w-xl gap-5 animate-fade-up">
            <p className="flex items-center gap-2 text-sm font-semibold text-eyebrow">
              <span className="h-px w-8 bg-eyebrow/60" />
              <span>{t("eyebrow")}</span>
            </p>

            <h1
              id="hero-title"
              className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]"
            >
              {t("title")}
            </h1>

            <p className="max-w-xl text-base leading-8 text-body sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button variant="purple" size="lg" className="gap-2">
                {t("primaryAction")}
                <ArrowLeftIcon size={16} />
              </Button>
              <Button variant="outline-light" size="lg">
                {t("secondaryAction")}
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <AvatarStack count={5} size={36} />
              <div className="text-start">
                <p className="text-2xl font-semibold tracking-tight text-ink">
                  +2000
                </p>
                <p className="-mt-0.5 text-sm text-body">{t("patients")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
