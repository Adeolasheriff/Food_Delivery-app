import React from 'react'
import Header from '../component/Header'
import RecommededFood from '../component/RecommededFood'
import Service from '../component/Service'
import NewFoods from '../component/NewFoods'
import ServiceTwo from '../component/ServiceTwo'
import Special from '../component/Special'


export default function Home() {
  return (
    <div>
        <Header/>
        <RecommededFood/>
        <Service/>
        <NewFoods/>
        <ServiceTwo/>
        <Special/>

    </div>
  )
}
