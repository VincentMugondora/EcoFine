import Image from "../../assets/img/5-1.webp";
import Image2 from "../../assets/img/5-2.webp";
import Image3 from "../../assets/img/5-3.webp";

const Blog = () => {
  const blogs = [
    {
      date: "03 Aug",
      text: "Go green and reduce your carbon footprint",
      image: Image,
    },
    {
      date: "03 Aug",
      text: "Make a statement support of the eco",
      image: Image2,
    },
    {
      date: "03 Aug",
      text: "Affordable, targeted media for every one",
      image: Image3,
    },
  ];

  return (
    <div className="container mb-44">
      <h5 className="text-[#00b150]">OUR LATEST BLOG</h5>
      <div className="w-full flex justify-between">
        <h2>
          Let’s checkout our all latest <br /> news
        </h2>
        <div>
          <button className="bg-[#00b150] py-3 rounded-md text-xl text-white px-10">
            Read More Blog
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        {blogs.map((blog) => (
          <div
            key={Math.random()}
            className="w-[30%] overflow-hidden h-[58vh] relative"
          >
            <div className="overlay absolute w-full h-full"></div>
            <img src={blog.image} alt="img" className="cad" />
            <div className="absolute top-0 left-0 text-white w-[60px] h-[65px] bg-[#00b04d] text-center">
              <p className="text-xl hover:underline cursor-pointer">
                {blog.date}
              </p>
            </div>
            <div className="absolute bottom-20 flex container justify-between px-4">
              <p className=" flex items-center gap-2">
                <box-icon name="user" color="#ffffff"></box-icon>
                <a className="text-white no-underline" href="#">
                  Ecofine
                </a>
              </p>
              <p className="flex items-center gap-2">
                <box-icon name="chat" color="#ffffff"></box-icon>
                <a className="text-white no-underline" href="#">
                  Comments (05)
                </a>
              </p>
            </div>
            <div className="container text-white absolute bottom-5 px-4">
              <h6 className="text-2xl hover:underline cursor-pointer">{blog.text}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
