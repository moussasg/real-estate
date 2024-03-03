import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import TeamList from "./TeamList"
import References from "./References"
import Subscribe from "./Subscribe"
import Prices from "./prices"
import Serviceslist from "./constservices"
import Gym from "./Gym"
import Lobby from "./Lobby"
import Spa from "./spa"

const Home=()=> {
    return (
<div className="overflow-hidden">
            <Banner/>
            <Serviceslist/>
            <Subscribe/>
            <Lobby/>
            <FlatList/>
            <Gym/>
            <Spa/>
            <TeamList/>
            <References/>
            <Prices/>
        </div>
         )
}

export default Home;