import Icon from "../../assets/img/eco-bag (1).png";
import Icon2 from "../../assets/img/eco-home.png";
import Icon3 from "../../assets/img/eco-house.png";
import Icon4 from "../../assets/img/eco-bag.png";

const Steps = () => {
  const cards2 = [
    { id: "01", icon: Icon, text: "Sustain Solutions" },
    { id: "02", icon: Icon2, text: "Renewable Energy" },
    { id: "03", icon: Icon3, text: "Green Building" },
    { id: "04", icon: Icon4, text: "Sustainable" },
  ];

  return (
    <div className="#FFFFFF">
      <div className="container">
        <h4 className="text-center text-[#00b04d]">4 STEP PROCESS</h4>
        <h2 className="text-center">Go Green And Reduce Your</h2>
        <h2 className="text-center">Carbon Footprint</h2>
        <>
          {cards2.map((car) => (
            <div key={car.id}>
              <div className="circle">
                <img src={car.icon} alt="icon" />
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Steps;
