import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";

function initialsOf(name: string) {
  const words = name.trim().split(/\s+/);
  return ((words[0]?.[0] ?? "") + (words[1]?.[0] ?? "")).toUpperCase();
}

export async function Team() {
  const t = await getTranslations("AboutPage");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="team" aria-labelledby="team-title">
      <Container>
        <div className="team__head">
          <p className="eyebrow">{t("team.eyebrow")}</p>
          <h2 id="team-title" className="team__title">
            {t("team.title")}
          </h2>
          <p className="team__subtitle">{t("team.subtitle")}</p>
        </div>

        <ul className="team__grid" role="list">
          {clinic.team.map((member) => {
            const name = member.name[locale];
            return (
              <li key={member.name.en} className="team__card">
                <span aria-hidden className="team__avatar">
                  {initialsOf(name)}
                </span>
                <span className="team__name">{name}</span>
                <span className="team__role">{member.role[locale]}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
