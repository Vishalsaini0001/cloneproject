import midle1 from '../assets/images/secondmiddle.jpeg'
import midle2 from '../assets/images/secondmiddle2.jpeg'

const SecondMiddle = () => {
  return (
    <div className="flex flex-row items-center ">
    <div className="w-3/4 flex justify-center">
      <img src={midle1} alt="Yacht" className="w-1/2 h-auto" />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
      <div className="w-3/4 lg:w-1/2 rounded-full overflow-hidden ">
        <img src={midle2} alt="Deck" className="w-full h-auto" />
      </div>
      <div>
        <h1 className="text-3xl font-serif">The Ritz-Carlton Yacht Collection</h1>
        <p className="mt-4">
        The intimate yachts of The Ritz-Carlton Yacht Collection <br /> fuse the residential feel and legendary service of The Ritz- <br />Carlton with untethered freedom.
        </p>
      </div>
      <p className="p-2 font-bold tracking-wider border-b-2 border-black ">
        Find Your Voyage
      </p>
    </div>
  </div>
  )
}

export default SecondMiddle