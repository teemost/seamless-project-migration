import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/urban/PageHero";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Urban Operations Management" },
      {
        name: "description",
        content:
          "Answers to common questions about finding jobs, hiring staff and working with Urban Operations Management.",
      },
      { property: "og:title", content: "FAQs | Urban Operations Management" },
      {
        property: "og:description",
        content: "Answers to common questions about our services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  {
    q: "How do I apply for jobs through Urban?",
    a: "Send us a message through the Support page telling us about your skills, experience and the kind of role you are looking for. Our team will match you with suitable opportunities.",
  },
  {
    q: "How long does matching usually take?",
    a: "It depends on the role and current demand, but we aim to come back to every candidate with an update within a few working days.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We support organizations of all sizes, from a single temporary cover to ongoing staffing for larger teams.",
  },
  {
    q: "Which industries do you cover?",
    a: "Our core sectors are construction, healthcare, logistics, hospitality, manufacturing and office administration. Visit the Industries page for details.",
  },
  {
    q: "How do employers request staff?",
    a: "Employers can reach us through the Support page with their requirements — roles, shifts, headcount and timelines — and we will come back with a plan.",
  },
  {
    q: "Is there a fee for job seekers?",
    a: "Our candidate services are free for job seekers. Businesses are charged according to the services they use, as agreed before we begin.",
  },
];

function FaqsPage() {
  return (
    <>
      <PageHero
        title="FAQs"
        subtitle="Quick answers to the questions we hear most often."
      />
      <div className="pageBodyCont">
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.q} className="faqItem">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <p className="infoCardText" style={{ textAlign: "center", marginTop: 24 }}>
          Still have a question?{" "}
          <Link to="/support" style={{ color: "#00688e", fontWeight: 600 }}>
            Send us a message
          </Link>
          .
        </p>
      </div>
    </>
  );
}
