import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HardHat,
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Building2,
  CircleHelp,
} from "lucide-react";
import PageHero from "@/components/urban/PageHero";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Urban Operations Management" },
      {
        name: "description",
        content:
          "The industries Urban Operations Management serves — construction, healthcare, logistics, hospitality, manufacturing and office support.",
      },
      {
        property: "og:title",
        content: "Industries | Urban Operations Management",
      },
      {
        property: "og:description",
        content: "Workforce solutions across the industries we know best.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: HardHat,
    title: "Construction & Engineering",
    text: "Dependable site teams and tradespeople for projects of every size, from short-term covers to full crews.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Caregiving",
    text: "Compassionate, vetted care and support staff for facilities that can never compromise on quality.",
  },
  {
    icon: Truck,
    title: "Logistics & Warehousing",
    text: "Flexible warehouse and driving teams that keep your operation moving through peaks and growth.",
  },
  {
    icon: ShoppingBag,
    title: "Hospitality & Retail",
    text: "People-first front-of-house, sales and stock teams for busy seasons and everyday trading.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Reliable production staff and operators who keep lines running and standards high.",
  },
  {
    icon: Building2,
    title: "Office & Administration",
    text: "Organized administrative and customer service professionals who keep your office running smoothly.",
  },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        subtitle="Workforce solutions across the industries we know best."
      />
      <div className="pageBodyCont">
        <div className="infoGrid">
          {industries.map((industry) => (
            <div key={industry.title} className="infoCard">
              <industry.icon className="infoCardIcon" aria-hidden="true" />
              <h3 className="infoCardTitle">{industry.title}</h3>
              <p className="infoCardText">{industry.text}</p>
            </div>
          ))}
        </div>

        <div className="infoCard" style={{ textAlign: "center", marginTop: 20 }}>
          <CircleHelp className="infoCardIcon" aria-hidden="true" />
          <h3 className="infoCardTitle">Don't see your industry?</h3>
          <p className="infoCardText">
            We take on new sectors where we can add real value.{" "}
            <Link to="/support" style={{ color: "#00688e", fontWeight: 600 }}>
              Talk to us
            </Link>{" "}
            about your workforce needs.
          </p>
        </div>
      </div>
    </>
  );
}
