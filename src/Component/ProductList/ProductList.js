import { Card, Button, Row, Col } from 'react-bootstrap';
import { Star } from 'lucide-react'
import './ProductList.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetail from '../ProductDetails/ProductDetails';

const ProductList = () => {

    const navigate = useNavigate()
    const [productList, setProductList] = useState({
        productName: 'Shirt',
        Brand: 'Sisi',
        price: 2000
    })

    const handleSelect = (product) => {
        console.log(product)
        navigate('/ProductDetails',{state:{type:'detailPage',data:product}})
    }

    return (

        <>
            <Row className='w-100 p-3'>
                <Col sm={3}>
                    <div className='vertical-filters-filters categories-container'>
                        <h5 className='class="vertical-filters-header"'>Cloth Name</h5>
                        <ul className='categories-list'>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Shirt
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Jeans
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Dress
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className='vertical-filters-filters categories-container'>
                        <h5 className='class="vertical-filters-header"'>Brand Name</h5>
                        <ul className='categories-list'>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Biba
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Nike
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Armani
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className='vertical-filters-filters categories-container'>
                        <h5 className='class="vertical-filters-header"'>Price</h5>
                        <ul className='categories-list'>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />300 - 400
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />400 - 500
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' /> More than 500
                                </label>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col sm={9}>
                    <div className='d-flex'>
                        <Card className='me-3 w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Top</Card.Title>
                                <Card.Text>Chanel</Card.Text>
                                <Star /><Star /><Star /><Star /><Star />
                                <Card.Text>8,000</Card.Text>
                                <Button variant="primary" className='text-center'>Buy</Button>
                            </Card.Body>
                        </Card>
                        <Card className='me-3 w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Top</Card.Title>
                                <Card.Text>Chanel</Card.Text>
                                <Star /><Star /><Star /><Star /><Star />
                                <Card.Text>8,000</Card.Text>
                                <Button variant="primary" className='text-center'>Buy</Button>
                            </Card.Body>
                        </Card>
                        <Card className='me-3 w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Top</Card.Title>
                                <Card.Text>Chanel</Card.Text>
                                <Star /><Star /><Star /><Star /><Star />
                                <Card.Text>8,000</Card.Text>
                                <Button variant="primary" className='text-center'>Buy</Button>
                            </Card.Body>
                        </Card>
                        <Card className='w-100'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Top</Card.Title>
                                <Card.Text>Chanel</Card.Text>
                                <Star /><Star /><Star /><Star /><Star />
                                <Card.Text>8,000</Card.Text>
                                <Button variant="primary" onClick={()=>{handleSelect(productList)}} className='text-center'>Buy</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProductList;