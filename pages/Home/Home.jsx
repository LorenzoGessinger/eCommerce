import './home.modules.css'
import { Content } from '../../components/Content/Content'
import Categories from '../../components/Categories/Categories'
import BasicInfos from '../../components/BasicInfos/BasicInfos'
import NavBar from '../../components/NavBar/NavBar'
import WeekDeal from '../../components/WeekDeal/WeekDeal'
import MenContent from '../../components/MenContent/MenContent'
import Collection from '../../components/Collection/Collection'
import FromBlog from '../../components/FromBlog/FromBlog'
import Delivery from '../../components/Delivery/Delivery'
import Informations from '../../components/Informations/Informations'
import Footer from '../../components/Footer/Footer'
import HamburguerNavBar from '../../components/HamburguerNavBar/HamburguerNavBar'
import { useEffect, useState } from 'react'

export const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update windowWidth when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <BasicInfos
                email="gessinger@email.com"
                phone="+55 123456789"
                language="English"
                login="Login"
            />
            <Categories
                logo="Gessinger's"
                categories="All Categories"
                money="$1500.00"
            />

            {windowWidth > 769 ? <NavBar /> : null}

            {windowWidth < 775 ? <HamburguerNavBar /> : null}

            <Content
            />

            <WeekDeal
            />

            <MenContent
            />

            <Collection
            />

            <FromBlog
            />

            <Delivery
            />

            <Informations
            />

            <Footer
            />

        </div>
    )
}

export default Home