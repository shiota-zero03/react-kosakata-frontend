import HeaderComponent from "./HeaderComponent";

export default function LayoutLandingPage ({ children }) {
    return(
        <div className="bg-dark">
            <HeaderComponent />
                {children}
        </div>
    )
}