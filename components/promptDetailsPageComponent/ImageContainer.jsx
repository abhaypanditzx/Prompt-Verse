import React from "react";

const ImageContainer = ({prompt}) => {
  return (
    <div className="md:w-[360px] w-full shadow-xl rounded-xl  overflow-hidden   ">
      <img
        src={prompt?.image}
        alt={prompt?.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageContainer;
