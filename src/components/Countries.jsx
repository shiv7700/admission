import './Countries.css'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c1.png'


const Countries = () => {
  return (
    <div className='countries-container w-[90%] mx-auto mb-8 mt-6'>
        <h1 className='text-center text-3xl font-semibold'>Countries</h1>
        <p className='text-center'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

        <div className='countries flex flex-wrap justify-evenly mt-7 px-12'>

            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c1} alt="" /> <h1 className='text-[#0B2C4D] text-center'>UK</h1> </div>
            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c2} alt="" /> <h1 className='text-[#0B2C4D] text-center'>USA
</h1> </div>
            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c3} alt="" /> <h1 className='text-[#0B2C4D] text-center'>Canada</h1> </div>
            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c4} alt="" /> <h1 className='text-[#0B2C4D] text-center'>Ireland</h1> </div>
            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c5} alt="" /> <h1 className='text-[#0B2C4D] text-center'>Australia</h1> </div>
            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c6} alt="" /> <h1 className='text-[#0B2C4D] text-center'>India</h1> </div>
            <div className='bg-[#F8F8F8] pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-24' src={c7} alt="" /> <h1 className='text-[#0B2C4D] text-center'>South Africa</h1> </div>

        </div>

    </div>
  )
}

export default Countries