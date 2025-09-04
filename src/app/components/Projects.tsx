import Header from "@/app/components/Header";
import Project from "@/app/components/Project";
import projectItems from "@/data/ProjectsData";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <Header
        title={"My Projects"}
        subtitle1={"Hover to learn about each project!"}
        subtitle2={"Tap and hold to learn more!"}
      />
      <div className="flex w-full flex-col flex-wrap justify-center md:flex-row">
        {projectItems.map(
          ({ image, title, date, description, role, techStack, links }, i) => (
            <div key={i} className="mx-auto w-full py-8 md:mx-0 md:w-2/5">
              <Project
                image={image}
                title={title}
                date={date}
                description={description}
                role={role}
                techStack={techStack}
                links={links}
              />
            </div>
          ),
        )}
      </div>
    </Element>
  );
};
export default Projects;
