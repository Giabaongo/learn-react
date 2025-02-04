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
            <div className='homepage-content'>
                <div className='title-homepage'>There's a better way to ask</div>
                <div className='content-homepage'>You dont want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy.
                </div>
                <div className='btn-homepage'>
                    <button>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;