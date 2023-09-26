import './TopCollection.css'
import btn from '../assets/btn.png'
import head from '../assets/head.png'
import collection from '../assets/collection.png'
import arrow from "../assets/arrow.png";
import white from '../assets/white.png'

const TopCollection = () => {
  return (
    <div className='top-collection-container w-[90%] mt-10 mb-10 mx-auto rounded-lg pt-5 pb-2'>

        <div className='flex justify-center'>
        <div className='flex flex-wrap justify-center space-x-2'>
            <div> <img className='w-14' src={head} alt="" /> </div>
            <div> <h1 className='text-3xl font-semibold'>Top Collections for Diploma in Engineering</h1> </div>
        </div>
        </div>

    <p className='text-center'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing <br /> industries for previewing layouts and visual mockups.</p>

    {/* cards */}
    <TopCollectionCards />


    <div className='more-btn flex justify-center mt-5'>
            <div>
        <div> <img className='w-32' src={btn} alt="" /> </div>
        <div className='flex more-pos space-x-2'> 
            <h1 className='text-sm text-white ms-3 hover:text-orange-500 hover:cursor-pointer'>View More</h1>
            <img className='w-4 h-3 mt-[0.4rem]' src={white} alt="" /> 
            </div>
            </div>
        </div>

        {/* container ends here */}
    </div>
  )
}

const TopCollectionCards = () => {
    return <div className='top-collection-cards flex flex-wrap justify-evenly'>
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
    </div>
}

const TopCollectionCard = () => {
    return <div className='top-collection-card rounded-xl flex bg-[#FFFFFF] w-[25rem] mt-4 p-4 space-x-2'>
        
        <div> <img className='w-[31rem]' src={collection} alt="" /> </div>

        <div>
        
        <div>
            <h1 className='text-sm font-medium text-[#0B2C4D]'>Top colleges in India for Diploma in Engineering</h1>
            <hr className='border-[#EBA332] mt-1' />
            <p className='text-[0.7rem]'>Check detail for Top colleges in India for Diploma in Engineering for Ranking Fees and Admission Details</p>
        </div>


        <div className='flex justify-end'>
            <div className='bg-[#0B2C4D] text-white flex justify-between rounded ps-2 pe-2 mt-3 w-[7rem] h-6 '>
            <div className='text-xs mt-1 hover:cursor-pointer hover:text-[#EBA332]'>View Details</div>
            <div> <img className='mt-0.5 w-5' src={arrow}/> </div>
            </div>
            </div>

        </div>

    </div>
}

export default TopCollection