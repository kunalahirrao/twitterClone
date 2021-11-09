import React, { useState, useEffect } from "react";
import { Container, Nav, Button, Row, Col, Card } from "react-bootstrap";
import axios from "../../util/axios-auth";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function Index() {
  let [bookmarks, setBookmarks] = useState([]);
  useEffect(async () => {
    async function getBookmarks() {
      try {
        const { data } = await axios.get("/tweet-management/bookmarks");
        setBookmarks(data.result);
      } catch (error) {
        console.log("Error while fetching tweets");
      }
    }
    await getBookmarks();
  }, []);
  return (
    <>
      <Container
        style={{ overflow: "scroll", height: "930px", overflowX: "hidden" }}
      >
        <Row className="mt-2">
          <Col>
            <strong className="bookmark-title">Bookmarks</strong>
            {bookmarks.length ? (
              bookmarks.map((bookmark) => {   
                console.log(bookmark)             
                return (
                  <Card className="mb-2">
                    <Card.Header as="h5">{bookmark.userName}</Card.Header>
                    <Card.Body>
                      <Card.Text>{bookmark.text}</Card.Text>
                      <p className="tweet-font-date">
                        {dayjs(bookmark.date).format("hh.mm A MMM DD,YYYY")}
                      </p>                      
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <p>Nothing to show</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Index;
