import PropTypes from 'prop-types';

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
};

function Project({ title, imageSrc, projectLink, githubLink }) {
    return (
        <div>
            <a href={projectLink}><div className="card" style={{width: 350}}>
            <img className="card-img-top" src={imageSrc} alt="Card image cap"/>
            <div className="card-img-overlay card-container">
                <h2 className="card-title" style={{color: 'var(--secondary)'}}>{title}</h2>
                <a href={githubLink}><img className='logo' src="../images/githublogo.png"/></a>
            </div>
            </div></a>
        </div>
    );
}

export default Project; 
