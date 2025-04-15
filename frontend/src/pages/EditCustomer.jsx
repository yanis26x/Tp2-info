import axios from "axios";
import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function EditCustomer() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [customer, setCustomer] = useState({
        fname:"",
        lname:"",
        email:""
    });

    const onInputChange = (e) => {
        const value = e.target.value;
        setCustomer({...customer, [e.target.name]: value})
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
       try{
           e.preventDefault();
           await axios.put(`/api/customers/${id}`, customer);
           navigate("/");
       }
       catch (error){
           console.error("Err: ", error);
       }
    };

    const loadUser = async () => {
        try {
            const result = await axios.get(`/api/customers/${id}`);
            setCustomer(result.data);
        }
        catch (error){
            console.error("Err: ", error);
        }

    };

    return (
         <div className="container">
        <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit User</h2>

    <form onSubmit={(e) => onSubmit(e)}>
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
                onChange={(e) => onInputChange(e)}
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
                required
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
            />
        </div>
        <button type="submit" className="btn btn-outline-primary">
            Submit
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
        </Link>
    </form>
</div>
</div>
</div>
    );
}

export default EditCustomer;