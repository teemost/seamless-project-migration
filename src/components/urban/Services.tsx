const services = [
  {
    title: "01. Recruitment and Job Placement",
    body: "We help employers identify suitable candidates and help job seekers discover opportunities that align with their skills, experience and career goals.",
  },
  {
    title: "02. Workforce Supply and Staffing",
    body: "Workforce sourcing and staffing coordination for organizations that need qualified personnel for specific projects, shifts or ongoing operations.",
  },
  {
    title: "03. Operations Support",
    body: "Practical support for coordinating people, day-to-day activities and service delivery to help businesses work more efficiently.",
  },
  {
    title: "04. Outsourcing Solutions",
    body: "Support for organizations seeking external workforce or operational assistance tailored to their needs and agreed scope of service.",
  },
  {
    title: "05. Workforce Coordination",
    body: "Assistance with workforce scheduling, role allocation, communication and coordination, depending on each client's requirements.",
  },
];

function Services() {
  return (
    <>
      <div className="TrustIndicatorsHeadCont">
        <h2 className="TrustIndicatorsHeadText">Services</h2>
      </div>
      <div className="servicesSectionCont">
        {services.map((service) => (
          <div key={service.title} className="servicesSectionListCont">
            <div className="servicesSectionTextCont">
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
