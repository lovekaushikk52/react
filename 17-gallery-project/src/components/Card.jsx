import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl ">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt="img not found"
          />
        </div>
        <h3 className="text-gray-400 font-bold text-shadow-lg">
          {props.elem.author}
        </h3>
      </a>
    </div>
  );
};

export default Card;
