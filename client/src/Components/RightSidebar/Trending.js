import React from "react";
import { Card } from 'react-bootstrap'


function Trending() {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>#Space</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">
            125K Tweets
          </Card.Subtitle>
          <Card.Text>
            5.094 people are tweeting about this.
          </Card.Text>          
        </Card.Body>
        <Card.Body>
          <Card.Title>#Animals</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">
            12K Tweets
          </Card.Subtitle>
          <Card.Text>
            604 people are tweeting about this.
          </Card.Text>          
        </Card.Body>
      </Card>
    </>
  );
}

export default Trending;
