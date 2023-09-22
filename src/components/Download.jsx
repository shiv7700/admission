import './Download.css'
import mob from '../assets/mob.png'
import mob2 from '../assets/mob2.png'

const Download = () => {
  return (
    <div className='download-container flex flex-wrap justify-center mt-5 mb-5 space-x-20'>

    <div> <img className='w-[18rem] sm:w-[29rem]' src={mob} alt="" /> </div>

    <div className='mt-10'>

        <div>
            <h1 className='text-5xl font-bold'>Download App</h1>
            <p className='text-lg sm:text-xl mt-3 mb-10'>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
        </div>

        <div> <img className='w-[19rem] sm:w-[30rem]' src={mob2} alt="" /> </div>

        <div className='send mt-10'>
            <p className='text-lg'>Enter your mobile number to get link to download</p>


            <div className='flex mt-4'>
                <div> <input className='p-2 w-[14rem] sm:w-[28rem] border-[1px] border-black' type="text" placeholder='Enter your mobile number*' /> </div>
                <div className='bg-[#3D373B] text-white px-3 py-3 text-xs hover:cursor-pointer hover:text-orange-500'>SEND LINK</div>
            </div>


        </div>

    </div>


        {/* container ends here */}
    </div>
  )
}

export default Download