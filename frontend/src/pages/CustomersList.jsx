import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function CustomersList() {
    const [tabCustomers, setCustomers] = useState([]);


    const loadAllCustomers = async () => {
        const result = await axios.get("/api/customers");
        setCustomers(result.data);
    };

    useEffect(() => {
        loadAllCustomers();
    }, []);


    const deleteUser = async (id) => {
        await axios.delete(`/api/customers/${id}`);
        loadAllCustomers();
    };

    return (
        <div className="mt-5 container">
            <div className="card">
                <div className='card-header'>
                    Liste des Customers:
                </div>
                <div className='card-body'>
                    <table className='table table-hover'>
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tabCustomers.map((data) => (
                                <tr key={data.i}>
                                    <td>{data.fname}</td>
                                    <td>{data.lname}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <Link className="btn btn-primary mx-2" to={`/view/${data.id}`}> Consulter </Link>

                                            <Link className="btn btn-primary mx-2" to={`/edit/${data.id}`}> Modifier </Link>

                                            <button className="btn btn-danger mx-2" onClick={() => deleteUser(data.id)}> Delete </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <Link to="/add" className='btn btn-primary'> Add Customer </Link>
                </div>
            </div>
        </div>

    );
}

export default CustomersList;

/**
 *   useEffect(() => {
 *         axios.get("https://jsonplaceholder.typicode.com/users")
 *             .then(res => setTabUsers(res.data))
 *             .catch(err => console.log(err));
 *     },
 *       []);
 */