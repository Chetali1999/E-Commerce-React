import LogoImg from '../../Images/product-logo.svg';
import HomeImg from '../../Images/Home-img.png';
import CartImg from '../../Images/Cart-img.jpg'
import { Link } from 'react-router-dom';


const Header = () => {

    // const navigate = useNavigate();

    // const handleChange = () => {
    //     navigate('/SignUp')
    // }

    return (
        <header class="p-3 mb-3 border-bottom">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/LandingPage" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src={LogoImg} class="bi me-2" width="85" height="50" role="img" aria-label="Bootstrap" />
                </a>

                <ul class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to='/SignIn' class="nav-link px-2 link-secondary">Overview</Link></li>
                    <li><Link to='/CreateProduct' class="nav-link px-2 link-dark">Creact Product</Link></li>
                    <li><Link to='/SignUp' class="nav-link px-2 link-dark">Sign Up</Link></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 me-lg-auto mb-lg-0 me-lg-3">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                </form>

                <div className='d-flex align-items-center me-3'>
                    <a href="/ProductList" className='me-3'>
                        <img src={HomeImg} width={30} height={30} />
                    </a>
                    <div>
                        <img src={CartImg} width={42} />
                    </div>
                </div>

                <div class="dropdown text-end">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                    </a>
                    {/* <ul class="dropdown-menu text-small show" aria-labelledby="dropdownUser1" style={{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(-115px, 34px)"}} data-popper-placement="bottom-start">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul> */}
                </div>
            </div>
        </header>
    )
}

export default Header;