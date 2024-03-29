
const CreateProduct = () => {

    return (
        <>
            <form className="create-Product w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter Your User Id Here</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Rating</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Product Pricing</label>
                    <input
                        type="text"
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