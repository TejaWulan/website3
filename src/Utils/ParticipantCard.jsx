import React from "react";

export default function ParticipantCard(props) {
  return (
    <div
      key={props.key}
      className={`${
        props.index ? "md:translate-x-[50%]" : ""
      } h-[410px] mx-auto m-5 w-[90%] max-w-[30rem] participant rounded-3xl p-5 pb-10 shadow-2xl`}
    >
      <div className="flex items-center">
        <img
          src={props.profile_pic}
          alt="product"
          className="md:w-[90px] md:h-[90px] w-[40px] h-[40px] -translate-x-[50%] -translate-y-[50%] rounded-full mt-5"
        />
        <div className="about">
          <h1 className="font-1 md:text-3xl font-extrabold">{props.name}</h1>
          <p className="f-1 text-xs md:text-xl md:font-extrabold c-2">
            {props.role}
          </p>
        </div>
      </div>
      <p className="font-1 md:text-xl font-extrabold">{props.insight}</p>
      <p className="w-full">{props.message}</p>
    </div>
  );
}
