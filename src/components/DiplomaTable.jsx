import './DiplomaTable.css'

const DiplomaTable = () => {
  return (
    <div className='table-container w-[90%] rounded-xl mt-10 mb-10 mx-auto pt-5 pb-8'>
        <h1 className='text-center text-3xl font-semibold'>Diploma in Engineering College Ranking 2022</h1>
        <p className='text-center mt-1'>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>

        {/* agencies */}
        <div className='flex flex-wrap mt-10 space-x-5 ms-12'>
            <div className='px-2 py-2' >Agencies : </div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>NIRF</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>Indiatoday</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>Outlook</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>The Week</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>ΤΟΙ</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>The India Express </div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>Times Engineering</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>Successful CDs</div>
            <div className='border-[1px] border-black text-center px-2 py-2 hover:bg-[#EBA332]  hover:cursor-pointer '>Chronicle </div>
        </div>

        {/* table */}
        <table className='w-[90%] text-center mx-auto mt-5'>

        <thead className='bg-[#0B2C4D] text-white'>
            <tr>
                <td>College</td>
                <td className='asd'>Ranking</td>
                <td>Streams</td>
            </tr>
        </thead>

        <tbody className='bg-white'>
            <tr>
                <td>IIT Madras - Indian Institute of Technology - (IITM), Chennai</td>
                <td className='asd'>1 out of 300</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>IIT Delhi - Indian Institute of Technology [IITD], New Delhi</td>
                <td className='asd'>2 out of 300</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>IIT Bombay-Indian Institute of Technology - (IITB), Mumbai</td>
                <td className='asd'>3 out of 300</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>IIT Kanpur - Indian Institute of Technology - (IITK), Kanpur</td>
                <td className='asd'>4 out of 300</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>IIT Delhi - Indian Institute of Technology [IITD], New Delhi</td>
                <td className='asd'>5 out of 300</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>IIT Bombay-Indian Institute of Technology - (IITB), Mumbai</td>
                <td className='asd'>6 out of 300</td>
                <td>Engineering</td>
            </tr>
        </tbody>
    <tfoot>

    <tr className='bg-white'>
                <td className='remove'>IIT Kanpur - Indian Institute of Technology - (IITK), Kanpur</td>
                <td className='remove middle'>7 out of 300</td>
                <td className='remove'>Engineering</td>
            </tr>
    </tfoot>
  

        </table>  

        {/* container ends here */}
    </div>
  )
}

export default DiplomaTable