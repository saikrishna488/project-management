import { useState } from "react";
import { FaUser } from "react-icons/fa"
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../Mutation/clientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";


const AddClient = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addClient]: any = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients }: any = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: {
                    clients: [...clients, addClient]
                }
            })
        }
    })

    //on submit
    const submit = (e: any) => {
        e.preventDefault();

        if (name === '' || email === '' || phone === '')
            return alert('Please fill all fields');
        
        
        addClient(name, email, phone);

        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaUser className="icon" />
                Add Client
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Client</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submit}>
                            <div className="modal-body">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} />
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} value={phone} />
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary my-3">
                                    Add Client
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddClient
