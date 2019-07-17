import React from "react";
import { Card, CardColumns } from "react-bootstrap";
export const Contacts = () => (
  <div>
    <CardColumns>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/50" />
        <Card.Body>
          <Card.Title>beer.name</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  </div>
);
