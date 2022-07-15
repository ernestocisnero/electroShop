

export const CartCard = ({ id, manufacturer, type, price, description, imgPath }) => {


    return (
        <>
            <div className="card w-25 h-25 mx-4 my-4">
                <img className="card-img-top mt-2" src={imgPath} alt={`${manufacturer}:${type}`} />
                <div className="card-body">
                    <h5 className="card-title">{`${manufacturer} ${type}`}</h5>
                    <hr />

                    <div className="row">
                        <div className="container-fluid">
                            <button className="btn btn-outline-primary" id={id}>Proceed to checkout</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}