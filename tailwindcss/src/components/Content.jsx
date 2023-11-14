const Content = () => {
  return (
    <>
      <div className="w-100 h-auto flex flex-wrap flex-col items-center text-center p-10">
        <div className="text-white flex flex-wrap flex-col items-center">
          <p className="text-2xl text-center">
            Pure Hardwork, No Shortcut & Stay Focused!!
          </p>
          <div className="text-center w-56 h-1 border-b-4 rounded-2xl border-indigo-600 mt-4 mb-12"></div>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-evenly">
          <div className="flex flex-col rounded-2xl w-60 overflow-hidden border-blue-500 border-[2px] mt-2 mb-2">
            <img
              className="hover:bg-gray-800 w-[100%] h-[200px]"
              src="https://assets.stickpng.com/images/62a74dfe223343fbc2207d02.png"
              alt=""
            />
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
              Price : Rs.999/-
            </p>
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
              ReactJS
            </p>
            <div className="space-x-2">
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Add Cart
              </button>
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col  rounded-2xl w-60 overflow-hidden border-blue-500 border-[2px] mt-2 mb-2">
            <img
              className="hover:bg-gray-800 w-[100%] h-[200px]"
              src="https://assets.stickpng.com/images/613b64fe30e8530004ba3a03.png"
              alt=""
            />
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
            Price : Rs.1499/-
            </p>
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
              JavaScript
            </p>
            <div className="space-x-2">
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Add Cart
              </button>
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col  rounded-2xl w-60 overflow-hidden border-blue-500 border-[2px] mt-2 mb-2">
            <img
              className="hover:bg-gray-800 w-[100%] h-[200px]"
              src="https://www.bossdigital.tech/wp-content/uploads/2023/04/1631026680-logo-react-native.png"
              alt=""
            />
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
            Price : Rs.2999/-
            </p>
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
              React Native
            </p>
            <div className="space-x-2">
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Add Cart
              </button>
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col  rounded-2xl w-60 overflow-hidden border-blue-500 border-[2px] mt-2 mb-2">
            <img
              className="hover:bg-gray-800 w-[100%] h-[200px]"
              src="https://miro.medium.com/v2/resize:fit:2000/1*VEXMXDkq01cyq8GTpdcRLA.png"
              alt=""
            />
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
            Price : Rs.1999/-
            </p>
            <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">
              Next JS
            </p>
            <div className="space-x-2">
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Add Cart
              </button>
              <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Content;
