import { Row, Col, Button } from 'react-bootstrap'
import { Star } from 'lucide-react'
import './ProductDetails.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';

const ProductDetail = () => {

    const [productDetails, setProductDetails] = useState([]);

    const location = useLocation();
    const locationName = location && location.state ? location.state : ''

    const productId = locationName && locationName?.data ? locationName?.data : '';
    console.log(productId,'productId')

    const getProduct = () => {
        if (productId) {
            axios.get(`http://localhost:8080/api/product/get/${productId}`)
                .then(response => {
                    if (response.status === 201) {
                        setProductDetails(response?.data?.data);
                    }
                    else {
                        console.log('error')
                    }
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                });
        } else {
            console.log('No product ID available');
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className="product-details-wrapper">
                <h3>Product Details</h3>
                <Row>
                    <Col md={5}></Col>
                    <Col md={7}>
                        <h4>{productDetails.productName}</h4>
                        <p className='pdp-name'>{productDetails.brand}</p>
                        <div className='index-overallRating'>
                            <div className='me-1'>6.5</div>
                            <span><Star width={16} /></span>
                            <div className='index-separator'>|</div>
                            <div className='index-ratingsCount'>
                                112 Rating
                            </div>
                        </div>
                        <p>MRP: {productDetails.price}</p>
                        <p>Quantity: {productDetails.quantity}</p>
                        <div className='pdp-action-container pdp-fixed'>
                            <Button>Add To Cart</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProductDetail;