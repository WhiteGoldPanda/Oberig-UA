import React from "react";
import { Jumbotron as Jumbo, Container, Form, Button } from "react-bootstrap";
class MakeQuerry extends React.Component {
  render() {
    return (
      <div>
        <p>Please fill the contact form and specify your goals in comment</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Phone" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default MakeQuerry;
