import { FaUser,FaPhone } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const ClientInfo = ({client}:any)  => {
  return (
    <div className='client-box'>
        <ul className='client-box2'>
            <li><span>Client</span></li>
            <li>
            <FaUser/> : <strong>{client.name}</strong>
            </li>
            <li>
            <AiOutlineMail/> : <strong>{client.email}</strong>
            </li>
            <li>
            <FaPhone/> : <strong>{client.phone}</strong>
            </li>
        </ul>
    </div>
  )
}

export default ClientInfo
