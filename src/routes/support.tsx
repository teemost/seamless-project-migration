import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/urban/PageHero";
import ContactForm from "@/components/urban/ContactForm";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support | Urban Operations Management" },
      {
        name: "description",
        content:
          "Get in touch with Urban Operations Management — whether you are a job seeker or an employer, we are here to help.",
      },
      {
        property: "og:title",
        content: "Support | Urban Operations Management",
      },
      {
        property: "og:description",
        content: "Questions about jobs, hiring or our services? Talk to us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportPage,
});

const highlights = [
  {
    icon: MessageSquare,
    title: "We listen first",
    text: "Every enquiry is read by a person, not a filter. Tell us exactly what you need.",
  },
  {
    icon: Clock,
    title: "Prompt replies",
    text: "We aim to respond to every message within one business day.",
  },
  {
    icon: ShieldCheck,
    title: "Straight answers",
    text: "If we are not the right fit for your need, we will tell you honestly.",
  },
];

function SupportPage() {
  return (
    <>
      <PageHero
        title="Support"
        subtitle="Whether you are looking for work or looking for people, our team is ready to help."
      />
      <div className="pageBodyCont">
        <div className="infoGrid">
          {highlights.map((item) => (
            <div key={item.title} className="infoCard">
              <item.icon className="infoCardIcon" aria-hidden="true" />
              <h3 className="infoCardTitle">{item.title}</h3>
              <p className="infoCardText">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="TrustIndicatorsHeadCont">
          <h2 className="TrustIndicatorsHeadText">Send us a message</h2>
        </div>
        <ContactForm />

        <p className="infoCardText" style={{ textAlign: "center", marginTop: 24 }}>
          Quick answers to common questions are on our{" "}
          <Link to="/faqs" style={{ color: "#00688e", fontWeight: 600 }}>
            FAQs page
          </Link>
          .
        </p>
      </div>
    </>
  );
}
