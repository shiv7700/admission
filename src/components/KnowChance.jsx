import './KnowChance.css'
import boy from '../assets/boy.png'
import white from '../assets/white.png'
import btn from '../assets/btn.png'

const KnowChance = () => {
  return (
    <div className='know-chance-container mt-5 mb-5 py-4 w-[90%] mx-auto rounded-3xl'>
        <div className='flex justify-evenly items-center'>
            <div className='w-32 sm:w-auto'> <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:font-medium font-normal'>Know your chances of Admission</h1> </div>
            <StartNow />
            <div> <img className='w-20 sm:w-32 lg:ms-16' src={boy} alt="" /> </div>
        </div>
    </div>
  )
}

const StartNow = () => {
    return <div className='start-now flex w-20 sm:w-32'>
        <img src={btn} alt="" />
        <div className='start flex justify-center space-x-1 sm:space-x-3 py-1 px-4'>
            <div className='text-white mt-1 text-[0.6rem] sm:text-base hover:cursor-pointer hover:text-orange-500'>Start Now</div>
            <div> <img className='w-2 mt-2 sm:w-4 sm:mt-3' src={white} alt="" /> </div>
        </div>
    </div>
}

export default KnowChance