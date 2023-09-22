import './TopCollege.css'
import head from '../assets/head.png'
import colg from '../assets/top-clg.png'
import arrow from "../assets/arrow.png";
import handle from '../assets/handle.png'
import btn from '../assets/btn.png'

const TopCollege = () => {
  return (
    <div className='top-college-container w-[90%] mx-auto rounded-lg mt-10 mb-10 pt-5 pb-5'>

        <div className='flex flex-wrap justify-evenly space-x-12'>
        
        <div className='flex flex-wrap ms-80 space-x-2'>
            <div> <img className='w-14' src={head} alt="" /> </div>
            <div> <h1 className='text-3xl font-semibold'>Top Colleges Near - Gurgaon</h1> </div>
        </div>
        
        <div className='flex flex-wrap space-x-3'>
            <div className='p-2 border-[2px] rounded-lg border-[#6D7C7E] hover:cursor-pointer hover:bg-[#FAA307]'>Gurgaon </div>
            <div className='p-2 border-[2px] rounded-lg border-[#FAA307] hover:cursor-pointer hover:bg-[#FAA307]'>Update State/City</div>
        </div>
        
        </div>    

        <p className='text-center mt-2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing <br /> industries for previewing layouts and visual mockups.</p>

        {/* cards  */}
        <TopCards />


        <div className='flex justify-center mt-6'>
            <div>
            <img className='btn-submit w-28' src={btn} alt="" />
            <p className='text-white more text-sm hover:cursor-pointer hover:text-[#EBA332]'>View More →</p>
            </div>
        </div>
        {/*container ends here */}
    </div>
  )
}

const TopCards = () => {
    return <div className='top-cards flex flex-wrap justify-center space-x-5 mt-5'>
        <TopCard />
        <TopCard />
        <TopCard />
    </div>
}

const TopCard = () => {
    return <div className='top-card flex bg-[#FFFFFF] w-96 rounded-lg p-4 space-x-3 mt-2 '>

        <div> <img className='w-80' src={colg} alt="" /> </div>

        <div>

            <div className='flex'>
                <div> <img className='w-16 mt-2' src={handle} alt="" /> </div>
                <div className='text-xs mt-2 ms-1'> Government Polytechnic Education Society (GPES) </div>
            </div>
            <hr className='border-[#EBA332] mt-2' />
            <div>
                <h2 className='text-base'>B.Tech, M.Tech</h2>
                <p className='text-xs mb-2 text-[#A9A8A8]'>Ranked 149 out of 300 NIRF</p>
            </div>

            <div className='flex justify-end'>
            <div className='bg-[#0B2C4D] text-white flex justify-between rounded ps-2 pe-2 mt-3   w-[7rem] h-6 '>
            <div className='text-xs mt-1 hover:cursor-pointer hover:text-[#EBA332]'>View Details</div>
            <div> <img className='mt-0.5 w-5' src={arrow}/> </div>
            </div>
            </div>

        </div>
    
    </div>
}

export default TopCollege