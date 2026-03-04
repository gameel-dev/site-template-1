type PageHeroProps = {
  title: string;
  description?: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="py-16 sm:py-20 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">{title}</h1>
        {description && (
          <p className="text-white/80 max-w-xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
