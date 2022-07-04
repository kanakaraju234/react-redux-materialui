import axios from 'axios';
import * as types from "./actionType";


const getDevices = (devices) => ({
    type: types.GET_DEVICES,
    payload: devices,
});

const loadDevices = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/devices`)
            .then((res) => {
                dispatch(getDevices(res.data));
            })
            .catch((error) => console.log(error));
    };
};

// delete device 
const deviceDele = () => ({
    type: types.DELETE_DEVICE,

});

const deleteDevice = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/devices/${id}`)
            .then(() => {
                dispatch(deviceDele());
                dispatch(loadDevices());
            })
            .catch((error) => console.log(error));
    };
};

const addDevice = (device) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/devices`, device)
            .then(() => {
                dispatch({
                    type: types.ADD_DEVICE
                });
            })
            .catch((error) => console.log(error));
    };
};

const getDevice = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/devices/${id}`)
            .then((res) => {
                dispatch({
                    type: types.GET_SINGLE_DEVICE,
                    payload: res.data
                });
            })
            .catch((error) => console.log(error));
    };
}

const updateDevice = (id, device) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/devices/${id}`, device)
            .then(() => {
                dispatch({
                    type: types.UPDATE_DEVICE
                });
            })
            .catch((error) => console.log(error));
    };
}

export { loadDevices, deleteDevice, addDevice, updateDevice, getDevice };
