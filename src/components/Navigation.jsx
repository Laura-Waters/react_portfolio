function Navigation({ currentPage, handlePageChange }) {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-info-bg-gradient">
    <a className="navbar-brand" href="home">Laura Alston</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
              About
          </a>
        </li>
        <li className="nav-item">
        <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
          </a>
        </li>
        <li className="nav-item">
        <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
          </a>
        </li>
        <li className="nav-item">
        <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
          </a>
        </li>
      </ul>
    </div>
</nav>
    );
}
  
export default Navigation;
  