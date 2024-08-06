import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 
import productsData from "../products.json";
import { Card } from 'react-bootstrap';


const ProductScreen = () => {
  const { id: productId } = useParams();
  const products = Object.values(productsData.products);
  const product = products.find((p, index) => index.toString() === productId); 

  console.log(product);

  return (
    <>
    <Link to='/' className="btn btn-dark my-3">
    Go Back </Link>
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <h5>Price: ₹{product.price}</h5>
          <h6>Popularity: {product.popularity}</h6>
          <p>Subcategory: {product.subcategory}</p>
          <h6>Description: </h6>
        <Card style={{width: "50%"}} > 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima aperiam commodi blanditiis porro reiciendis impedit totam quos autem quis.</p>
          </Card>
          

        </div>
      ) : (
        <p>Product not found</p>
        
      )}
    </div>
    </>
  );
};

export default ProductScreen;
