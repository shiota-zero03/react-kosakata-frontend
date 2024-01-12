import About from "./About";
import BannerHome from "./BannerHome";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Tutorial from "./Tutorial";
import VisiMisi from "./VIsiMisi";

const LayoutHome = () => {
    return(
        <>
            <BannerHome />
            <Category />
            <VisiMisi />
            <Tutorial />
            <Testimonial />
            <About />
        </>
    )
}
export default LayoutHome;