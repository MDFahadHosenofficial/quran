import React from "react";

const AppCard = ({ image, name }) => {
  return (
    <div className="text-center group">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto transform transition-transform duration-300 group-hover:scale-110"
      />
      {/* <h2 className="text-white text-sm sm:text-base lg:text-lg font-bold mt-2 transition-opacity duration-300 group-hover:opacity-75">
        {name}
      </h2> */}
    </div>
  );
};

export default AppCard;
