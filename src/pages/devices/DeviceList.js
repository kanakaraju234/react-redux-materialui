import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDevice, loadDevices } from '../../redux/deviceRedux/actions';



const DeviceList = () => {
    let dispatch = useDispatch();
    const { devices } = useSelector((state) => state.devices)
    let history = useNavigate();

    useEffect(() => {
        dispatch(loadDevices());
    }, [])

    const handleDelete = (deviceId) => {
        if (window.confirm("Are you sure you want to delete this device?")) {
            dispatch(deleteDevice(deviceId));
        }
    };

    return (
        <div className='container'>
            <div className='search-content-section d-flex justify-content-between align-items-center'>
                <h1>Devices</h1>
                <form role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button onClick={() => history("/addDevice")} className='btn btn-primary'>Add Device</button>
            </div>
            <div className="container-section">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Device Model</th>
                            <th>Device Manfacturer</th>
                            <th>Device Type</th>
                            <th>OS Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices && devices.map((device, index) => (
                            <tr key={device.id}>
                                <td>{device.deviceModel}</td>
                                <td>{device.deviceManfacturer}</td>
                                <td>{device.deviceType}</td>
                                <td>{device.osType}</td>
                                <td onClick={() => history(`/devices/${device.id}`)}><i className="bi bi-pencil"></i></td>
                                <td onClick={() => handleDelete(device.id)}><i className="bi bi-trash3"></i></td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DeviceList;