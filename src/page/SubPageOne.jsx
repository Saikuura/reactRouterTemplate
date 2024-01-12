import { useEffect, useState } from "react";
import "./SubPageOne.css";

export const SubPageOne = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, []);
  return (
    <section className="post">
      {data.map((post)=>(
        <div className="text" key={post.id}>
          <h4>{post.userId}</h4>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </section>

  );
};
