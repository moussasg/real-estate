import { useEffect, useState } from "react"
import banner from "./damacbg.jpg"
import { Link } from "react-router-dom";
const Banner = () => {
    const [search, setSearch] = useState();
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");
    useEffect(() => {
        setSearch(["a","b","test", "mb"])
    }, [])
    const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }
    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">Not Found</div>
        }
        if (find.length > 0) {
            return <div className="find-search">
                {
                    find.map(item => {
                        return <Link key={item} to="#">{item}</Link>
                    })
                }
            </div>
        }
    }
    return (
        <div className="banner d-flex align-items-center">
   
  <div alt="banner" style={{ 
    backgroundImage: `url(${banner})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    width: '100vw',
    height:"100vh"
}}>
</div>
   
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto wow animate__animated animate__fadeInUp">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Sapphire Damac: A Haven of Luxury Living</p>
                                <h4 className="mt-2 mb-4">Discover Exquisite Living: Sapphire Damac - Where Luxury Meets Lifestyle</h4>
                                <div className="search-area">
                                    <input value={word} onChange={(e) => findSearch(e)} type="text" className="inp-search" placeholder="Search" />
                                    <button className="btn-search m-2">Search All</button>
                                </div>
                                {findResult()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;