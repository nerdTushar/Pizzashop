import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Row,Col,Button,Container} from 'react-bootstrap';
import {filterPizza} from '../actions/pizzaAction';

const Filters = () => {
    const dispatch = useDispatch();
    const [searchKey,setSearchKey] = useState('');
    const [category,setCategory] = useState('all');
  return (
    <>
    <Container className='p-4 bg-dark mt-4 filter'>
    <Form style={{marginLeft : '230px'}}>
    <Row >
        <Col md={4} className='searchkey'>
          <Form.Control  placeholder="Search Pizza" 
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)  }
          />
        </Col>
        <Col md={4} className='category'>
          <select className='form-select' value={category}
            onChange={(e) => setCategory(e.target.value)}>
             <option >All</option>
             <option >Veg</option>
             <option >Nonveg</option>
          </select>
        </Col>
        <Col md={4} className='search'>
            <Button onClick={() => {dispatch(filterPizza(searchKey,category))}}>Search</Button>
        </Col>
      </Row>
    </Form>
    </Container>
    </>
  )
};

export default Filters;
