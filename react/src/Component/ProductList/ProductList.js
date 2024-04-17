import { Card, Button, Row, Col } from 'react-bootstrap';
import { Star } from 'lucide-react'
import './ProductList.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Trash } from 'lucide-react';

const ProductList = () => {

    const [productList, setProductList] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

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

    const deleteProductCard = (productId) => {
        axios.delete(`http://localhost:8080/api/product/delete/${productId}`).then(response => {
            if (response.status === 201) {
                const updatedProducts = productList.filter(product => product._id !== productId);
                setProductList(updatedProducts);
                console.log(updatedProducts, 'updated');
            }
            else {
                console.log('error')
            }
        })
            .catch(error => {
                console.log('Error deleting product:', error);
            });
    }

    useEffect(() => {
        getAllProduct(); // Fetch products initially
    }, [productList]); // Re-run effect when productList changes

    const filterData = (catItem) => {

        let updatedCategories = [...selectedCategory];

        if (updatedCategories.includes(catItem)) {
            // Deselect the category
            updatedCategories = updatedCategories.filter(item => item !== catItem);
        } else {
            // Select the category
            updatedCategories.push(catItem);
        }

        setSelectedCategory(updatedCategories);

        if (updatedCategories.length === 0) {
            // If no categories selected, show all products
            setFilteredProductList(productList);
        } else {
            // Filter products based on selected categories
            const filteredProducts = productList.filter(product =>
                updatedCategories.includes(product.productName)
            );
            setFilteredProductList(filteredProducts);
        }
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
                                    <input type="checkbox"
                                        className='me-1'
                                        name='saree'
                                        onChange={() => filterData('Saree')}
                                        checked={selectedCategory.includes('Saree')}
                                    />Saree
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox"
                                        className='me-1'
                                        name='shirt'
                                        onChange={() => filterData('Shirt')}
                                        checked={selectedCategory.includes('Shirt')}
                                    />Shirt
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox"
                                        className='me-1'
                                        name='floral dress'
                                        onChange={() => filterData('floral dress')}
                                        checked={selectedCategory.includes('floral dress')} />floral dress
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox"
                                        className='me-1'
                                        name='ethinic dress'
                                        onChange={() => filterData('Ethinic Dress')}
                                        checked={selectedCategory.includes('Ethinic Dress')}
                                    />Ethinic Dress
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox"
                                        className='me-1'
                                        name='kurta set'
                                        onChange={() => filterData('Kurta set')}
                                        checked={selectedCategory.includes('Kurta set')}
                                    />Kurta set
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox"
                                        className='me-1'
                                        name='earring'
                                        onChange={() => filterData('Earring')}
                                        checked={selectedCategory.includes('Earring')}
                                    />Earring
                                </label>
                            </li>
                            <li>
                                <label className='common-customCheckbox vertical-filters-label'>
                                    <input type="checkbox"
                                        className='me-1'
                                        name='lehenga coli'
                                        onChange={() => filterData('Lehenga coli')}
                                        checked={selectedCategory.includes('Lehenga coli')}
                                    />Lehenga coli
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
                                <div className='me-3 position-relative'>
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
                                    <span className='common-chip'><Trash width={16} height={16} onClick={() => { deleteProductCard(item._id) }} /></span>
                                </div>
                            )}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProductList;