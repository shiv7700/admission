import './App.css'
import TopCollege from './components/TopCollege'
import ExploreEng from './components/ExploreEng'
import Footer from './components/Footer'
import TopUniversity from './components/TopUniversity'
import Latest from './components/Latest'
import Subsribe from './components/Subsribe'
import TopDiploma from './components/TopDiploma'
import Countries from './components/Countries'
import DiplomaTable from './components/DiplomaTable'
import TopStudy from './components/TopStudy'
import TopCollection from './components/TopCollection'
import CompanyLink from './components/CompanyLink'
import Testimoial from './components/Testimoial'
import Download from './components/Download'

import b1 from './assets/know-clg.png'
import b2 from './assets/know-gn.png'
import Skill from './components/Skill'

const App = () => {
  return (
    <>
    <Skill />
    <TopCollege />
    <TopCollection />
    <img className='w-[90%] mx-auto mt-5 mb-5 ' src={b1} alt="" />
    <TopUniversity />
    <Countries />
    <DiplomaTable />
    <TopStudy />
    <ExploreEng />
    <img className='w-[90%] mx-auto mt-5 mb-5 ' src={b2} alt="" />
    <TopDiploma />
    <Latest />
    <Subsribe />
    <CompanyLink />
    <Testimoial />
    <Download />
    <Footer /> 
    </>
  )
}

export default App