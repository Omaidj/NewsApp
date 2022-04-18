import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

function TravelInTraffic({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "Travelposts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "Travelposts", id);
    await deleteDoc(postDoc);
  };

  const createPostPage = () => {
    window.location.pathname = "/addpost_Travel";
  };
  return (
    <div className="homePage">
      <div className="addPost">
        <button onClick={createPostPage} title="Hover on me">&#x2b; Create Post</button>
      </div>
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title} </h1>
              </div>
              <div className="deletePost">
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  &#9746;
                </button>
              </div>
            </div>
            <div className="postTextContainer"> {post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default TravelInTraffic;
