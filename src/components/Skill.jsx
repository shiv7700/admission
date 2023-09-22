import './Skill.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import cc1 from '../assets/cc11.png'
import cc2 from '../assets/cc22.png'
import cc3 from '../assets/cc33.png'

const Skill = () => {
  return (
    <div className='skill-container w-[100%] flex flex-wrap justify-around pt-16'>

        <div>

        <h1 className='text-4xl font-medium text-[#221553]'>Learn New Skills Online <br /> with Top <span className='text-[#FFA200] font-bold'>Educators</span> </h1>
        <p className='text-[#221553] font-normal mt-5'>Build skills with courses, certificates and degrees online <br /> from world-class universities and companies.</p>

        <div className='mt-8 mb-10'> <input className='search-for p-2 w-[30rem] rounded' type="text" placeholder='Search for University, Colleges & Courses' /> </div>

        <div className='flex flex-wrap space-x-4'>
            <div className='p-2 text-[#311C61] font-medium bg-white flex space-x-2 rounded i-1 hover:cursor-pointer hover:bg-[#FFA200]'>
               <div> <img className='w-4' src={s1} alt="" /> </div> 
               <div>Find Courses</div> 
                </div>
            <div className='p-2 text-[#311C61] font-medium bg-white flex space-x-2 rounded i-2 hover:cursor-pointer hover:bg-[#FFA200]'>
            <div> <img className='w-6' src={s3} alt="" /> </div> 
            <div> Get Your Counselling</div>
                </div>
            <div className='p-2 text-[#311C61] font-medium bg-white flex space-x-2 rounded i-3 hover:cursor-pointer hover:bg-[#FFA200]'>
            <div> <img className='w-4' src={s2} alt="" /> </div> 
            <div>Diploma in Engineering in Gurgaon</div>    
            </div>
        </div>

        </div>

        {/* images container*/}
        <div className='flex flex-wrap space-x-36'>

        <div> <img className='w-[15rem]' src={cc1} alt="" /> <div className='bg-[#909EE7] text-center text-sm p-2 rounded-lg relative -top-52 right-40'>Lorem ipsum is placeholder <br /> text commonly used in</div>  </div>

        <div className='flex flex-wrap flex-col'>

        <div> <img className='w-[10rem] -mt-10' src={cc2} alt="" /> <div className='bg-[#909EE7] text-center text-sm p-1 rounded-lg relative -top-32 right-32'>Lorem ipsum is placeholder <br /> text commonly used in</div> </div>

        <div> <img className='w-[10rem] mt-20' src={cc3} alt="" /> <div className='bg-[#909EE7] text-center text-sm p-1 rounded-lg relative -top-32 right-32'>Lorem ipsum is placeholder <br /> text commonly used in</div> </div>

        </div>



        </div>

    </div>
  )
}

export default Skill