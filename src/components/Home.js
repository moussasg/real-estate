import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import TeamList from "./TeamList"
import References from "./References"
import Subscribe from "./Subscribe"
import Prices from "./prices"

const Home=()=> {
    return (
        <div style={{width:"100vw"}}> 
            <Banner/>
            <FlatList/>
            <Subscribe/>
            <TeamList/>
            <References/>
            <Prices/>
        </div>
         )
}

export default Home;