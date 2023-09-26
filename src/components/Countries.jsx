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
    <div className='countries-container  mb-8 mt-6'>
        <h1 className='text-center text-3xl font-semibold'>Countries</h1>
        <p className='text-center'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

        <div className='countries flex flex-wrap justify-evenly px-12 mt-5'>

            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c1} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>UK</h1> </div>
            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c2} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>USA
</h1> </div>
            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c3} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>Canada</h1> </div>
            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c4} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>Ireland</h1> </div>
            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c5} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>Australia</h1> </div>
            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c6} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>India</h1> </div>
            <div className='bg-[#F8F8F8] mt-4 pt-4 pb-2 px-4 rounded-lg hover:cursor-pointer hover:bg-[#FFA200]'> <img className='w-32' src={c7} alt="" /> <h1 className='text-[#0B2C4D] text-center font-medium'>South Africa</h1> </div>

        </div>

    </div>
  )
}

export default Countries