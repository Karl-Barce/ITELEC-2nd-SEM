import Product from "./Product.js"
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import ROGProducts from "./ROGProducts.js";
import AlienProducts from "./AlienProducts.js"
function ProductList() {
var finder = "Alien" //conditional
    
    
if(finder === "ROG"){
    const laptop = ROGProducts;
    return(
        <div className="py-3 py-md-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-4">ROG Products</h4>
                </div>
                {laptop.map((laptop) => (<Product laptopobj={laptop} />))}
                </div>
                </div>
                </div>
    );
}
if(finder === "Alien"){
    const laptop = AlienProducts;
    return(
        <div className="py-3 py-md-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-4">Alienware Products</h4>
                </div>
                {laptop.map((laptop) => (<Product laptopobj={laptop} />))}
                </div>
                </div>
                </div>
    );
}
      
}

    



export default ProductList;