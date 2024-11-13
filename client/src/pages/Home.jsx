import React from 'react'
import Header from '../component/Header'
import RecommededFood from '../component/RecommededFood'
import Service from '../component/Service'
import NewFoods from '../component/NewFoods'

export default function Home() {
  return (
    <div>
        <Header/>
        <RecommededFood/>
        <Service/>
        <NewFoods/>

    </div>
  )
}
