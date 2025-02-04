import videoHomepage from '../../assets/videoHomepage.mp4';

const HomePage = (porps) => {
    return (
        <div className="homepage-container">
            {/* <div>
                video homepage
            </div> */}
            <video autoPlay muted loop>
                <source
                    // src="/videoHomepage.mp4"
                    src={videoHomepage}
                    type="video/mp4" />
            </video>
        </div>
    )
}

export default HomePage;