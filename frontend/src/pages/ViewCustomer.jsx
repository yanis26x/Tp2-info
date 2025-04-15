import 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function ViewCustomer() {

    const {id} = useParams();

    const [customer, setCustomer] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`/api/customers/${id}`);
        setCustomer(result.data);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">View Customer [Lecture seulement] </h2>

                    <form >
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="fname"
                                value={customer.fname}
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your username"
                                name="lname"
                                value={customer.lname}
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="email"
                                value={customer.email}
                                readOnly
                            />
                        </div>
                        <Link className="btn btn-primary my-2" to={"/"}>
                            Retour Home Page
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ViewCustomer;