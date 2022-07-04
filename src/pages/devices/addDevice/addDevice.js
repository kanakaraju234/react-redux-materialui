import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addDevice } from "../../../redux/deviceRedux/actions";



const AddDevice = () => {
    let dispatch = useDispatch();
    let navigation = useNavigate();

    const [state, setState] = useState({
        deviceType: "",
        deviceManfacturer: " ",
        deviceModel: "",
        osType: ""
    });
    //error message
    const [error, setError] = useState("");

    //Device List

    const deviceList = [
        {
            "id": "0",
            "deviceManfacturer": " "
        },
        {
            "id": "1",
            "deviceManfacturer": "Nokia"
        },
        {
            "id": "2",
            "deviceManfacturer": "Samsung"
        },
        {
            "id": "3",
            "deviceManfacturer": "Vivo"
        },
        {
            "id": "4",
            "deviceManfacturer": "Oppo"
        },
        {
            "id": "5",
            "deviceManfacturer": "Sony"
        },
        {
            "id": "6",
            "deviceManfacturer": "Redmi"
        },
        {
            "id": "7",
            "deviceManfacturer": "RealMe"
        },
        {
            "id": "8",
            "deviceManfacturer": "Apple-ios"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!deviceModel || !deviceManfacturer || !deviceType || !osType) {
            setError("Plz Enter all device fields..!");
        } else {
            console.log("deviceInfo", state);
            dispatch(addDevice(state));
            setState({
                deviceType: "",
                deviceManfacturer: " ",
                deviceModel: "",
                osType: ""
            });
            //navigation
            navigation("/devices");
        };
    }
    // state values destructuring
    const { deviceType, deviceManfacturer, deviceModel, osType } = state;
    return (
        <div className='container-section'>
            <div className="max-width my-3">
                <button className="btn btn-secondary my-2" onClick={() => navigation("/devices")}>Go Back</button>
                {error && <p className='text-danger'>{error}</p>}
                <h2>Add Device</h2>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div className="form-group row my-3">
                        <label htmlFor="deviceModel" className="col-sm-2 col-form-label">Device Model</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="deviceModel" name="deviceModel" onChange={handleInputChange} value={deviceModel} />
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <label htmlFor="deviceManfacturer" className="col-sm-2 col-form-label">Device Manfacturer</label>
                        <div className="col-sm-10">
                            <select className="form-control form-select" name="deviceManfacturer" onChange={handleInputChange}>
                                {deviceList.map(device => {
                                    return <option key={device.id} name="deviceManfacturer" value={device.deviceManfacturer} > {device.deviceManfacturer || ""}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <label htmlFor="deviceType" className="col-sm-2 col-form-label">Device Type</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="deviceType" name="deviceType" onChange={handleInputChange} value={deviceType} />
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <label htmlFor="osType" className="col-sm-2 col-form-label">OS Type</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="osType" name="osType" onChange={handleInputChange} value={osType} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddDevice;