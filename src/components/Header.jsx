import Navigation from './Navigation'

function Header() {
    return (
        <div className='mx4' style={{ backgroundColor: 'lightBlue' }}>
            <Navigation />
            <section className="hero"><span role="img" aria-label="A blurred view of city lights."></span>
                <div className="subtitle-block">
                    <p className="subtitle">Web Developer & Designer</p>
                </div>
            </section>
        </div>
    );
}

export default Header; 