type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white">
      <div className="container-shell">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-blue-100">{description}</p>
      </div>
    </section>
  );
}
