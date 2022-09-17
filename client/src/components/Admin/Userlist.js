import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllUsers,deleteUser,userAdmin} from '../../actions/userAction';
import {Table,Button} from 'react-bootstrap';
import Loader from '../Loader';
import Error from '../Error';
import {AiFillDelete} from 'react-icons/ai';

const Userlist = () => {
  const userState = useSelector(state => state.getAllUsersReducer);
  const {loading,error,users} = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers())
  },[dispatch])
  return (
    <>
      <h1>User List</h1>
      {loading && (<Loader />)}
      {error && (<Error error='Error While Fetching Users'/>)}
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map(user => (
          <tr key={user._id}>
             <td>{user._id}</td>
             <td>{user.name}</td>
             <td>{user.email}</td>
             <td>{user.isAdmin ?
             (<h6 className='text-success'>Admin</h6>) : (
              <><Button className='btn-danger'
              onClick={() => {dispatch(userAdmin(user._id))}}>Make Admin</Button></>
            )}</td>
             <td><AiFillDelete style={{color : 'red',cursor : 'pointer'}} 
                onClick={() => {dispatch(deleteUser(user._id))}}
              /></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
};

export default Userlist;

