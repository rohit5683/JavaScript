const Navbar = () => {
  return (
    <>
      <nav className="md:bg-slate-500 bg-slate-600 w-full h-14 text-white flex justify-between items-center px-3 sticky">
        <div className="text-2xl font-bold">Study Center</div>
        <ul className="md:flex hidden space-x-3 text-lg">
          <li className="cursor-pointer hover:text-orange-400 hover:bg-blue-200 rounded-lg p-1 hover:duration-200">Home</li>
          <li className="cursor-pointer hover:text-orange-400 hover:bg-blue-200 rounded-lg p-1 hover:duration-200">About Us</li>
          <li className="cursor-pointer hover:text-orange-400 hover:bg-blue-200 rounded-lg p-1 hover:duration-200">Contact Us</li>
        </ul>
        <div className="hidden md:block text-lg font-bold bg-green-400 p-[8px] rounded-lg cursor-pointer hover:bg-green-600">Login/Signup</div>
        <div className="md:hidden">
            <a href="#" className="text-4xl">&#8801;</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
