import React from 'react';

const Second = () => {
    return (
        <div className="bg-gray-100 p-10 md:px-52">
            {/* Section One */}
            <div className="flex flex-row md:flex-row md:flex-wrap">
                <div className="p-5 md:flex-3">
                    <p className="text-4xl italic">The Journey</p>
                    <h3 className="text-5xl md:text-6xl font-serif">YOUR NEXT GREAT ESCAPE</h3>
                </div>
                <div className="p-5 md:flex-2">
                    <p className="text-lg font-serif mb-4">
                        Follow along as our editors curate destination guides and travel itineraries with an insider’s perspective on the very best of The Ritz-Carlton.
                    </p>
                    <button className="text-sm bg-transparent py-3 px-6 border border-black rounded hover:bg-gray-200 transition duration-300">
                        Start Reading
                    </button>
                </div>
            </div>

            {/* Section Two */}
            <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 p-4 animate-updown">
                    <img className="w-full h-auto shadow-md" src="https://cache.marriott.com/content/dam/marriott-renditions/STTRZ/sttrz-attraction-beach-3592-sq.jpg?wid=562&fit=constrain" alt="Beach Escapes" />
                    <div className=" bottom-4 left-4 p-4 rounded-lg">
                        <p className="text-gray-800">INSPIRATION</p>
                        <h3 className="text-2xl font-serif">Beach Escapes</h3>
                        <a href="#" className="text-blue-500 hover:underline">Journey On</a>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 p-4 animate-updown2">
                    <img className="w-full h-auto  shadow-md" src="https://cache.marriott.com/is/image/marriotts7prod/rz-rktrw-2bv-exterior-day-39715:Square?wid=562&fit=constrain" alt="Secluded Retreats" />
                    <div className=" bottom-4 left-4  p-4 rounded-lg">
                        <p className="text-gray-800">INSPIRATION</p>
                        <h3 className="text-2xl font-serif">Secluded Retreats</h3>
                        <a href="#" className="text-blue-500 hover:underline">Journey On</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Second;
