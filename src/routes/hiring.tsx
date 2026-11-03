import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/urban/PageHero";
import Services from "@/components/urban/Services";

export const Route = createFileRoute("/hiring")({
  head: () => ({
    meta: [
      { title: "Hiring | Urban Operations Management" },
      {
        name: "description",
        content:
          "Build dependable teams with Urban Operations Management — recruitment, staffing and workforce coordination for employers.",
      },
      { property: "og:title", content: "Hiring | Urban Operations Management" },
      {
        property: "og:description",
        content: "Workforce solutions that support growth and productivity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HiringPage,
});

const steps = [
  {
    num: "01",
    title: "Share your requirements",
    text: "Tell us the roles, shifts, headcount and timelines you need to cover.",
  },
  {
    num: "02",
    title: "We shortlist and vet",
    text: "We identify candidates whose skills and experience fit your requirements.",
  },
  {
    num: "03",
    title: "Interview and select",
    text: "You meet the shortlisted candidates and choose the people you want on your team.",
  },
  {
    num: "04",
    title: "Onboarding and support",
    text: "We coordinate onboarding and stay available for scheduling and workforce support.",
  },
];

function HiringPage() {
  return (
    <>
      <PageHero
        title="Hiring"
        subtitle="Workforce solutions that help your business operate more effectively — from first brief to onboarding."
      />
      <div className="pageBodyCont">
        <div className="stepsCont4">
          {steps.map((step) => (
            <div key={step.num} className="stepCard">
              <div className="stepNum">{step.num}</div>
              <h3 className="stepTitle">{step.title}</h3>
              <p className="stepText">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Services />

      <div className="ctaBandCont">
        <h2 className="ctaBandTitle">Need people on your team?</h2>
        <p className="ctaBandText">
          Tell us what your business needs and we will come back with a plan.
        </p>
        <div className="ctaBandBtns">
          <a href="/support" className="btnGold">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
