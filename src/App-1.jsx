import './app.css'

const App = () => {
  return (
   <>
   <h1 className='text-3xl text-green-600'>center me</h1>
   <div>
    <div className='p-5 max-w-sm mx-auto bg-orange-400 rounded-xl shadow-lg flex items-center space-x-4'>
      <div> <img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt="" /> </div>
      <div>
        <div className='text-2xl font-semibold'>tailwind css
          <p className='text-slate-500 text-base'>by blame pro</p>
        </div>
      </div>
    </div>
   </div>
   
   <button className='bg-red-300 mt-2 text-base p-2 rounded-lg hover:bg-orange-600 hover:text-white'>buy now</button>

   <div className='text-white md:text-red-600 sm:text-green-600'>responsive design</div>
   
   <div className="m-2">
    <div className="card mx-auto max-w-sm bg-white rounded-xl overflow-hidden md:max-w-2xl">
      <div className='md:flex'>
      <div> <img className='h-48 w-full md:h-full md:w-48' src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </div>
      <div className='p-6'>
        <div className='uppercase text-sm font-semibold'>an aweosme card</div>
        <a className='block mt-1 text-lg font-medium' href="#"> <span className='bg-yellow-400 p-[3px] px-[10px]'>tailwind</span>  is so cool once you understand true power</a>
        <p>Lorem ipsum dolor sit amet </p>
        </div>
      </div>
    </div>
   </div>

   </>
  )
}

export default App