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
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
