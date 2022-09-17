import React,{useState,useEffect} from 'react';
import {Container,Form,Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {loginUser} from '../actions/userAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const dispatch = useDispatch();

  const loginState = useSelector(state => state.loginUserReducer);
  const {error,success,loading} = loginState;

  useEffect(() => {
     if(localStorage.getItem('currentUser')){
         window.location.href = '/';
     }
  },[])

  const loginHandler = () => {
    const user = {email,password};
    dispatch(loginUser(user));
  }

  return (
    <> 
      <Container>
      {loading && <Loader />}
      {success && <Success success="User Login Successfully" />}
      {error && <Error error="Something Went Wrong"/>}
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
          value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={loginHandler}>
        Login
      </Button>
    </Form>
      </Container>
    </>
  )
};

export default Login;
