import { Fragment } from "react";
import { Link } from 'react-router-dom';
import './info-banner.styles.scss';
import Button from '../button/button.component'

const InfoBanner = () => {

    return (
        <Fragment>
            <div className= 'info-banner'>
                    <h1>Teacher tested. <br></br>Optimized for student success.</h1>
                    <span>
                    <img src="https://i.imgur.com/lxC88tN.jpg" alt="img"></img>
                    </span>
                    <span>
                    <h3>BrainSpark is a teacher created platform that provides easy to use resources for teachers<br></br> and parents to support student learning. Founded in 2023, Brainspark creates confidence by <br></br>providing solutions for personalized learning and meeting the needs of each unique learner. </h3>
                    </span>
                    <Link to="/aboutus"><Button>Learn More</Button></Link>  
            </div>
        </Fragment>
    )
}

export default InfoBanner;