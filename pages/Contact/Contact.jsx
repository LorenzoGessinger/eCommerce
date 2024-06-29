import BasicInfos from "../../components/BasicInfos/BasicInfos"
import Categories from "../../components/Categories/Categories"
import ContactMe from "../../components/ContactMe/ContactMe"
import NavBar from "../../components/NavBar/NavBar"
import Informations from "../../components/Informations/Informations"
import Footer from "../../components/Footer/Footer"
import HamburguerNavBar from "../../components/HamburguerNavBar/HamburguerNavBar"
import { useState, useEffect } from "react"

export const Contact = () => {

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
        <>
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
                need="Search What you need:"
            />

            {windowWidth > 769 ? <NavBar /> : null}

            {windowWidth < 775 ? <HamburguerNavBar /> : null}

            <ContactMe

            />

            <Informations

            />

            <Footer

            />
        </>
    )
}

export default Contact