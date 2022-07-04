import axios from 'axios';
import * as types from "./actionType";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/user`)
            .then(resp => {
                console.log("res", resp);
                dispatch(getUsers(resp.data));
            })
            .catch(error => console.log(error))
    };
};

//delete users 

const userDelete = () => ({
    type: types.DELETE_USER,
});

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/user/${id}`)
            .then(() => {
                dispatch(userDelete());
                dispatch(loadUsers());
            })
            .catch(error => console.log(error));
    };
};

//add user
const addingUser = (user) => ({
    type: types.ADD_USER,
    payload: user
});

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/user`, user)
            .then(() => {
                dispatch(addingUser(user));
                dispatch(loadUsers());
            })
            .catch(error => console.log(error));
    }
}

//get single user
const getSingleUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
});

export const getUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/user/${id}`)
            .then((resp) => {
                console.log("single user", resp.data);
                dispatch(getSingleUser(resp.data));
            })
            .catch(error => console.log(error));
    }
}
//UPDATE_USER
const updateSingleUser = () => ({
    type: types.UPDATE_USER,
});

export const updateUser = (id, user) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/user/${id}`, user)
            .then(() => {
                dispatch(updateSingleUser());
            })
            .catch(error => console.log(error));
    }
}