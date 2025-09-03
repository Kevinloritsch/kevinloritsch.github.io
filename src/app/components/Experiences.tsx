import Header from "@/app/components/Header";
import Experience from "@/app/components/Experience";
import experienceItems from "@/data/ExperienceData";

const Experiences = () => {
  return (
    <div>
      <Header title={"Experiences"} />
      <div className="flex w-full flex-row flex-wrap justify-center">
        {experienceItems.map(({ image, name, entries }, i) => (
          <div key={i} className="w-full py-8">
            <Experience image={image} name={name} entries={entries} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experiences;
