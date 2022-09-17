import React,{useState} from 'react';
import {Form,Row,Col,Button,Container} from 'react-bootstrap';
import {addPizza} from '../../actions/pizzaAction';
import {useDispatch,useSelector} from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';


const AddNewPizza = () => {
  const [name,setName] = useState('');
  const [smallPrice,setSmallPrice] = useState();
  const [mediumPrice,setMediumPrice] = useState();
  const [largePrice,setLargePrice] = useState();
  const [image,setImage] = useState('');
  const [description,setDescription] = useState('');
  const [category,setCategory] = useState('');

  const addPizzaState = useSelector(state => state.addPizzaReducer);
  const {loading,error,success} = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,image,description,category,
      prices : {
        small : smallPrice,
        medium : mediumPrice,
        large : largePrice
      }
    }
    dispatch(addPizza(pizza));
  };

  return (
    <>
    {loading && (<Loader />)}
    {error && (<Error error='Add New Pizza Error'/>)}
    {success && (<Success success='Pizza Added Successfully'/>)}
    <Container style={{marginTop : '5px'}}>
      <Form onSubmit={submitForm} className='bg-light p-4'>
      <Row className="mb-3">
      
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} 
          onChange={e => setName(e.target.value)} placeholder="Enter name" />
        </Form.Group>
        
        <Row className="mb-3" style={{marginTop : '18px'}}>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Small Price</Form.Label>
          <Form.Control type="text" value={smallPrice} 
          onChange={e => setSmallPrice(e.target.value)} placeholder="Enter small price"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Medium Price</Form.Label>
          <Form.Control type="text" value={mediumPrice} 
          onChange={e => setMediumPrice(e.target.value)} placeholder="Enter medium price"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Large Price</Form.Label>
          <Form.Control type="text" value={largePrice} 
          onChange={e => setLargePrice(e.target.value)} placeholder="Enter large price"/>
        </Form.Group>
      </Row>
      
       
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={image} 
          onChange={e => setImage(e.target.value)} placeholder="Add image URL" />
        </Form.Group>
      
        </Row> 
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} 
          onChange={e => setDescription(e.target.value)} placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" value={category} 
          onChange={e => setCategory(e.target.value)} placeholder="Enter category" />
      </Form.Group>
      
      <Button variant="primary" type='submit'>
        Add New
      </Button>
    </Form>
    </Container>
    </>
  )
};

export default AddNewPizza;
