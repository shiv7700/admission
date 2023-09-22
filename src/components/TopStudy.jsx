import './TopStudy.css'
import states from '../assets/sap.png'

const TopStudy = () => {
  return (
    <div className='top-study-container w-[90%] mx-auto mt-10 mb-10'>
        <h1 className='text-center text-2xl font-semibold'>Top Study Places For Diploma in Engineering</h1>
        <p className='text-center'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

        <img className='w-90%' src={states} alt="" />

    </div>
  )
}

export default TopStudy