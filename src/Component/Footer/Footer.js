import { Container, Copyright } from 'lucide-react'
import { Row, Col, Image } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer-div'>
                <div>
                    <Row className='d-flex justify-content-between landing-page-footer'>
                        <Col>
                            <h6>Product</h6>
                            <ul>
                                <a href="#"><li>About</li></a>
                                <a href="#"><li>What We Offer</li></a>
                                <a href="#"><li>Leadership</li></a>
                                <a href="#"><li>Sitemap</li></a>
                            </ul>
                        </Col>
                        <Col>
                            <h6>Community</h6>
                            <ul>
                                <a href="#"><li>Expert</li></a>
                                <a href="#"><li>Enterprise</li></a>
                                <a href="#"><li>Learners</li></a>
                                <a href="#"><li>Partners</li></a>
                            </ul>
                        </Col>
                        <Col>
                            <h6>More</h6>
                            <ul>
                                <a href="#"><li>Terms</li></a>
                                <a href="#"><li>Help</li></a>
                                <a href="/FAQ"><li>FAQs</li></a>
                                <a href="#"><li>Contact</li></a>
                            </ul>
                        </Col>
                        {/* <Col md={2}>
                        <h6>Carvers</h6>
                        <div><Image src={appleAppStoreIcon} height={40} className='mb-2' /></div>
                        <div><Image src={googlePlayStoreIcon} width={121} height={40} /></div>
                    </Col> */}
                    </Row>
                    <Row className='py-3 d-flex justify-content-between align-items-center'>
                        <Col className='text-start px-0'>
                            <p className='d-flex align-items-center'><span><Copyright height={14} className='mb-1' /></span>2023 Products. All rights reserved.</p>
                        </Col>
                        {/* <Col className='text-end px-0'>
                        <Image src={facebookIcon} height={35} className='me-1' />
                        <Image src={twitterIcon} height={35} className='me-1' />
                        <Image src={linkedInIcon} height={35} />
                    </Col> */}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Footer;