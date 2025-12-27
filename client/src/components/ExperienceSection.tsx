import { useRef } from "react";
import { FaExternalLinkAlt, FaCreditCard, FaDatabase, FaPlane, FaUniversity } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  logo?: React.ReactNode;
  period: string;
  location: string;
  responsibilities: string[];
};

// Experience data - separated for better maintainability
const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Payroll Integrations",
    companyUrl: "https://www.payrollintegrations.com",
    logo: (
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
        <FaDatabase size={28} />
      </div>
    ),
    period: "December 2025 - Current",
    location: "Remote - Belleview, FL",
    responsibilities: [
      "Building Node.js services and integrating with third-party payroll and benefits APIs",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Jenius Bank",
    companyUrl: "https://www.jeniusbank.com",
    logo: (
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
        <FaUniversity size={28} />
      </div>
    ),
    period: "May 2025 - December 2025",
    location: "Remote - Belleview, FL",
    responsibilities: [
      "Designed and implemented internal experimentation system with normalized SQL schema, enabling controlled rollout of credit and fraud strategies",
      "Led development of loan top-up service, coordinating with product teams to define requirements and integrate with internal customer data systems",
      "Drove adoption of linting standards and commit hooks across the team, reducing code review friction and improving codebase consistency",
      "Contributed to credit strategy rollouts including decisioning engine updates, microservice changes, and expanded test coverage",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Karma Wallet",
    companyUrl: "https://karmawallet.io",
    logo: (
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
        <FaCreditCard size={28} />
      </div>
    ),
    period: "November 2022 - March 2025",
    location: "Remote - Belleview, FL",
    responsibilities: [
      "Led key initiatives in creating the Karma Wallet debit card, including integrating with a third-party card provider's API to enable users to earn rewards for shopping with sustainable merchants",
      "Designed and implemented a dynamic rewards system that matched merchants offering rewards with Karma Wallet's company data, enhancing user engagement and promoting sustainability",
      "Built streamlined application process leveraging web sockets and webhook-driven data orchestration, ensuring seamless user verification and integration with the card provider",
      "Extended rewards system to display real-time local offers on a map within the mobile app, enhancing user experience and driving app engagement",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Array",
    companyUrl: "https://www.array.io",
    logo: (
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
        <FaDatabase size={28} />
      </div>
    ),
    period: "January 2022 - November 2022",
    location: "Remote - Belleview, FL",
    responsibilities: [
      "Introduced automated testing, Docker containerization, and Ansible-driven task automation to improve development efficiency and streamline team workflows",
      "Developed a monitoring service API using Golang and CockroachDB, enabling real-time alerts for users about nearby criminal offenders",
      "Led development of API smoke test coverage, increasing release reliability and reducing production issues",
      "Mentored engineers by teaching problem-solving techniques and fostering skill development, enhancing overall team performance and collaboration",
    ],
  },
  {
    title: "Software Developer",
    company: "Accelya",
    companyUrl: "https://www.accelya.com",
    logo: (
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
        <FaPlane size={28} />
      </div>
    ),
    period: "October 2018 - January 2022",
    location: "Remote - Belleview, FL",
    responsibilities: [
      "Extended Pricing API functionality to deliver optimized airline fare comparison data, improving user decision-making",
      "Maintained and optimized custom database alternative to ensure airline fare data on servers is kept up-to-date",
      "Designed and developed new API products, enabling airlines to streamline ticket exchanges and returns, improving operational efficiency",
    ],
  },
];

// Component to render a single experience item
function ExperienceItem({ 
  experience, 
  index, 
  setRef 
}: { 
  experience: ExperienceItem; 
  index: number; 
  setRef: (index: number) => (el: HTMLDivElement | null) => void;
}) {
  return (
    <div 
      key={index} 
      className="relative opacity-0 translate-y-8 transition-all duration-700"
      ref={setRef(index)}
    >
      {/* Timeline connector dot and bend */}
      <div className="absolute left-4 sm:left-12 -translate-x-1/2 top-16 flex items-center">
        <div className="w-6 h-6 rounded-full bg-primary z-10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="absolute w-10 h-10 rounded-full border-2 border-primary/30 animate-pulse opacity-30"></div>
        </div>
        
        {/* Horizontal connector line */}
        <div className="h-0.5 w-6 sm:w-10 bg-gradient-to-r from-primary to-primary/30"></div>
      </div>
      
      {/* Main content container - full width on mobile, wider on desktop */}
      <div className="ml-14 sm:ml-28 mr-2 sm:mr-6 sm:w-[calc(100%-7rem)] lg:w-[calc(100%-10rem)]">
        <div className="bg-white rounded-xl p-5 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex flex-col">
            {/* Top row with logo, title and company */}
            <div className="flex items-start gap-4 sm:gap-6 mb-5">
              <div className="flex-shrink-0 hidden sm:block">
                {experience.logo}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1 sm:mb-2">
                  <div className="block sm:hidden mr-1">
                    {experience.logo}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                </div>
                {experience.companyUrl ? (
                  <a 
                    href={experience.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-primary transition-colors group"
                  >
                    {experience.company}
                    <FaExternalLinkAlt className="inline-block w-2.5 h-2.5 ml-1 mb-1 opacity-70 group-hover:opacity-100" />
                  </a>
                ) : (
                  <p className="text-lg text-gray-700">{experience.company}</p>
                )}
              </div>
            </div>
            
            {/* Period and location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-5 text-sm">
              <div className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary inline-block sm:inline-flex">
                {experience.period}
              </div>
              <span className="hidden sm:block text-gray-400">•</span>
              <p className="text-gray-600">{experience.location}</p>
            </div>
            
            {/* Responsibilities */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Responsibilities</h4>
              <ul className="space-y-4">
                {experience.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 font-bold">•</span>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setRef } = useScrollAnimation({ 
    className: 'animate-timeline-item', 
    threshold: 0.15,
    rootMargin: '-50px 0px'
  });

  return (
    <section id="experience" className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 text-center relative animate-fade-in">
          <span className="border-b-4 border-primary pb-2">Work Experience</span>
        </h2>
        
        {/* Timeline with connected dots on left side */}
        <div className="relative py-10" ref={sectionRef}>
          {/* Timeline line at the left */}
          <div className="absolute left-4 sm:left-12 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 rounded-full"></div>
          
          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceItem 
                key={index}
                experience={experience} 
                index={index} 
                setRef={setRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
