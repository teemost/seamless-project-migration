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
      <div className="pageBodyCont">
        <article className="legalBody">
          <h3>About these terms</h3>
          <p>These terms explain the basic rules for using the Urban Operations Management website and our recruitment and staffing services. Any specific service engagement may also be covered by separate arrangements agreed with the relevant parties.</p>
          <h3>Using the site</h3>
          <p>Use the site lawfully and provide information that is accurate to the best of your knowledge. Do not misuse the site, interfere with its operation, attempt to access areas or information not intended for you, or submit unlawful or misleading material.</p>
          <h3>For job seekers</h3>
          <p>You are responsible for keeping the information you provide current and for deciding what information to share with us. We may use it to consider you for relevant opportunities and, where appropriate, discuss a potential introduction with you.</p>
          <h3>For employers</h3>
          <p>Employers are responsible for providing accurate role details and requirements, and for making their own hiring decisions. Candidate information we provide is for recruitment consideration and should be handled appropriately and only for that purpose.</p>
          <h3>No guarantee of placement</h3>
          <p>We do not guarantee that a candidate will receive an offer or that an employer will fill a role. Outcomes depend on factors including availability, requirements, and decisions made by candidates and employers.</p>
          <h3>Fees and engagement</h3>
          <p>Any fees, scope, and terms for recruitment or staffing work will be discussed and agreed directly before the relevant engagement begins. Nothing on the website sets a fee or creates an engagement unless separately agreed.</p>
          <h3>Availability of the site</h3>
          <p>We aim to keep the site useful and available, but cannot promise uninterrupted access or that every feature will always be error-free. We may update, suspend, or withdraw parts of the site as needed.</p>
          <h3>Changes to these terms</h3>
          <p>We may revise these terms from time to time to reflect changes to the site or our services. The current version will be published on this page, and continued use of the site after a change means you are using the updated version.</p>
          <h3>Governing understanding</h3>
          <p>These terms describe the general understanding for use of this website and do not replace specific written arrangements for a service engagement. If you have a question about these terms, please contact us via the support page.</p>
        </article>
      </div>
    </>
  );
}
