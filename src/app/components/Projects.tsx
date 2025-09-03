import Header from "@/app/components/Header";
import Project from "@/app/components/Project";
import projectItems from "@/data/ProjectsData";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <Header
        title={"My Projects"}
        subtitle={"Hover to learn about each project!"}
      />
      <div className="flex w-full flex-row flex-wrap justify-center">
        {projectItems.map(({ image, title, date, description, role }, i) => (
          <div key={i} className="w-2/5 py-8">
            <Project
              image={image}
              title={title}
              date={date}
              description={description}
              role={role}
            />
          </div>
        ))}
      </div>
    </Element>
  );
};
export default Projects;
