import React,{useState,useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
 const params = useParams();
const [product, setProduct] = useState({});
const [relatedProducts, setRelatedProducts] = useState([]);


//initial details
useEffect(() => {
    if(params?.slug) getProduct();
},[params?.slug]);

//get producst
const getProduct = async () => {
    try {
      const {data} = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
    );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error); 
    }
};

//similar products
const getSimilarProduct = async (pid,cid) => {
    try {
        const {data} = await axios.get(
            `/api/v1/product/related-product/${pid}/${cid}`
        );
        setRelatedProducts(data?.products);
    } catch (error) {
        console.log(error);
    }
};

  return (
    <Layout>
         
        <div className='row container'>
            <div className='col-md-6'>
            
                <img src={`/api/v1/product/product-photo/${product._id}`} 
                className="card-img-top" 
                alt={product.name}
                height="300px"
                width={"550px"} />

            </div>
            <div className='col-md-5'>
                <h1 className='text-center'>Product Details</h1>
                <hr/>

                <h6>Name : {product.name}</h6>
                <h6>Description :  {product.description}</h6>
                <h6>
            Price :  { product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h6>
                <h6>Category:  {product?.category?.name}</h6>
                <button class="btn btn-secondary ms-1">Add to Cart</button>
            </div>
        </div>
        <hr/>

        <div className='row container '>
            <h6>Similar Products</h6>
            {relatedProducts.length < 1 && (
            <p className='text-center'>
                No Similar Product Found
            </p>
            )}
        <div className='d-flex flex-wrap'>
            {relatedProducts?.map((p) => (
                
                    <div className="card m-2" key={p._id} style={{ width: "18rem" }}>
                <img src={`/api/v1/product/product-photo/${p._id}`} 
                className="card-img-top" 
                alt={p.name} />

                <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0,60)}</p>
                <p className="card-text">Rs. {p.price}</p>
                
                <button class="btn btn-secondary ms-1">Add to Cart</button>
                </div>
             </div>  
            ))}
            </div>
        </div>
        
        
    </Layout>
  );
};

export default ProductDetails;