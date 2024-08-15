import "./About.css";
import Icon from "../../assets/img/medal.png";
import Icon2 from "../../assets/img/solar-energy.png";
import Icon3 from "../../assets/img/recycle-bin.png";
import Icon4 from "../../assets/img/building.png";

const WorkProgress = () => {
  const cards = [
    {
      num: "01",
      img: Icon,
      heading: "Carbon Offsetting",
      para: "Ecology is crucial for our understanding",
    },
    {
      num: "02",
      img: Icon2,
      heading: "Renewable Energy",
      para: "Have led to a decline in biodiversity and negative",
    },
    {
      num: "03",
      img: Icon3,
      heading: "Green Building",
      para: "Biodiversity and negative impacts on ecosystems",
    },
    {
      num: "01",
      img: Icon4,
      heading: "Sustainable",
      para: "Ecologists use a variety of methods, such as field",
    },
  ];

  return (
    <div className="container flex flex-col mb-96">
      <h5 className="text-[#00b04d] text-center">WORK PROCESS</h5>
      <h1 className="text-center self-center w-[50%]">
        Go Green And Reduce Your Carbon Footprint
      </h1>
      <div className="flex w-full">
        {cards.map((card) => (
          <div key={Math.random()}>
            <div className="card1 border-gray-400">
              <h2>{card.num}</h2>
              <img className="w-[90px]" src={card.img} alt="img" />
              <h2>{card.heading}</h2>
              <p>{card.para}</p>
              <div className="flex">
                <p>Read More</p>
                <box-icon
                  name="plus-circle"
                  type="solid"
                  size="30px"
                  color="#00b04d"
                ></box-icon>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProgress;
