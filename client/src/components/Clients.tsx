
import { useQuery } from '@apollo/client'
import { GET_CLIENTS } from '../queries/ClientQueries';
import ClientRow from './ClientRow';



const Clients = () => {
    const {loading,error,data} = useQuery(GET_CLIENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;


  return (
    <>
    <table className='table table-hover mt-3'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                data.clients.map((client: { id: any; }) =>(
                    <ClientRow key={client.id} client={client}/>
                ))
            }
        </tbody>
    </table>
    </>
    
  )
}

export default Clients
