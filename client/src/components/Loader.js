import React from 'react';
import {Spinner} from 'react-bootstrap';

const Spin = {
  position: 'absolute',
  height: '100px',
  width: '100px',
  top: '50%',
  left: '50%',
  marginLeft: '-50px',
  marginTop: '-50px',
  backgroundSize: '100%',
}

const Loader = () => {
  return <Spinner animation="border" variant="info" style={Spin} />
};

export default Loader;
