import Image from "../../assets/img/eco-bag (1).png";
import Image2 from "../../assets/img/eco-bag (1).png";
import Image3 from "../../assets/img/eco-bag (1).png";
import Logo1 from "../../assets/img/logo2 (2).svg";
import Post from "../../assets/img/recent-post1-1.webp";
import Post2 from "../../assets/img/recent-post1-2.webp";
import { MdOutlineDateRange } from "react-icons/md";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  const cards = [
    {
      image: Image,
      location: "Location",
      address: "258 Daniel Mansion 258 Harare Zimbabwe",
    },
    {
      image: Image2,
      location: "Working Hours",
      address: "Weekdays 8am-22pm Weekend 10am -12pm",
    },
    {
      image: Image3,
      location: "Contact Us",
      address: "ecofineinfo@ecofine.com (+259)2257 6156",
    },
  ];

  const cards2 = [
    {
      image: Post,
      text: "Go Green And Reduce Your Carbon…",
      date: "April 3 2024",
    },
    {
      image: Post2,
      text: "Make A Statement Support Of The…",
      date: "April 3 2024",
    },
  ];

  return (
    <div className="footer w-full relative h-[60vh] bg-[#282723]">
      <section className="container z-10">
        <div className="container p-6 left-24 top-[-12vh] absolute flex bg-[#00b150] z-10 justify-between">
          {cards.map((card) => (
            <div className="p-4 flex gap-7 text-white" key={Math.random()}>
              <div className="w-14 flex items-center justify-center h-14 bg-white rounded-xl">
                <img className="w-10" src={card.image} alt="img" />
              </div>
              <div className="">
                <h5>{card.location}</h5>
                <p className="w-[55%]">{card.address}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-[100%] justify-between h-96">
          <div className="mt-32 flex flex-col gap-2">
            <img src={Logo1} alt="img" className="" />
            <p className="text-white w-56">
              Protecting biodiversity and natural habitats is crucial for
              maintaining a healthy and sustainable ecology.
            </p>
            <div className="flex gap-1">
              <div className="w-[38px] h-[38px] flex items-center justify-center rounded bg-[#393833] iconse-hover">
                <box-icon
                  type="logo"
                  color="#ffffff"
                  name="facebook"
                ></box-icon>
              </div>
              <div className="w-[38px] h-[38px] flex items-center justify-center rounded bg-[#393833] iconse-hover">
                <box-icon name="twitter" type="logo" color="#ffffff"></box-icon>
              </div>
              <div className="w-[38px] h-[38px] flex items-center justify-center rounded bg-[#393833] iconse-hover">
                <box-icon
                  name="instagram"
                  type="logo"
                  color="#ffffff"
                ></box-icon>
              </div>
              <div className="w-[38px] h-[38px] flex items-center justify-center rounded bg-[#393833] iconse-hover">
                <box-icon
                  name="linkedin"
                  type="logo"
                  color="#ffffff"
                ></box-icon>
              </div>
            </div>
          </div>
          <div className="text-white mt-32">
            <h3>Quick links</h3>
            <div className="flex flex-col gap-1">
              <a className="text-white no-underline  text-hover" href="/About">
                About us
              </a>
              <a className="text-white no-underline  text-hover" href="/About">
                Our Mission
              </a>
              <a className="text-white no-underline text-hover" href="/About">
                Our Projects
              </a>
              <a className="text-white no-underline text-hover" href="/About">
                Contact Us
              </a>
            </div>
          </div>
          <div className="text-white mt-32 flex flex-col gap-1 z-10">
            <h3>Recent News</h3>
            {cards2.map((card) => (
              <div key={Math.random()}>
                <div className="flex items-center gap-4">
                  <div className="bg-green-800 w-20 h-20 overflow-hidden rounded-full">
                    <img
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                      src={card.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center h-full pt-3">
                    <h6 className="cursor-pointer w-48 hover:text-[#00b150]">
                      {card.text}
                    </h6>
                    <div className="flex items-center ">
                      <p className="flex items-center gap-2 hover:text-[#00b150] cursor-pointer">
                        <MdOutlineDateRange /> {card.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-white z-10">
            <h3>Newsletter</h3>
            <p className="w-56">
              Your opinion is important to us. So contact us for any service.
            </p>
            <div className="flex justify-center items-center">
              {" "}
              <input
                type="text"
                placeholder="Your Email Address"
                className="h-14 pl-2 border border-r-0 border-gray-400 bg-transparent rounded-l-lg"
              />
              <button className="h-14 px-9  border-2 border-[#00b150] rounded-r-lg  bg-green-500 transition-transform duration-300 ease-in-out transform hover:bg-white hover:text-green-700 hover:border-white">
                <GrSend className="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="image-cont"></div>
      <div className="text-white">
        <div className="w-full h-[1px] bg-gray-500"></div>
        <div className="container flex justify-between z-10 mt-3">
          <p>© Copyright 2024 Ecofine. All Rights Reserved</p>
          <div className="flex gap-2">
            <p className="cursor-pointer hover:text-[#00b150]">Privacy Policy</p>
            <div className="w-[1px] h-5 mt-1 bg-gray-500"></div>
            <p className="cursor-pointer hover:text-[#00b150]">Terms & Conditions</p>
            <div className="w-[1px] h-5 mt-1 bg-gray-500"></div>
            <p className="cursor-pointer hover:text-[#00b150]">Join Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
