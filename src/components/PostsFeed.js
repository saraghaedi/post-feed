import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNext5Posts } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import moment from "moment";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  const onClickHandler = () => {
    dispatch(fetchNext5Posts);
  };

  return (
    <div>
      <h2>Recent posts</h2>

      {loading
        ? "Loading"
        : posts.map((post) => (
            <div key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
              {post.tags.map((tag) => (
                <div
                  key={tag.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      border: "solid black 2px",
                      borderRadius: "999px",
                      background: "gray",
                      padding: ".3em",
                      margin: "1em",
                    }}
                  >
                    {tag.tag}
                  </p>
                </div>
              ))}
            </div>
          ))}

      <button onClick={onClickHandler}>Load More</button>
    </div>
  );
}
