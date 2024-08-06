import "./HomeComponents.css";
import Image from "../../assets/img/team (1).webp";
import Image2 from "../../assets/img/2-3 (2).webp";
import Image3 from "../../assets/img//team (2).webp";
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  const teams = [
    { image: Image, name: "Daniel Pasha", position: "CEO" },
    { image: Image2, name: "Vincent Mugondora", position: "FOUNDER" },
    { image: Image3, name: "Wade Warren", position: "MANAGER" },
  ];

  return (
    <div className="w-full mt-[15vh] py-10 team">
      <div className="container">
        <div className="subscribe mt-[-20vh] py-7 bg-[#00b04d] rounded-lg flex items-center">
          <div className="w-[50%] flex p-4 gap-5 text-white items-center">
            <div>
              <box-icon
                name="envelope-open"
                type="solid"
                color="#66d096"
                size="92px"
              ></box-icon>
            </div>
            <div>
              <h2>Subscribe For Newsletter</h2>
              <p className="w-[80%]">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
          <div className="w-[50%] p-4">
            <div className="bg-white rounded-full border-none flex items-center p-2 justify-between">
              <div
                contentEditable="true"
                className="border-white-300 p-2 focus:outline-white rounded-full"
              >
                <p className="ml-3 pt-2 text-gray-500">Your Email Address</p>
              </div>
              <button className="bg-black text-white py-3 rounded-full px-12">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* team */}
        <section className="mt-32">
          <h4 className="text-[#00b150]">BEST TEAM</h4>
          <div className="flex justify-between">
            <h2 className="text-white w-[30%]">
              Waste is avoided through conservation
            </h2>
            <button className="text-white px-20 h-16 rounded-lg bg-[#00b150]">
              Explore Team
            </button>
          </div>
          <div className="flex justify-between">
            {teams.map((team) => (
              <div key={Math.random()}>
                <div className="cards relative mt-[28vh] p-4 bg-[#24231D] border-[5px] rounded border-stone-500">
                  <img
                    className="w-[17rem] mt-[-25vh] mb-10 h-[17rem] rounded-full"
                    src={team.image}
                    alt=""
                  />
                  <div className="text-white flex flex-col gap-4 text-center">
                    <h5>{team.name}</h5>
                    <p>{team.position}</p>
                  </div>
                  <div className="flex w-full mt-4 justify-evenly">
                    <div className=" icons p-2 rounded-md bg-[#00b150] hover:bg-white hover:text-[#00b150]">
                      <FaFacebook className="icon-hover" />
                    </div>
                    <div className=" icons p-2 rounded-md bg-[#00b150] hover:text-[#00b150]">
                      <FaTwitter className="icon-hover" />
                    </div>
                    <div className=" icons p-2 rounded-md bg-[#00b150]">
                      <IoLogoLinkedin className="icon-hover" />
                    </div>
                    <div className=" icons p-2 rounded-md bg-[#00b150]">
                      <FaYoutube className="icon-hover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
