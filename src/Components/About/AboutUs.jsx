import "./About.css";
import AboutImg from "../../assets/img/about_3-1 (1).webp";
import AboutImg2 from "../../assets/img/about_3-2 (2).webp";
import { FaCirclePlay } from "react-icons/fa6";
import { MdOutlineRecycling } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md relative">
          <img
            src={AboutImg}
            alt="img"
            className="border-8 border-white shadow rounded-2xl float-right w-[28vw]"
          />
          <img
            src={AboutImg2}
            alt="img"
            className="absolute bottom-[-3vh] w-[20vw] left-16"
          />
          <div className="border-4 image-trans flex items-center justify-center border-white rounded-2xl absolute w-36 h-36 left-28 top-20">
            <FaCirclePlay
              size="60px"
              className="text-green-800 bg-white rounded-full"
            />
          </div>
        </div>
        <div className="col-md">
          <div className="col-md flex px-10 container two flex-col gap-4">
            <h4 className="text-[#00b04d] ml-4">ABOUT US</h4>
            <h1 className="ml-4 text-5xl">
              The true supporter of eco-friendliness
            </h1>
            <p className="text-[#E9E9E8] ml-4">
              An Environment is everything that is around us, which includes
              both living and nonliving things such as soil, water, animals and
              plants.
            </p>
            <div className="flex justify-between ml-4">
              <div className="bg-[#F8F7F0] rotates-cont rounded-lg p-4">
                <IoEarthOutline className="text-[60px] text-white bg-[#00b04d] rotates rounded p-2" />
                <h5>Let’s get digital</h5>
                <p className="w-56 text-[#E0E9E8]">
                  An Environment is everything that is around us
                </p>
              </div>
              <div className="bg-[#F8F7F0] rotates-cont rounded-lg p-4">
                <MdOutlineRecycling className="text-[60px] text-white bg-[#00b04d] rotates rounded p-2" />
                <h5>Water Pollution</h5>
                <p className="w-56 text-[#E0E9E8]">
                  An Environment is everything that is around us
                </p>
              </div>
            </div>
            <div>
              <button className="buttons ml-4">
                Read More
                <box-icon name="chevrons-right" color="#ffffff"></box-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
