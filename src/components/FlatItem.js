import { Link } from "react-router-dom";

const FlatItem = ({slug , image , price , description}) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={`${image}`} alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">{`${slug}`}</span>
                        <span className="item-price">{`${price}`}</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>{`${description}`}</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Lorem </span>
                        </div>
                        <Link to={`/flat/${slug}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatItem