import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLG from '../../components/widgetLG/WidgetLG'
import WidgetSM from '../../components/widgetSM/WidgetSM'
import { userData } from '../../dummyData'
import './home.css'


const Home = () => {
  return (
    <div className="homePagewrapper">
        <FeaturedInfo />   
        <Chart data={userData} title={'User Analytics'} grid dataKey={"Active User"}/> 
        <div className="homeWidgets">
          <WidgetSM />
          <WidgetLG />
        </div>
    </div>
  )
}

export default Home