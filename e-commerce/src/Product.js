import "./../node_modules/bootstrap/dist/css/bootstrap.css"
function Product(props) {
    return(
        <div className="col-md-3">
                    <div className="product-card">
                        <div className="product-card-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={props.laptopobj.image} alt="Red MI Note 8" />
                        </div>
                        <div className="product-card-body">
                            <p className="product-brand">{props.laptopobj.brand}</p>
                            <h5 className="product-name">
                               <a href="">
                               {props.laptopobj.name}
                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">${props.laptopobj.price}</span>
                                <span className="original-price">$300</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i class="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                    </div>
    );
}

export default Product;