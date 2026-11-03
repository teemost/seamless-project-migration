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
      <div className="aboutUsContent" style={{ marginTop: 30 }}>
        <p>
          <em>
            This is standard placeholder text. Please have it reviewed and
            replaced with your organization's official policy before relying
            on it.
          </em>
        </p>
        <h3>Information we collect</h3>
        <p>
          When you contact us or apply for roles through this website, we
          collect the information you provide, such as your name, contact
          details, work history and the contents of your messages. We use this
          information only to respond to your enquiry and to match you with
          suitable opportunities or candidates.
        </p>
        <h3>How we use your information</h3>
        <p>
          We use your information to deliver our recruitment and staffing
          services, to communicate with you about relevant opportunities, and
          to improve our services. We do not sell your personal information to
          third parties.
        </p>
        <h3>Sharing your information</h3>
        <p>
          Your information may be shared with prospective employers as part of
          a recruitment process, but only with your knowledge and consent. We
          may also use trusted service providers who help us operate our
          business, under obligations to keep your information safe.
        </p>
        <h3>Data retention and security</h3>
        <p>
          We keep your information only as long as it is needed for the
          purposes described above or as required by law, and we apply
          reasonable technical and organizational measures to protect it.
        </p>
        <h3>Your rights</h3>
        <p>
          You may ask us to access, correct or delete the personal information
          we hold about you at any time. To make a request, contact us through
          the Support page.
        </p>
        <h3>Changes to this policy</h3>
        <p>
          We may update this policy from time to time. The latest version will
          always be published on this page.
        </p>
      </div>
    </>
  );
}
