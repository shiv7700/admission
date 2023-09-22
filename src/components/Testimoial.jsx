import './Testimoial.css'
import icon from '../assets/gs.png'
import dp from '../assets/dp.png'

const Testimoial = () => {
  return (
    <div className='testimoial-container flex flex-wrap lg:justify-center space-x-40 w-[90%] mx-auto pt-8 pb-5'>

        <div>
        <img className='w-80' src={icon} alt="" />
        </div>

        <div>

            <div>

            <div className='flex space-x-2'>
              <div className='h-6 w-6 mt-1 bg-[#FFA200]'></div>
              <div><h1 className='text-2xl'>TESTIMONIALS</h1></div>
            </div>
            
            <h1 className='text-3xl font-bold text-[#0B2C4D]'>What our students say <br /> about us</h1>
            <hr className='border-[#EBA332] mt-3' />

          {/* orange box  */}
          <div className='bg-[#FFA200] rounded-xl p-5 pt-5 pb-5 mt-5'>
          <p className='text-center font-semibold'>Lorem ipsum is placeholder text commonly used <br /> in the graphic, print, and publishing industries for <br /> previewing layouts and visual mockups.</p> 

            <div className='flex justify-start mt-5'>

            <div className='flex flex-wrap space-x-3 ms-3'>
              <div> <img className='w-[5rem]' src={dp} alt="" /> </div>
              <div className='mt-3'> <p> <span className='font-bold'>Vivek Malhotra</span>  <br /> <span className='font-semibold'>CEO</span> </p> </div>
            </div>

            </div>




            </div>
        

            </div>

        </div>
    

    {/* container ends here */}
    </div>
  )
}

export default Testimoial