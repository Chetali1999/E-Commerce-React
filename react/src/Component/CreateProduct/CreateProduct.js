import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CreateProduct = () => {

    const location = useLocation();

    const [productData, setProductData] = useState({
        productName: '',
        brand: '',
        quantity: '',
        price: ''
    });
    const [responseError, setResponseError] = useState();
    const locationName = location && location.state ? location.state : ''
    const isEditMode = locationName && locationName?.data ? locationName?.data : '';
    console.log(locationName, 'locationName')

    useEffect(() => {
        // If in edit mode, fetch existing product data
        if (locationName && locationName?.type === "updateProduct") {
            setProductData({
                productName: locationName?.data?.productName || '',
                brand: locationName.data.brand || '',
                quantity: locationName?.data?.quantity || '',
                price: locationName?.data?.price || ''
            });
            
        }
    }, [locationName]);

    const twowayBind = (key, value) => {
        setProductData({
            ...productData,
            [key]: value
        })
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if (isEditMode) {

                const productData_new = {
                    ...productData,
                    id:locationName?.data?._id
                }
                // Update existing product
                response = await axios.post(`http://localhost:8080/api/product/update`, productData_new);
                console.log(response, 'ttttttt')

            } else {
                // Create new product
                response = await axios.post(`http://localhost:8080/api/product/create`, productData);
            }

            if (response.status === 201) {
                localStorage.setItem('productData', JSON.stringify(response.data))
                setProductData({});
            }
            else {
                setResponseError(response?.message)
            }
        } catch (error) {
            console.error('Error creating/updating product:', error);
            setResponseError('Failed to create/update product. Please try again.');
        }
    };

    return (
        <>
            <form className="create-Product w-50 mx-auto" onSubmit={handleProductSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Name</label>
                    <input
                        onChange={(e) => { twowayBind('productName', e.target.value) }}
                        type="text"
                        className="form-control"
                        value={productData?.productName || ''}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Brand</label>
                    <input
                        onChange={(e) => { twowayBind('brand', e.target.value) }}
                        type="text"
                        className="form-control"
                        value={productData?.brand || ''}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Quantity</label>
                    <input
                        onChange={(e) => { twowayBind('quantity', e.target.value) }}
                        type="number"
                        className="form-control"
                        value={productData?.quantity || ''}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Pricing</label>
                    <input
                        onChange={(e) => { twowayBind('price', e.target.value) }}
                        type="number"
                        className="form-control"
                        value={productData?.price || ''}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Upload Image</label>
                    <img src="https://i.ibb.co/0tmF519/still-life-care-product.jpg" />
                </div>

                <button type="submit" className="btn btn-primary mb-3">{isEditMode ? 'Update Product' : 'Create Product'}</button>
            </form>
        </>
    )
}

export default CreateProduct;