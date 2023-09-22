import "./Latest.css";
import arrow from "../assets/arrow.png";
import cardOne from '../assets/l1.png'
import cardTwo from '../assets/l2.png'
import cardThree from '../assets/l3.png'
import iconOne from '../assets/icon-1.png'
import iconTwo from '../assets/icon-2.png'
import iconThree from '../assets/icon-3.png'
import iconFour from '../assets/icon-4.png'
import watch from '../assets/watch.png'

const Latest = () => {
  return (
    <div className="latest-container w-[90%] mx-auto rounded mt-10 pt-5 pb-10">
      <h1 className="text-3xl font-semibold text-center">
        Latest News & Stories
      </h1>
      <p className="text-center mt-1">
        Lorem ipsum is placeholder text commonly previewing visual mockups.
      </p>

      <div className="flex justify-between mx-5 mt-5">
        <div className="flex flex-wrap ms-16 ">
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2">
            Exam News
          </div>
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2">
            College News
          </div>
          <div className="p-2 border-black border-[1px] rounded-lg hover:text-[#EBA332] hover:border-[#EBA332] hover:cursor-pointer mx-2">
            Admission News
          </div>
        </div>
      <div className="flex">
        <div>
          <p className="underline underline-offset-2 mx-1 cursor-pointer">See All Latest News & Stories</p>
        </div>
        <div>
          <img className="w-5 mt-1" src={arrow} alt="" />
        </div>
      </div>
      </div>

      {/* cards */}
      <LatestCard />

      {/* container ends here */}
    </div>
  );
};

const LatestCard = () => {
  return <div className="latest-cards flex flex-wrap md:justify-evenly mt-10">

    {/* 1st card */}
        <div className="card-1 w-3/12 bg-[#FFFFFF] rounded-lg">

    <div> <img src={cardOne} alt="card two" /> </div>
    <div className="me-2 mt-2 flex">
      <div className="mx-2 mt-1"> <img className="w-5" src={watch} alt="" /> </div>
      <div>January 12, 2023</div>
    </div>
    <div className="mx-2 mt-3">
      <h1 className="text-lg font-semibold">How to prepare for banking exams</h1>
      <p>Today everybody wants a safe and secure job.A Bank officer is a safe and secure job...</p>
    </div>

  {/* read more btn  */}
    <div className="flex flex-wrap justify-between mt-10 mx-2">
      <div className="pt-1 pb-1 px-4 border-[1px] border-black rounded-lg w-28 hover:cursor-pointer hover:bg-[#FFA200]">Read More</div>
      <div className="social-icon flex flex-wrap mt-2">
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconTwo} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconFour} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconOne} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconThree} alt="" /> </div>
      </div>
    </div>

  {/* orange box */}
    <div className="w-full h-2 mt-14 bg-[#FFA200] "></div>
    </div>

    

    {/* 2nd card */}
    <div className="card-2 w-3/12 bg-[#FFFFFF] rounded-lg">

    <div> <img src={cardThree} alt="card two" /> </div>
    <div className="me-2 mt-2 flex">
      <div className="mx-2 mt-1"> <img className="w-5" src={watch} alt="" /> </div>
      <div>January 12, 2023</div>
    </div>
    <div className="mx-2 mt-3">
      <h1 className="text-lg font-semibold">Benefits of Pursuing MBA after B.Tech</h1>
      <p>Does having an MBA give engineers a competitive edge in the workplace and access to new skills?</p>
    </div>

  {/* read more btn  */}
    <div className="flex flex-wrap justify-between mt-5 mx-2">
      <div className="pt-1 pb-1 px-4 border-[1px] border-black rounded-lg w-28  hover:cursor-pointer hover:bg-[#FFA200]">Read More</div>
      <div className="social-icon flex flex-wrap mt-2">
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconTwo} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconFour} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconOne} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconThree} alt="" /> </div>
      </div>
    </div>

  {/* orange box */}
    <div className="w-full h-2 mt-[3.3rem] bg-[#FFA200] "></div>
    </div>


    {/* 3rd card */}
    <div className="card-3 w-3/12 bg-[#FFFFFF] rounded-lg">

    <div> <img src={cardTwo} alt="card two" /> </div>
    <div className="me-2 mt-2 flex">
      <div className="mx-2 mt-1"> <img className="w-5" src={watch} alt="" /> </div>
      <div>January 12, 2023</div>
    </div>
    <div className="mx-2 mt-1">
      <h1 className="text-lg font-semibold">Tips and techniques to prepare and ace the exam</h1>
      <p>National-level entrance exam for students to get admission into MBBS, BDS,nursing....</p>
    </div>

  {/* read more btn  */}
    <div className="flex flex-wrap justify-between mt-5 mx-2">
      <div className="pt-1 pb-1 px-4 border-[1px] border-black rounded-lg w-28  hover:cursor-pointer hover:bg-[#FFA200]">Read More</div>
      <div className="social-icon flex flex-wrap mt-2">
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconTwo} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconFour} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconOne} alt="" /> </div>
        <div> <img className="w-5 mx-1 hover:cursor-pointer" src={iconThree} alt="" /> </div>
      </div>
    </div>

  {/* orange box */}
    <div className="w-full h-2 mt-14 bg-[#FFA200] "></div>
    </div>
    

  {/* container ends here */}
  </div>
};

export default Latest;
