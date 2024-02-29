const ReferenceItem = ({images}) => {
    return (
        <div>
            <div className="reference">
                <img src={`${images}`} alt="team" style={{width:"300px" , height:"400px"}}/>
            </div>
        </div>
    )
}

export default ReferenceItem;