import './CompanyLink.css'

const CompanyLink = () => {
  return (
    <div className='company-link-container w-[90%] mx-auto pt-5'>
        <h1 className='text-center text-3xl font-medium'>Company Useful Links</h1>
        <p className='text-center text-gray-500'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

        <CompanyCard />

    </div>
  )
}

const CompanyCard = () => {
    return <>
    <div className='company-card flex flex-wrap mt-5 justify-evenly'>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Visa Information</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Company Profile</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Customer Care</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">University Offering</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Side Map</option> </select> </div>

    </div>
        
        <div className='flex flex-wrap mt-1 md:mb-10 justify-evenly'>


        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Gift Cards</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Company Profile</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Customer Care</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">University Offering</option> </select> </div>

        <div> <select className='w-52 mt-2 p-2 border-[1px] border-gray-400 rounded-lg hover:cursor-pointer hover hover:text-orange-500 hover:border-orange-500'> <option value="">Side Map</option> </select> </div>
        </div>

    </> 
}

export default CompanyLink