import { Row, Col, Button } from 'react-bootstrap'
import { Star } from 'lucide-react'
import './ProductDetails.css'
import { useLocation } from 'react-router-dom'

const ProductDetail = ({value}) => {
 console.log(value,'pppppppppppppppppppppppppppppppppp')
    const location = useLocation();
    const locationName = location && location.state ? location.state : ''
    console.log(locationName);

    return (
        <>
            <div className="product-details-wrapper">
                <h3>Product Details</h3>
                <Row>
                    <Col md={5}></Col>
                    <Col md={7}>
                        <h4>Suta</h4>
                        <p className='pdp-name'>Sisi</p>
                        <div className='index-overallRating'>
                            <div className='me-1'>6.5</div>
                            <span><Star width={16} /></span>
                            <div className='index-separator'>|</div>
                            <div className='index-ratingsCount'>
                                112 Rating
                            </div>
                        </div>
                        <p>MRP: 1000</p>
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