import './App.css'

const App = () => {
  return (
    <>
    {/* navbar */}
    <nav className='w-full h-14 bg-indigo-400 flex justify-between items-center px-4 md:px-4'>
        <div className='text-2xl text-indigo-700 font-bold'>pw skills</div>
        <ul className='md:flex font-semibold hidden'>
            <li className='mx-2 cursor-pointer'>Home</li>
            <li className='mx-2 cursor-pointer'>About us</li>
            <li className='mx-2 cursor-pointer'>contact us</li>
        </ul>
        <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer'>login/signup</div>
        <div className='md:hidden'>
            <a className='text-4xl' href="#">&#8801;</a>
        </div>
    </nav>
    {/* navbar ends here */}

    {/* hero section */}
    <header className="w-full h-auto">
        <img className='w-full hidden md:block' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />
        <img className='w-full md:hidden ' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />
    </header>

    {/* student section  */}
    <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'> 
            <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>pure hardwork no shortcut</p>
            <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4'>test</div>
        </div>

        <div className='gg w-full flex flex-row flex-wrap justify-evenly'>
            <div className='w-full flex flex-col items-center mb-12'>
                <img className='h-44 w-44' src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="o image" />
                <p className='text-3xl font-bold text-white'>600+ courses</p>
                <p className='text-3xl font-bold text-gray-600'>different courses</p>
            </div>
            <div className='w-full flex flex-col items-center mb-12'>
                <img className='h-44 w-44' src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="o image" />
                <p className='text-3xl font-bold text-white'>600+ courses</p>
                <p className='text-3xl font-bold text-gray-600'>different courses</p>
            </div>
            <div className='w-full flex flex-col items-center mb-12'>
                <img className='h-44 w-44' src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="o image" />
                <p className='text-3xl font-bold text-white'>600+ courses</p>
                <p className='text-3xl font-bold text-gray-600'>different courses</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default App