import logo from '../assets/images/Logo.png'

const Header = () => {
  return (
    <nav className='mb-28 '>
    <div className='flex justify-center h-16'>
    <div className='flex justify-between w-4/5 h-14 '>
      <div className=''><img className='w-60 ' src={logo} alt="" /></div>
      <div className='flex items-center '>
        <div></div>
        <div className='pr-8 text-lg'>English</div>
        <div className='w-40 border-2 border-black flex justify-center items-center h-14 font-medium text-sm hover:bg-black hover:text-white hover:duration-2000'>Sign in or Join</div>
      </div>
    </div>
    </div>

    <div className='flex justify-center'>
      <div className='flex justify-between items-center w-4/5 h-14 '>
        <ul className='flex items-center p-0 m-0 '>
          <li className='border-b-4  py-3 border-transparent hover:border-black '><a href="#">HOTELS & RESORTS</a></li>
          <li className='border-b-4  py-3 border-transparent hover:border-black ml-5'><a href="#">RESIDENCES</a></li>
          <li className='border-b-4  py-3 border-transparent hover:border-black ml-5'><a href="#">YACHTS</a></li>
          <li className='border-b-4  py-3 border-transparent hover:border-black ml-5'><a href="#">ABOUT THE RITZ-CARLTON</a></li>
          <li className='border-b-4  py-3 border-transparent hover:border-black ml-5'><a href="#">THE JOURNEY</a></li>
        </ul>
        <div className='bg-black text-white flex justify-center items-center h-11 w-40 p-4 font-medium hover:bg-gray-500 hover:duration-1000'>Reserve Now</div>
      </div>
    </div>
  </nav>
  )
}

export default Header