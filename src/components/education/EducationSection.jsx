import EducationCard from "./EducationCard";
import Section from "../common/Section"
const EducationSection = () => {
  return (
    <Section
      id="projects"
      title="Education"
      subtitle="Recent projects upon which I have worked on."
      className="relative"
    >
      <div className="flex flex-col md:flex-row gap-5 z-20 px-3 md:px-24 2xl:px-[32rem] mt-5 md:mt-0 md:pb-5">
        <EducationCard
          date="August 2010"
          title="Williams College"
          description="I have completed my bachelors degree from Williams College."
        />
      </div>
    </Section>
  );
};
export default EducationSection;
