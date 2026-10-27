import Link from "next/link";

import { Container } from "@/design-system/ui/Container";
import { ArrowRightIcon } from "@/design-system/icons";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
};

/**
 * Shared inner-page header: an espresso band with an eyebrow, a serif title
 * and an optional lead. Breadcrumbs sit above the title.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children
}: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div aria-hidden className="page-hero__wash" />
      <Container>
        <div className="page-hero__inner">
          {breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className="page-hero__crumbs">
              <ol>
                {breadcrumbs.map((crumb, i) => {
                  const last = i === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.label}>
                      {crumb.href && !last ? (
                        <Link href={crumb.href} className="page-hero__crumb">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          aria-current={last ? "page" : undefined}
                          className="page-hero__crumb page-hero__crumb--current"
                        >
                          {crumb.label}
                        </span>
                      )}
                      {last ? null : (
                        <ArrowRightIcon
                          size={12}
                          className="page-hero__crumb-sep flip-rtl"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}

          <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>
          <h1 id="page-hero-title" className="page-hero__title">
            {title}
          </h1>
          {lead ? <p className="page-hero__lead">{lead}</p> : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
