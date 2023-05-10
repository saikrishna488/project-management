import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../Mutation/clientMutations';
import { GET_CLIENTS } from '../queries/ClientQueries'

const ClientRow = ({client}:any) => {
    const [deleteClient] = useMutation(DELETE_CLIENT,{
        variables: {id:client.id},
        // refetchQueries : [{query:GET_CLIENTS}] // this is not the best way to do it
        update(cache){ // this is the best way to do it
            const {clients}:any = cache.readQuery({query:GET_CLIENTS});
            cache.writeQuery({
                query:GET_CLIENTS,
                data:{
                    clients:clients.filter((c:any)=>c.id !== client.id)
                }
            })
        }
    });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button onClick={deleteClient} className="btn btn-danger btn-sm"><FaTrash/></button>
      </td>
    </tr>
  )
}

export default ClientRow
