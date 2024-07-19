import React from "react";
import FIRST from './../assets/images/First.jpeg';
import SECOND from './../assets/images/Second.jpeg';
import THIRD from './../assets/images/Third.jpeg';
import FOURTH from './../assets/images/Fourth.jpeg';





function Task() {
  return (
    <div className="mt-32 mb-0">
      <div className="h-[100vh] w-[100vw] bg-[#1c1c1c] ">

        <div className="flex gap-20 justify-center ">

        <div className="text-white w-[30%] mt-10">
          <p  className="text-2xl"><i>The Journey</i></p>
          <h1 className="text-5xl font-black tracking-widest">OF A LIFETIME</h1>
        </div>

        <div className="text-white w-[40%] mt-10">
          <p>
            Let The Ritz-Carlton take you to the ends of the earth. Discover
            distinctive resorts in the world’s rarest escapes through
            Ritz-Carlton Reserve, where immersive experiences and unspoiled
            natural splendor forge lasting connections.
          </p>

          <button className="h-10  w-56 border-gray-500 border-2 text-sm mt-5
          hover:bg-[#1c1c1c] hover:text-black">
            Explore Ritz-Carlton Reserve
          </button>

        </div>
        </div>

        {/* SECOND PHASE */}

      <div className="">
      <div className="h-[100vh] w-[100vw] bg-[#1c1c1c] mt-20" >
        <div className="flex justify-center gap-5">
        <div className=" text-white w-[470px]">
            <img src={FIRST} alt="FirstImage" className="w-auto h-[510px] shadow-black object-cover opacity-50 rounded-md"/>
             <div className="relative bottom-52">
                <i className="text-2xl font-bold relative left-16">Dorado Beach, Puerto Rico</i>
                <p className="text-sm w-[350px] relative left-16 top-7 ">Stretching over 50 acres of a former Rockefeller estate,
                 this idyllic coastal refuge prizes stunning natural surroundings and diverse culture.
                 </p>
             </div>
            </div>
            <div >
                <img src={SECOND} alt="FirstImag"  className="w-[150px] h-[510px] object-cover relative bottom-10 hover:scale-105 hover:ease-in-out hover:duration-500 rounded-md" />
                <div  className="text-white relative left-9 bottom-6">
                    <p>Los Cabos, <br /> Mexico</p>
                </div>
                <div>
                  <button className="text-white border-[#916e27] border-2 h-[30px] w-[30px] rounded-full
                  hover:bg-[#916e27] text-sm relative left-12 bottom-4">+</button>
                </div>
            </div>

           <div>
           <img src={THIRD} alt="FirstImage " className="w-[150px] h-[510px] object-cover hover:scale-105 hover:ease-in-out hover:duration-500 rounded-md" />
            <div  className="text-white relative left-11 top-3">
                    <p>Krabi, <br /> Thailand</p>
                </div>
                <div>
                  <button className="text-white border-[#916e27] border-2 h-[30px] w-[30px] rounded-full
                  hover:bg-[#916e27] text-sm relative left-14 top-5">+</button>
                </div>
           </div>
            <div>
            <img src={FOURTH} alt="FirstImag " className= "w-[150px] h-[510px] relative bottom-10 object-cover hover:scale-105 hover:ease-in-out hover:duration-500 rounded-md"  />
            <div  className="text-white relative left-14 bottom-7">
                    <p>Ubud, <br />&nbsp; Bali</p>
                </div>
                <div>
                  <button className="text-white border-[#916e27] border-2 h-[30px] w-[30px] rounded-full
                  hover:bg-[#916e27] text-sm relative left-16 bottom-4">+</button>
                </div>
            </div>
        </div>

        </div>
      </div>
 



        {/* SECOND END */}
      </div>
    </div>
  );
}

export default Task;
