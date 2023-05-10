import { Link, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/ProjectQueries'
import ClientInfo from '../components/ClientInfo';
import DeleteProject from '../components/DeleteProject';
import { useState } from 'react';
import { UPDATE_PROJECT } from '../Mutation/projectMutation';

const Project = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('new');
  const { id } = useParams();

  //getting specific project
  const { loading, error, data }: any = useQuery(GET_PROJECT, {
    variables: { id }
  })

  //updating project
  const [updateProject]:any = useMutation(UPDATE_PROJECT, {
    variables: {id: id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT,variables: {id: id} }]
  })

  if (loading)
    return <h1>loading...</h1>

  if (error) {
    return <h1>{error}</h1>
  }

  //onsubmit
  const submit = (e: any) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '')
      return alert('Please fill all fields');

    updateProject(id, name, description, status);

    setName('');
    setDescription('');
    setStatus('new');
  }

  return (
    <div className='container'>
      <div className="project-card">
        <Link to={'/'} className="project-btn">Go Back</Link>
        <span><strong> Name : </strong>{data.project.name}</span>

        <p className='project-des'>
          <strong>Description : </strong>{data.project.description}
        </p>
        <p className="card-text">
          <strong> Status : </strong>{data.project.status}
        </p>
        <ClientInfo client={data.project.client} />
        <DeleteProject projectId={data.project.id} />
        <form onSubmit={submit}>
          <h4>Update Project</h4>
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} />
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="email" onChange={e => setDescription(e.target.value)} value={description} />
          <label className="form-label">Status</label>
          <select name="" id="status" className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="new">Not started</option>
            <option value="progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit" className="btn btn-secondary my-3">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Project
