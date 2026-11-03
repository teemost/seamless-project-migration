import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, HeartPulse, Truck, ShoppingBag, Factory, Building2 } from "lucide-react";
import PageHero from "@/components/urban/PageHero";
import JobSearch from "@/components/urban/JobSearch";

export const Route = createFileRoute("/jobs")({
  validateSearch: (search: Record<string, unknown>) => {
    const q = typeof search.q === "string" && search.q.trim() ? search.q.trim() : undefined;
    return q ? { q } : {};
  },
  head: () => ({
    meta: [
      { title: "Jobs | Urban Operations Management" },
      {
        name: "description",
        content:
          "Explore job opportunities across the industries we serve, or tell us what you are looking for and we will match you.",
      },
      { property: "og:title", content: "Jobs | Urban Operations Management" },
      {
        property: "og:description",
        content: "Find opportunities that match your skills and career goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JobsPage,
});

const categories = [
  {
    icon: HardHat,
    title: "Construction & Engineering",
    text: "Site workers, tradespeople, supervisors and project support.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Caregiving",
    text: "Care assistants, support workers and clinical staff.",
  },
  {
    icon: Truck,
    title: "Logistics & Warehousing",
    text: "Drivers, pickers, packers and warehouse operatives.",
  },
  {
    icon: ShoppingBag,
    title: "Hospitality & Retail",
    text: "Front-of-house teams, sales assistants and stock support.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Production line staff, machine operators and QC support.",
  },
  {
    icon: Building2,
    title: "Office & Administration",
    text: "Admin assistants, coordinators and customer service staff.",
  },
];

function JobsPage() {
  const { q } = Route.useSearch();

  return (
    <>
      <PageHero
        title="Jobs"
        subtitle="Find opportunities that match your skills, experience and career goals."
      />
      <div className="pageBodyCont">
        {q && (
          <p className="jobsQueryNote">
            Showing results for “{q}” — live listings are not published yet.
            Send us your details and we will match you with suitable roles.
          </p>
        )}
        <JobSearch defaultValue={q} />

        <div className="TrustIndicatorsHeadCont">
          <h2 className="TrustIndicatorsHeadText">Browse by category</h2>
        </div>
        <div className="infoGrid">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to="/industries"
              className="infoCard catCardLink"
            >
              <cat.icon className="infoCardIcon" aria-hidden="true" />
              <h3 className="infoCardTitle">{cat.title}</h3>
              <p className="infoCardText">{cat.text}</p>
              <ArrowRight className="catCardArrow" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <p className="infoCardText" style={{ textAlign: "center", marginTop: 24 }}>
          Don't see your role?{" "}
          <Link to="/support" className="my-link" style={{ color: "#00688e", fontWeight: 600 }}>
            Contact our team
          </Link>{" "}
          and tell us what you are looking for.
        </p>
      </div>
    </>
  );
}
