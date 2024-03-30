import axios from "axios";
import { useState } from "react";

const CreateProduct = () => {

    const [productData, setProductData] = useState({
        productName: '',
        productBrand: '',
        productRating: '',
        productPricing: ''
    });

    const twowayBind = (key, value) => {
        setProductData({
            ...productData,
            [key]: value
        })
    }

    // const resetForm = () => {
    //     setProductData();
    // }

    const handleProductSubmit = (e) => {
        e.preventDefault();

        // axios.post('url', productData)
        //     .then(response => {
        //         if (response.status === 200) {
        //             console.log('response');
        //             resetForm();
        //         }
        //         else {
        //             console.log('error')
        //         }
        //     })
      
        console.log(productData)

    }


    return (
        <>
            <form className="create-Product w-50 mx-auto" onSubmit={handleProductSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter Your User Id Here</label>
                    <input
                        onChange={(e) => { twowayBind('user_Id', e.target.value) }}
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Name</label>
                    <input
                        onChange={(e) => { twowayBind('productName', e.target.value) }}
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Brand</label>
                    <input
                        onChange={(e) => { twowayBind('productBrand', e.target.value) }}
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Rating</label>
                    <input
                        onChange={(e) => { twowayBind('productRating', e.target.value) }}
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Pricing</label>
                    <input
                        onChange={(e) => { twowayBind('productPricing', e.target.value) }}
                        type="number"
                        className="form-control"
                        id="userId"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Creat</button>
            </form>
        </>
    )
}

export default CreateProduct;