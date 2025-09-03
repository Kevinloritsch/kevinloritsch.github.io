import Header from "@/app/components/Header";
import Project from "@/app/components/Project";
import projectItems from "@/data/ProjectsData";

const Projects = () => {
  return (
    <div>
      <Header
        title={"My Projects"}
        subtitle={"Hover to learn about each project!"}
      />
      <div className="flex w-full flex-row flex-wrap justify-center">
        {projectItems.map(({ image, title, description }, i) => (
          <div key={i} className="w-2/5 py-8">
            <Project image={image} title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
