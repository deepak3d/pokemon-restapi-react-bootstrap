import React, { useState } from "react";
import { Form, Container, Col, Button } from 'react-bootstrap';
export default function Search(props) {
  // const [search, setSearch] = React.useState('');
  const [search, setSearch] = useState('');
  return (<Container>
  {/* <h1>{search}</h1> */}
    <Form className="mt-2">
        <Form.Row className="align-items-center">
            <Col sm={10} className="my-1">
                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search for Pokemon" />
            
            </Col>
            <Col sm={2} className="my-1">
              <Button className="btn btn-danger" block onClick={(e) => props.getPokemon(search)}>Search</Button>
            </Col>
        </Form.Row>
    </Form>
  </Container>
  )
}
