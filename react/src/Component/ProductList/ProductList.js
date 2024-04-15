import { Card, Button, Row, Col } from 'react-bootstrap';
import { Star } from 'lucide-react'
import './ProductList.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {

    const [productList, setProductList] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const navigate = useNavigate();

    const getAllProduct = () => {
        axios.get(`http://localhost:8080/api/product/all`).then(response => {
            if (response.status === 201) {
                setProductList(response?.data.data);
                setFilteredProductList(response.data.data);
            }
            else {
                console.log('error')
            }
        })
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    const filterData = (catItem) => {

        if (catItem === selectedCategory) {
            setSelectedCategory(null);
            setFilteredProductList(productList);
        } else {
            const result = productList.filter((curData) => {
                return curData.productName === catItem;
            })
            setFilteredProductList(result);
            setSelectedCategory(catItem);
            console.log(result, 'rrrrr')
        }
        // setProductList(result)
    }


    const handleSelect = (product) => {
        navigate('/ProductDetails', { state: { type: 'ProductDetails', data: product } })
    }

    return (

        <>
            <Row className='w-100 p-3'>
                <Col sm={3}>
                    <div className='vertical-filters-filters categories-container'>
                        <h5 className='class="vertical-filters-header"'>Categories</h5>
                        <ul className='categories-list'>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' name='saree'
                                        onChange={() => filterData('Saree')}
                                        checked={selectedCategory === 'Saree'}
                                    />Saree
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' onChange={() => filterData('Shirt')} checked={selectedCategory === 'Shirt'} />Shirt
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' name='floral dress' onChange={() => filterData('floral dress')} checked={selectedCategory === 'floral dress'} />floral dress
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' onChange={() => filterData('Ethinic Dress')} />Ethinic Dress
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' onChange={() => filterData('Kurta set')} />Kurta set
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' onChange={() => filterData('Earring')} />Earring
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' onChange={() => filterData('Lehenga coli')} />Lehenga coli
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className='vertical-filters-filters categories-container'>
                        <h5 className='class="vertical-filters-header"'>Brand</h5>
                        <ul className='categories-list'>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Kalini
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Mitera
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Anouk
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Sangria
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Manvaa
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Adiva
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Adiva
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox" className='me-1' />Ananya
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
                        {
                            filteredProductList?.length > 0 &&
                            filteredProductList?.map((item) =>
                                <div className='me-3'>
                                    <Card className='me-0 w-100 h-100 p-2'>
                                        <>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item?.productName}</Card.Title>
                                                <Card.Text>{item?.brand}</Card.Text>
                                                <Star /><Star /><Star /><Star /><Star />
                                                <Card.Text>{item?.price}</Card.Text>
                                            </Card.Body>
                                        </>
                                        <Button variant="primary" className='text-center' onClick={() => { handleSelect(item._id) }}>Buy</Button>
                                    </Card>
                                </div>
                            )}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProductList;