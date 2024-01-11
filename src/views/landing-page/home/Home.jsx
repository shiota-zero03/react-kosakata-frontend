import LayoutLandingPage from "../../../components/landing-page/layout/LayoutComponent";
import HomeBanner1 from '../../../assets/images/home.png';

export default function Home(){
    return(
        <LayoutLandingPage>
            <div className="position-absolute top-0 z-1">
                <img src={HomeBanner1} alt="" width={'100%'} />
            </div>
            <div className="text-dark bg-success w-100 vh-100">
                hello world
            </div>
        </LayoutLandingPage>
    )
}