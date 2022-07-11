

export const Card = ( {manufacturer, type, price, description, imgPath} ) => {
    return (
        <>
            <div className="card w-25 h-25 mx-4 my-4">
                <img className="card-img-top" src={imgPath} alt={`${manufacturer}:${type}`}/>
                <div className="card-body">
                    <h5 className="card-title">{`${manufacturer}, ${type}: $${price}`}</h5>
                    <p className="card-text">{description}</p>
                    <hr />
                    
                    <div className="row">
                        <div className="col-6">

                    <button href="#" className="btn btn-dark">Add</button>
                        </div>
                        <div className="col-6">

                    <button href="#" className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
