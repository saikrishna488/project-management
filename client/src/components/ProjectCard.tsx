import {Link} from 'react-router-dom'

const ProjectCard = ({ project }: any) => {
    return (
        <div className="project-card">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
                Status : <strong>{project.status}</strong>
            </p>
            <Link to={'/project/'+project.id} className="project-btn">view</Link>
        </div>
    )
}

export default ProjectCard
