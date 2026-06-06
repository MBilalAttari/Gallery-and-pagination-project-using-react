import React from "react";

const Cards = (props) => {
  return (
    <div key={props.idx}>
      <a href={props.elem.url}>
        <div>
          <div className="h-70 w-70 rounded-xl overflow-hidden shadow-lg m-4">
            <img
              className="h-full w-full object-cover"
              src={props.elem.download_url}
              alt={props.elem.author}
            />
          </div>
          <h3 className="text-white text-center font-bold text-xl">
            {props.elem.author}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default Cards;
