import logo from "./damacbg.jpg"
const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">About</h1>
                            <h2 className="page-description">DAMAC</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                            <img src={logo} alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                            <div className="about-item">
                                <div className="title">
                                DAMAC Properties is a leading luxury real estate developer in the Middle East
                            </div>
                                <div className="about-text">
                                with a track record of delivering some of the most iconic and innovative properties in the region. Founded in 2002, the company has quickly become a household name in the industry, with a reputation for excellence and a commitment to quality that is second to none.
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About