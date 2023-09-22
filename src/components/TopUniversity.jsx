import './TopUniversity.css'
import head from '../assets/head.png'
import btn from '../assets/btn.png'
import col from '../assets/col.png'
import right from '../assets/right arrow.png'
import cc1 from '../assets/cc1.png'

const TopUniversity = () => {
  return (
    <div className='top-university-container w-[90%] mt-10 mb-10 mx-auto pt-5 pb-4'>

        <div className='flex justify-center'>
        <div className='flex flex-wrap space-x-2'>
            <div> <img className='w-14' src={head} alt="" /> </div>
            <div> <h1 className='text-3xl font-semibold'>Top Universities / Colleges for Diploma in Engineering</h1> </div>
        </div>
        </div>

        <p className='text-center mt-1'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing <br /> industries for previewing layouts and visual mockups.</p>

                {/* cards */}
                <UniversityCards />

        <div className='flex justify-center mt-6'>
            <div>
            <img className='btn-submit w-28' src={btn} alt="" />
            <p className='text-white more text-sm hover:cursor-pointer hover:text-[#EBA332]'>View More →</p>
            </div>
        </div>



        {/* container ends here */}
    </div>
  )
}

const UniversityCards = () => {
  return <div className='university-cards flex flex-wrap justify-evenly mt-5'>
    <UniversityCard />
    <UniversityCard />
    <UniversityCard />
    <UniversityCard />
    <UniversityCard />
    <UniversityCard />
  </div>
}

const UniversityCard = () => {
  return <div className='university-card rounded-2xl bg-[#FFFFFF] w-[26rem] mt-6'>
    <img className='w-[26rem]' src={col} alt="" />


    <div className='p-4'>

    <div className='flex flex-wrap -mt-3'>

      <div> <img className='w-20' src={cc1} alt="" /> </div>

      <div>
        <div className='text-base font-medium text-[#0B2C4D] mt-1'>Maharaja Sayajirao <br /> University of Baroda (MSU)</div>
        <div className='text-gray-500 text-sm'>Vododara, Gujarat</div>
      </div>
    </div>

    <div>



    <hr className='border-[#EBA332] mb-1' />

    <h1 className='text-lg font-medium text-[#0B2C4D]'>B.Tech | M.Tech | BCA | MCA | MBA | D. Pharma <br /> B. Pharma | Polytechnic | B.Ed.....</h1>

    <p className='text-gray-500 text-sm mb-2'>Ranked 149 out of 300 NIRF</p>

    <hr className='mb-2' />

    <div className='flex flex-wrap justify-between mb-2'>
      <div className='hover:cursor-pointer hover:text-orange-500'>View all courses & fees</div>
      <div className='text-black'> &gt; </div>
    </div>

    <hr className='mb-2' />

    <div className='flex flex-wrap justify-between mb-2'>
      <div className='hover:cursor-pointer hover:text-orange-500'>Download Brouchure</div>
      <div className='text-black'>	&gt; </div>
    </div>

    <hr className='mb-2' />

    <div className='flex flex-wrap justify-between'>
      <div className='hover:cursor-pointer hover:text-orange-500'>Compare</div>
      <div className='text-black'> &gt; </div>
    </div>

    </div>


    </div>
  </div>
}

export default TopUniversity