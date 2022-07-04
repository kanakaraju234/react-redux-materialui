import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../../redux/userRedux/actions";
import "./editUser.scss";

const EditUser = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    let dispatch = useDispatch();

    const { user } = useSelector((state) => state.users)

    const [state, setState] = useState({
        name: "",
        email: " ",
        contact: "",
        address: " ",
    });

    //error message
    const [error, setError] = useState("");


    const { name, email, contact, address } = state;

    const handleInputChange = (e) => {
        console.log('handle input change', e);
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !contact || !address) {
            setError("Please Enter all values!");
        } else {
            dispatch(updateUser(id, state));
            setState({
                name: "",
                email: " ",
                contact: "",
                address: " ",
            });
            setError("");
            navigate("/");
        }

    }
    useEffect(() => {
        dispatch(getUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])
    return (
        <div className='container-section'>
            <div className="max-width my-3">
                <button className="btn btn-secondary my-2" onClick={() => navigate('/')}>Go Back</button>
                {error && <p className='text-danger'>{error}</p>}
                <h2>Edit User</h2>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div className="form-group row my-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange} value={name || " "} />
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} value={email || " "} />
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <label htmlFor="contact" className="col-sm-2 col-form-label">Contact</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="contact" name="contact" onChange={handleInputChange} value={contact || " "} />
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="address" name="address" onChange={handleInputChange} value={address || " "} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;