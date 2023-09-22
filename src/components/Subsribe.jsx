import './Subsribe.css';
import btn from '../assets/btn.png'

const Subsribe = () => {
  return (
    <div className='subscribe flex flex-wrap flex-col justify-center pt-4 pb-3 w-[90%] mt-10 mb-5 mx-auto bg-[#ffdba7] rounded-lg'>
        <h1 className='text-3xl text-center font-semibold '>Subscribe to Our News Letter</h1>
        <p className='text-center mt-2 small-screen'>Get College Notifications, Exam Notifications and News Updates</p>
        <div className='sub-input flex flex-wrap space-x-4 justify-evenly mt-6'>
            <div className='thoda-left'> <input className='border-black w-[15rem] sm:w-[22rem] border-[0.2px] rounded pt-2 pb-2 ps-[2.5rem] input-1 mt-2' type="text" placeholder='Enter your email id' /> </div>
            <div> <input className='border-black w-[15rem] sm:w-[22rem] border-[0.2px] rounded pt-2 pb-2 ps-[2.5rem] input-2 mt-2' type="text" placeholder='Enter your mobile number ' /> </div>
            <div> <select className='border-black w-[15rem] sm:w-[22rem] border-[0.2px] rounded pt-2 pb-2 ps-[2.5rem] input-3 mt-2'> 
                <option className='text-slate-400' hidden >Choose your course</option> 
                <option>Engineering</option> 
                <option>Management</option> 
            </select> 
            </div>
        </div>
        <div className='flex justify-center mt-6'>
            <div>
            <img className='btn-submit w-28' src={btn} alt="" />
            <p className='text-white submit hover:cursor-pointer hover:text-[#FFA200]'>Submit →</p>
            </div>
        </div>
    </div>
  )
}

export default Subsribe