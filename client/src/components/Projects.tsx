import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/ProjectQueries";
import ProjectCard from './ProjectCard'

const Projects = () => {

    const { loading, error, data } = useQuery(GET_PROJECTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <>
            <div className="projects-box">
                {
                    data.projects.map((project: any) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>

        </>
    )
}

export default Projects
