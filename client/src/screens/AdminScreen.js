import React,{useEffect} from 'react';
import {Row,Col,Container,ButtonGroup,Button} from 'react-bootstrap';
import {Switch,Route} from 'react-router-dom';
import Userlist from '../components/Admin/Userlist';
import Pizzaslist from '../components/Admin/Pizzaslist';
import AddNewPizza from '../components/Admin/AddNewPizza';
import OrderList from '../components/Admin/OrderList';
import {useSelector} from 'react-redux';
import EditPizza from '../components/Admin/EditPizza';

const AdminScreen = ({history}) => {
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  useEffect(() => {
       if(localStorage.getItem('currentUser') === null || !currentUser.isAdmin){
        window.location.href = '/';
       }
  },[currentUser.isAdmin]);
  return (
    <>
      <Container>
      <Row>
      <h1 className='text-center bg-dark text-light p-2'>Admin Panel</h1>
        <Col md={2}>
        <ButtonGroup vertical style={{minHeight : '400px'}}>
      <Button onClick={() => history.push('/admin/userlist')}>All Users</Button>
      <Button onClick={() => history.push('/admin/pizzalist')}>All Pizzas</Button>
      <Button onClick={() => history.push('/admin/addnewpizza')}>Add New Pizza</Button>
      <Button onClick={() => history.push('/admin/orderlist')}>All Orders</Button>
    </ButtonGroup>
        </Col>
        <Col md={10}>
          <Switch>
             <Route path="/admin" component={Userlist} exact/>
             <Route path="/admin/userlist" component={Userlist} exact/>
             <Route path="/admin/editpizza/:pizzaId" component={EditPizza} exact/>
             <Route path="/admin/pizzalist" component={Pizzaslist} exact/>
             <Route path="/admin/addnewpizza" component={AddNewPizza} exact/>
             <Route path="/admin/orderlist" component={OrderList} exact/>
          </Switch>
        </Col>
      </Row>
      </Container>
    </>
  )
};

export default AdminScreen;
