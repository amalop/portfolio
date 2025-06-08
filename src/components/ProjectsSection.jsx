import { ArrowRight, ExternalLink, Github } from "lucide-react";

let lastHue = null;
function getRandomColor() {
  let hue;
  do {
    hue = Math.floor(Math.random() * 360);
  } while (Math.abs(hue - lastHue) < 30); // prevent similar hues
  lastHue = hue;
  return `hsl(${hue}, 70%, 50%)`;
}

const projects = [
  {
    id: 1,
    title: "Project Management System",
    slug: "PMS",
    image: "",
    description:
      "A web application designed to help organizations efficiently manage projects, track progress, and facilitate seamless collaboration across teams.",
    tags: ["Yii1", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Human Resource Management System",
    slug: "HRMS",
    image: "",
    description:
      "A web-based solution for managing employee data, attendance, and automating HR operations, especially for academic institutions.",
    tags: ["CodeIgniter 4", "HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Learning Management System",
    slug: "LMS",
    image: "",
    description:
      "An online learning platform offering structured e-learning experiences accessible to users from anywhere.",
    tags: ["Laravel 7", "HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Global Apps",
    slug: "GLOBAL-APPS",
    image: "",
    description:
      "A centralized core platform that manages internal communication and data flow between various web applications like PMS, COMS, HRMS, and CRM.",
    tags: ["Laravel 9", "HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Web Traffic Generator",
    slug: "WTG",
    image: "",
    description:
      "A web and mobile application used to simulate and generate traffic for performance testing and analysis of web applications.",
    tags: ["Laravel 9", "HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Stock Management System",
    slug: "Stock",
    image: "",
    description:
    "A comprehensive system to manage spares and inventory efficiently. Users can add new stock items, raise tickets for defective or needed stocks, and track the repair process. When a ticket is closed, repaired defective stocks are added back to the inventory, ensuring accurate stock levels and streamlined maintenance workflows.",
    tags: ["Yii", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 7,
    title: "Bill of Quantity",
    slug: "BOQ",
    image: "",
    description:
      "A system for estimating project costs, planning materials, and tracking budgets to ensure efficient resource allocation and financial control.",
    tags: ["Yii2", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className="h-48 flex items-center justify-center text-white font-bold text-lg overflow-hidden"
                    style={{
                      backgroundColor: getRandomColor(),
                    }}
                  >
                    {project.slug}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    ) }
                    { project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/amalop"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
