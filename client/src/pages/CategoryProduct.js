import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryProduct = () => {
    const params = useParams();
    const  navigate = useNavigate();
    const [products , setProducts] = useState([]);
    const [category , setCategory] = useState([]);

    useEffect(() => {
        if(params?.slug) getProductsByCat();
    },[params?.slug]);
    const getProductsByCat = async () => {
        try {
            const {data} = await axios.get(`/api/v1/product/product-category/${params.slug}`
        );
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Layout>
        <div className='container mt-3'>
            
            <h2 className='text-center'>Category - {category?.name}</h2>
            <h6 className='text-center'>{products?.length} result Found</h6>
            <div className='row'>
                <div className='col-md-9 offset-1'>
                    
                
            <div className='d-flex flex-wrap'>
            {products?.map((p) => (

                    <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} 
                className="card-img-top" 
                alt={p.name} />

                <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0,30)}</p>
                <p className="card-text">Rs. {p.price}</p>
                <button class="btn btn-primary ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                <button class="btn btn-secondary ms-1">Add to Cart</button>
                </div>
             </div>  
            ))}
            </div>

            {/* <div className='m-2 p-3'>
             {products && products.length <total && (
              <button className='btn btn-warning' onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);

              }}>
              {loading ? "loading..." : "Loadmore"}
              </button>
             )}

             
            </div> */}
          </div>
          </div>
        </div>
    </Layout>
  )
}

export default CategoryProduct