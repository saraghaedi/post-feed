import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    count: null,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    const response = await axios.get(
      `${API_URL}?limit=5&offset=${data.posts.length}`
    );

    setData({
      loading: false,
      count: response.data.count,
      posts: [...data.posts, ...response.data.rows],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {data.loading
        ? "Loading"
        : data.posts.map((post) => (
            <div>
              <h3 key={post.id}>{post.title}</h3>
              <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
              {post.tags.map((tag) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <p
                    key={tag.id}
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

      <button onClick={fetchNext5Posts}>Load More</button>
    </div>
  );
}
