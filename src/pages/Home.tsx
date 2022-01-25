import Section from "../components/Section";
import { homeSections } from "../data/home-sections";

const Home = () => {
  return (
    <>
      {homeSections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </>
  );
};

export default Home;
