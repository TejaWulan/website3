import { useState } from "react";

export default function Value() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const datas = [
    {
      title: "Adaptive",
      description:
        "Transformative Learning Journey: We offer tailored, flexible experiences to empower your growth and unlock your potential.",
    },
    {
      title: "Happening",
      description:
        "Leading with Innovation: Our dynamic approach continually enhances our curriculum, empowering learners with the latest, high-impact knowledge and skills.",
    },
    {
      title: "Experiential",
      description:
        "Immersive and Hands-on: We empower learners to apply knowledge, build connections, and unlock success through practical learning.",
    },
    {
      title: "Accountable",
      description:
        "Excellent and Professional: Our seasoned mentors and industry leaders ensure precision, dependability, and alignment with cutting-edge research upon delivering transformative learning.",
    },
    {
      title: "Dynamic",
      description:
        "Synergy in Dynamic Learning: We offer innovative classes and diverse options, onsite, online, or hybrid, as well as inclusivity and vibrant environment.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-1 font-black text-center tracking-tight mb-2 mt-2">
        Our Value
      </h1>
      <div className="flex justify-center mb-[-50px]">
        <div
          onClick={() => setSelected(0)}
          className={`flex items-center justify-center mx-1 md:mx-3 md:h-20 h-16 md:w-20 w-16 my-2 rounded-full shadow-xl ${
            selected == 0
              ? "md:bg-[#2C77A3] bg-white c-2 md:text-white"
              : "bg-white c-2"
          }`}
        >
          <span className="items-center font-extrabold text-3xl md:text-4xl f-1">
            A
          </span>
        </div>
        <div
          onClick={() => setSelected(1)}
          className={`flex items-center justify-center mx-1 md:mx-3 md:h-20 h-16 md:w-20 w-16 my-2 rounded-full shadow-xl ${
            selected == 1
              ? "md:bg-[#2C77A3] bg-white c-2 md:text-white"
              : "bg-white c-2"
          }`}
        >
          <span className="items-center font-extrabold text-3xl md:text-4xl f-1">
            H
          </span>
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`flex items-center justify-center mx-1 md:mx-3 md:h-20 h-16 md:w-20 w-16 my-2 rounded-full shadow-xl ${
            selected == 2
              ? "md:bg-[#2C77A3] bg-white c-2 md:text-white"
              : "bg-white c-2"
          }`}
        >
          <span className="items-center font-extrabold text-3xl md:text-4xl f-1">
            E
          </span>
        </div>
        <div
          onClick={() => setSelected(3)}
          className={`flex items-center justify-center mx-1 md:mx-3 md:h-20 h-16 md:w-20 w-16 my-2 rounded-full shadow-xl ${
            selected == 3
              ? "md:bg-[#2C77A3] bg-white c-2 md:text-white"
              : "bg-white c-2"
          }`}
        >
          <span className="items-center font-extrabold text-3xl md:text-4xl f-1">
            A
          </span>
        </div>
        <div
          onClick={() => setSelected(4)}
          className={`flex items-center justify-center mx-1 md:mx-3 md:h-20 h-16 md:w-20 w-16 my-2 rounded-full shadow-xl ${
            selected == 4
              ? "md:bg-[#2C77A3] bg-white c-2 md:text-white"
              : "bg-white c-2"
          }`}
        >
          <span className="items-center font-extrabold text-3xl md:text-4xl f-1">
            D
          </span>
        </div>
      </div>
      <div className="card-value w-[100%] bg-[#25adad34] rounded-[50px] md:rounded-[117px] md:py-24 py-16 ">
        {selected == null ? (
          <div className="f-1 text-center text-cyan-700 text-[20px] md:text-[35px] font-extrabold px-5 hidden md:block">
            Adaptive • Happening • Experiential • Accountable • Dynamic
          </div>
        ) : (
          <>
            <div className="hidden md:block" onClick={() => setSelected(null)}>
              <div className="text-center f-1 text-cyan-700 text-[35px] font-extrabold">
                {datas[selected].title}
              </div>
              <div className="mx-5 text-center text-indigo-950 md:text-xl font-normal leading-relaxed">
                {datas[selected].description}
              </div>
            </div>
          </>
        )}

        <div className="blcok md:hidden">
          <div className="f-1 text-center text-cyan-700 text-[20px] md:text-[35px] font-extrabold px-5">
            Adaptive • Happening • Experiential • Accountable • Dynamic
          </div>
        </div>
        <>
          {datas.map((d, i) => (
            <div
              key={i}
              className={`md:hidden mt-5 ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500`}
            >
              <div className="text-center f-1 text-cyan-700 text-[35px] font-extrabold">
                {d.title}
              </div>
              <div className="mx-5 mt-3 text-center text-indigo-950 md:text-xl font-normal leading-relaxed">
                {d.description}
              </div>
            </div>
          ))}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden mt-5 justify-center cursor-pointer"
          >
            {isOpen ? (
              <box-icon name="chevron-up" color="#fff" size="md"></box-icon>
            ) : (
              <box-icon
                name="chevron-down"
                color="#fff"
                size="md"
              ></box-icon>
            )}
          </div>
        </>
      </div>
    </div>
  );
}
