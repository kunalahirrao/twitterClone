import React, { useState, useEffect } from "react";
import { Card, Pagination, Image, Button } from "react-bootstrap";
import "./AvatarSidebar.css";
import axios from "../../util/axios-auth";

function WhoToFollow() {
  let [whomToFollow, setWhomToFollow] = useState([]);
  let [change, setChange] = useState(1);
  const followFriend = async (followerId) => {
    await axios.patch("/user-management/add/follower", { followerId });
    setChange(Math.random());
  };
  useEffect(async () => {
    async function getWhomToFollow() {
      try {
        const { data } = await axios.get("/user-management/whom-to-follow");
        setWhomToFollow(data.result);
      } catch (error) {
        console.log("Error while fetching whom to follow");
      }
    }
    await getWhomToFollow();
  }, [change]);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {whomToFollow.length ? (
          whomToFollow.map((user) => {
            return (
              <Card.Body>
                <div className="avatarCard">
                  <Card.Title>{user.name}</Card.Title>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  {user.email}
                </Card.Subtitle>
                <Card.Text>Dummy bio</Card.Text>
                <Button onClick={() => followFriend(user._id)}>Follow</Button>
              </Card.Body>
            );
          })
        ) : (
          <p className="my-2 mx-2">No one to follow</p>
        )}
      </Card>
    </>
  );
}

export default WhoToFollow;
