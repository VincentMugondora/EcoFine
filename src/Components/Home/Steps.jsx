import Icon from "../../assets/img/steps (1).png";
import Icon2 from "../../assets/img/steps (2).png";
import Icon3 from "../../assets/img/steps (3).png";
import Icon4 from "../../assets/img/solar-energy.png";
import "./HomeComponents.css";
import Arrow from "../../assets/img/process-arrow1-1 (1).webp";
import Arrow2 from "../../assets/img/process-arrow1-1.webp";
import Arrow3 from "../../assets/img/process-arrow1-2.webp";

const Steps = () => {
  const cards2 = [
    { id: "01", icon: Icon, text: "Sustain Solutions", arrow: Arrow },
    { id: "02", icon: Icon2, text: "Renewable Energy", arrow: Arrow3 },
    { id: "03", icon: Icon3, text: "Green Building", arrow: Arrow2 },
    { id: "04", icon: Icon4, text: "Sustainable" },
  ];

  return (
    <div className="#FFFFFF relative h-[93vh] overflow-hidden">
      <div className="container z-10">
        <h4 className="text-center text-[#00b04d]">4 STEP PROCESS</h4>
        <h2 className="text-center">Go Green And Reduce Your</h2>
        <h2 className="text-center">Carbon Footprint</h2>
        <div className="flex justify-between mt-10">
          {cards2.map((car, index) => (
            <div key={car.id}>
              <div
                className={`circle ${
                  index === 1 || index === cards2.length - 1 ? "mt-20" : ""
                }`}
              >
                <div className="flex items-center justify-center gap-10">
                  <div className="bg-[#F8F7F0] w-48 h-48 flex justify-center items-center rounded-full relative cards">
                    <img
                      className="w-12 transition-transform duration-500 ease-in-out flip-hover"
                      src={car.icon}
                      alt="icon"
                    />
                    <div className="bg-[#00b04d] w-10 h-10 flex items-center justify-center text-white absolute top-0 right-0 rounded-full">
                      {car.id}
                    </div>
                  </div>
                  <img src={car.arrow} alt="" />
                </div>
                <h5>{car.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="trees w-[50%] h-80 absolute right-0"></div>
      <div className="branch w-[20%] h-48 absolute top-0"></div>
      <div className="leaf w-16 absolute top-11 left-28  h-16"></div>
      <div className="butterfly absolute top-11 w-12 h-12"></div>
    </div>
  );
};

export default Steps;
