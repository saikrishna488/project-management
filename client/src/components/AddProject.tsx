import { useState } from "react";
import { FaUser } from "react-icons/fa"
import { useMutation,useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { ADD_PROJECT } from "../Mutation/projectMutation";
import { GET_PROJECTS } from "../queries/ProjectQueries";


const AddProject = () => {

    const {loading,error,data} = useQuery(GET_CLIENTS)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [clientId, setClientId] = useState('');
    const [status,setStatus] = useState('new');

    const [addProject] :any = useMutation(ADD_PROJECT,{
        variables : {name,description,status,clientId},
        update(cache, {data:{addProject}}){
            const {projects}:any = cache.readQuery({query:GET_PROJECTS});
            cache.writeQuery({
                query:GET_PROJECTS,
                data :{projects : projects.concat([addProject])}
            })
        }
    })

    if(loading)
    return <h1>loading</h1>

    if(error)
    return <h1>error</h1>

    //on submit
    const submit = (e: any) => {
        e.preventDefault();

        if (name === '' || description === '' || clientId === '')
            return alert('Please fill all fields');
        
        addProject(name, description, status,clientId);

        setName('');
        setDescription('');
        setStatus('new');
        setClientId('');
    }

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#AddProjectModal" style={{marginLeft:'5px'}}>
                <FaUser className="icon" />
                New Project
            </button>

            <div className="modal fade" id="AddProjectModal" tabIndex={-1} aria-labelledby="AddProjectModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="AddProjectModalLabel">New Project</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submit}>
                            <div className="modal-body">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} />
                                <label className="form-label">Description</label>
                                <input type="text" className="form-control" name="email" onChange={e => setDescription(e.target.value)} value={description} />
                                <label className="form-label">Status</label>
                                <select name="" id="status" className="form-select" value={status} onChange={e=> setStatus(e.target.value)}>
                                    <option value="new">Not started</option>
                                    <option value="progress">In progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <label className="form-label">Clients</label>
                                <select name="" id="status" className="form-select" value={clientId} onChange={e=> setClientId(e.target.value)}>
                                    <option value="">Not Selected</option>
                                    {data.clients.map((client:any)=>(
                                        <option key={client.id} value={client.id}>{client.name}</option>
                                    ))}
                                </select>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary my-3">
                                    Add Project
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProject
