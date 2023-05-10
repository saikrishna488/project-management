import { AiFillDelete } from 'react-icons/ai'
import { DELETE_PROJECT } from '../Mutation/projectMutation'
import { useMutation } from '@apollo/client'
import { GET_PROJECTS } from '../queries/ProjectQueries'
import { useNavigate } from 'react-router-dom'

const DeleteProject = ({projectId}:any) => {

    const navigate = useNavigate();
    const [deleteProject]:any = useMutation(DELETE_PROJECT,{
        variables:{id :projectId},
        onCompleted : ()=>navigate('/'),
        refetchQueries : [{query:GET_PROJECTS}]
    })

    return (
        <button onClick={deleteProject} className='btn btn-danger'>
            Delete<AiFillDelete />
        </button>
    )
}

export default DeleteProject
