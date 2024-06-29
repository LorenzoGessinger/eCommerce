import BasicInfos from "../../components/BasicInfos/BasicInfos"
import SelectCategories from "../../components/Categories/Categories"
import NavBar from "../../components/NavBar/NavBar"
import ShopItems from "../../components/ShopItems/ShopItems"
import Footer from "../../components/Footer/Footer"
import Informations from "../../components/Informations/Informations"
import { useState, useEffect } from "react"
import HamburguerNavBar from "../../components/HamburguerNavBar/HamburguerNavBar"


export const Shopping = () => {

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

            <SelectCategories
                logo="Gessinger's"
                categories="All Categories"
                money="$1500.00"
                need="Search What you need:"
            />

            {windowWidth > 769 ? <NavBar department="DEPARTMENTS"/> : null}

            {windowWidth < 775 ? <HamburguerNavBar /> : null}

            <div>
                <ShopItems
                />
            </div>

            <Informations

            />

            <Footer

            />
        </>
    )
}

export default Shopping