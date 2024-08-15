import "./About.css";
import Icon from "../../assets/img/earth-day.png";
import Icon2 from "../../assets/img/eco-bag.png";
import Icon3 from "../../assets/img/eco-home.png";
import Icon4 from "../../assets/img/earth.png";

const AboutMetrics = () => {
  const blogs = [
    { img: Icon, num: "200+", text: "Team member" },
    { img: Icon2, num: "10k+", text: "Complete project" },
    { img: Icon3, num: "20+", text: "Winning award" },
    { img: Icon4, num: "900+", text: "Client review" },
  ];

  return (
    <div className="aboutMetrics container-fluid w-full h-[90vh] mb-44">
      <div className="container">
        <div className="metrics flex justify-between mt-[50px]">
          {blogs.map((blog) => (
            <div
              className="circles text-white flex gap-3 flex-col items-center"
              key={Math.random()}
            >
              <div className="circle p-5 bg-[#00B150] rounded-full hover:transform transition-transform duration-500 ease-in-out flip-hover ">
                <img src={blog.img} alt="img" className="w-[60px]" />
              </div>
              <div className="text-center">
                <h2>{blog.num}</h2>
                <p>{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row pt-36">
          <div className="col-md imgA rounded-l-lg"></div>
          <div className="col-md p-12 bg-[#F8F7F0] rounded-r-lg">
            <h5 className="text-[#00b04d] textA">ABOUT US</h5>
            <h2 className="text-6xl w-[80%] textA">Waste reduction and recycling.</h2>
            <p className="text-[#c2c2c1] w-[80%] textA">
              Waste reduction involves minimizing the amount of waste that is
              produced in the first place, while recycling involves processing
              waste materials into new products.
            </p>
            <button className="bg-[#00b04d] w-40 h-12 rounded text-white textA">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMetrics;
