import img1 from "../assets/images/Flower.jpeg";
import img2 from "../assets/images/Flower_2.jpeg";

import React from "react";

const Fourth = () => {
  return (
    <>
      <div>
        <div className="flex justify-center align-middle gap-36 " >
          <div className="font-normal   mt-32">
            <p className="text-4xl font-serif text-zinc-950 ">
              Transformative experiences. <br />  Personalized service. <br /> Unparalleled
              destinations. How <br />will a stay at The Ritz-Carlton <br />leave you?
            </p>
          </div>
          <div>
            <img  
              src={img1}
              alt="Beautiful Flower"
              className="w-full max-w-md h-auto rounded-lg shadow-md"
            />
          </div>
          </div>
          <div className="mt-16 mb-8">
            <img src={img2} alt="flower" className="ml-52 h-[540px] w-[1090px]"   />
          </div>
        
      </div>
    </>
  );
};

export default Fourth;
