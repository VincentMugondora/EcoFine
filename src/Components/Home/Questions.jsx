 import "./HomeComponents.css"
import ToggleTextDiv from "./Toggle";

const Questions = () => {
  return (
    <div className="bg-[#F8F7F0] h-[90vh] w-[100%] questions">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md right w-[100%] h-[90vh]"></div>
          <div className="col-md">
            <div className="container text-cont p-4">
              <h4 className="text-[#00b150]">ASK SOMETHING</h4>
              <h2>Keep the scene green by taking the lead</h2>
              <h2>Keep the scene green by taking the lead</h2>
              <p className="text-gray-500">
                Ecology is the study of the relationship between living
                organisms and their environment, including interactions between
                different organisms and species.
              </p>
              <div>
                <div className="first-text p-4">
                    <ToggleTextDiv/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions
