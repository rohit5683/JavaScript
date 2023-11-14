const Cards = () => {
  return (
    <>
        <img className="hover:bg-gray-800" src="https://assets.stickpng.com/images/62a74dfe223343fbc2207d02.png" alt="" />
                    <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">JavaScript Library</p>
                    <p className="text-lg font-bold bg-blue-500 text-white hover:text-black cursor-pointer">ReactJS</p>
                    <div className="space-x-2">
                    <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">Add Cart</button>
                    <button className="text-white bg-green-400 rounded-xl px-4 py-1 mt-2 mb-2 hover:bg-green-600">Buy Now</button>
                    </div>
    </>
  )
}

export default Cards