import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/urban/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Urban Operations Management" },
      {
        name: "description",
        content:
          "The terms that govern the use of the Urban Operations Management website and services.",
      },
      {
        property: "og:title",
        content: "Terms of Service | Urban Operations Management",
      },
      {
        property: "og:description",
        content: "The terms that govern the use of our website and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="The terms that govern the use of this website and our services."
      />
      <div className="aboutUsContent" style={{ marginTop: 30 }}>
        <p>
          <em>
            This is standard placeholder text. Please have it reviewed and
            replaced with your organization's official terms before relying on
            it.
          </em>
        </p>
        <h3>Use of this website</h3>
        <p>
          By using this website you agree to use it lawfully and respectfully.
          You may not attempt to disrupt the website, access data that is not
          intended for you, or use it to send misleading or unlawful content.
        </p>
        <h3>Our services</h3>
        <p>
          Urban Operations Management provides recruitment, staffing and
          workforce coordination services. Specific engagements, including
          fees, timelines and scope, are agreed directly with each client
          before work begins.
        </p>
        <h3>No employment guarantee</h3>
        <p>
          For job seekers, matching and placement depend on suitable
          opportunities being available. Use of this website does not create a
          guarantee of employment.
        </p>
        <h3>Intellectual property</h3>
        <p>
          The content, branding and design of this website belong to Urban
          Operations Management and may not be copied or reused without
          permission.
        </p>
        <h3>Limitation of liability</h3>
        <p>
          We work carefully and professionally, but this website is provided
          "as is" and we are not liable for indirect losses arising from its
          use. Nothing in these terms limits liability that cannot be limited
          by law.
        </p>
        <h3>Contact</h3>
        <p>
          Questions about these terms can be sent to us through the Support
          page.
        </p>
      </div>
    </>
  );
}
