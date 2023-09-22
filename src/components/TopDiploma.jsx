import './TopDiploma.css'
import arrow from '../assets/arrow.png'
import logo from '../assets/red-cl.png'

const TopDiploma = () => {
  return (
    <div className='top-diploma-container w-[90%] mx-auto rounded-3xl mt-10 pt-5 pb-8'>

    <h1 className='text-center text-3xl font-semibold'>Top Diploma in Engineering Exams</h1>
    <p className='text-center mt-1'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

    <div className='flex justify-end mt-2 me-8'>
    <div className="flex">
        <div>
          <p className="underline underline-offset-2 mx-1 cursor-pointer">See All Top Diploma Engineering Exams</p>
        </div>
        <div>
          <img className="w-5 mt-1" src={arrow} alt="" />
        </div>
      </div>
    </div>

    {/* /diploma cards */}
    <DiplomaCards />

   {/* container ends here */}
    </div>
  )
}

const DiplomaCards = () => {
  return <div className='diploma-cards flex flex-wrap justify-center space-x-6 mt-5'>
    <DiplomaCard />
    <DiplomaCard />
    <DiplomaCard />
    <DiplomaCard />
  </div>
}

const DiplomaCard = () => {
  return <div className='diploma-card bg-[#FFFFFF] border-[1px] border-[#EBA332] rounded w-60 pt-4 pb-4 px-4'>

    <div className='flex flex-wrap'>
      <div> <img className='w-14' src={logo} /> </div>

      <div className='ms-2'>

        <div>
        <div className='bg-[#EFEFEF] rounded py-1 px-2 mt-1 '> <p className='text-sm'>Offline Exams</p> </div>
        </div>

        <div><h1 className='text-lg text-[#0B2C4D] font-semibold'>Upter Jeep</h1></div>
      </div>

    </div>
    
    <hr className='border-[#EBA332] mt-2' />

    <div className='mt-4'>

      <div className='flex flex-wrap justify-between mt-2 text-sm'>
        <div>Participating Colleges</div>
        <div>1</div>
      </div>

      <div className='flex flex-wrap justify-between mt-2 text-sm'>
        <div>Exam Date</div>
        <div>August 28, 2022</div>
      </div>

      <div className='flex flex-wrap justify-between mt-2 text-sm'>
        <div>Exam Level</div>
        <div>National</div>
      </div>

    </div>

    <div className='bg-[#0B2C4D] text-white flex justify-between rounded mt-4'>
            <div className='hover:cursor-pointer hover:text-[#EBA332] ms-2'>Application Process</div>
            <div> <img src={arrow}/> </div>
    </div>

    <div className='bg-[#0B2C4D] text-white flex justify-between rounded mt-2'>
            <div className='hover:cursor-pointer hover:text-[#EBA332] ms-2'>Exam Info</div>
            <div> <img src={arrow}/> </div>
    </div>

  {/* card end here */}
  </div>
}


export default TopDiploma