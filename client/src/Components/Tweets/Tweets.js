import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "../../util/axios-auth";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function Tweet() {
  let [tweets, setTweets] = useState([]);
  let [liked, setLiked] = useState(1);
  useEffect(async () => {
    async function getTweets() {
      try {
        const { data } = await axios.get("/tweet-management/tweets");
        setTweets(data.result);
      } catch (error) {
        console.log("Error while fetching tweets");
      }
    }
    await getTweets();
  }, [liked]);
  const likeTweet = async (tweetId) => {
    await axios.post("/tweet-management/tweet/like", { tweetId });
    setLiked(Math.random());
  };
  const addBookmark = async (tweetId) => {
    await axios.post("/tweet-management/tweet/bookmark", { tweetId });
  };
  return (
    <>
      {tweets.map((tweet) => {
        return (
          <Card className="mb-2">
            <Card.Header as="h5">{tweet.userId.name}</Card.Header>
            <Card.Body>
              <Card.Text>{tweet.text}</Card.Text>
              <p className="tweet-font-date">
                {dayjs(tweet.date).format("hh.mm A MMM DD,YYYY")}
              </p>
              <span>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="like-button"
                  size="lg"
                  onClick={() => likeTweet(tweet._id)}
                />
                {tweet.like}
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="bookmark-button"
                  size="lg"
                  onClick={() => addBookmark(tweet._id)}
                />
              </span>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Tweet;
