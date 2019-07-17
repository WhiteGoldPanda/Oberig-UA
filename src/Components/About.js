import React from "react";
import axios from "axios";
import "./CSS/About.css";

import { Card, CardGroup, Jumbotron, Button } from "react-bootstrap";
class About extends React.Component {
  state = {
    beer: []
  };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(res => {
      const beer = res.data;
      console.log(beer);
      this.setState({ beer: beer });
    });
  }
  sortBy(key) {
    let arrayCopy = [...this.state.beers];
    //Write Handler for first_brewed
    if (key === "first_brewed") {
      arrayCopy.sort(this.beerDateSort(key, -4));
      arrayCopy.sort(this.beerDateSort(key, 3));
      this.setState({ beers: arrayCopy });
    } else {
      arrayCopy.sort(this.compareBy(key));
      this.setState({ beers: arrayCopy });
    }
  }

  render() {
    return (
      <div>
        {this.state.beer.map(beer => (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default About;
