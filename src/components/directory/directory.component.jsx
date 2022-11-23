import DirectoryItem from "../directory-item/directory-item.component";
import InfoBanner from "../info-banner/info-banner.component";
import Footer from '../footer/footer.component'

import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className="info-banner">
            <InfoBanner />
            <div className="directory-container">
                {categories.map((category) => (
                    <DirectoryItem key={category.id} category={category}/>
                )
            )
        }   
            </div>
        <Footer />
        </div>
    )
}

export default Directory