import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ScrollTop from "./ScrollTop";

export default function LayoutLandingPage ({ children }) {
    return(
        <div className="bg-white">
            <ScrollTop />
            <HeaderComponent />
                {children}
            <FooterComponent />
        </div>
    )
}