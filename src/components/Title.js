const Title = (props) => {
    const {title, subtext , location}=props
    return (
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="title-area text-center">
                    <p className="title">{title}</p>
                    <h1 className="title-description" style={{color:"bleu"}}>{subtext}</h1>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default Title