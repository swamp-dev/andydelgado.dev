import { useRef } from "react";
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaLinux, 
  FaCreditCard, FaDatabase, FaGlobe, FaCode, FaMobile
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiGo, SiCplusplus, SiSvelte, SiHtml5,
  SiMongodb, SiPostgresql, SiAnsible, SiCockroachlabs, SiGithubactions
} from "react-icons/si";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Skill = {
  name: string;
  icon: React.ReactNode;
  url?: string;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

// Skill data - separated for better maintainability
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/" },
      { name: "Golang", icon: <SiGo />, url: "https://golang.org/" },
      { name: "C++", icon: <SiCplusplus />, url: "https://isocpp.org/" },
      { name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    title: "Frontend Development",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact />, url: "https://reactjs.org/" },
      { name: "React Native", icon: <FaMobile />, url: "https://reactnative.dev/" },
      { name: "Svelte", icon: <SiSvelte />, url: "https://svelte.dev/" },
      { name: "HTML/CSS", icon: <SiHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "Mobile Development", icon: <FaMobile />, url: "https://developer.android.com/" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    icon: <FaNodeJs />,
    skills: [
      { name: "AWS", icon: <FaAws />, url: "https://aws.amazon.com/" },
      { name: "Docker", icon: <FaDocker />, url: "https://www.docker.com/" },
      { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com/" },
      { name: "SQL Databases", icon: <SiPostgresql />, url: "https://www.postgresql.org/" },
      { name: "CockroachDB", icon: <SiCockroachlabs />, url: "https://www.cockroachlabs.com/" },
      { name: "RESTful APIs", icon: <FaGlobe />, url: "https://restfulapi.net/" },
      { name: "Node.js", icon: <FaNodeJs />, url: "https://nodejs.org/" },
    ],
  },
  {
    title: "DevOps & Testing",
    icon: <FaDocker />,
    skills: [
      { name: "Ansible", icon: <SiAnsible />, url: "https://www.ansible.com/" },
      { name: "CI/CD", icon: <SiGithubactions />, url: "https://github.com/features/actions" },
      { name: "Automated Testing", icon: <FaCode />, url: "https://jestjs.io/" },
      { name: "Docker Containerization", icon: <FaDocker />, url: "https://www.docker.com/" },
      { name: "Smoke Testing", icon: <FaCode />, url: "https://en.wikipedia.org/wiki/Smoke_testing_(software)" },
    ],
  },
  {
    title: "System Administration",
    icon: <FaLinux />,
    skills: [
      { name: "Linux Server Administration", icon: <FaLinux />, url: "https://www.linux.org/" },
      { name: "Server Optimization", icon: <FaLinux />, url: "https://www.kernel.org/" },
      { name: "Task Automation", icon: <FaCode />, url: "https://www.gnu.org/software/bash/" },
    ],
  },
  {
    title: "FinTech & Industry",
    icon: <FaCreditCard />,
    skills: [
      { name: "Payment Processing", icon: <FaCreditCard />, url: "https://stripe.com/" },
      { name: "Card Integration", icon: <FaCreditCard />, url: "https://www.visa.com/developer/" },
      { name: "Airline Systems", icon: <FaGlobe />, url: "https://www.iata.org/" },
      { name: "Rewards Systems", icon: <FaDatabase />, url: "https://loyalty-rewards.io/" },
    ],
  },
];

// Component to render a single skill tag
function SkillTag({ skill }: { skill: Skill }) {
  return (
    <span
      className="flex items-center bg-primary/5 text-primary px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md hover:bg-primary/15 group"
    >
      <span className="mr-1.5 flex items-center group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </span>
      <span className="relative">
        {skill.name}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </span>
    </span>
  );
}

// Component to render a skill category card
function SkillCategoryCard({ 
  category, 
  index,
  setRef 
}: { 
  category: SkillCategory;
  index: number;
  setRef: (index: number) => (el: HTMLDivElement | null) => void;
}) {
  return (
    <div 
      ref={setRef(index)}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-100 card-hover opacity-0 translate-y-4 transition-all duration-500"
    >
      <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
          <span className="text-primary">{category.icon}</span>
        </span>
        {category.title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <SkillTag key={skillIndex} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setRef } = useScrollAnimation({ 
    className: 'animate-visible', 
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  return (
    <section id="skills" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-64 bg-primary/10 transform skew-y-6"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <h2 className="text-2xl font-bold mb-12 text-center relative animate-fade-in">
          <span className="border-b-4 border-primary pb-2">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategoryCard
              key={index}
              category={category}
              index={index}
              setRef={setRef}
            />
          ))}
        </div>
        
        {/* Skills summary */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg shadow-inner opacity-0 translate-y-4 transition-all duration-500" ref={setRef(SKILL_CATEGORIES.length)}>
          <p className="text-center text-gray-700">
            Experienced with a diverse tech stack across multiple industries, specializing in full-stack development,
            cloud infrastructure, and creating reliable, scalable software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
