import React from "react";
import "./HomeComponents.css";
import Image from "../../assets/img/happy.jpg";
import Image2 from "../../assets/img/happy2.jpg";
import Image3 from "../../assets/img/happy3.jpg";
import Image4 from "../../assets/img/happy4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Testimonials = () => {
  const tests = [
    {
      name: "Vincent Mugondora",
      image: Image,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation. We are proud to partner with a company that shares our values of environmental responsibility.",
    },
    {
      name: "Vincent Mugondora",
      image: Image2,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation. We are proud to partner with a company that shares our values of environmental responsibility.",
    },
    {
      name: "Vincent Mugondora",
      image: Image3,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation. We are proud to partner with a company that shares our values of environmental responsibility.",
    },
    {
      name: "Vincent Mugondora",
      image: Image4,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation. We are proud to partner with a company that shares our values of environmental responsibility.",
    },
  ];

  return (
    <div className="container">
      <h4 className="text-[#00b150]">CLIENT TESTIMONIAL</h4>
      <h2>Leading the way to a greener tomorrow</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      >
        {tests.map((test, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <div className="flex">
                <div className="p-1 border-2 rounded-full border-green-800">
                  <img
                    className="w-[5rem] h-[5rem] rounded-full object-cover object-center"
                    src={test.image}
                    alt="img"
                  />
                </div>
                <div>
                  <div className="flex">
                    <p className="flex">
                      <box-icon
                        name="star"
                        type="solid"
                        color="#ffc743"
                      ></box-icon>
                    </p>
                    <p>
                      <box-icon
                        name="star"
                        type="solid"
                        color="#ffc743"
                      ></box-icon>
                    </p>
                    <p>
                      <box-icon
                        name="star"
                        type="solid"
                        color="#ffc743"
                      ></box-icon>
                    </p>
                    <p>
                      <box-icon
                        name="star"
                        type="solid"
                        color="#ffc743"
                      ></box-icon>
                    </p>
                    <p>
                      <box-icon
                        name="star"
                        type="solid"
                        color="#ffc743"
                      ></box-icon>
                    </p>
                  </div>
                  <h5>{test.name}</h5>
                  <p>{test.position}</p>
                </div>
                <div>
                  <box-icon
                    name="quote-alt-right"
                    type="solid"
                    color="#00b150"
                  ></box-icon>
                </div>
              </div>
              <p>{test.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
