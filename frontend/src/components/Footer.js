import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assest/logo.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <Link to={"/"} className='flex items-center'>
                        <img src={Logo} alt="Logo" className='w-16 pr-3' />
                        <h1 className='text-xl font-extrabold'>Hemo</h1>
                    </Link>
                    <p className='text-base'>
                        Latin literature from 45 BC, making it over 2000 <br />
                        years old. Richard McClintock, a Latin professor at <br />
                        Hampde
                    </p>

                    <div className='grid grid-flow-col gap-4 pt-4 social-icons'>
                        <Link className="flex items-center justify-center w-8 h-8 border border-yellow-300 rounded-full hover:bg-yellow-500 hover:text-white">
                            <FaLinkedinIn />
                        </Link>
                        <Link className="flex items-center justify-center w-8 h-8 border border-yellow-300 rounded-full hover:bg-yellow-500 hover:text-white">
                            <FaInstagram />
                        </Link>
                        <Link className="flex items-center justify-center w-8 h-8 border border-yellow-300 rounded-full hover:bg-yellow-500 hover:text-white">
                            <FaTwitter />
                        </Link>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-gray-800 pb-4">Support</h6>
                    <Link className="link link-hover">Privacy Policy</Link>
                    <Link className="link link-hover">Terms & Conditions</Link>
                    <Link className="link link-hover">Product FAQs</Link>
                    <Link className="link link-hover">Company Support</Link>
                    <Link className="link link-hover">Manage Account</Link>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-gray-800 pb-4">Quick Links</h6>
                    <Link className="link link-hover">About Us</Link>
                    <Link className="link link-hover">Blog Post</Link>
                    <Link className="link link-hover">Product Features</Link>
                    <Link className="link link-hover">Company Info</Link>
                    <Link className="link link-hover">Company Info</Link>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-gray-800 pb-4">Community</h6>
                    <Link className="link link-hover">Become an affiliate</Link>
                    <Link className="link link-hover">Help Center</Link>
                    <Link className="link link-hover">Product FAQs</Link>
                    <Link className="link link-hover">Our Forums</Link>
                    <Link className="link link-hover">Product API</Link>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2023 All rights reserved by Eyeglass</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link className="link link-hover">Privacy Policy</Link>
                        <Link className="link link-hover">Privacy Policy</Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
