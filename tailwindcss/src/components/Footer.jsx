const Footer = () => {
  return (
    <>
        <div className="w-full bg-gray-800 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between">
            <div>
                <img className="w-[100px] ml-5" src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2020/05/QS-I-Gauge-E-LEAD-Badge-746x1024.png" alt="" />
                <p className="my-2">Email us: support@studycenter.com</p>
            </div>
            <div>
                <p className="text-lg font-bold">Study Center</p>
                <div className="border-yellow-600 border-b-2 mb-2 rounded-xl"></div>
                <p>About Us</p>
                <p>FAQs</p>
                <p>Privary Policy</p>
            </div>
            <div>
                <p className="text-lg font-bold">Products</p>
                <div className="border-yellow-600 border-b-2 mb-2 rounded-xl"></div>
                <p>Skills Lab</p>
                <p>Job Portal</p>
                <p>Experience Portal</p>
                <p>Become an Affiliate</p>
                <p>Hall of frame</p>
            </div>
            <div>
                <p className="text-lg font-bold">Links</p>
                <div className="border-yellow-600 border-b-2 mb-2 rounded-xl"></div>
                <p>Discord Channel</p>
                <p>Study Center YouTube</p>
                <p>Careers</p>
            </div>
        </div>
    </>
  )
}

export default Footer