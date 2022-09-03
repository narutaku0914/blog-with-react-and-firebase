import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Home.css";

const Home = () => {
  const [postLists, setPostLists] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  return (
    <div className="homePage">
      {postLists.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.text}</div>
          <div className="nameAndDeleteButton">
            <h3>@{post.author.username}</h3>
            <button>削除</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
