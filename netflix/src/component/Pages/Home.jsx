import React, { useEffect, useState } from 'react'
import { TrendingMovie } from './SectionsOne/TrendingMovie'
import { Movies } from './SectionTwo/Movies'
import Footer from '../Footer'
import { Navbar } from './Navbar'
import Loading from '../Loading'

export const Home = () => {
  const [load, setload] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setload(false)
    }, 2000)
  }, [])
  return (
    <div>
         {load && <div className="loading">
        <Loading />
      </div> }

        <Navbar />
      <TrendingMovie/>
      <Movies/>
      <Footer/>
    </div>
  )
}
