import  {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";


function CreateCustomer() {

    const [customer, setCustomer] = useState({
        fname:"",
        lname:"",
        email:""
    });

    const setAttribut = (e) => {
        const value = e.target.value;
        setCustomer({...customer, [e.target.name]: value})
    }

    const navigate = useNavigate();
    
    const submitNewClient = (e) =>{
        e.preventDefault();
        axios.post("/api/customers", customer)
            .then(() =>{
                navigate("/")
            }).catch((error) =>{
            console.log(error);
        });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-lg-start">
                <div className="col-md-6">
                    <h2 className="mb-4">Add Customer</h2>
                    <form className="form-detail" onSubmit={(e) => submitNewClient(e)} method="post">
                        <div className="mb-3 ">
                            <label htmlFor="lastname"  className="form-label text-start d-block">Last Name</label>
                            <input type="text" className="form-control" name="lname" id="lastname" placeholder="Enter your last name"
                                   required
                                   onChange={(e) => setAttribut(e)}
                                   value={customer.lname}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label text-start d-block">First Name</label>
                            <input type="text" className="form-control" name="fname" id="firstname"
                                   placeholder="Enter your first name"
                                   required
                                   onChange={(e) => setAttribut(e)}

                                   value={customer.fname}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-start d-block">Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email"
                                   required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                                   onChange={(e) => setAttribut(e)}
                                   value={customer.email}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCustomer
