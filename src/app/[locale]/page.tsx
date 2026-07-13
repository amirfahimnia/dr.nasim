import { getTranslations, setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const hero = await getTranslations("Hero");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f4ef] px-6">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium text-[#b4874f]">
          {hero("eyebrow")}
        </p>

        <h1 className="text-4xl font-semibold leading-tight text-[#24211f] md:text-6xl">
          {hero("title")}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#68605a] md:text-lg">
          {hero("description")}
        </p>
      </section>
    </main>
  );
}
