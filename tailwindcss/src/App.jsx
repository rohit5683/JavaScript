function App() {
  return (
    <>
    <div className="grid place-content-center justify-around h-screen gap-3">
      <div className="p-4 max-w-lg bg-white mx-auto rounded-xl shadow-lg flex items-center space-x-4">
          <div>
            <img className="h-20 w-30" src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" alt="" />
          </div>
          <div>
            <div className="text-4xl">
              Tailwind CSS
              <p className="text-slate-600 text-xl text-left ">By Rohit Sharma</p>
            </div>
            <div className="text-lg text-white space-x-3">
              <button className="bg-blue-600 p-3 mt-3 rounded-lg hover:bg-yellow-300 hover:text-black shadow-lg hover:duration-300 ">Add Cart</button>
              <button className="bg-blue-600 p-3 mt-3 rounded-lg  hover:bg-green-500 hover:text-black shadow-lg hover:duration-300">Buy Now</button>
            </div>
          </div>
      </div>

      <div className="p-4 max-w-lg bg-white mx-auto rounded-xl shadow-lg space-y-3">
          <div>
            <img className="h-25 w-30" src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg" alt="" />
          </div>
          <div>
            <div className="text-4xl">
              Tailwind CSS
              <p className="text-slate-600 text-xl text-left ">By Rohit Sharma</p>
            </div>
            <div className="text-lg text-white space-x-3">
              <button className="bg-blue-600 p-3 mt-3 rounded-lg hover:bg-yellow-300 hover:text-black shadow-lg hover:duration-300 ">Add Cart</button>
              <button className="bg-blue-600 p-3 mt-3 rounded-lg  hover:bg-green-500 hover:text-black shadow-lg hover:duration-300">Buy Now</button>
            </div>
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
