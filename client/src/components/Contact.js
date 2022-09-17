import React from 'react';
import {Container,Row,Col,Table,Image} from 'react-bootstrap';
import {FiPhoneCall} from 'react-icons/fi';
import {ImMobile2} from 'react-icons/im';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <Container style={{marginTop : "50px"}}>
          <Row>
            <Col md={6}>
                <h1>Techinfo Yt Pizza Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores doloremque quisquam, repellat officia sequi minus, magnam, eos fuga architecto sit eius ducimus aliquam alias reiciendis maxime corporis! Omnis rerum id delectus aut, saepe optio ipsa consectetur magnam veritatis, numquam provident veniam vitae doloribus officia ea cum sed itaque non iusto consequuntur a. Vel odit quod nobis maiores ullam minus non similique quasi harum laudantium autem, aspernatur sunt hic officia incidunt odio, reprehenderit quam beatae, excepturi neque laboriosam. Doloremque alias porro incidunt quos vel iste quidem distinctio, similique deleniti. Tempore, aspernatur, vitae sunt amet fuga, eveniet culpa cupiditate voluptates quod iure id distinctio voluptatum quaerat suscipit eaque facilis molestiae esse numquam animi omnis dolores dignissimos quia perspiciatis. Non quisquam qui inventore vitae magni! Quisquam expedita incidunt enim soluta rerum aspernatur eos velit dolores itaque consectetur, iure deserunt tempore atque ullam sunt voluptatibus qui quibusdam. Voluptatem inventore dolores reprehenderit iusto assumenda minima odio fuga nostrum facere, illum impedit possimus, voluptas nulla nemo amet, vel magnam omnis optio non! Fuga debitis hic, inventore architecto itaque asperiores quia. Nisi iusto voluptatum, possimus tempora, dolor aperiam magnam ipsa tenetur asperiores sint odit sit fugiat labore magni, at eaque aliquid iste dolore libero sapiente animi.</p>
            
          <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th className='bg-warning text-center' colSpan={3}>--- Contact Details ---</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Phone</td>
          <td>1234-567897</td>
        </tr>
        <tr>
          <td><ImMobile2/></td>
          <td>Call</td>
          <td>7778-567897</td>
        </tr>
        <tr>
          <td><AiOutlineMail/></td>
          <td>Email</td>
          <td>Helpurdomain@gmail.com</td>
        </tr>
      </tbody>
    </Table>
    </Col>
    <Col md={6}>
          <Image src='images/farmhouse.jpg' alt='Not Found'/>
          <Image src='images/margherita.jpg' alt='Not Found' style={{marginTop : "50px"}}/>
    </Col>
    </Row>
      </Container>
    </>
  )
};

export default Contact;
