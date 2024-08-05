import { useState } from "react";
import Img from "../../assets/img/1-1 (1).webp";
import Img2 from "../../assets/img/1-2 (1).webp";
import Img3 from "../../assets/img/1-3 (1).webp";
import Img4 from "../../assets/img/about_2-1.webp";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  const images = [Img, Img2, Img3, Img4];

  const renderImages = () => {
    switch (activeTab) {
      case 1:
        return images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="m-2 w-52 h-72 object-cover rounded-lg"
          />
        ));
      case 2:
        return images
          .slice(0, 2)
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="m-2 w-52 h-72 object-cover rounded-lg"
            />
          ));
      case 3:
        return images
          .slice(0, 3)
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="m-2 w-52 h-72 object-cover rounded-lg"
            />
          ));
      case 4:
        return (
          <img
            src={images[0]}
            alt="Image 1"
            className="m-2 w-52 h-72 object-cover rounded-lg"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container flex justify-between mx-auto p-4">
      <div className="w-1/4">
        <div className="mb-4 ml-[-30px]">
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 m-2 rounded-full w-full ${
              activeTab === 1
                ? "bg-green-500 text-white"
                : "bg-[#ECF7ED] text-black"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 m-2 rounded-full w-full ${
              activeTab === 2
                ? "bg-green-500 text-white"
                : "bg-[#ECF7ED] text-black"
            }`}
          >
            Climate
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`px-4 py-2 m-2 rounded-full w-full ${
              activeTab === 3
                ? "bg-green-500 text-white"
                : "bg-[#ECF7ED] text-black"
            }`}
          >
            Ecosystem
          </button>
          <button
            onClick={() => setActiveTab(4)}
            className={`px-4 py-2 m-2 rounded-full w-full ${
              activeTab === 4
                ? "bg-green-500 text-white"
                : "bg-[#ECF7ED] text-black"
            }`}
          >
            Recycling
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center ml-52">{renderImages()}</div>
    </div>
  );
};

export default App;
