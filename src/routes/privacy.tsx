import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/urban/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Urban Operations Management" },
      {
        name: "description",
        content:
          "How Urban Operations Management collects, uses and protects your personal information.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | Urban Operations Management",
      },
      {
        property: "og:description",
        content: "How we collect, use and protect your personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal information."
      />
      <div className="pageBodyCont">
        <article className="legalBody">
          <p className="legalUpdated">Last updated: June 2025</p>
          <h3>Information we collect</h3>
          <p>Candidates may share contact details, a resume or work history, skills, qualifications, availability, preferences, and messages they send us. Employers may share contact and business details, role requirements, hiring plans, and feedback about candidates.</p>
          <p>We also receive information when you use the site, such as basic device or usage details, and information you choose to provide through forms or other communications.</p>
          <h3>How we use it</h3>
          <p>We use information to provide recruitment and staffing services, understand role requirements, assess and communicate about potential matches, respond to enquiries, and maintain and improve our site and services.</p>
          <p>We use candidate information to consider relevant opportunities and, where appropriate, discuss a potential match with the candidate before introducing them to an employer.</p>
          <h3>Sharing</h3>
          <p>We share personal information only as needed to deliver the service, such as sharing relevant candidate details with an employer for a potential role, or role details with candidates. We may also share information with service providers who support our operations, and where necessary to protect people, our services, or comply with applicable requirements.</p>
          <h3>Data retention</h3>
          <p>We keep information for as long as reasonably needed for the recruitment relationship, the purposes described here, and routine business records. When information is no longer needed, we take reasonable steps to delete it or remove identifying details, subject to any applicable retention requirements.</p>
          <h3>Your choices</h3>
          <p>You can choose what information to provide, though this may affect our ability to consider you for roles or respond to a request. You may ask us to update or remove information we hold about you, or raise a privacy question, by contacting us via the support page.</p>
          <h3>Cookies</h3>
          <p>Our site may use cookies or similar technologies to support basic functionality and understand site usage. You can manage cookies through your browser settings; disabling them may affect some site features.</p>
          <h3>Changes to this policy</h3>
          <p>We may update this policy as our services or practices change. The latest version will be posted on this page with its updated date.</p>
        </article>
      </div>
    </>
  );
}
