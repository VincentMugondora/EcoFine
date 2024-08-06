import "./Home.css";
import "../assets//bootstrap/bootstrap.min.css";
import Navbar from "./Navbar";
import Img from "../assets/img/hero-5-1.webp";
import AboutImg from "../assets/img/about_2-1.webp";
import Leaf1 from "../assets/img/leaf1-removebg-preview.png";
import Leaf2 from "../assets/img/leaf-removebg-preview.png";
import Leaf3 from "../assets/img/fresh-green-leaves-with-water-drops.png";
import Service1 from "../assets/img/service_4-1.webp";
import Service2 from "../assets/img/service_4-2.webp";
import Service3 from "../assets/img/service_4-3.webp";
import Sustain from "../assets/img/1-1.webp";
import Sustain2 from "../assets/img/1-2.webp";
import Sustain3 from "../assets/img/1-3.webp";
import Sustain4 from "../assets/img/1-4.webp";
import Icon from "../assets/img/earth-day.png";
import Icon2 from "../assets/img/eco-home.png";
import Icon3 from "../assets/img/eco-bag.png";
import Icon4 from "../assets/img/earth.png";
import LatestProjects from "./Home/LatestProjects";
import Steps from "./Home/Steps";
import Questions from "./Home/Questions";
import Team from "./Home/Team";
import Testimonials from "./Home/Testimonials";

const Home = () => {
  const cards = [
    { image: Service1, heading: "Service 01", text: "Carbon Offsetting" },
    { image: Service2, heading: "Service 02", text: "E-Waste Recycling" },
    { image: Service3, heading: "Service 03", text: "Water Conservation" },
  ];

  const cardsTwo = [
    { icon: Icon, num: "200+", text: "Team member" },
    { icon: Icon4, num: "10k+", text: "Complete project" },
    { icon: Icon2, num: "20+", text: "Winning award" },
    { icon: Icon3, num: "900+", text: "Client review" },
  ];

  return (
    <div className="cont">
      <section className=" banner">
        <Navbar />
        <div className="text">
          <h5 className="text-white text-2xl">Be Natural</h5>
          <h1 className="text-white text-7xl">
            Preserving the earth for future generations
          </h1>
          <p className="text-white text-4xl">
            One important area of ecology is conversation biology which focuses
            on protecting endangered ecosystems and species!
          </p>
          <div className="btn">
            <button className="bg-white pt-[10px] pb-[10px] pl-[60px] pr-[60px] text-[#7A523E] text-[1.2rem] btn1">
              Discover More{" "}
              <box-icon name="chevrons-right" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
        <img className="img" src={Img} alt="img" />
      </section>

      {/* About Section */}
      <section className="about container">
        <div className="row">
          <div className="col-md-6">
            <div className="first relative">
              <div className="line"></div>
              <img className="float-right" src={AboutImg} alt="img" />
              <div className="dotted-rectangle"></div>
              <div className="float-left animate-up-down image">
                <a href="https://youtu.be/RmCH_--xHT8" target="_blank">
                  <box-icon
                    name="play-circle"
                    animation="tada"
                    flip="horizontal"
                    color="#00b150"
                    size="70px"
                  ></box-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 pl-4 flex flex-col">
            <h5 className="text-[#00b150]">ABOUT WITH US</h5>
            <h1>The true supporter of eco-friendliness</h1>
            <div className="text flex gap-3">
              <>
                <box-icon
                  type="solid"
                  color="#00b150"
                  size="30px"
                  name="check-circle"
                ></box-icon>
              </>
              <div className="cont1">
                <h4>E-Waste Recycling</h4>
                <p className="[w-[80%]]">
                  The goal of ecology is to understand how organisms interact
                  with each other and their environment organisms interact.
                </p>
              </div>
            </div>
            <div className="text flex gap-3">
              <>
                <box-icon
                  type="solid"
                  color="#00b150"
                  size="30px"
                  name="check-circle"
                ></box-icon>
              </>
              <div className="cont1">
                <h4>Natural Cleaners</h4>
                <p className="[w-[80%]]">
                  Ecologists use a variety of methods, such as field
                  observations, experiments, and modeling, to study the complex.
                </p>
              </div>
            </div>
            <div className="text flex gap-3">
              <>
                <box-icon
                  type="solid"
                  color="#00b150"
                  size="30px"
                  name="check-circle"
                ></box-icon>
              </>
              <div className="cont1">
                <h4>Ecology is a crucial</h4>
                <p className="[w-[80%]]">
                  Ecology is a crucial field of study, as it helps us understand
                  the impact of human activities on the environment organisms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1">
            <img className="leaves leave1" src={Leaf1} alt="img" />
            <img className="leaves leave2" src={Leaf2} alt="img" />
            <img className="leaves leave3" src={Leaf3} alt="img" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services mt-11 section">
        <div className="container">
          <h5 className="title green1">Our Services</h5>
          <h1>Preserving The Earth For Future Generations</h1>
          <div className="container1">
            {cards.map((card) => (
              <div className="card-cont" key={Math.random()}>
                <img src={card.image} alt="" />
                <div className="card">
                  <p>{card.heading}</p>
                  <h3>{card.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support">
        <div className="container bg-[#00b04d] rounded-md flex items-center justify-evenly pb-16 pt-16">
          <img src={Sustain} alt="img" />
          <img src={Sustain2} alt="img" />
          <img src={Sustain3} alt="img" />
          <img src={Sustain4} alt="img" />
        </div>
      </section>

      {/* SUSTAIN SECTION */}
      <section className="sustain  pb-20 pt-20 text-white relative">
        <div className="bg-[#00b04d] h-72 flex flex-col justify-center">
          <div className="container">
            <h2 className="title green1">Go green and reduce your carbon</h2>
            <div className="flex justify-between align-bottom">
              <h2>footprint</h2>
              <button className="border-2 border-white rounded w-52 h-12 text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between container mt-[-70px]">
          {cardsTwo.map((card) => (
            <div
              className="card-cont bg-white flex flex-col items-center justify-center pt-16 pb-16 p-10 text-black rounded shadow"
              key={Math.random()}
            >
              <img
                className="w-10 transition-transform duration-500 ease-in-out flip-hover"
                src={card.icon}
                alt="icon"
              />
              <h2>{card.num}</h2>
              <h4>{card.text}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <div className="container">
          <h4 className="text-[#00b04d]">LATEST PROJECT</h4>
          <div className="flex justify-between">
            <h1 className="w-[40%]">Green thinking for better world</h1>
            <button className="bg-[#00b04d] w-52 text-white rounded h-16">
              Our Latest Projects
            </button>
          </div>
          <LatestProjects />
        </div>
      </section>
      <section>
        <Steps />
        <Questions />
      </section>
      <Team />
      <Testimonials />
    </div>
  );
};

export default Home;
