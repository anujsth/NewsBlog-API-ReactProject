import React from "react";

const Carausal = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1">
        <img src="cyber.jpg" width="100%" height="100%" />
      </div>
      <div className="md:flex-1 bg-slate-100">
        <p className="mx-10 pt-14 text-gray-500">EDITOR'S PICK</p>
        <div className="md:mr-20">
          <p className="ml-10 mr-20 pr-10 py-2 text-2xl">
            News Needs to Meet Its Audiences Where They Are!
          </p>
        </div>
        <div className="mx-10 pt-2">
          <p className=" text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptate suscipit expedita facilis quaerat. Magnam voluptatem
            dolore, tenetur earum quidem vero id quis temporibus necessitatibus.
            Ipsa ex porro sed explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carausal;
