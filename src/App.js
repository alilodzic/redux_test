import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.value)
  

  return (
    <Container className="App">
      <Row>
    <Col className='part'><h1>PART 01</h1></Col>
    <Col className='part'><h1>PART 02</h1></Col>
    <Col className='part'><h1>PART {count} </h1></Col>
    

       </Row>
    </Container>
  );
}

export default App;
