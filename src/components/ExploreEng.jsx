import './ExploreEng.css'
import arrow from "../assets/arrow.png";

const ExploreEng = () => {
  return (
    <div className='explore-eng-container w-[90%] mt-10 mb-10 mx-auto pt-5 pb-6 rounded-xl'>

        <h1 className='text-center text-3xl font-semibold'>Explore Engineering Courses</h1>
        <p className='text-center mt-1'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

        {/*agencies  */}
        <div className="flex flex-wrap justify-between mx-5 mt-5">
        <div className="flex flex-wrap ms-16 ">
          <div className="p-2 rounded-lg mx-2">
          Agencies :
          </div>
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2 my-2">
          Bechelors
          </div>
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2 my-2">
          Masters
          </div>
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2 my-2">
          Doctorate
          </div>
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2 my-2">
          Diploma
          </div>
        </div>
      <div className="flex mt-5 md:mt-0">
        <div>
          <p className="underline underline-offset-2 mx-1 cursor-pointer">See All Latest News & Stories</p>
        </div>
        <div>
          <img className="w-8 sm:w-5 mt-1" src={arrow} alt="" />
        </div>
      </div>
      </div>

        {/* explore eng cards */}
        <ExploreEngCard />

        {/* container ends here */}
    </div>
  )
}

const ExploreEngCard = () => {
    return <div className='explore-eng-cards flex flex-wrap justify-center mt-7'>
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
    </div>
}

const ExploreCard = () => {
    return <div className='explore-card border-[1.5px] border-[#EBA332] bg-[#FFFFFF] rounded-lg w-60 mt-5 mx-5 p-4'>

        <div className='bg-[#EFEFEF] rounded w-20 px-2 py-2'> <p className='text-sm text-[#ACABAB]'>Full Time</p> </div>
        <div><p className='text-[#112B45] font-semibold text-xl mt-2'>B.Tech Mechanical Engineering</p>
        <hr className='border-[#EBA332] mt-2' />
        </div>



        <div className='mt-2'>

            <div className='flex justify-between mt-2'>
                <div>Duration</div>
                <div>4 Years</div>
            </div>

            <div className='flex justify-between mt-2'>
                <div>Colleges</div>
                <div>3771</div>
            </div>
        </div>

        <div className='bg-[#0B2C4D] text-white flex justify-between rounded mt-2'>
            <div className='hover:cursor-pointer hover:text-[#EBA332] ms-2'>Course Overview</div>
            <div> <img src={arrow}/> </div>
        </div>
    
    {/* card ends here */}
    </div>
}

export default ExploreEng