import Navbar from "../Components/Navbar";
import "../Components/About/About.css";
import AboutUs from "./About/AboutUs";
import AboutMetrics from "./About/AboutMetrics";

const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <section className="h-[80vh] about2">
        <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center text-white text-6">
          <h2>About Us</h2>
          <p className="flex gap-1">
            Ecofine{" "}
            <div className="w-[1px] h-4 bg-green-700 transform rotate-6 mt-1"></div>{" "}
            About Us
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-20">
        <AboutUs />
        <AboutMetrics />
      </section>
    </div>
  );
};

export default About;
