import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <UpperFooter />
    <LowerFooter />
    </>
  )
}

const UpperFooter = () => {
    return(
        <>
        <div className='footer-top-container py-6 xl:pt-2 xl:pb-5'>
        <div className='footer-top flex flex-wrap justify-between sm:justify-between pt-4 px-20'>
            <div>
                <div>
                    <h4 className='text-xl font-semibold'>Top Colleges</h4>
                    <div className='border-t-2 border-[#EBA430] w-11 mt-2 xl:mt-2'></div>
                </div>

                <ul className='cursor-pointer mt-7'>
                    <li>MBA</li>
                    <li>B.Tech/BE</li>
                    <li>MCA</li>
                    <li>BCA</li>
                    <li>M.Tech</li>
                    <li>MA</li>
                    <li>BA</li>
                </ul>
            </div>

            <div>
            <div>
                <h4 className='text-xl font-semibold'>Top Universities</h4>
                <div className='border-t-2 border-[#EBA430] w-11 mt-2 xl:mt-2'></div>
            </div>

                <ul className='cursor-pointer mt-7 md:mt-8'>
                    <li>Engineering</li>
                    <li>Management</li>
                    <li>Medical</li>
                    <li>Law</li>
                    <li>Commerce</li>
                    <li>Science</li>
                    <li>Arts</li>
                </ul>
            </div>

            <div>
            <div>
                <h4 className='text-xl font-semibold'>Top Exam</h4>
                <div className='border-t-2 border-[#EBA430] w-11 mt-2 xl:mt-2'></div>
            </div>

            <ul className='cursor-pointer mt-7 md:mt-8'>
                <li>CAT</li>
                <li>GATE</li>
                <li>Jee-Main</li>
                <li>NEET</li>
                <li>XAT</li>
                <li>CLAT</li>
                <li>MAT</li>
            </ul>

            </div>

            <div>
            <div>
                <h4 className='text-xl font-semibold'>Study Abroad</h4>
                <div className='border-t-2 border-[#EBA430] w-11 mt-2 xl:mt-2'></div>
            </div>

            <ul className='cursor-pointer mt-7 md:mt-8'>
                <li>Canada</li>
                <li>USA</li>
                <li>UK</li>
                <li>UAE</li>
                <li>Singapore</li>
                <li>Hong Kong</li>
                <li>New Zealand</li>
            </ul>
            </div>

            <div className='special-footer'>
                <ul className='cursor-pointer mt-16 sm:mt-16'>
                    <li>Australia </li>
                    <li>Germany</li>
                    <li>Sweden</li>
                    <li>Malaysia</li>
                    <li>Italy</li>
                    <li>Netherlands</li>
                    <li>Ireland </li>
                </ul>
            </div>

            <div>
            <div>
                <h4 className='text-xl font-semibold'>Board Exams</h4>
                <div className='border-t-2 border-[#EBA430] w-11 mt-2 xl:mt-2'></div>
            </div>

            <ul className='cursor-pointer mt-7 md:mt-8'>
                <li>CBSE Class 12</li>
                <li>CBSE Class 12th Results</li>
                <li>CBSE Class 12th Syllabus</li>
                <li>CBSE Class 12th Exam Dates</li>
                <li>CBSE Class 10</li>
                <li>CBSE Class 10th Result </li>
                <li>CBSE Class 10th Syllabus</li>
            </ul>
            </div>
        </div>
        <TopBottomFooter />
        </div>
</>
    );
}

const TopBottomFooter = () => {
    return <div className='flex flex-wrap xl:justify-around xl:mt-5 mt-2 justify-center'>
        {/* links */}
        <div className='flex flex-wrap space-x-5 justify-center'>
            <div> <h4 className='text-xl font-bold mt-2'>Other Links : </h4> </div>
            <div className='links flex flex-wrap justify-center space-x-3 mb-5'>
                <div className='adm bg-[#FFFFFF] rounded-md text-center w-40 md:py-1 md:w-[10rem]  hover:bg-[#FFA200] cursor-pointer mt-2'>Admission in</div>
                <div className='bg-[#FFFFFF] rounded-md text-center w-40 md:py-1 md:w-[10rem] hover:bg-[#FFA200] cursor-pointer mt-2'>Contact Us</div>
                <div className='bg-[#FFFFFF] rounded-md text-center w-40 md:py-1 md:w-[10rem] hover:bg-[#FFA200] cursor-pointer mt-2'>Career</div>
                <div className='bg-[#FFFFFF] rounded-md text-center w-40 md:py-1 md:w-[10rem] hover:bg-[#FFA200] cursor-pointer mt-2'>Terms & Conditions</div>
                <div className='bg-[#FFFFFF] rounded-md text-center w-40 md:py-1 md:w-[10rem] hover:bg-[#FFA200] cursor-pointer mt-2'>Privacy Policy</div>
            </div>
        </div>

        {/* social media icons */}
        <div className='flex flex-wrap space-x-2 items-baseline'>
            <div className='bg-white p-2 md:p-2 rounded hover:bg-[#FFA200] cursor-pointer'> <FaFacebookF /> </div>
            <div className='bg-white p-2 md:p-2 rounded hover:bg-[#FFA200] cursor-pointer'> <FaTwitter /> </div>
            <div className='bg-white p-2 md:p-2 rounded hover:bg-[#FFA200] cursor-pointer'> <FaLinkedinIn /> </div>
            <div className='bg-white p-2 md:p-2 rounded hover:bg-[#FFA200] cursor-pointer'> <FaInstagram /> </div>
        </div>
    </div>
}

const LowerFooter = () => {
    return (<div className='lower-footer bg-[#402681] p-2'>
        <p className='text-white text-center'>© 2023 Admission in - All rights reserved. Designed & Developed by AbyM Technology</p>
    </div>);
}

export default Footer