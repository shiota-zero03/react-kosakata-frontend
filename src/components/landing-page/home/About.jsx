import Background from '../../../assets/images/about.png';

const About = () => {
    const aboutStyle = {
        backgroundImage: `url(${Background})`,
    }
    return(
        <div id="tentang">
            <div className="position-relative">
                <div className="container position-relative z-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="pt-5 pb-3">
                                <h1 className="text-secondary text-center m-0">Tentang Kami</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={aboutStyle}>
                    <div className="container py-md-5 text-center text-white py-3">
                        <div className="row my-md-5 my-3">
                            <div className="col-12">
                                <h5 className='d-md-block d-none'>Kosakata merupakan website yang menyajikan informasi kost di Purwakarta dengan berbagai macam deskripsi yang akan memudahkan pengguna. Tim Survei Kosakata akan memastikan fasilitas, harga, foto serta deskripsi lain yang akan membantu Anda dalam memilih kost terbaik. Kami mengupayakan update informasi kost Kosakata secara berkala, untuk selalu memastikan informasi agar akurat.</h5>
                                <small className='d-md-none'>Kosakata merupakan website yang menyajikan informasi kost di Purwakarta dengan berbagai macam deskripsi yang akan memudahkan pengguna. Tim Survei Kosakata akan memastikan fasilitas, harga, foto serta deskripsi lain yang akan membantu Anda dalam memilih kost terbaik. Kami mengupayakan update informasi kost Kosakata secara berkala, untuk selalu memastikan informasi agar akurat.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;