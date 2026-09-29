import TeamMemberCard from '../components/TeamMemberCard';

export default function Team() {
  const team = [
    {
      name: "Aditya Ubale",
      role: "Team Leader & Legal Domain Strategist",
      bio: "Led the team from ideation to execution by researching the flood hydrodynamics and disaster-response domain and understanding the requirements of the dam-break and flood-inundation problem. Defined the core features, project requirements and overall solution approach while coordinating the team workflow.",
      image: "images/file_0000000010d48210962ae482b960a639.png",
      linkedin: "https://www.linkedin.com/in/aditya-ubale-3347142b3/"
    },
    {
      name: "Aryan Date",
      role: "Web Developer & Legal Domain Specialist",
      bio: "Contributed to the SETRA web interface and application flow, helping present the scenario configuration, modelling workflow and decision-support outputs in a clear interactive experience.",
      image: "/images/IMG_3455.PNG",
      linkedin: "https://www.linkedin.com/in/aryan-date-1457062b3/"
    },
    {
      name: "Shubham Torkad",
      role: "Full-Stack Developer",
      bio: "Worked across the SETRA application workflow, supporting interactive scenario views, data flow and integration of the modelling and visualization experience.",
      image: "/images/shubham.png",
      linkedin: "https://www.linkedin.com/in/shubham-torkad-b821bb289/"
    },
    {
      name: "Somiya Singh",
      role: "Documentation & Presentation Lead",
      bio: "Gathered and organized key project information, contributed to comprehensive project documentation, and designed the project presentation (PPT). Ensured that SETRA’s objectives, workflow, technical concepts and outputs were clearly structured for presentations and evaluations.",
      image: "/images/somee.jpeg",
      linkedin: "https://www.linkedin.com/in/somiya-singh-3803872b4"
    },
    {
      name: "Tanmayee Borchate",
      role: "Project Support & Research Associate",
      bio: "Supported research, information gathering and project discussions, contributing ideas and feedback during SETRA development and presentation.",
      image: "/images/tanmayee.png",
      linkedin: "https://www.linkedin.com/in/tanmayee-borchate28"
    },
    {
      name: "Sharayu Nagulkar",
      role: "Research & Feature Planning Coordinator",
      bio: "Contributed to research, feature planning and documentation, helping refine SETRA’s scenario workflow and response-oriented features.",
      image: "/images/IMG_3457.PNG",
      linkedin: "https://www.linkedin.com/in/sharayu-nagulkar-064045317"
    }
  ];

  return (
    <div className="bg-white dark:bg-[#0a0d14] pt-4 sm:pt-8 md:pt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 md:pt-16 pb-4 sm:pb-6 md:pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">Team</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 sm:mb-16 max-w-2xl leading-relaxed transition-colors">
          We are a cross-functional team building SETRA as a flood-scenario modelling and HADR decision-support prototype.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
