import { useState } from "react";
import axios from 'axios'

const CreateProduct = () => {

    const [productData, setProductData] = useState({
        productName: '',
        brand: '',
        quantity: '',
        price: ''
    });
    const [responseError, setResponseError] = useState()

    const twowayBind = (key, value) => {
        setProductData({
            ...productData,
            [key]: value
        })
    }

    const resetForm = () => {
        setProductData();
    }

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const req = {
            ...productData,
            productName: productData?.productName,
            brand: productData?.brand,
            price: productData?.price
        }

        axios.post(`http://localhost:8080/api/product/create`, req)
            .then(response => {
                console.log(response, 'ressssssssssssssssssssssssssss')
                if (response.status === 201) {
                    localStorage.setItem('productData', JSON.stringify(response.data))
                    setProductData({});
                }
                else {
                    setResponseError(response?.message)
                }
            })
    }

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

                <button type="submit" className="btn btn-primary mb-3">Creat Product</button>
            </form>
        </>
    )
}

export default CreateProduct;