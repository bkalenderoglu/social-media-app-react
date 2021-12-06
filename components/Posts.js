import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
const posts = [
  {
    id: "123",
    username: "ıvır",
    userImage: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/ocw",
    caption: "tbt",
  },
  {
    id: "1234",
    username: "zıvır",
    userImage: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/ocw",
    caption: "tbt",
  },
];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImage={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
