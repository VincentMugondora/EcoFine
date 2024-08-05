import "./HomeComponents.css";

const Team = () => {

  const teams = [
    {image:"", name}
  ]

  return (
    <div className="w-full mt-[15vh] h-[90vh] team">
      <div className="container">
        <div className="subscribe mt-[-13vh] py-7 bg-[#00b04d] rounded-lg flex items-center">
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
        </section>
      </div>
    </div>
  );
};

export default Team;
