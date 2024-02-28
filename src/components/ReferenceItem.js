const ReferenceItem = ({images}) => {
    return (
        <div>
            <div className="reference">
                <img src={`${images}`} alt="team" style={{width:"250px" , height:"100%"}}/>
            </div>
        </div>
    )
}

export default ReferenceItem;