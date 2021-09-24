import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
// import ReactMarkdown from "react-markdown";

import {
  selectLoading,
  selectPost,
  selectComments,
} from "../store/postPage/selectors";

export default function PostPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const post = useSelector(selectPost);
  const comments = useSelector(selectComments);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p className="meta">
            By {post.developer.name}{" "}
            {moment(post.createdAt).format("DD-MM-YYYY")}
          </p>
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
          <p>{post.content}</p>

          <h2>Comments</h2>
          <p>{comments.count} comments on this post</p>
          <div>
            {comments.count == 0
              ? "Nothing to show :((("
              : comments.rows.map((comment) => {
                  return (
                    <div>
                      <p>name: {comment.developer.name}</p>
                      <p>comment: {comment.text}</p>
                      <p>
                        At: {moment(comment.createdAt).format("DD-MM-YYYY")}
                      </p>
                    </div>
                  );
                })}
          </div>
        </>
      )}
    </div>
  );
}
