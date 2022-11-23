import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './footer.styles.scss';

const Footer = () => {
    return (
            <div className= 'footer'>
                <h1>Brainspark.<br></br></h1>
                <h2>Teacher tested.<br></br>Optimized for student success.</h2> 
                <h2>&copy; 2023 Brainspark. All rights reserved.</h2>
                <div className= 'social'>
                    <h3>Contact Us:</h3>
                    <span>
                        <a href="https://www.instagram.com/brainsparkco/" target="_blank" rel="noreferrer" >
                        <FaInstagramSquare/>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/profile.php?id=100088115250763" target="_blank" rel="noreferrer" >
                        <FaFacebook />
                        </a>
                    </span>
                </div> 
            </div>
    )
}

export default Footer;