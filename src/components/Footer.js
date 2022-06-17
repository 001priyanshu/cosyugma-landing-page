import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 footer-colm quick-link'>
                        <ul>
                            <li className='main-link'>
                                <a href='#'>about Us</a>
                                <ul>
                                    <li><a href='#'>About cosyugma</a></li>
                                    <li><a href='#'>The Shree Philosophy</a></li>
                                    <li><a href='#'>Boards Of Directors</a></li>
                                    <li><a href='#'>Awards</a></li>
                                </ul>
                            </li>
                            <li className='main-link'>
                                <a href='#'>Our-business</a>
                                <ul>
                                    <li><a href='#'>Products</a></li>
                                    <li><a href='#'>Plant Locations</a></li>
                                    <li><a href='#'>Home Builder's</a></li>
                                    <li><a href='#'>Business With us</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='main-link'>
                                <a href='#'>Sustainability</a>
                                <ul>
                                    <li><a href='#'>About cosyugma</a></li>
                                    <li><a href='#'>The Shree Philosophy</a></li>
                                    <li><a href='#'>Boards Of Directors</a></li>
                                    <li><a href='#'>Awards</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='main-link'>
                                <a href='#'>Innovation</a>
                                <ul>
                                    <li><a href='#'>About cosyugma</a></li>
                                    <li><a href='#'>The Shree Philosophy</a></li>
                                    <li><a href='#'>Boards Of Directors</a></li>
                                    <li><a href='#'>Awards</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='main-link'>
                                <a href='#'>Privacy Policy</a>
                                <ul>
                                    <li><a href='#'>About cosyugma</a></li>
                                    <li><a href='#'>The Shree Philosophy</a></li>
                                    <li><a href='#'>Boards Of Directors</a></li>
                                    <li><a href='#'>Awards</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 footer-colm subscribe-colm'>
                        <h6 id='subscribe-footer-id'>Follow us on :</h6>
                        <div className='social-icon' style={{
                            display: "initial",
                            float: "inherit"
                        }}>
                            <ul>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className='subscribe-articles'>
                            <form id='newsletterform'>
                                <input type="email" name='subscribenews' placeholder='Enter email id to subscribe' />
                                <input type="button" id="submitnews" />
                            </form>
                        </div>
                        <div className='social-icon brand-social-media'>
                            <h5>Brands on social media</h5>
                            <p>Title: </p>
                            <ul className='brand-social-icon'>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                                <li className='twitter'>
                                    <a href='#'>
                                        <i className='fa fa-twitter'> ::before </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
