import Header from "@/components/urban/Header";

function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <Header />
      <div className="pageHeroCont">
        <h1 className="pageHeroTitle">{title}</h1>
        {subtitle && <p className="pageHeroSub">{subtitle}</p>}
      </div>
    </>
  );
}

export default PageHero;
