import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/urban/Header";
import AboutUs from "@/components/urban/AboutUs";
import Services from "@/components/urban/Services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Urban Operations Management" },
      {
        name: "description",
        content:
          "Learn about Urban Operations Management — our mission, vision and values, and the workforce and operations services we provide.",
      },
      { property: "og:title", content: "About Urban Operations Management" },
      {
        property: "og:description",
        content:
          "Our mission, vision and values — connecting people with opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Header />

      <div className="aboutSectionCont">
        <div className="TrustIndicatorsHeadCont">
          <h1 className="aboutSectionHead">About Us</h1>
        </div>
      </div>

      <AboutUs />
      <Services />
    </>
  );
}
