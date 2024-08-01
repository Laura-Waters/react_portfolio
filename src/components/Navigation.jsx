import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a><Link to="/"><h1 style={{color: 'white'}}>Laura Alston</h1></Link></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav d-flex flex-end" style={{ display: 'flex', gap: '10px' }}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
        </div>
      </nav>
   );
}
  
export default Navigation;
  