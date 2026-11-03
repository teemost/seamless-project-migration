import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Briefcase,
  Shield,
  Shrink,
  ClipboardList,
  UserCheck,
  Handshake,
} from "lucide-react";
import Header from "@/components/urban/Header";
import JobSearch from "@/components/urban/JobSearch";
import Services from "@/components/urban/Services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Urban Operations Management | Jobs & Workforce Solutions",
      },
      {
        name: "description",
        content:
          "Urban Operations Management connects job seekers with employment opportunities and helps organizations build dependable, capable teams.",
      },
      { property: "og:title", content: "Urban Operations Management" },
      {
        property: "og:description",
        content:
          "The right people, the right jobs — recruitment, staffing and operations support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const steps = [
  {
    num: "01",
    title: "Tell us what you need",
    text: "Job seekers share their skills and career goals; employers share the roles they need filled.",
  },
  {
    num: "02",
    title: "We match and vet",
    text: "Our team shortlists candidates or opportunities that fit, checking skills and experience along the way.",
  },
  {
    num: "03",
    title: "Work begins",
    text: "Placement is confirmed, and both sides get ongoing coordination and support.",
  },
];

function Home() {
  return (
    <>
      <div className="headerCont">
        <div className="subHeaderCont">
          <Header />
          <div className="operationsManagerCont">
            <div className="operationsManagerSubCont">
              <h1 className="heroTitle">THE RIGHT PEOPLE, THE RIGHT JOBS.</h1>
              <p className="heroSub">
                Whether you are looking for your next role or building your
                team, we connect you with the right people.
              </p>
              <JobSearch />
              <div className="heroBtns">
                <Link to="/jobs" className="btnGold">
                  Find a Job
                </Link>
                <Link to="/hiring" className="btnOutlineLight">
                  Hire Talent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="TrustIndicatorsCont">
        <div className="TrustIndicatorsHeadCont">
          <h1 className="TrustIndicatorsHeadText">Trust Indicators</h1>
        </div>
        <div className="TrustIndicatorsSubCont">
          <div className="TrustIndicatorsTextCont">
            <Users className="TrustIndicatorsIcon" aria-hidden="true" />
            <h1 className="TrustIndicatorsTextHead">Talent Matching</h1>
            <span className="TrustIndicatorsTextDis">
              Connecting candidates with suitable opportunities.
            </span>
          </div>

          <div className="TrustIndicatorsTextCont">
            <Briefcase className="TrustIndicatorsIcon" aria-hidden="true" />
            <h1 className="TrustIndicatorsTextHead">Employer Support</h1>
            <span className="TrustIndicatorsTextDis">
              Helping businesses meet workforce needs.
            </span>
          </div>
        </div>

        <div className="TrustIndicatorsSubCont">
          <div className="TrustIndicatorsTextCont">
            <Shield className="TrustIndicatorsIcon" aria-hidden="true" />
            <h1 className="TrustIndicatorsTextHead">Professional Service</h1>
            <span className="TrustIndicatorsTextDis">
              Clear communication throughout the process.
            </span>
          </div>

          <div className="TrustIndicatorsTextCont">
            <Shrink className="TrustIndicatorsIcon" aria-hidden="true" />
            <h1 className="TrustIndicatorsTextHead">Long-Term Partnerships</h1>
            <span className="TrustIndicatorsTextDis">
              Supporting sustainable business relationships.
            </span>
          </div>
        </div>
      </div>

      <div className="TrustIndicatorsHeadCont">
        <h2 className="TrustIndicatorsHeadText">How It Works</h2>
      </div>
      <div className="stepsCont">
        {steps.map((step) => (
          <div key={step.num} className="stepCard">
            <div className="stepNum">{step.num}</div>
            <h3 className="stepTitle">{step.title}</h3>
            <p className="stepText">{step.text}</p>
          </div>
        ))}
      </div>

      <Services />

      <div className="ctaBandCont">
        <h2 className="ctaBandTitle">Ready to get started?</h2>
        <p className="ctaBandText">
          Whether you are searching for your next role or building your team,
          we are ready to help.
        </p>
        <div className="ctaBandBtns">
          <Link to="/jobs" className="btnGold">
            <ClipboardList style={{ verticalAlign: "-3px", marginRight: 8 }} size={18} />
            Find a Job
          </Link>
          <Link to="/hiring" className="btnOutlineLight">
            <UserCheck style={{ verticalAlign: "-3px", marginRight: 8 }} size={18} />
            Hire Talent
          </Link>
        </div>
      </div>
    </>
  );
}
