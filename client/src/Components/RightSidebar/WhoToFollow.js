import React from "react";
import { Card, Pagination, Image } from "react-bootstrap";
import "./AvatarSidebar.css";

function WhoToFollow() {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <div className="avatarCard">
            <Card.Title>Card Title</Card.Title>
            <Image alt="Text" rounded />
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>        
      </Card>
    </>
  );
}

export default WhoToFollow;
