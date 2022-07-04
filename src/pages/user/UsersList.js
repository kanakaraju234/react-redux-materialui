import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, loadUsers } from '../../redux/userRedux/actions';


const UsersList = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.users)
  let history = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
  }, [])

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div className='container'>
      <div className='search-content-section d-flex justify-content-between align-items-center'>
        <h1>Users</h1>
        <form role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <button onClick={() => history("/addUser")} className='btn btn-primary'>Add User</button>
      </div>
      <div className="container-section">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.address}</td>
                <td onClick={() => history(`editUser/${user.id}`)}><i className="bi bi-pencil"></i></td>
                <td onClick={() => handleDelete(user.id)}><i className="bi bi-trash3"></i></td>
              </tr>
            ))

            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default UsersList;