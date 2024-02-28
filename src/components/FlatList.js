import Title from "./Title";
import FlatItem from "./FlatItem";

import canaryGardenImage from '../imgs/canary garden.jpg';
import coworkingImage from '../imgs/coworking.jpg';
import poolnightImage from '../imgs/pool night 1.jpg';
import roofViewImage from '../imgs/roof view.jpg';
import roofImage from '../imgs/roof.jpg';
import indoorPoolImage from "../imgs/Indoor Pool.jpg";
import Typewriter from "./typewriter";
const flatsData = [
    {
        slug: "CanaryGarden",
        image: canaryGardenImage,
        price: "10000AED",
        description:"2 Bedrooms"
    },
    {
        slug: "Coworking",
        image: coworkingImage,
        price: "15000AED",
        description:"3 Bedrooms"

    },
    {
        slug: "Poolnight",
        image: poolnightImage,
        price: "12000AED",
        description:"3 Bedrooms"

    },
    {
        slug: "Roofview",
        image: roofViewImage,
        price: "18000AED",
        description:"2 Bedrooms"

    },
    {
        slug: "Roof",
        image: roofImage,
        price: "16000AED",
        description:"1 Bedrooms"

    },
    {
        slug: "Indoorpool",
        image: indoorPoolImage,
        price: "20000AED",
        description:"1 Bedrooms"
    }
];

const FlatList = () => {
    const title = {
        text: "THE",
        subtext: "SAPHIRE",
        location:"sheikh zayed road"
    };

    return (
        <section className="section-all-re">
            <div className="container">
               {/* <Typewriter/>*/} 
                <br></br>
                <Title title={title.text} subtext={title.subtext} location={title.location}/>
                <div className="row">
                    {flatsData.map(flat => (
                        <FlatItem key={flat.slug} slug={flat.slug} image={flat.image} price={flat.price} description={flat.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlatList;
